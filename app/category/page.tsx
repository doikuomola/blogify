import { PostList, SideMenu } from '@/components';
import React from 'react';

export default function Category({
  searchParams: { title, slug, page },
}: {
  searchParams: { title: string; slug: string; page: number };
}) {
  return (
    <main className="text-sm lg:text-base py-4">
      <div className="flex items-center justify-center bg-red-500 py-1 lg:py-3">
        <h2 className="uppercase font-bold">{title}</h2>
      </div>

      <section className="lg:flex ">
        <PostList title={title} page={page} />
        <SideMenu />
      </section>
    </main>
  );
}
