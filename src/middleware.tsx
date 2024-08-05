import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const apiKey = request.headers.get("x-api-key");

  if (apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
    return NextResponse.redirect(new URL("/not-found", request.url).toString());
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
