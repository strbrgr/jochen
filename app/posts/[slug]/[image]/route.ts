import fs from 'node:fs/promises';
import path from 'node:path';

const contentTypes: Record<string, string> = {
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
};

export const dynamic = 'force-static';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string; image: string }> },
) {
  const { slug, image } = await params;

  if (slug.includes('/') || image.includes('/')) {
    return new Response('Not found', { status: 404 });
  }

  const extension = path.extname(image).toLowerCase();
  const contentType = contentTypes[extension];
  if (!contentType) {
    return new Response('Not found', { status: 404 });
  }

  try {
    const file = await fs.readFile(path.join(process.cwd(), 'app', 'posts', slug, image));
    return new Response(file, {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Type': contentType,
      },
    });
  } catch {
    return new Response('Not found', { status: 404 });
  }
}
