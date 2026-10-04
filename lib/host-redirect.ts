import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  PRIMARY_HOSTNAME,
  SECONDARY_HOSTNAMES,
  SITE_URL,
} from "./site";

const SECONDARY_SET = new Set<string>(SECONDARY_HOSTNAMES);

/** Preview / local hosts must not be redirected to production. */
function isInternalOrPreviewHost(hostname: string): boolean {
  return (
    hostname === "localhost" ||
    hostname.endsWith(".vercel.app") ||
    hostname.endsWith(".local")
  );
}

/**
 * 301 to primary domain (non-www): secondary domains, www on any listed host.
 * Preserves pathname and search params. Returns null when no redirect is needed.
 */
export function getHostRedirect(request: NextRequest): NextResponse | null {
  const rawHost = request.headers.get("host");
  if (!rawHost) return null;

  const hostname = rawHost.split(":")[0].toLowerCase();
  if (isInternalOrPreviewHost(hostname)) return null;

  const hadWww = hostname.startsWith("www.");
  const bareHost = hadWww ? hostname.slice(4) : hostname;

  const isPrimaryBare = bareHost === PRIMARY_HOSTNAME;
  const isSecondary = SECONDARY_SET.has(bareHost);

  if (isPrimaryBare && !hadWww) {
    return null;
  }

  if (!isSecondary && !(isPrimaryBare && hadWww)) {
    return null;
  }

  const destination = new URL(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    SITE_URL
  );

  return NextResponse.redirect(destination, 301);
}
