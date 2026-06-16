import { NextResponse } from 'next/server';

// Mocking a database template collection on the server backend
const templatesDatabase = [
  { id: 1, title: "Elegant Floral Watercolor", category: "wedding", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop" },
  { id: 2, title: "Golden 30th Birthday Bash", category: "birthday", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=600&fit=crop" },
  { id: 3, title: "Minimalist Thank You Note", category: "greeting", image: "https://images.unsplash.com/photo-1513311160371-60f78c9ce9cb?w=400&h=600&fit=crop" },
  { id: 4, title: "Retro Disco Celebration", category: "birthday", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=600&fit=crop" },
  { id: 5, title: "Botanical Wildflower Frame", category: "wedding", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop" },
  { id: 6, title: "Neon Splash Geometric", category: "greeting", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=600&fit=crop" }
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let filteredData = [...templatesDatabase];

    // Backend Category Filtering
    if (category) {
      filteredData = filteredData.filter(
        item => item.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Backend Search Query Processing
    if (search) {
      filteredData = filteredData.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Return successful response with clean JSON headers
    return NextResponse.json({ success: true, data: filteredData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server Error Fetching Templates" }, { status: 500 });
  }
}