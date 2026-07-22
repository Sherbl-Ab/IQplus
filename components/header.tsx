"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bell, Menu, X } from "lucide-react";

import { RegisterButton } from "@/components/register-button";

const links = [
  ["/", "الرئيسية"],
  ["/about", "من نحن"],
  ["/courses", "الدورات"],
  ["/reviews", "آراء الأهالي"],
  ["/contact", "تواصل معنا"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  const openRegistration = () => {
    window.dispatchEvent(new Event("open-registration"));
  };

  return (
    <>
      <div className="bg-gradient-to-l from-amber-300 to-amber-500 text-slate-950">
        <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-center gap-3 px-4 text-xs font-extrabold sm:text-sm">
          <Bell className="h-4 w-4" />

          <span>التسجيل مفتوح الآن — الأماكن محدودة</span>

          <button
            type="button"
            onClick={openRegistration}
            className="rounded-full border border-slate-900/20 px-3 py-0.5 transition hover:bg-white/30"
          >
            سجل الآن
          </button>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-[#03152f] shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between px-4">
          <Link
            href="/"
            aria-label="IQ PLUS"
            className="flex h-[92px] w-[225px] items-center justify-center overflow-hidden rounded-[22px] border-4 border-white bg-white px-4 py-2 shadow-lg"
          >
            <Image
              src="/iqplus-logo-new.jpg"
              alt="شعار IQ PLUS"
              width={360}
              height={190}
              className="h-full w-full scale-[2.2] object-contain"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-bold text-[#03152f] transition hover:text-amber-500"
              >
                {label}
              </Link>
            ))}

            <RegisterButton>سجل الآن</RegisterButton>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="rounded-lg p-2 text-[#03152f] transition hover:bg-slate-100 lg:hidden"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-slate-200 bg-white px-4 pb-5 lg:hidden">
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block border-b border-slate-200 py-3 font-bold text-[#03152f] transition hover:text-amber-500"
              >
                {label}
              </Link>
            ))}

            <RegisterButton className="mt-4 w-full">
              سجل الآن
            </RegisterButton>
          </nav>
        )}
      </header>
    </>
  );
}