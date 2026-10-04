import type { Locale } from "../i18n";
import { ru } from "./ru";
import { uz } from "./uz";

const dictionaries = { ru, uz };

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
