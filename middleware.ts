import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const response = NextResponse.next();
  response.headers.set("x-domain", hostname);
  response.headers.set(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon|images|videos|robots|sitemap).*)"],
};
