import React from 'react';
import { CategoryCard } from '.';

async function getCategories() {
  try {
    const res = await fetch('http://localhost:3000/api/categories', {
      method: 'GET',
      cache: 'no-cache',
    });
    if (!res.ok) throw new Error('Failed to fetch categories');

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function CategoryList() {
  const categories = (await getCategories()) as Category[];

  return (
    <div className="flex flex-wrap gap-2 px-1 md:justify-center text-white lg:justify-start md:gap-4 py-4">
      {categories?.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
