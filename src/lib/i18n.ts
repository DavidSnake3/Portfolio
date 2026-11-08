// Tiny i18n helpers. Every text in src/data has an English and a Spanish version: { en, es }.

export type Lang = "en" | "es";
export type L = { en: string; es: string };

/** Picks the text for the current language (plain strings are the same in both). */
export function t(value: L | string, lang: Lang): string {
  return typeof value === "string" ? value : value[lang];
}

/** Route of each language: English at "/", Spanish at "/es/". */
export const langPath: Record<Lang, string> = { en: "/", es: "/es/" };
