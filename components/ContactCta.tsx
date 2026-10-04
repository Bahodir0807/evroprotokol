import { PhoneIcon, TelegramIcon } from "@/components/ui/Icon";
import type { Dictionary } from "@/lib/messages";
import { SITE_CONFIG } from "@/lib/site";

export default function ContactCta({ dict }: { dict: Dictionary }) {
  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <a
        href={`tel:${SITE_CONFIG.phoneRaw}`}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500"
      >
        <PhoneIcon className="h-5 w-5" />
        {dict.cta.callNow}
      </a>
      <a
        href={SITE_CONFIG.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#0088cc] px-6 py-3 font-semibold text-[#0088cc] hover:bg-[#0088cc]/10"
      >
        <TelegramIcon className="h-5 w-5" />
        {dict.cta.writeTelegram}
      </a>
    </div>
  );
}
