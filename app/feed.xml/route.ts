import { Feed } from 'feed';
import { getAllPosts } from '@/utils/posts';

const BASE_URL = 'https://jochen.fyi';

export const dynamic = 'force-static';

export async function GET() {
  const feed = new Feed({
    title: 'Jochen Stierberger',
    description: 'Software Engineer',
    id: `${BASE_URL}/`,
    link: `${BASE_URL}/`,
    language: 'en',
    image: `${BASE_URL}/icon.png`,
    favicon: `${BASE_URL}/icon.png`,
    feedLinks: {
      rss2: `${BASE_URL}/feed.xml`,
    },
    author: {
      name: 'Jochen Stierberger',
      link: `${BASE_URL}/`,
    },
    copyright: `All rights reserved ${new Date().getFullYear()}, Jochen Stierberger`,
  });

  const posts = getAllPosts();

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post.url,
      link: post.url,
      description: post.description,
      date: post.date,
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
