'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-between w-12 lg:w-16 py-1 ring-1 rounded-full px-1 lg:px-2 relative">
      <Image
        width={40}
        height={40}
        src={'/moon.png'}
        alt="moon"
        className="w-4 lg:w-5 cursor-pointer"
        onClick={() => setTheme('dark')}
      />
      <div className="absolute h-4 w-4 lg:h-5 lg:w-5 rounded-full bg-black dark:bg-white lg:dark:left-2 right-1 lg:right-2 dark:left-1 -z-10" />
      <Image
        width={40}
        height={40}
        src={'/sun.png'}
        alt="moon"
        className="w-4 lg:w-5 cursor-pointer"
        onClick={() => setTheme('light')}
      />
    </div>
  );
}
