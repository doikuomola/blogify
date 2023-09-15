'use client';

import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Login() {
  const router = useRouter();

  const { data: session } = useSession();
  if (session) {
    router.push('/');
  }

  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen ">
      <h2 className="font-bold text-xl">Blogify</h2>
      <div className="flex flex-col gap-4 w-1/2 lg:w-1/3">
        <button
          className="w-full text-center bg-red-500 text-white py-2 px-4"
          onClick={() => signIn('google')}
        >
          Sign in with Google
        </button>
        <button className="w-full text-center bg-blue-500 text-white py-2 px-4">
          Sign in with Facebook
        </button>
        <button className="w-full text-center bg-black text-white py-2 px-4">
          Sign in with Github
        </button>
      </div>
    </div>
  );
}
