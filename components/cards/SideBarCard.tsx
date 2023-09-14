import Link from 'next/link';
import React from 'react';

export default function SideBarCard() {
  return (
    <div className="text-xs md:text-base p-1 shadow flex flex-col gap-2">
      <Link
        href="/"
        className="lowercase bg-red-500 text-white w-14 block rounded-full px-2 text-xs text-center"
      >
        style
      </Link>
      <Link href="/post" className="hover:underline underline-offset-2">
        <h2 className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
      </Link>
      <div className="flex items-center gap-4 md:text-sm">
        <span>John Doe</span>
        <span>17 hours ago</span>
      </div>
    </div>
  );
}
