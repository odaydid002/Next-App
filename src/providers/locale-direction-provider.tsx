"use client";

import { useEffect } from "react";
import { locales } from "@/constants/locales";

export function LocaleDirectionProvider({ locale }: { locale: string }) {
  useEffect(() => {
    const isRTL = locales.isRTL(locale as any);
    document.documentElement.lang = locale;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
