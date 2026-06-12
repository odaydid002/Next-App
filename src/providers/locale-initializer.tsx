"use client";

import { useEffect } from "react";
import { useStorage } from "@/services/storage";

export function LocaleInitializer({ locale }: { locale: string }) {
  const setItem = useStorage((state) => state.setItem);

  useEffect(() => {
    // Initialize storage with server-provided locale on mount
    setItem("locale", locale);
  }, [locale, setItem]);

  return null;
}
