import { imageLoader } from '@/lib/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import moment from 'moment';

export default function PostCard({ post }: { post: PostType }) {
  return (
    <div className="p-1 shadow lg:flex lg:flex-col lg:h-[400px]">
      {post.image ? (
        <Image
          width={400}
          height={400}
          src={post.image}
          alt="post image"
          placeholder="blur"
          blurDataURL="https://img.freepik.com/premium-vector/blank-light-grey-blurred-background-with-radial-gradient_53562-6788.jpg?w=740"
          className="h-1/2 md:h-48 w-full object-cover rounded"
        />
      ) : null}
      <div className="p-1 flex flex-col gap-2 lg:justify-between lg:h-1/2">
        <div className="text-xs flex items-center justify-between">
          <span>{moment(post.createdAt).fromNow()}</span>
          <span className="lowercase">{post.category.slug}</span>
        </div>
        <Link
          href={{
            pathname: '/post',
            query: {
              id: post.id,
              title: post.title,
              description: post.description,
              image: post.image,
              createdAt: post.createdAt,
              authorEmail: post.author.email,
              authorName: post.author.name,
              authorImage: post.author.image,
            },
          }}
          className="hover:underline underline-offset-2"
        >
          <h2 className="font-bold capitalize line-clamp-2">{post.title}</h2>
        </Link>
        <p className="text-slate-800 text-xs md:text-sm dark:text-slate-200 line-clamp-3">
          {post.description}
        </p>

        <button className="w-max text-xs md:text-sm underline underline-offset-2 decoration-red-500">
          read more...
        </button>
      </div>
    </div>
  );
}
