import { NextResponse } from 'next/server';

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

    // Log the data safely on the server console (Simulating writing to a real database)
    console.log("Saving contact record to secure database backend:", { name, email, message, timestamp: new Date() });

    // Send positive callback acknowledgement to the UI layer
    return NextResponse.json(
      { success: true, message: "Your message was recorded securely on our backend server cluster!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal application error while storing payload data." },
      { status: 500 }
    );
  }
}