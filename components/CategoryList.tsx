import React from 'react';
import { CategoryCard } from '.';

export default function CategoryList() {
  return (
    <div className='flex flex-wrap gap-2 px-1 md:justify-center md:gap-4 py-4'>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
}
