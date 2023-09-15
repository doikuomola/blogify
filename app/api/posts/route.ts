import prisma from '@/utils/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title');
  const page = Number(searchParams.get('page'));

  const POSTS_PER_PAGE = 2;

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany({
        where: {
          ...(title && { categorySlug: title }),
        },
        take: POSTS_PER_PAGE,
        skip: POSTS_PER_PAGE * (page - 1),
        include: { author: true, category: true },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.post.count({
        where: {
          ...(title && { categorySlug: title }),
        },
      }),
    ]);
    return NextResponse.json({ posts, count }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}
