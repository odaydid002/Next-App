import localFont from "next/font/local";

export const poppins = localFont({
  src: [
    { path: "../assets/fonts/en/poppins/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/en/poppins/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/en/poppins/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "../assets/fonts/en/poppins/Poppins-Black.ttf", weight: "900", style: "normal" },
    { path: "../assets/fonts/en/poppins/Poppins-Light.ttf", weight: "300", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const tajawal = localFont({
  src: [
    { path: "../assets/fonts/ar/tajawal/Tajawal-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/ar/tajawal/Tajawal-Medium.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/ar/tajawal/Tajawal-Bold.ttf", weight: "700", style: "normal" },
    { path: "../assets/fonts/ar/tajawal/Tajawal-Black.ttf", weight: "900", style: "normal" },
    { path: "../assets/fonts/ar/tajawal/Tajawal-Light.ttf", weight: "300", style: "normal" },
  ],
  variable: "--font-rtl",
  display: "swap",
});

export const fonts = {
  poppins,
  tajawal,
};
