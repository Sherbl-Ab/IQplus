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
  metadataBase: new URL(
    "https://i-qplus-git-main-sherbel-team.vercel.app"
  ),

  title: {
    default: "IQ PLUS | مركز للتعليم والتطوير في المغار",
    template: "%s | IQ PLUS",
  },

  description:
    "مركز IQ PLUS للتعليم والتطوير في المغار، يقدم دورات في الرياضيات، اللغات، التحضير لامتحان الموهوبين، البرمجة، الذكاء الاصطناعي والروبوتيكا.",

  keywords: [
    "IQ PLUS",
    "مركز للتعليم والتطوير في المغار",
    "مركز تعليمي في المغار",
    "دورات تعليمية",
    "التحضير لامتحان الموهوبين",
    "الأعالي في الرياضيات",
    "رياضيات",
    "لغة إنجليزية",
    "لغة عبرية",
    "عبرية محكية",
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
    locale: "ar_IL",
    siteName: "IQ PLUS",
    title: "IQ PLUS | مركز للتعليم والتطوير في المغار",
    description:
      "برامج تعليمية حديثة تجمع بين المتابعة المهنية، المعرفة الأكاديمية، التكنولوجيا ومهارات المستقبل.",
    url: "https://i-qplus-git-main-sherbel-team.vercel.app",
    images: [
      {
        url: "/iqplus-logo-new.jpg",
        width: 1200,
        height: 630,
        alt: "شعار مركز IQ PLUS للتعليم والتطوير",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IQ PLUS | مركز للتعليم والتطوير في المغار",
    description:
      "دورات تعليمية حديثة في الرياضيات، اللغات، الموهوبين، البرمجة، الذكاء الاصطناعي والروبوتيكا.",
    images: ["/iqplus-logo-new.jpg"],
  },

  icons: {
    icon: "/iqplus-logo-new.jpg",
    shortcut: "/iqplus-logo-new.jpg",
    apple: "/iqplus-logo-new.jpg",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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