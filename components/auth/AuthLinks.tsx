import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';

export default function AuthLinks({
  setOpenMenu,
}: {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const status = 'authenticated';

  if (status !== 'authenticated') {
    return (
      <>
        <Link href="/write" onClick={() => setOpenMenu(false)}>
          Write
        </Link>
        <Link href="/login" onClick={() => setOpenMenu(false)}>
          Login
        </Link>
      </>
    );
  } else {
    return <button>Logout</button>;
  }
}
