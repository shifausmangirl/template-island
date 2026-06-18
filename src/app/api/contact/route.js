import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Server-side backend verification guardrails
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All form inputs are strictly required." },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message
      }
    });

    return NextResponse.json(
      { success: true, message: 'Your message was recorded securely on our backend server cluster!', data: contact },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal application error while storing payload data." },
      { status: 500 }
    );
  }
}