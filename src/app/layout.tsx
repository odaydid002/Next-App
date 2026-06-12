import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../../globals.css";
import {locales} from '../constants/locales'
export const metadata: Metadata = {
  title: "Next App",
  description: "Created by oday-dev",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={locales.default} className="antialiased">
        <body className="flex flex-col min-h-dvh min-w-dvw">
            {children}
        </body>
    </html>
  );
}
