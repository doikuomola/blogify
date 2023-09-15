import Image from 'next/image';
import React from 'react';
import moment from 'moment';

export default function CommentCard({ comment }: { comment: CommentType }) {
  console.log(comment);
  return (
    <div className="text-[10px] flex flex-col gap-2 shadow py-2 px-3">
      <div className="flex items-center gap-3">
        <Image
          width={40}
          height={40}
          src={comment.user.image}
          alt="writer image"
          className="h-8 w-8 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">John Doe</span>
          <span className="italic text-slate-800 dark:text-slate-200">
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>
      </div>
      <p className="text-sm text-slate-800 dark:text-slate-200">
        {comment.comment}
      </p>
    </div>
  );
}
