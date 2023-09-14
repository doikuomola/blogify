'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AuthLinks, ThemeChanger } from '.';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="flex items-center justify-between relative text-sm md:text-lg lg:text-base lg:py-2">
      <div className="hidden md:flex items-center space-x-2">
        <Image
          width={48}
          height={48}
          src={'/facebook.png'}
          alt="facebook"
          className="w-7 h-7 cursor-pointer rounded-full"
        />
        <Image
          width={48}
          height={48}
          src={'/youtube.png'}
          alt="facebook"
          className="w-7 h-7 cursor-pointer rounded-full"
        />
        <Image
          width={48}
          height={48}
          src={'/tiktok.png'}
          alt="facebook"
          className="w-7 h-7 cursor-pointer rounded-full"
        />
        <Image
          width={48}
          height={48}
          src={'/instagram.png'}
          alt="facebook"
          className="w-7 h-7 cursor-pointer rounded-full"
        />
      </div>
      <div className="flex items-center justify-center">
        <Link
          href="/"
          className="md:text-xl lg:text-2xl font-semibold text-center"
        >
          Blogify
        </Link>
      </div>

      <div className="flex items-center space-2">
        {!openMenu ? (
          <div className="flex items-center space-x-2">
            <ThemeChanger />
            <div className="hidden lg:flex items-center space-x-2 lg:text-lg">
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
              <AuthLinks setOpenMenu={setOpenMenu} />
            </div>
            <svg
              viewBox="0,0,255.99609,255.99609"
              width="30px"
              height="30px"
              className="dark:text-white w-6 md:w-8 fill-current lg:hidden"
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <g
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(8.53333,8.53333)">
                  <path d="M3,7c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,14c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,21c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587z"></path>
                </g>
              </g>
            </svg>
          </div>
        ) : null}
      </div>
      {openMenu ? (
        <div className="absolute top-0 right-0 flex flex-col items-center justify-center gap-4 h-screen w-full bg-black/90 text-white font-bold">
          <Image
            width={24}
            height={24}
            src={'/close.png'}
            alt="close"
            className="w-4 md:w-6 absolute top-2 right-2"
            onClick={() => setOpenMenu(false)}
          />
          <Link href="/" onClick={() => setOpenMenu(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpenMenu(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setOpenMenu(false)}>
            Contact
          </Link>
          <AuthLinks setOpenMenu={setOpenMenu} />
        </div>
      ) : null}
    </nav>
  );
}
