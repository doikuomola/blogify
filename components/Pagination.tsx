import React from 'react';

export default function Pagination() {
  return (
    <div className="flex items-center justify-between px-2 text-sm md:text-base mt-3">
      <button className="bg-red-500 text-white w-max px-3 md:px-5 rounded-lg md:py-1">
        Prev
      </button>
      <button className="bg-red-500 text-white w-max px-3 md:px-5 rounded-lg md:py-1">
        Next
      </button>
    </div>
  );
}
