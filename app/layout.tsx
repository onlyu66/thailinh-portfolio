import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { LanguageProvider } from "@/providers/LanguageProvider";
import QueryProvider from "@/providers/QueryProvider";
import ThemeProvider from "@/providers/ThemeProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thai Ngoc Linh | Portfolio",
  description:
    "Frontend Developer (React/Next.js) - Growing into Fullstack with Java/Spring Boot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} font-sans bg-slate-50 dark:bg-brand-bg text-slate-800 dark:text-slate-100 antialiased selection:bg-brand-cyan selection:text-black relative transition-colors duration-300 w-full overflow-x-hidden`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <QueryProvider>{children}</QueryProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
