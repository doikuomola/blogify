import Image from 'next/image';

export const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
