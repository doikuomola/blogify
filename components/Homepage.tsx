import React from 'react';
import { CategoryList, Featured, PostList, SideMenu } from '.';

export default function Homepage() {
  return (
    <section>
      <Featured />
      <CategoryList />
      <section className="lg:grid grid-cols-2">
        <PostList />
        <SideMenu />
      </section>
    </section>
  );
}
