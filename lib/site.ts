/** Canonical origin for SEO (canonical, hreflang, sitemap, robots). */
export const SITE_URL = "https://evroprotokoll.uz";

export const PRIMARY_HOSTNAME = "evroprotokoll.uz";

/**
 * Additional domains that must 301 to SITE_URL (path and query preserved).
 * Configure the same hostnames on your hosting provider (e.g. Vercel domains).
 */
export const SECONDARY_HOSTNAMES = ["yevroprotokol247.uz"] as const;

export const SITE_CONFIG = {
  name: "Yevroprotokol 24/7",
  nameRu: "Европротокол 24/7",
  nameUz: "Yevroprotokol 24/7",
  phone: "+998 99 328 07 77",
  phoneAlt: "+998 (90) 328 17 77",
  phoneRaw: "+998993280777",
  telegram: "https://t.me/Otsenka777",
  instagram:
    "https://www.instagram.com/yevroprotokol24_7?igsh=ZHZzOHplNmc0YTd2",
  sbddPhone: "102",
} as const;
