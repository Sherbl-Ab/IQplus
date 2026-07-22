import {
  Clock3,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import { Reveal } from "@/components/motion-reveal";
import { RegisterButton } from "@/components/register-button";
import { Button } from "@/components/ui/button";

const contactItems = [
  {
    icon: Phone,
    title: "الهاتف",
    value: "050-2933050",
    description: "للاستفسار والتسجيل",
    href: "tel:0502933050",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "تواصل مباشر وسريع",
    description: "للحصول على التفاصيل أو طلب الموقع",
    href: "https://wa.me/972502933050?text=مرحبا،%20أرغب%20في%20الحصول%20على%20موقع%20مركز%20IQ%20PLUS",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "IQPluss2025@gmail.com",
    description: "للمراسلات والاستفسارات",
    href: "mailto:IQPluss2025@gmail.com",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@iqplus_center",
    description: "لمتابعة الدورات والأخبار",
    href: "https://www.instagram.com/iqplus_center",
  },
];

export default function ContactPage() {
  return (
    <main dir="rtl" className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/60 to-white py-20">
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

      {/* Main Contact Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Contact Cards */}
            <Reveal>
              <div className="rounded-[36px] border border-slate-200 bg-[#f8fafc] p-7 shadow-sm md:p-10">
                <div>
                  <span className="text-sm font-black text-amber-600">
                    معلومات التواصل
                  </span>

                  <h2 className="mt-2 text-3xl font-black text-[#03152f]">
                    اختاروا الطريقة الأنسب لكم
                  </h2>

                  <p className="mt-3 leading-8 text-slate-600">
                    يمكنكم التواصل معنا عبر الهاتف، WhatsApp، البريد
                    الإلكتروني أو Instagram.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {contactItems.map((item, index) => {
                    const Icon = item.icon;
                    const external = item.href.startsWith("http");

                    return (
                      <Reveal
                        key={item.title}
                        delay={index * 0.05}
                      >
                        <a
                          href={item.href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="group block h-full rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                        >
                          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-[#07529c] transition group-hover:bg-[#07529c] group-hover:text-white">
                            <Icon className="h-7 w-7" />
                          </span>

                          <h3 className="mt-5 text-lg font-black text-[#03152f]">
                            {item.title}
                          </h3>

                          <p className="mt-1 break-words font-bold text-[#07529c]">
                            {item.value}
                          </p>

                          <p className="mt-2 text-sm leading-6 text-slate-500">
                            {item.description}
                          </p>
                        </a>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* Location and Hours */}
            <Reveal delay={0.08}>
              <div className="flex h-full flex-col gap-6">
                {/* Location */}
                <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#07529c] to-[#03152f] p-8 text-white shadow-[0_30px_80px_rgba(3,21,47,.2)]">
                  <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-white/10" />
                  <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-amber-400/10" />

                  <div className="relative">
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15">
                      <MapPin className="h-8 w-8 text-amber-300" />
                    </span>

                    <span className="mt-7 block text-sm font-black text-amber-300">
                      موقع المركز
                    </span>

                    <h2 className="mt-2 text-4xl font-black">
                      مدينة المغار
                    </h2>

                    <p className="mt-4 max-w-md leading-8 text-white/70">
                      مركز IQ PLUS موجود في مدينة المغار. للحصول على
                      الموقع الدقيق، أرسلوا لنا رسالة عبر WhatsApp وسنرسل
                      لكم رابط الوصول مباشرة.
                    </p>

                    <Button
                      asChild
                      size="lg"
                      className="mt-7 bg-amber-400 font-black text-[#03152f] hover:bg-amber-300"
                    >
                      <a
                        href="https://wa.me/972502933050?text=مرحبا،%20أرغب%20في%20الحصول%20على%20موقع%20مركز%20IQ%20PLUS"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Send className="h-5 w-5" />
                        اطلبوا الموقع
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Contact Hours */}
                <div className="rounded-[30px] border border-amber-200 bg-amber-50 p-7">
                  <div className="flex items-start gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-amber-400 text-[#03152f]">
                      <Clock3 className="h-7 w-7" />
                    </span>

                    <div>
                      <h3 className="text-xl font-black text-[#03152f]">
                        ساعات التواصل
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        يمكنكم إرسال رسالة في أي وقت، وسنقوم بالرد عليكم
                        في أقرب وقت ممكن.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Registration CTA */}
                <div className="rounded-[30px] border border-blue-100 bg-blue-50 p-7">
                  <h3 className="text-xl font-black text-[#03152f]">
                    مهتمون بإحدى الدورات؟
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    اتركوا لنا التفاصيل وسنتواصل معكم لاختيار الدورة
                    والمجموعة المناسبة.
                  </p>

                  <div className="mt-5">
                    <RegisterButton size="lg">
                      سجل الآن
                    </RegisterButton>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}