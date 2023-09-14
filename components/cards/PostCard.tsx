import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function PostCard() {
  return (
    <div className="p-1 shadow">
      <Image
        width={400}
        height={400}
        src={'/p1.png'}
        alt="post image"
        className="h-40 md:h-48 w-full object-cover rounded"
      />
      <div className="p-1 flex flex-col gap-2">
        <div className="text-xs flex items-center justify-between">
          <span>17 hours ago</span>
          <span className="lowercase">Style</span>
        </div>
        <Link href="/post" className='hover:underline underline-offset-2'>
          <h2 className="font-bold line-clamp-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </Link>
        <p className="text-slate-800 text-xs md:text-sm dark:text-slate-200 line-clamp-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam cum
          ullam vitae laborum cupiditate eius sed fugiat itaque doloremque aut.
        </p>

        <button className="w-max text-xs md:text-sm underline underline-offset-2 decoration-red-500">
          read more...
        </button>
      </div>
    </div>
  );
}
