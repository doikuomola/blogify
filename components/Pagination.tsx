'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Pagination({
  page,
  hasPrev,
  hasNext,
}: {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between px-2 text-sm md:text-base mt-3">
      <button
        className="bg-red-500 text-white w-max px-3 md:px-5 rounded-lg md:py-1"
        onClick={() => router.push(`?page=${Number(page) - 1}`)}
        disabled={!hasPrev}
      >
        Prev
      </button>
      <button
        className="bg-red-500 text-white w-max px-3 md:px-5 rounded-lg md:py-1"
        onClick={() => router.push(`?page=${Number(page) + 1}`)}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
}
