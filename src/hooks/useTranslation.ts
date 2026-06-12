"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { locales } from "@/constants/locales";

export function useTranslation(namespace: string) {
  const router = useRouter();
  const t = useTranslations(namespace);
  const currentLocale = useLocale() as Language;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = currentLocale;
    }
  }, [currentLocale]);

  const availableLocales = locales.langs;

  const setLocale = (nextLocale: string) => {
    if (nextLocale === currentLocale) return;
    if (typeof document !== "undefined") {
      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;
    }
    router.refresh();
  };

  return {
    t,
    locale: currentLocale,
    availableLocales,
    setLocale,
  };
}
