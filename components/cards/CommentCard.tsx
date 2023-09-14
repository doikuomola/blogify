import Image from 'next/image';
import React from 'react';

export default function CommentCard() {
  return (
    <div className="text-[10px] flex flex-col gap-2 shadow py-2 px-3">
      <div className="flex items-center gap-3">
        <Image
          width={40}
          height={40}
          src={'/p1.png'}
          alt="writer image"
          className="h-8 w-8 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">John Doe</span>
          <span className="italic text-slate-800 dark:text-slate-200">
            2 minutes ago
          </span>
        </div>
      </div>
      <p className="text-sm text-slate-800 dark:text-slate-200">
        Lorem ipsum dolor sit amet consectetur.
      </p>
    </div>
  );
}
