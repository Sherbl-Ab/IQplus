import {
  Bot,
  Brain,
  Calculator,
  Camera,
  Code2,
  GraduationCap,
  ImageIcon,
  Languages,
  Sparkles,
  Sun,
} from "lucide-react";

import { RegisterButton } from "@/components/register-button";
import { Reveal } from "@/components/motion-reveal";
import { Button } from "@/components/ui/button";

const galleryItems = [
  {
    title: "البرمجة",
    subtitle: "تعلم وبناء مشاريع رقمية",
    icon: Code2,
    size: "lg:col-span-2 lg:row-span-2",
    background:
      "from-[#03152f] via-[#07529c] to-[#0a66b7]",
  },
  {
    title: "الروبوتيكا",
    subtitle: "تصميم، تركيب وبرمجة",
    icon: Bot,
    size: "",
    background:
      "from-emerald-600 to-teal-900",
  },
  {
    title: "الرياضيات",
    subtitle: "تفكير، إثراء وتحديات",
    icon: Calculator,
    size: "",
    background:
      "from-blue-600 to-indigo-900",
  },
  {
    title: "الذكاء الاصطناعي",
    subtitle: "أدوات المستقبل بوعي وإبداع",
    icon: Sparkles,
    size: "lg:col-span-2",
    background:
      "from-fuchsia-600 to-indigo-900",
  },
  {
    title: "اللغات",
    subtitle: "إنجليزية وعبرية بأسلوب تفاعلي",
    icon: Languages,
    size: "",
    background:
      "from-cyan-600 to-blue-900",
  },
  {
    title: "الموهوبون",
    subtitle: "تدريب على التفكير والاستراتيجيات",
    icon: Brain,
    size: "",
    background:
      "from-amber-500 to-orange-700",
  },
  {
    title: "الدورات الصيفية",
    subtitle: "تعلم، متعة وإبداع",
    icon: Sun,
    size: "lg:col-span-2",
    background:
      "from-orange-400 to-amber-600",
  },
];

const galleryBenefits = [
  {
    title: "بيئة محفزة",
    description:
      "مساحات تعليمية مريحة تشجع الطلاب على المشاركة والتجربة.",
    icon: GraduationCap,
  },
  {
    title: "أنشطة عملية",
    description:
      "مشاريع، تحديات وتجارب تساعد الطالب على التعلم من خلال التطبيق.",
    icon: Sparkles,
  },
  {
    title: "توثيق الإنجازات",
    description:
      "نحتفظ بلحظات النجاح والتقدم لتوثيق رحلة الطلاب التعليمية.",
    icon: Camera,
  },
];

export default function GalleryPage() {
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
              معرض الصور
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-[#03152f] md:text-7xl">
              لحظات من التعلم
              <span className="block text-[#0a5ca8]">
                الإبداع والنجاح
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-600">
              مساحة لعرض أنشطة الطلاب، المشاريع، الورشات واللحظات المميزة
              داخل IQ PLUS.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#f7f9fc] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-sm font-black text-amber-800">
              نشاطاتنا
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#03152f] md:text-5xl">
              تجربة تعليمية مليئة بالحركة والإبداع
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              حاليًا نستخدم تصاميم مكانية جميلة، ويمكن لاحقًا استبدالها
              بصور حقيقية من المركز.
            </p>
          </Reveal>

          <div className="mt-14 grid auto-rows-[260px] gap-6 md:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.05}
                  className={item.size}
                >
                  <article
                    className={`group relative h-full overflow-hidden rounded-[32px] bg-gradient-to-br ${item.background} p-7 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(3,21,47,.22)]`}
                  >
                    <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-white/10" />

                    <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-white/10" />

                    <div className="absolute inset-5 rounded-[26px] border border-white/15" />

                    <div className="relative flex h-full flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                          <Icon className="h-8 w-8" />
                        </span>

                        <span className="text-4xl font-black text-white/15">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-3xl font-black">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-white/70">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Photos Notice */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="grid items-center gap-12 rounded-[40px] border border-blue-100 bg-gradient-to-l from-blue-50 to-white p-8 shadow-sm lg:grid-cols-2 lg:p-12">
              <div>
                <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-black text-[#07529c] shadow-sm">
                  صور المركز
                </span>

                <h2 className="mt-5 text-4xl font-black leading-tight text-[#03152f] md:text-5xl">
                  قريبًا سنضيف
                  <span className="block text-[#0a5ca8]">
                    صورًا حقيقية من IQ PLUS
                  </span>
                </h2>

                <p className="mt-5 text-lg leading-9 text-slate-600">
                  يمكن لاحقًا إضافة صور الدورات، المشاريع، الورشات
                  والفعاليات بسهولة، مع المحافظة على تصميم موحد واحترافي.
                </p>
              </div>

              <div className="grid min-h-[320px] place-items-center rounded-[32px] bg-gradient-to-br from-[#07529c] to-[#03152f] text-white shadow-xl">
                <div className="text-center">
                  <span className="mx-auto grid h-24 w-24 place-items-center rounded-[28px] bg-white/15">
                    <ImageIcon className="h-12 w-12" />
                  </span>

                  <p className="mt-5 text-xl font-black">
                    مساحة جاهزة للصور
                  </p>

                  <p className="mt-2 text-sm text-white/65">
                    Workshops • Courses • Activities
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#f7f9fc] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-sm font-black text-[#07529c]">
              أكثر من صور
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#03152f] md:text-5xl">
              كل صورة تحكي قصة تعلم
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {galleryBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <Reveal
                  key={benefit.title}
                  delay={index * 0.07}
                >
                  <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#07529c] to-[#03152f] text-white">
                      <Icon className="h-8 w-8" />
                    </span>

                    <h3 className="mt-5 text-xl font-black text-[#03152f]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 leading-8 text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-l from-[#03152f] to-[#0a5ca8] py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-right">
          <div>
            <span className="font-black text-amber-300">
              هل ترغبون بالانضمام؟
            </span>

            <h2 className="mt-2 text-3xl font-black">
              ابدأوا رحلة تعليمية جديدة مع IQ PLUS
            </h2>

            <p className="mt-2 text-white/65">
              سجلوا الآن واحصلوا على تفاصيل الدورات والمجموعات.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <RegisterButton size="lg">
              سجل الآن
            </RegisterButton>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#03152f]"
            >
              <a
                href="https://wa.me/972502933050"
                target="_blank"
                rel="noopener noreferrer"
              >
                تواصل عبر WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}