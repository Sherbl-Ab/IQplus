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
      className="relative overflow-hidden border-t border-blue-100 bg-gradient-to-b from-[#f7fbff] to-[#eaf3fb] text-[#03152f]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-0 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10">
        <div className="grid items-start gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <div className="inline-flex items-center justify-center rounded-3xl border border-blue-100 bg-white p-4 shadow-sm">
              <Image
                src="/iqplus-logo-new.jpg"
                alt="IQ PLUS"
                width={170}
                height={85}
                className="h-16 w-auto object-contain"
              />
            </div>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
              تعليم حديث، متابعة مهنية وبرامج مصممة لمساعدة كل طالب
              على التقدّم والتميّز.
            </p>

            <div className="mt-5">
              <RegisterButton>
                سجل الآن
              </RegisterButton>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-black text-[#07529c]">
              روابط سريعة
            </h3>

            <div className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm font-bold text-slate-600 transition hover:text-amber-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-black text-[#07529c]">
              تواصل معنا
            </h3>

            <div className="mt-4 space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const external = item.href.startsWith("http");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 text-sm text-slate-600 transition hover:text-[#07529c]"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-[#07529c] shadow-sm transition group-hover:bg-[#07529c] group-hover:text-white">
                      <Icon className="h-4 w-4" />
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

        <div className="mt-9 flex flex-col items-center justify-between gap-3 border-t border-blue-100 pt-5 text-center text-xs text-slate-500 md:flex-row">
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