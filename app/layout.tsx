import type { Metadata } from "next";
import { Cairo } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RegistrationDialog } from "@/components/registration-dialog";

import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iqplus-center.com"),

  title: {
    default: "IQ PLUS | مركز تعليمي متكامل في المغار",
    template: "%s | IQ PLUS",
  },

  description:
    "مركز IQ PLUS في المغار يقدم دورات في الرياضيات، اللغات، الموهوبين، البرمجة، الذكاء الاصطناعي والروبوتيكا.",

  keywords: [
    "IQ PLUS",
    "مركز تعليمي في المغار",
    "دورات تعليمية",
    "التحضير لامتحان الموهوبين",
    "رياضيات",
    "لغة إنجليزية",
    "لغة عبرية",
    "برمجة",
    "ذكاء اصطناعي",
    "روبوتيكا",
  ],

  authors: [
    {
      name: "IQ PLUS",
    },
  ],

  creator: "IQ PLUS",
  publisher: "IQ PLUS",

  openGraph: {
    type: "website",
    locale: "ar",
    siteName: "IQ PLUS",
    title: "IQ PLUS | مركز تعليمي متكامل في المغار",
    description:
      "برامج تعليمية متطورة تجمع بين الخبرة، المتابعة الشخصية والتكنولوجيا الحديثة.",
    images: [
      {
        url: "/iqplus-logo-new.jpg",
        width: 1200,
        height: 630,
        alt: "شعار IQ PLUS",
      },
    ],
  },

  icons: {
    icon: "/iqplus-logo-new.png",
    apple: "/iqplus-logo-new.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={cairo.variable}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white font-sans text-slate-950 antialiased">
        <Header />

        <div className="min-h-screen">
          {children}
        </div>

        <Footer />

        <RegistrationDialog />
      </body>
    </html>
  );
}