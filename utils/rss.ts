import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { renderToReadableStream } from 'react-dom/server.edge';

/**
 * Render a post's MDX as static HTML. The browser version can continue to use
 * Next Image; RSS uses plain HTML and absolute URLs.
 */
export async function renderPostForRss(
  source: string,
  slug: string,
  baseUrl: string,
): Promise<string> {
  const sourceForRss = prepareMdxForRss(source, slug, baseUrl);
  const compiled = await compile(sourceForRss, { outputFormat: 'function-body' });

  // MDX's function-body output is intentionally evaluated with only the
  // components that are meaningful in an RSS document.
  const { default: Post } = await run(compiled, {
    ...runtime,
    baseUrl: import.meta.url,
  } as Parameters<typeof run>[1]);

  const html = await new Response(
    await renderToReadableStream(runtime.jsx(Post, {})),
  ).text();

  return html
    // React 19 may emit browser preload hints while rendering <img> tags.
    // They are not useful inside RSS content.
    .replace(/<link rel="preload" as="image"[^>]*\/?>(?:<\/link>)?/g, '')
    .replace(/(["'])\/(?![\/>])/g, `$1${baseUrl}/`);
}

function prepareMdxForRss(source: string, slug: string, baseUrl: string): string {
  const imageUrls = new Map<string, string>();
  let prepared = source
    // Page metadata is already supplied by getAllPosts and is not content.
    .replace(/export\s+const\s+metadata\s*=\s*\{[\s\S]*?\};\s*/m, '')
    // Image imports are converted into URLs served by the RSS image route.
    .replace(
      /^import\s+([A-Za-z_$][\w$]*)\s+from\s+["']\.\/([^"']+\.(?:avif|gif|jpe?g|png|webp))["'];?\s*$/gim,
      (_match, name: string, filename: string) => {
        const url = `${baseUrl}/posts/${encodeURIComponent(slug)}/${encodeURIComponent(filename)}`;
        imageUrls.set(name, url);
        return '';
      },
    )
    // Component and named imports are not needed by the RSS renderer.
    .replace(/^import\s+.*$/gm, '')
    // These components are presentation-only metadata in the browser.
    .replace(/<PostMetadata\b[\s\S]*?\/\s*>/g, '')
    .replace(/<DayMetadata\b[\s\S]*?\/\s*>/g, '')
    // Convert the custom image component to a normal HTML image element and
    // discard browser-only presentation props.
    .replace(/<ImageWithCaption\b/g, '<img')
    .replace(/^\s*(className|type|priority|placeholder)=.*\n?/gm, '');

  // Use literal URLs in the generated tags so MDX only has to parse ordinary
  // JSX attributes, not expressions referring to imported image variables.
  for (const [name, url] of imageUrls) {
    prepared = prepared.replaceAll(`src={${name}}`, `src="${url}"`);
  }

  return prepared;
}
