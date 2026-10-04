import type { PageKey } from "../routes";

export const uz = {
  meta: {
    home: {
      title: "Oʻzbekistonda yevroprotokol — DTPni YHXB chaqirmasdan rasmiylashtirish",
      description:
        "Oʻzbekiston va Toshkentda yevroprotokol (evroprotokol): shartlar, hujjatlar, bosqichma-bosqich rasmiylashtirish va tez-tez beriladigan savollar.",
    },
    uzbekistan: {
      title: "Oʻzbekistonda yevroprotokol — shartlar va tartib",
      description:
        "Oʻzbekiston Respublikasida yevroprotokol qanday qoʻllanadi: qachon mumkin, joyida nimalarni tekshirish va keyingi qadamlar.",
    },
    tashkent: {
      title: "Toshkentda yevroprotokol — kichik DTPni rasmiylashtirish",
      description:
        "Toshkentda yevroprotokol: odatiy holatlar, tayyorgarlik va haydovchilar uchun foydali havolalar.",
    },
    howTo: {
      title: "Yevroprotokolni qanday rasmiylashtirish — qoʻllanma",
      description:
        "DTPdan keyin yevroprotokolni rasmiylashtirish: xavfsizlik, suratga olish, xabarnoma toʻldirish va sugʻurtaga xabar berish.",
    },
    documents: {
      title: "Yevroprotokol uchun hujjatlar",
      description:
        "Yevroprotokol uchun odatda talab qilinadigan hujjatlar: OSAGO polisi, haydovchilik guvohnomasi, texnik pasport va DTP maʼlumotlari.",
    },
    whenNot: {
      title: "Qachon yevroprotokol mumkin emas",
      description:
        "Yevroprotokol qoʻllanmaydigan holatlar: jabrlanuvchilar, aybdorlik boʻyicha nizo, ikkitadan ortiq ishtirokchi va boshqa cheklovlar.",
    },
    faq: {
      title: "Yevroprotokol boʻyicha savol-javob",
      description:
        "Yevroprotokol, YHXB (102) va sugʻurta kompaniyasi bilan ishlash boʻyicha tez-tez beriladigan savollar.",
    },
    contacts: {
      title: "Aloqa — Yevroprotokol 24/7",
      description:
        "Yevroprotokol rasmiylashtirish boʻyicha yordam uchun telefon, Telegram va ijtimoiy tarmoqlar.",
    },
    privacy: {
      title: "Maxfiylik siyosati",
      description:
        "evroprotokoll.uz saytida shaxsiy maʼlumotlar qanday qayta ishlanadi va foydalanuvchi huquqlari.",
    },
  } satisfies Record<PageKey, { title: string; description: string }>,
  nav: {
    uzbekistan: "Oʻzbekiston",
    tashkent: "Toshkent",
    howTo: "Qanday rasmiylashtirish",
    documents: "Hujjatlar",
    whenNot: "Qachon mumkin emas",
    faq: "Savollar",
    contacts: "Aloqa",
    home: "Bosh sahifa",
    menu: "Menyu",
    theme: "Mavzu",
    themeDark: "Qorongʻu",
    themeLight: "Yorugʻ",
    toggleTheme: "Mavzuni almashtirish",
    benefits: "Afzalliklar",
    process: "Qanday ishlaydi",
    help: "Yordam",
  },
  hero: {
    title: "YHXB CHAQIRMASDAN YEVROPROTOKOL",
    subtitle: "DTP JOYIDA YORDAM",
    description:
      "Qonuniy shartlar bajarilganda kichik DTPni yevroprotokol boʻyicha rasmiylashtirish. Maslahat va hamrohlik.",
    badges: [
      { text: "24/7", icon: "clock" as const },
      { text: "Toshkent va viloyat", icon: "map" as const },
      { text: "Sugʻurta bilan yordam", icon: "shield" as const },
    ],
    cta: {
      call: "Qo'ng'iroq qilish",
      telegram: "Telegramda yozish",
    },
  },
  benefits: {
    heading: "Nima uchun qulay",
    subheading: "Tushunarli jarayon va muhim tafsilotlarga eʼtibor.",
    items: [
      {
        title: "Bosqichma-bosqich yoʻriqnoma",
        desc: "Ortiqcha terminologiyasiz tuzilgan koʻrsatmalar.",
      },
      {
        title: "Shartlarni tekshirish",
        desc: "Yevroprotokol mos kelishini aniqlash uchun chek-list.",
      },
      {
        title: "Sugʻurta uchun materiallar",
        desc: "Odatda sugʻurtachi soʻraydigan surat va maʼlumotlar boʻyicha maslahatlar.",
      },
    ],
  },
  howItWorks: {
    heading: "Qanday ishlaydi",
    subheading: "DTP joyida uch qadam.",
    steps: [
      {
        n: 1,
        t: "Vaziyatni baholang",
        d: "Jabrlanuvchi va aybdorlik boʻyicha nizo yoʻqligini tekshiring.",
      },
      {
        n: 2,
        t: "Holatni qayd eting",
        d: "Joy, shikastlanishlar va ishtirokchilar hujjatlarining suratini oling.",
      },
      {
        n: 3,
        t: "Xabarnomani toʻldiring",
        d: "Yevroprotokolni toʻldiring va belgilangan muddatda sugʻurtaga xabar bering.",
      },
    ],
  },
  faq: {
    heading: "Tez-tez beriladigan savollar",
    subheading: "Yevroprotokol va odatiy holatlar boʻyicha qisqa javoblar.",
    items: [
      {
        question: "Qachon yevroprotokol rasmiylashtirish mumkin?",
        answer:
          "Odatda — faqat ikkita transport vositasi ishtirok etganda, jabrlanuvchi boʻlmasa, ikkala tomonda amaldagi majburiy sugʻurta polisi boʻlsa va tomonlar holatga rozi boʻlsa. Oʻzbekiston qonunchiligidagi dolzarb talablarni tekshiring.",
      },
      {
        question: "YHXB (GAI) chaqirish kerakmi?",
        answer:
          "Yevroprotokol shartlari bajarilsa, inspektor chaqirilmasligi mumkin. Shubha, nizo yoki jarohat boʻlsa — 102 ga qoʻngʻiroq qiling.",
      },
      {
        question: "Joyida qanday suratlar kerak?",
        answer:
          "Umumiy reja, izlar va avtomobillarning joylashuvi, shikastlanishlar, davlat raqamlari, yoʻl belgilari va chiziqlari, ishtirokchilar hujjatlari.",
      },
      {
        question: "Kelishmovchilik boʻlsa nima qilish kerak?",
        answer:
          "Yevroprotokol tomonlarning roziligi bilan rasmiylashtiriladi. Nizo boʻlsa — 102 orqali YHXB chaqiring.",
      },
    ],
    moreLink: "Barcha savollar",
  },
  footer: {
    disclaimer:
      "Axborot xizmati. Materiallar yurist maslahati va rasmiy organ tushuntirishlarini almashtirmaydi.",
    privacy: "Maxfiylik siyosati",
    rights: "Barcha huquqlar himoyalangan",
  },
  pages: {
    uzbekistan: {
      h1: "Oʻzbekistonda yevroprotokol",
      intro:
        "Yevroprotokol (evroprotokol) — qonunda belgilangan shartlar bajarilganda YHXB xodimlarini chaqirmasdan DTP holatini qayd etishning soddalashtirilgan tartibi. Quyida Oʻzbekiston haydovchilari uchun qisqa sharh.",
      sections: [
        {
          h2: "Kimlar uchun muhim",
          body:
            "Jabrlanuvchisiz kichik DTPda, tomonlar aybdorlikka kelishganda va ikkala tomonda amaldagi fuqarolik javobgarligi sugʻurtasi polisi boʻlganda.",
        },
        {
          h2: "Joyida nimalarni tekshirish kerak",
          body:
            "Avtomobilni xavfsiz toʻxtating, avariya signalini yoqing, avariya toʻxtash belgisini qoʻying. Hech kim jarohat olmaganini tekshiring. Shubha boʻlsa — tez yordam va 102.",
        },
        {
          h2: "Keyingi qadamlar",
          body:
            "Holatni qayd eting, DTP xabarnomasini (yevroprotokol) toʻldiring va maʼlumotlarni belgilangan muddatda sugʻurta kompaniyasiga yuboring. Muddat va shaklni oʻz SKingizdan aniqlang.",
        },
      ],
    },
    tashkent: {
      h1: "Toshkentda yevroprotokol",
      intro:
        "Toshkentda ham yevroprotokol boshqa hududlardagi kabi shartlarda qoʻllanadi. Zich harakat va toʻxtash joylarida kichik urishlar tez-tez uchraydi — tartibni bilish vaqtni tejaydi.",
      sections: [
        {
          h2: "Shahardagi odatiy holatlar",
          body:
            "Toʻxtash joyidagi urishlar, mayda urishlar. Har holda avval xavfsizlik va jabrlanuvchilarni baholang.",
        },
        {
          h2: "Shahar muhitida qayd etish",
          body:
            "Atrof-muhitni suratga oling: chorraha, belgilar, chiziqlar, avtomobillarning joylashuvi. Bu sugʻurtaga holatni tiklashga yordam beradi.",
        },
        {
          h2: "Yordam olish",
          body:
            "Hujjatlarni joyida toʻldirishda yordam kerak boʻlsa, telefon yoki Telegram orqali bogʻlaning. Yetib kelish vaqti yuklama va tumanga bogʻliq — qoʻngʻiroqda aniqlashtiring.",
        },
      ],
    },
    howTo: {
      h1: "Yevroprotokolni qanday rasmiylashtirish",
      intro:
        "Quyidagi algoritm maʼlumot uchun. Tartib oʻzgarishi mumkin — dolzarb qoidalar va SK koʻrsatmalariga tayaning.",
      steps: [
        {
          title: "Xavfsizlikni taʼminlang",
          body: "Toʻxtang, boshqa ishtirokchilarni ogohlantiring, kerak boʻlsa tez yordam va YHXB chaqiring.",
        },
        {
          title: "Maʼlumotlarni yigʻing",
          body: "Ishtirokchilar FIO va aloqalari, OSAGO polislari, davlat raqamlari, avtomobil maʼlumotlari, shikastlanish tavsifi.",
        },
        {
          title: "Surat va sxema",
          body: "DTP joyini turli nuqtalardan suratga oling. Kerak boʻlsa xabarnoma varagʻida sxema chizing.",
        },
        {
          title: "Xabarnomani toʻldiring",
          body: "Holatni, shikastlanishlarni yozing, ikkala ishtirokchi imzolasin. Polis raqamlari va sanalarni tekshiring.",
        },
        {
          title: "Sugʻurtaga xabar bering",
          body: "Hujjat va surat nusxalarini belgilangan muddatda SKga yuboring. Yuborish tasdigʻini saqlang.",
        },
      ],
    },
    documents: {
      h1: "Yevroprotokol uchun qanday hujjatlar kerak",
      intro:
        "Roʻyxat sugʻurtachi talablariga qoʻshimcha boʻlishi mumkin. DTP joyida quyidagilar boʻlishi maʼqul.",
      list: [
        "Har bir haydovchining haydovchilik guvohnomasi",
        "Transport vositasining texnik pasporti",
        "Ikkala avtomobil uchun OSAGO polisi",
        "Shaxsni tasdiqlovchi hujjat",
        "DTP xabarnomasi blanki — boʻlsa; yoʻq boʻlsa SKdan tartibni soʻrang",
      ],
      note:
        "Hujjat yoʻq yoki muddati oʻtgan boʻlsa, yevroprotokol mumkin emas — bunday hollarda 102 ga murojaat qiling.",
    },
    whenNot: {
      h1: "Qachon yevroprotokol qoʻllanmaydi",
      intro:
        "Quyidagi holatlarda joyida vakolatli organlarsiz rasmiylashtirish odatda mumkin emas yoki xavfli.",
      items: [
        "Jabrlanuvchi bor yoki tibbiy yordam kerak deb hisoblaysiz",
        "Ikkitadan ortiq transport yoki uchinchi shaxs mulki zarar koʻrgan",
        "Aybdorlik yoki holat boʻyicha kelishmovchilik",
        "Biror haydovchida amaldagi OSAGO polisi yoʻq",
        "Mastlik yoki boshqa mastlik belgilari",
        "Infratuzilmaga katta zarar — YHXBdan aniqlashtiring",
      ],
      cta: "Shubha boʻlsa 102 ga qoʻngʻiroq qiling — YHXB keyingi tartibni aytadi.",
    },
    faqPage: {
      h1: "Yevroprotokol boʻyicha savollar",
      intro:
        "Oʻzbekiston haydovchilarining tez-tez savollariga javoblar. Murakkab holatlar uchun yurist va rasmiy manbalarga murojaat qiling.",
    },
    contacts: {
      h1: "Aloqa",
      intro:
        "Yevroprotokol rasmiylashtirish yoki DTP joyidagi qadamlar boʻyicha maslahat kerak boʻlsa, biz bilan bogʻlaning.",
      phoneLabel: "Telefon",
      telegramLabel: "Telegram",
      instagramLabel: "Instagram",
      hoursNote:
        "Ish vaqti va chiqish vaqtini telefon yoki messenjerda aniqlashtiring — kun va yuklamaga bogʻliq.",
    },
    privacy: {
      h1: "Maxfiylik siyosati",
      updated: "Yangilangan sana: nashrdan oldin aniqlashtiring",
      sections: [
        {
          h2: "Qanday maʼlumotlar olinishi mumkin",
          body:
            "Telefon, Telegram yoki sayt orqali murojaatda ism, telefon, DTP maʼlumotlari va ixtiyoriy geolokatsiya yuborilishi mumkin. Texnik maʼlumotlar (IP, brauzer) hosting provayderi tomonida qayta ishlanishi mumkin.",
        },
        {
          h2: "Qayta ishlash maqsadlari",
          body:
            "Soʻrovga javob, maslahat va hamrohlik, saytni yaxshilash. Shaxsiy maʼlumotlar sotilmaydi.",
        },
        {
          h2: "Saqlash va himoya",
          body:
            "Maʼlumotlar maqsad va Oʻzbekiston qonunchiligi doirasida saqlanadi. Tashkiliy va texnik himoya choralari qoʻllanadi.",
        },
        {
          h2: "Huquqlaringiz",
          body:
            "«Aloqa» sahifasidagi aloqalar orqali maʼlumotlarni yangilash yoki oʻchirishni soʻrashingiz mumkin.",
        },
        {
          h2: "Siyosat oʻzgarishlari",
          body:
            "Joriy versiya shu sahifada. Muhim oʻzgarishlarda sana yangilanadi.",
        },
      ],
    },
  },
  cta: {
    callNow: "Hozir qoʻngʻiroq qilish",
    writeTelegram: "Telegramda yozish",
  },
  breadcrumb: {
    home: "Bosh sahifa",
  },
  internalLinks: {
    heading: "Foydali materiallar",
  },
} as const;
