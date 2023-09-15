import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';

export default function AuthLinks({
  setOpenMenu,
}: {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const { data: session, status } = useSession();

  if (status !== 'authenticated') {
    return (
      <>
        <Link href="/login" onClick={() => setOpenMenu(false)}>
          Login
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Link href="/write" onClick={() => setOpenMenu(false)}>
          Write
        </Link>
        <button onClick={() => signOut()}>Logout</button>
      </>
    );
  }
}
