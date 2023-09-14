import React from 'react';
import { CommentCard } from '.';

export default function Comments() {
  return (
    <section className="flex flex-col gap-3 p-2">
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Enter your comment"
          className="p-2 h-10 ring-1 bg-transparent  outline-none"
        />
        <button className="w-max px-4 py-1 bg-teal-500 text-white">
          Submit
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </section>
  );
}
