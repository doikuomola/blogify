import Link from 'next/link';
import React from 'react';

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={{
        pathname: '/category',
        query: {
          title: category.title,
          slug: category.slug,
          id: category.id,
        },
      }}
      className="bg-red-500 w-max py-1 px-4 rounded-lg text-sm md:text-md md:px-6"
    >
      {category.title}
    </Link>
  );
}
