"use client";

import { locales } from "@/constants/locales";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { t, locale, setLocale } = useTranslation("home");

  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-5xl">{t("welcome")}</h1>
      <div className='flex items-center gap-4 mt-5'>
        <p className='text-foreground dark:text-foreground-dark'>{t("theme")}</p>
        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          <p className='text-foreground dark:text-foreground-dark'>
            {theme === "dark" ? t("light") : t("dark")}
          </p>
        </button>
      </div>
      <div className='flex items-center gap-4 mt-5'>
        <p className='text-foreground dark:text-foreground-dark'>{t("language")}</p>
        <button onClick={() => setLocale(locale==="en"?"ar":locale==="ar"?'fr':"en")}>
          <p className='text-foreground dark:text-foreground-dark'>
            {locales.name[locale]}
          </p>
        </button>
      </div>
    </main>
  );
}
