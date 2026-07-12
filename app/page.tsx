import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Help from "@/components/body/help/Help";
import Footer from "@/components/footer/Footer";
import { SITE_CONFIG } from "@/lib/content";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: "Европротокол Ассистанс Ташкент",
    description:
      "Официальное оформление Европротокола за 15 минут без вызова СБДД (ГАИ) в Ташкенте.",
    url: "https://evroprotokol.uz",
    telephone: SITE_CONFIG.phoneRaw,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ташкент",
      addressCountry: "UZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.311081",
      longitude: "69.240562",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        <main className="py-16 gap-16">
          <Hero />
          <Benefits />
          <HowItWorks />
          <br />
          <br />
          <Help />
        </main>
        <Footer />
      </div>
    </>
  );
}
