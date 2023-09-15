import {
  CategoryList,
  Featured,
  Homepage,
  PostList,
  SideMenu,
} from '@/components';
import React from 'react';
import page from './about/page';

export default async function Home({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const page = searchParams?.page || 1;
  return (
    <section>
      <Featured />
      <CategoryList />
      <section className="lg:flex ">
        <PostList title="" page={page} />
        <SideMenu />
      </section>
    </section>
  );
}
