import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get('page') || '1';
        const limit = searchParams.get('limit') || '100';

        const response = await fetch(`https://beritabe.onrender.com/berita?page=${page}&limit=${limit}`, {
            headers: {
                'Accept': 'application/json',
            },
            // Cache for 5 minutes to avoid hammering the external API
            next: { revalidate: 300 },
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: `API responded with status: ${response.status}` },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching berita:', error);
        return NextResponse.json(
            { error: 'Failed to fetch berita from external API' },
            { status: 500 }
        );
    }
}
