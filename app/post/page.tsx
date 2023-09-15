'use client';

import { Comments, SideMenu } from '@/components';
import moment from 'moment';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function PostPage({
  searchParams,
}: {
  searchParams: {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    authorEmail: string;
    authorName: string;
    authorImage: string;
    image: string;
  };
}) {
  const {
    id,
    title,
    description,
    createdAt,
    authorEmail,
    authorName,
    authorImage,
    image,
  } = searchParams;
  const { status } = useSession({ required: true });
  return (
    <section className="py-4 text-sm lg:text-base">
      <div className="p-2 flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl lg:text-2xl text-center uppercase">
            {title}
          </h1>
          <div className="flex items-center gap-2">
            <Image
              width={100}
              height={100}
              src={authorImage}
              alt="author image"
              className="h-10 w-10 rounded-full"
            />
            <div className="text-xs flex flex-col">
              <p className="font-bold">{authorName}</p>
              <p className="text-[10px] text-slate-800 dark:text-slate-200">
                {authorEmail}
              </p>
              <p className="text-[10px] text-slate-800 dark:text-slate-200">
                {moment(createdAt).fromNow()}
              </p>
            </div>
          </div>
        </div>
        <Image
          width={400}
          height={400}
          src={image}
          alt="post image"
          className="h-60 w-full rounded object-cover"
        />
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="lg:flex-1 lg:flex lg:flex-col lg:gap-8">
          <p className="p-2 text-xs/relaxed lg:text-base/relaxed text-slate-800 dark:text-slate-200 ">
            {description}
          </p>
          {status ? (
            <Comments postId={id} />
          ) : (
            <p className="">
              Please{' '}
              <Link href="/login" className="text-teal-500">
                login
              </Link>{' '}
              to view and post comments!
            </p>
          )}
        </div>
        <SideMenu />
      </div>
    </section>
  );
}
