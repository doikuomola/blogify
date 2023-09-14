import React from 'react';
import { Pagination, PostCard } from '.';

export default function PostList() {
  return (
    <div className="text-sm md:text-lg mb-8 p-2">
      <h4 className="mb-2 pl-2">Recent Posts</h4>
      <div className="md:grid grid-cols-2 gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <Pagination />
    </div>
  );
}
