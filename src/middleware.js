import { NextResponse } from "next/server";

export function middleware(request) {
  const protectedPaths = ["/cart", "/my"];

  const { pathname } = request.nextUrl;

  const isProtectedPath = protectedPaths.some((path) => pathname.startsWith(path));

  if (isProtectedPath) {
    const token = request.cookies.get("auth-token")?.value || request.headers.get("Authorization");

    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cart/:path*", "/my/:path*"],
};
