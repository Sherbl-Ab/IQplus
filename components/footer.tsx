import Link from "next/link";

import {
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { RegisterButton } from "@/components/register-button";

const quickLinks = [
  {
    href: "/",
    label: "الرئيسية",
  },
  {
    href: "/about",
    label: "من نحن",
  },
  {
    href: "/courses",
    label: "الدورات",
  },
  {
    href: "/gallery",
    label: "معرض الصور",
  },
  {
    href: "/reviews",
    label: "آراء الأهالي",
  },
  {
    href: "/contact",
    label: "تواصل معنا",
  },
];

const courseLinks = [
  "التحضير لامتحان الموهوبين",
  "مسابقة الأعالي في الرياضيات",
  "الرياضيات",
  "اللغة الإنجليزية",
  "اللغة العبرية",
  "البرمجة",
  "الذكاء الاصطناعي",
  "الروبوتيكا",
];

export function Footer() {
  return (
    <footer className="bg-[#03152f] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex rounded-3xl bg-white p-4 shadow-lg"
              aria-label="IQ PLUS"
            >
              <img
                src="/iqplus-logo-new.jpg"
                alt="شعار IQ PLUS"
                className="h-20 w-44 object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm leading-8 text-white/65">
              مركز تعليمي متكامل في المغار، يجمع بين الخبرة،
              المتابعة الشخصية، التكنولوجيا ومهارات المستقبل.
            </p>

            <div className="mt-6">
              <RegisterButton>
                سجل الآن
              </RegisterButton>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black text-amber-300">
              روابط سريعة
            </h3>

            <nav className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-bold text-white/65 transition hover:translate-x-[-4px] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-black text-amber-300">
              دوراتنا
            </h3>

            <div className="mt-5 grid gap-3">
              {courseLinks.map((course) => (
                <Link
                  key={course}
                  href="/courses"
                  className="text-sm font-bold text-white/65 transition hover:translate-x-[-4px] hover:text-white"
                >
                  {course}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-black text-amber-300">
              تواصل معنا
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="tel:0502933050"
                className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10">
                  <Phone className="h-5 w-5 text-amber-300" />
                </span>

                <span>
                  050-2933050
                </span>
              </a>

              <a
                href="https://wa.me/972502933050"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10">
                  <MessageCircle className="h-5 w-5 text-amber-300" />
                </span>

                <span>
                  WhatsApp
                </span>
              </a>

              <a
                href="mailto:IQPluss2025@gmail.com"
                className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10">
                  <Mail className="h-5 w-5 text-amber-300" />
                </span>

                <span className="break-all">
                  IQPluss2025@gmail.com
                </span>
              </a>

              <a
                href="https://www.instagram.com/iqplus_center"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10">
                  <Instagram className="h-5 w-5 text-amber-300" />
                </span>

                <span>
                  @iqplus_center
                </span>
              </a>

              <a
                href="https://www.google.com/maps/place/32%C2%B053'04.1%22N+35%C2%B024'43.8%22E/@32.884476,35.412167,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10">
                  <MapPin className="h-5 w-5 text-amber-300" />
                </span>

                <span>
                  المغار
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-white/45 md:flex-row md:text-right">
          <p>
            © 2026 IQ PLUS — جميع الحقوق محفوظة
          </p>

          <p>
            تعليم • تقدم • تميز
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/972502933050"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="التواصل عبر WhatsApp"
        className="fixed bottom-5 left-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(0,0,0,.25)] transition hover:-translate-y-1 hover:scale-105"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </footer>
  );
}