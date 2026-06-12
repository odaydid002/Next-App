import { getRequestConfig } from "next-intl/server";
import { locales } from "@/constants/locales";

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale ?? locales.default;

  return {
    locale: safeLocale,
    messages: (await import(`../locales/${safeLocale}/common.json`)).default
  };
});