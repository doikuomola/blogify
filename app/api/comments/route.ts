import { getAuthSession } from '@/lib/authOptions';
import prisma from '@/utils/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const postId = searchParams.get('id');
  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postId && { postId }),
      },
      include: { user: true },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json(
      { message: 'Please login to make a comment' },
      { status: 401 }
    );
  }
  try {
    await prisma.comment.create({
      data: {
        ...body,
        userEmail: session.user?.email,
      },
    });

    return NextResponse.json(
      { message: 'comment created successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}
