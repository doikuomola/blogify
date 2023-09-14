import { PostList, SideMenu } from '@/components';
import React from 'react';

export default function Category() {
  return (
    <main className="text-sm py-4">
      <div className="flex items-center justify-center bg-red-500 py-1">
        <h2 className="uppercase font-bold">Style</h2>
      </div>

      <section className="">
        <PostList />
        <SideMenu />
      </section>
    </main>
  );
}
