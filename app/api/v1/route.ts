// import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url as string);
  const endpoint = searchParams.get("url");
  const isDiscoverMovie = endpoint?.startsWith("discover/movie?");

  if (!endpoint) {
    return new NextResponse(
      JSON.stringify({ message: "Endpoint is required" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  const prefix = endpoint.includes("?") ? "&" : "?";
  const fullUrl = `${process.env.API_URL}${endpoint}${prefix}api_key=${process.env.API_KEY}`;

  try {
    const apiResponse = await fetch(fullUrl);
    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      return new NextResponse(
        JSON.stringify({ message: "Failed to fetch data" }),
        {
          status: apiResponse.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (apiResponse.ok) {
      if (isDiscoverMovie && data.total_pages > 500) {
        //https://www.themoviedb.org/talk/62bb2ea18b959e00526428c9#62bb37d2c613ce0094222e71
        // page must be less than or equal to 500
        data.total_pages = 500;
      }
      return new NextResponse(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error accessing the API",
        error: (error as Error).message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
