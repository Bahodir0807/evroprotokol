import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getHostRedirect } from "./lib/host-redirect";
import { defaultLocale, isLocale } from "./lib/i18n";

export function proxy(request: NextRequest) {
  const hostRedirect = getHostRedirect(request);
  if (hostRedirect) return hostRedirect;

  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segment = pathname.split("/")[1];
  if (segment && isLocale(segment)) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
    "/sitemap.xml",
    "/robots.txt",
  ],
};
