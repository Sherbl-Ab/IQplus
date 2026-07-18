import {
  Clock3,
  Facebook,
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
import { Card, CardContent } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Phone,
    title: "الهاتف",
    value: "050-2933050",
    href: "tel:0502933050",
    description: "للاستفسار والتسجيل",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "تواصل معنا الآن",
    href: "https://wa.me/972502933050",
    description: "إجابة سريعة على أسئلتكم",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "IQPluss2025@gmail.com",
    href: "mailto:IQPluss2025@gmail.com",
    description: "للتواصل الرسمي",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@iqplus_center",
    href: "https://www.instagram.com/iqplus_center",
    description: "تابعوا آخر الأخبار والنشاطات",
  },
];

const workingHours = [
  {
    day: "الأحد – الخميس",
    hours: "حسب جدول الدورات",
  },
  {
    day: "الجمعة والسبت",
    hours: "حسب البرامج والورشات",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />

          <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <Reveal>
            <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-black text-[#07529c] shadow-sm">
              تواصل معنا
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-[#03152f] md:text-7xl">
              نحن هنا
              <span className="block text-[#0a5ca8]">
                للإجابة عن كل سؤال
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-600">
              تواصلوا معنا للحصول على تفاصيل الدورات، المواعيد،
              التسجيل والمجموعات المتاحة.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-[#f7f9fc] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-sm font-black text-amber-800">
              طرق التواصل
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#03152f] md:text-5xl">
              اختاروا الطريقة الأنسب لكم
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <Reveal
                  key={method.title}
                  delay={index * 0.06}
                >
                  <a
                    href={method.href}
                    target={
                      method.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group block h-full"
                  >
                    <Card className="h-full border-slate-200 transition duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-[0_25px_70px_rgba(3,21,47,.12)]">
                      <CardContent className="p-7 text-center">
                        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#07529c] to-[#03152f] text-white">
                          <Icon className="h-8 w-8" />
                        </span>

                        <h3 className="mt-5 text-xl font-black text-[#03152f]">
                          {method.title}
                        </h3>

                        <p className="mt-2 font-bold text-[#07529c]">
                          {method.value}
                        </p>

                        <p className="mt-2 text-sm leading-7 text-slate-500">
                          {method.description}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <div className="h-full rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
              <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-sm font-black text-[#07529c]">
                سجلوا اهتمامكم
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#03152f]">
                ابدأوا التسجيل
                <span className="block text-[#0a5ca8]">
                  خلال دقائق
                </span>
              </h2>

              <p className="mt-5 text-lg leading-9 text-slate-600">
                يمكنكم فتح نموذج التسجيل السريع، إدخال التفاصيل
                وإرسالها مباشرة عبر WhatsApp.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <RegisterButton size="lg">
                  <Send className="h-5 w-5" />
                  فتح نموذج التسجيل
                </RegisterButton>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#07529c] text-[#07529c] hover:bg-blue-50"
                >
                  <a
                    href="https://wa.me/972502933050"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp مباشر
                  </a>
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <Clock3 className="h-6 w-6 text-[#07529c]" />

                  <h3 className="mt-3 font-black text-[#03152f]">
                    أوقات العمل
                  </h3>

                  <div className="mt-3 space-y-3">
                    {workingHours.map((item) => (
                      <div key={item.day}>
                        <strong className="block text-sm text-slate-700">
                          {item.day}
                        </strong>

                        <span className="text-sm text-slate-500">
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <MapPin className="h-6 w-6 text-[#07529c]" />

                  <h3 className="mt-3 font-black text-[#03152f]">
                    الموقع
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    المغار
                  </p>

                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 w-full border-slate-300 text-[#07529c]"
                  >
                    <a
                      href="https://www.google.com/maps/place/32%C2%B053'04.1%22N+35%C2%B024'43.8%22E/@32.884476,35.412167,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      فتح في خرائط Google
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative min-h-[560px] overflow-hidden rounded-[36px] bg-gradient-to-br from-[#07529c] to-[#03152f] p-8 text-white shadow-xl lg:p-10">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10" />

              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-400/10" />

              <div className="relative">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-black text-amber-300">
                  IQ PLUS
                </span>

                <h2 className="mt-6 text-4xl font-black leading-tight">
                  تواصل واضح
                  <span className="block text-amber-300">
                    من أول خطوة
                  </span>
                </h2>

                <p className="mt-5 text-lg leading-9 text-white/70">
                  فريقنا جاهز لمساعدتكم في اختيار الدورة المناسبة
                  والإجابة عن جميع الأسئلة.
                </p>

                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <Phone className="h-6 w-6 text-amber-300" />

                    <div>
                      <span className="block text-sm text-white/60">
                        الهاتف
                      </span>

                      <strong>
                        050-2933050
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <Mail className="h-6 w-6 text-amber-300" />

                    <div>
                      <span className="block text-sm text-white/60">
                        البريد الإلكتروني
                      </span>

                      <strong className="break-all">
                        IQPluss2025@gmail.com
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <Instagram className="h-6 w-6 text-amber-300" />

                    <div>
                      <span className="block text-sm text-white/60">
                        Instagram
                      </span>

                      <strong>
                        @iqplus_center
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="mt-10 rounded-3xl bg-white p-6 text-[#03152f]">
                  <p className="text-sm font-black text-amber-600">
                    خطوة واحدة للتسجيل
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    افتحوا النموذج وأرسلوا التفاصيل
                  </h3>

                  <RegisterButton className="mt-5 w-full">
                    سجل الآن
                  </RegisterButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Social */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-[36px] border border-blue-100 bg-white p-8 text-center shadow-sm md:flex-row md:text-right">
              <div>
                <span className="font-black text-amber-600">
                  تابعونا
                </span>

                <h2 className="mt-2 text-3xl font-black text-[#03152f]">
                  آخر الأخبار والنشاطات على Instagram
                </h2>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-[#07529c] text-white hover:bg-[#03152f]"
              >
                <a
                  href="https://www.instagram.com/iqplus_center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  فتح Instagram
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}