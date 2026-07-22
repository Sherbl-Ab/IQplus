import Image from "next/image";
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
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/courses", label: "الدورات" },
  { href: "/reviews", label: "آراء الأهالي" },
  { href: "/contact", label: "تواصل معنا" },
];

const courses = [
  "التحضير لامتحان الموهوبين",
  "الأعالي في الرياضيات",
  "الرياضيات",
  "اللغة الإنجليزية",
  "اللغة العبرية",
  "البرمجة",
  "الذكاء الاصطناعي",
  "الروبوتيكا",
];

const contactItems = [
  {
    icon: Phone,
    label: "050-2933050",
    href: "tel:0502933050",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/972502933050",
  },
  {
    icon: Mail,
    label: "IQPluss2025@gmail.com",
    href: "mailto:IQPluss2025@gmail.com",
  },
  {
    icon: Instagram,
    label: "@iqplus_center",
    href: "https://www.instagram.com/iqplus_center",
  },
  {
    icon: MapPin,
    label: "المغار",
    href: "/contact",
  },
];

export function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden bg-[#03152f] text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        {/* Main footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <div className="inline-flex items-center justify-center rounded-[30px] bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
              <Image
                src="/iqplus-logo.jpg"
                alt="IQ PLUS"
                width={190}
                height={100}
                className="h-20 w-auto object-contain"
              />
            </div>

            <h2 className="mt-6 text-2xl font-black text-white">
              IQ PLUS
            </h2>

            <p className="mt-3 max-w-sm text-base leading-8 text-white/65">
              تعليم حديث، متابعة مهنية وبرامج مصممة لمساعدة كل طالب
              على التقدّم والتميّز.
            </p>

            <div className="mt-6">
              <RegisterButton size="lg">
                سجل الآن
              </RegisterButton>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-black text-amber-400">
              روابط سريعة
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit font-bold text-white/75 transition duration-200 hover:-translate-x-1 hover:text-amber-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-black text-amber-400">
              دوراتنا
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {courses.map((course) => (
                <Link
                  key={course}
                  href="/courses"
                  className="w-fit font-bold text-white/75 transition duration-200 hover:-translate-x-1 hover:text-amber-300"
                >
                  {course}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-black text-amber-400">
              تواصل معنا
            </h3>

            <div className="mt-6 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const external = item.href.startsWith("http");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 text-white/75 transition hover:text-white"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-amber-400 transition duration-200 group-hover:bg-amber-400 group-hover:text-[#03152f]">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="font-medium">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center text-sm text-white/45 md:flex-row">
          <span>
            © {new Date().getFullYear()} IQ PLUS. جميع الحقوق محفوظة.
          </span>

          <span>
            مركز IQ PLUS للتعليم والتطوير
          </span>
        </div>
      </div>
    </footer>
  );
}