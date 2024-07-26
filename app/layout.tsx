import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/shared";

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Home Page | Next Pizza",
  description: "Главная страница сайта Next Pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
      <main className="min-h-screen">
          <Header />
          {children}
      </main>
      </body>
    </html>
  );
}
