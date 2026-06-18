import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    const templates = await prisma.template.findMany({
      where: {
        AND: [
          category ? { category: { equals: category, mode: 'insensitive' } } : {},
          search ? { title: { contains: search, mode: 'insensitive' } } : {}
        ]
      }
    });

    return NextResponse.json({ success: true, data: templates }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server Error Fetching Templates" }, { status: 500 });
  }
}