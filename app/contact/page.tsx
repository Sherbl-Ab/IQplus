import {
  Clock3,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Reveal } from "@/components/motion-reveal";
import { RegisterButton } from "@/components/register-button";

const contactItems = [
  {
    icon: Phone,
    title: "الهاتف",
    value: "050-2933050",
    href: "tel:0502933050",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "تواصلوا معنا مباشرة",
    href: "https://wa.me/972502933050",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "IQPluss2025@gmail.com",
    href: "mailto:IQPluss2025@gmail.com",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@iqplus_center",
    href: "https://www.instagram.com/iqplus_center",
  },
];

export default function ContactPage() {
  return (
    <main dir="rtl" className="bg-[#f7f9fc]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/60 to-[#f7f9fc] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <Reveal>
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-[#07529c]">
              نحن هنا من أجلكم
            </span>

            <h1 className="mt-5 text-4xl font-black text-[#03152f] md:text-6xl">
              تواصلوا معنا
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-slate-600">
              يسعدنا الإجابة عن أسئلتكم ومساعدتكم في اختيار الدورة
              والمجموعة المناسبة.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Details */}
            <Reveal>
              <div className="h-full rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
                <h2 className="text-3xl font-black text-[#03152f]">
                  معلومات التواصل
                </h2>

                <p className="mt-3 leading-8 text-slate-600">
                  يمكنكم التواصل معنا عبر الهاتف، WhatsApp، البريد
                  الإلكتروني أو Instagram.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const external = item.href.startsWith("http");

                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="group rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg"
                      >
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-100 text-[#07529c] transition group-hover:bg-[#07529c] group-hover:text-white">
                          <Icon className="h-6 w-6" />
                        </span>

                        <h3 className="mt-4 font-black text-[#03152f]">
                          {item.title}
                        </h3>

                        <p className="mt-1 break-words text-sm text-slate-600">
                          {item.value}
                        </p>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <div className="flex items-start gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-400 text-[#03152f]">
                      <Clock3 className="h-5 w-5" />
                    </span>

                    <div>
                      <h3 className="font-black text-[#03152f]">
                        ساعات التواصل
                      </h3>

                      <p className="mt-1 text-sm leading-7 text-slate-600">
                        يمكنكم إرسال رسالة في أي وقت، وسنقوم بالرد عليكم
                        في أقرب وقت ممكن.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-7">
                  <RegisterButton size="lg">
                    سجل الآن
                  </RegisterButton>
                </div>
              </div>
            </Reveal>

            {/* Map */}
            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 border-b border-slate-100 p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#07529c] text-white">
                    <MapPin className="h-6 w-6" />
                  </span>

                  <div>
                    <h2 className="text-xl font-black text-[#03152f]">
                      موقع المركز
                    </h2>

                    <p className="text-sm text-slate-500">
                      المغار
                    </p>
                  </div>
                </div>

                <div className="h-[480px] w-full">
                  <iframe
                    title="موقع IQ PLUS في المغار"
                    src="https://www.google.com/maps?q=IQ%20PLUS%20Maghar%20Israel&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                  />
                </div>

                <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-black text-[#03152f]">
                      IQ PLUS – المغار
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      اضغطوا لفتح الموقع وتلقي تعليمات الوصول.
                    </p>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=IQ+PLUS+Maghar+Israel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#07529c] px-5 font-black text-white transition hover:bg-[#03152f]"
                  >
                    <MapPin className="h-4 w-4" />
                    فتح في خرائط Google
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}