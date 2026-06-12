import { locales } from "@/constants/locales";
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

const nextIntl = createMiddleware({
  locales: locales.langs,
  defaultLocale: locales.default,
});

export default function middleware(req) {
  const { pathname } = req.nextUrl;
  const first = pathname.split("/")[1];

  if (locales.langs.includes(first)) {
    // Remove the language prefix from the URL and set cookie
    const newPath = pathname.replace(new RegExp(`^/${first}`), "") || "/";
    const url = req.nextUrl.clone();
    url.pathname = newPath;
    const res = NextResponse.rewrite(url);
    res.cookies.set("NEXT_LOCALE", first, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  }

  return nextIntl(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};