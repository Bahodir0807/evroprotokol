import type { NextConfig } from "next";

/**
 * Host redirects (www → apex, yevroprotokol247.uz → evroprotokoll.uz) live in proxy.ts.
 * Do not duplicate them in the Vercel dashboard — attach both domains to this project instead.
 */
const nextConfig: NextConfig = {};

export default nextConfig;
