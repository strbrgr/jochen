import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://jochen.fyi';

export interface PostMetadata {
  slug: string;
  title: string;
  date: Date;
  description: string;
  url: string;
}

/**
 * Get all blog posts from the app/posts directory
 * Returns posts sorted by date (newest first)
 */
export function getAllPosts(): PostMetadata[] {
  const postsDirectory = path.join(process.cwd(), 'app', 'posts');
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });

  const posts: PostMetadata[] = [];

  for (const entry of entries) {
    // Only process directories (skip page.mdx at root level)
    if (!entry.isDirectory()) {
      continue;
    }

    const slug = entry.name;
    const pagePath = path.join(postsDirectory, slug, 'page.mdx');

    // Skip if page.mdx doesn't exist
    if (!fs.existsSync(pagePath)) {
      console.warn(`Skipping ${slug}: page.mdx not found`);
      continue;
    }

    try {
      const content = fs.readFileSync(pagePath, 'utf-8');
      const metadata = extractMetadataFromMDX(content, slug);

      posts.push({
        slug,
        title: metadata.title,
        date: metadata.date,
        description: metadata.description,
        url: `${BASE_URL}/posts/${slug}`,
      });
    } catch (error) {
      console.warn(`Error processing ${slug}:`, error);
      continue;
    }
  }

  // Sort by date (newest first)
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts;
}

/**
 * Extract metadata from MDX file content
 */
function extractMetadataFromMDX(
  content: string,
  slug: string
): { title: string; date: Date; description: string } {
  // Extract title from H1 heading (line starting with # )
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : slug;

  // Extract date from PostMetadata component
  const dateMatch = content.match(/<PostMetadata\s+created="([^"]+)"/);
  const dateString = dateMatch ? dateMatch[1] : '';
  const date = parsePostDate(dateString);

  // Extract description (first paragraph after PostMetadata)
  const description = extractDescription(content, slug);

  return {
    title,
    date,
    description,
  };
}

/**
 * Parse date string in MM/DD/YYYY format to Date object
 */
function parsePostDate(dateString: string): Date {
  if (!dateString) {
    console.warn(`Empty date string, using current date`);
    return new Date();
  }

  const parts = dateString.split('/');
  if (parts.length !== 3) {
    console.warn(`Invalid date format: ${dateString}`);
    return new Date();
  }

  const [month, day, year] = parts.map((p) => parseInt(p, 10));

  // JavaScript Date months are 0-indexed
  return new Date(year, month - 1, day);
}

/**
 * Extract description (first paragraph) from MDX content
 * Returns plain text with a "Continue reading" link appended
 */
function extractDescription(content: string, slug: string): string {
  // Find content after PostMetadata component
  const postMetadataEnd = content.search(/<\/PostMetadata>|<PostMetadata[^>]*\/>/);

  if (postMetadataEnd === -1) {
    return '';
  }

  // Get content after PostMetadata
  const afterMetadata = content.substring(postMetadataEnd);

  // Remove the PostMetadata closing tag or self-closing tag
  const cleaned = afterMetadata.replace(/^<\/PostMetadata>|^<PostMetadata[^>]*\/>/, '');

  // Split by lines and find first non-empty paragraph
  const lines = cleaned.split('\n').map(line => line.trim());

  for (const line of lines) {
    // Skip empty lines, JSX components, div tags, and markdown headers
    if (
      line.length === 0 ||
      line.startsWith('<') ||
      line.startsWith('#') ||
      line.startsWith('import ')
    ) {
      continue;
    }

    // Found first paragraph - clean it up and return
    let description = line;

    // Remove markdown links but keep the text: [text](url) -> text
    description = description.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

    // Remove markdown bold/italic
    description = description.replace(/\*\*([^*]+)\*\*/g, '$1');
    description = description.replace(/\*([^*]+)\*/g, '$1');

    // Truncate to reasonable length for RSS
    if (description.length > 280) {
      description = description.substring(0, 277) + '...';
    }

    // Add "Continue reading" link on a new line
    const postUrl = `${BASE_URL}/posts/${slug}`;
    description += `<br/><br/><a href="${postUrl}">Continue reading the full post here...</a>`;

    return description;
  }

  return '';
}
