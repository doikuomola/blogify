import React from 'react';
import { Pagination, PostCard } from '.';

async function getPosts(title: string, page: number) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/posts?title=${title}&page=${page}`,
      {
        method: 'GET',
        cache: 'no-cache',
      }
    );

    if (!res.ok) throw new Error('Failed to fetch posts!');

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function PostList({
  title,
  page,
}: {
  title: string;
  page: number;
}) {
  const { posts, count } = await getPosts(title, page);
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className="text-sm md:text-lg mb-8 p-2 lg:flex-1">
      <h4 className="mb-2 pl-2">Recent Posts</h4>
      <div className="md:grid grid-cols-2 gap-4">
        {posts?.map((post: PostType) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
}
