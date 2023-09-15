'use client'

import { useSession } from 'next-auth/react';
import React from 'react';

export default function Write() {
  const { status } = useSession({ required: true });
  if (status === 'loading') {
    return <p>loading</p>;
  }
  return <div>Write</div>;
}
