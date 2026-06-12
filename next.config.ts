import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = createNextIntlPlugin({
  locales: ["en", "ar", "fr"],
  defaultLocale: "en",
})({});

export default nextConfig;
