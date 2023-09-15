'use client';

import React, { useState } from 'react';
import { CommentCard } from '.';
import useSWR from 'swr';

const fetcher = async (url: string) =>
  await fetch(url)
    .then((r) => r.json())
    .catch((e) => console.log(e));

export default function Comments({ postId }: { postId: string }) {
  const [comment, setComment] = useState('');
  const {
    data: comments,
    error,
    isLoading,
  } = useSWR('http://localhost:3000/api/comments', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const handleSubmit = async () => {
    try {
      await fetch('http://localhost:3000/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          comment,
          postId,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col gap-3 p-2">
      <div className="flex flex-col gap-2">
        <textarea
          placeholder="Enter your comment"
          className="p-2 h-10 lg:h-20 ring-1 bg-transparent  outline-none resize-none"
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="w-max px-4 py-1 bg-teal-500 text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {comments?.map((comment: CommentType) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
}
