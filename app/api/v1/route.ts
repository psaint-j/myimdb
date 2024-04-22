// import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url as string);
    const endpoint = searchParams.get("url");
    
    if (!endpoint) {
        return new NextResponse(JSON.stringify({ message: 'Endpoint is required' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    const prefix = endpoint.includes('?') ? '&' : '?';
    const fullUrl = `${process.env.API_URL}${endpoint}${prefix}api_key=${process.env.API_KEY}`;


    try {
        const apiResponse = await fetch(fullUrl);
        const data = await apiResponse.json();

        if (!apiResponse.ok) {
            new NextResponse(JSON.stringify({ message: 'Failed to fetch data' }), { status: apiResponse.status, headers: {'Content-Type': 'application/json'} });
        }
        return apiResponse.ok
            ? new NextResponse(JSON.stringify(data), { status: 200, headers: {'Content-Type': 'application/json'} })
            : new NextResponse(JSON.stringify({ message: 'Failed to fetch data' }), { status: apiResponse.status, headers: {'Content-Type': 'application/json'} });
        // return res.status(200).json(data);
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: 'Error accessing the API', error: (error as Error).message }), {
            status: 500,
            headers: {'Content-Type': 'application/json'}
        });
    }
}
