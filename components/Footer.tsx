import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center py-3">
      <Link href="/">Blogify</Link>
      <p>&copy; 2023</p>
    </div>
  );
}
