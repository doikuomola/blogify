import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Featured() {
  return (
    <div className="py-4 md:py-8">
      <h1 className="text-2xl md:text-4xl italic font-bold text-center">
        Hey, Blogify here! <br />
        <span className="text-sm md:text-lg font-normal dark:text-slate-200 text-slate-800">
          discover our stories and creative ideas
        </span>
      </h1>
      <div className="md:flex flex-row-reverse items-center md:px-2">
        <Image
          width={400}
          height={400}
          src={'/p1.png'}
          alt="featured image"
          className="w-full lg:w-1/2 h-40 md:h-80 object-cover"
        />

        <div className="text-sm md:text-lg flex flex-col gap-1 md:gap-8 p-1 lg:w-1/2">
          <Link href="/" className="hover:underline underline-offset-2">
            <h2 className="font-bold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h2>
          </Link>
          <p className="text-xs md:text-sm dark:text-slate-200 text-slate-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            hic. Doloremque qui tempora ea mollitia?
          </p>
        </div>
      </div>
    </div>
  );
}
