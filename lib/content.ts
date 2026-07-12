export const SITE_CONFIG = {
  name: 'Европротокол Ассистанс',
  phone: '+998993280777',
  phoneAlt: '+998 (90) 328 17 77',
  phoneRaw: '+998993280777',
  telegram: 'https://t.me/Otsenka777',
  instagram: 'https://www.instagram.com/yevroprotokol24_7?igsh=ZHZzOHplNmc0YTd2',
  sbddPhone: '102',
} as const

export const HERO_CONTENT = {
  title: 'ЕВРОПРОТОКОЛ БЕЗ ГАИ',
  subtitle: 'ПРИЕДЕМ ЗА 15 МИНУТ!',
  description: 'Оформим мелкое ДТП на месте без вызова СБДД. Полностью легально.',
  badges: [
    { text: '24/7', icon: 'clock' },
    { text: 'По всему Ташкенту и области', icon: 'map' },
    { text: 'Гарантия выплаты от СК', icon: 'shield' },
  ],
  cta: {
    call: 'Позвонить комиссару',
    telegram: 'Вызвать в Telegram',
  },
} as const

export const CHECKLIST_ITEMS = [
  {
    id: 'two_vehicles',
    label: 'Участвуют только 2 автомобиля',
    description: 'Никаких других ТС или пешеходов',
  },
  {
    id: 'no_injuries',
    label: 'Нет пострадавших',
    description: 'Никто не получил травм',
  },
  {
    id: 'osago',
    label: 'У обоих есть ОСАГО',
    description: 'Действующие полисы на оба авто',
  },
  {
    id: 'agreement',
    label: 'Виновник согласен',
    description: 'Нет спора о том, кто виноват',
  },
  {
    id: 'sober',
    label: 'Оба водителя трезвы',
    description: 'Без алкогольного опьянения',
  },
] as const

export const CHECKLIST_WARNINGS = {
  notEligible: 'Вам не подходит Европротокол. Срочно вызывайте СБДД (102)',
  sbddPhone: '102',
} as const

export const BENEFITS_ITEMS = [
  {
    id: 'fast',
    title: 'Быстро',
    description: 'Оформление за 15 минут на месте',
    icon: 'clock',
  },
  {
    id: 'legal',
    title: 'Юридически чисто',
    description: 'Соответствует законодательству РУз',
    icon: 'shield',
  },
  {
    id: 'simple',
    title: 'Просто',
    description: 'Никаких сложных форм и бумаг',
    icon: 'check',
  },
] as const

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Проверьте условия',
    description: 'Убедитесь, что подходит для Европротокола',
  },
  {
    step: 2,
    title: 'Сфотографируйте место',
    description: 'Сделайте фото повреждений и номеров',
  },
  {
    step: 3,
    title: 'Вызовите комиссара',
    description: 'Мы приедем и оформим всё за вас',
  },
] as const

export const FAQ_ITEMS = [
  {
    question: 'Когда можно оформить Европротокол?',
    answer: 'Если участвуют только 2 авто, нет пострадавших, у обоих есть ОСАГО и виновник согласен с обстоятельствами.',
  },
  {
    question: 'Нужно ли вызывать СБДД?',
    answer: 'Нет. При соблюдении условий Европротокола достаточно корректно заполнить извещение и уведомить страховую.',
  },
  {
    question: 'Какие фото нужно сделать?',
    answer: 'Общий план места ДТП, повреждения с разных ракурсов, номера автомобилей, дорожная разметка и знаки.',
  },
  {
    question: 'Что делать при разногласиях?',
    answer: 'Вызовите СБДД по номеру 102. Европротокол оформляется только при полном согласии сторон.',
  },
] as const
