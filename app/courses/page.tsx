import Link from "next/link";

import {
  ArrowLeft,
  Bot,
  Brain,
  Calculator,
  Check,
  Clock3,
  Code2,
  GraduationCap,
  Languages,
  Sparkles,
  Sun,
  Trophy,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/motion-reveal";
import { RegisterButton } from "@/components/register-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const courses = [
  {
    icon: Brain,
    title: "التحضير لامتحان الموهوبين",
    subtitle: "للصف الثالث – المرحلة الأولى",
    description:
      "برنامج مهني يعرّف الطلاب على نمط أسئلة امتحان الموهوبين، ويطوّر التفكير، التركيز، إدارة الوقت واستراتيجيات الحل.",
    features: [
      "أحدث الكتب والمواد التعليمية",
      "تدريبات مشابهة للامتحان",
      "استراتيجيات لحل الأسئلة",
      "مراجعات وتقوية قبل الامتحان",
    ],
    audience: "طلاب الصف الثالث",
    color: "from-[#0a5ca8] to-[#03152f]",
  },
  {
    icon: Trophy,
    title: "مسابقة الأعالي في الرياضيات",
    subtitle: "تفكير رياضي وإثراء",
    description:
      "دورة إثرائية لتطوير التفكير الرياضي، المنطق، حل التحديات والقدرة على التعامل مع مسائل غير اعتيادية.",
    features: [
      "تحديات رياضية متنوعة",
      "تطوير التفكير المنطقي",
      "استراتيجيات حل متقدمة",
      "تعزيز الثقة بالرياضيات",
    ],
    audience: "طلاب المرحلة الابتدائية",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Calculator,
    title: "الرياضيات",
    subtitle: "تقوية، إثراء وتحضير للامتحانات",
    description:
      "مسارات تعليمية لجميع المراحل، من بناء الأساس إلى التحضير المتقدم للامتحانات والبجروت.",
    features: [
      "شرح واضح ومتدرج",
      "تقوية الأساس الرياضي",
      "حل مسائل وتمارين",
      "تحضير للامتحانات",
    ],
    audience: "جميع المراحل",
    color: "from-blue-600 to-indigo-800",
  },
  {
    icon: Languages,
    title: "اللغة الإنجليزية",
    subtitle: "قراءة، كتابة، قواعد ومحادثة",
    description:
      "تطوير مهارات اللغة الإنجليزية من خلال أنشطة عملية، قراءة، كتابة، قواعد ومحادثة بثقة.",
    features: [
      "توسيع الثروة اللغوية",
      "تحسين القراءة والفهم",
      "قواعد بأسلوب مبسط",
      "تدريب على المحادثة",
    ],
    audience: "طلاب الابتدائية والإعدادية",
    color: "from-violet-600 to-purple-800",
  },
  {
    icon: Languages,
    title: "اللغة العبرية",
    subtitle: "تقوية مدرسية وعبرية محكية",
    description:
      "دورات لتطوير الفهم، القواعد، القراءة والمحادثة باللغة العبرية بأسلوب عملي وداعم.",
    features: [
      "تطوير المحادثة",
      "تحسين النطق",
      "تقوية القواعد",
      "توسيع المفردات",
    ],
    audience: "جميع الأعمار",
    color: "from-cyan-600 to-blue-800",
  },
  {
    icon: Code2,
    title: "البرمجة",
    subtitle: "من الفكرة إلى مشروع حقيقي",
    description:
      "تعلم التفكير البرمجي وبناء مواقع ومشاريع رقمية بطريقة ممتعة ومناسبة للعمر.",
    features: [
      "أساسيات التفكير البرمجي",
      "HTML وCSS",
      "بناء مواقع بسيطة",
      "مشروع شخصي",
    ],
    audience: "طلاب الصفوف الابتدائية والإعدادية",
    color: "from-slate-800 to-slate-950",
  },
  {
    icon: Sparkles,
    title: "الذكاء الاصطناعي",
    subtitle: "أدوات المستقبل بوعي وإبداع",
    description:
      "التعرف على أدوات الذكاء الاصطناعي واستخدامها في التعلم، التفكير والإبداع بصورة مسؤولة.",
    features: [
      "التعرف على أدوات AI",
      "إنشاء محتوى رقمي",
      "حل مشكلات باستخدام AI",
      "استخدام آمن ومسؤول",
    ],
    audience: "طلاب المرحلة الابتدائية والإعدادية",
    color: "from-fuchsia-600 to-indigo-900",
  },
  {
    icon: Bot,
    title: "الروبوتيكا",
    subtitle: "تركيب، تصميم وبرمجة",
    description:
      "تجربة عملية تجمع بين الهندسة، البرمجة، العمل الجماعي وحل التحديات.",
    features: [
      "بناء نماذج روبوتية",
      "برمجة الحساسات",
      "تحديات جماعية",
      "تطوير التفكير الهندسي",
    ],
    audience: "طلاب الابتدائية والإعدادية",
    color: "from-emerald-600 to-teal-900",
  },
  {
    icon: Sun,
    title: "الدورات الصيفية",
    subtitle: "تعلم، إبداع ومتعة",
    description:
      "ورشات صيفية متنوعة تجمع بين الأنشطة التعليمية، التكنولوجيا، الإبداع والتجارب الممتعة.",
    features: [
      "ورشات فنية وتعليمية",
      "أنشطة تكنولوجية",
      "تجارب جماعية",
      "أجواء صيفية ممتعة",
    ],
    audience: "طلاب المرحلة الابتدائية",
    color: "from-orange-400 to-amber-600",
  },
];

export default function CoursesPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-28 top-6 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <Reveal>
            <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-black text-[#07529c] shadow-sm">
              دورات IQ PLUS
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-[#03152f] md:text-7xl">
              برامج تعليمية
              <span className="block text-[#0a5ca8]">
                لكل مرحلة وطموح
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-600">
              اختاروا المسار المناسب، وسنساعدكم في بناء خطة تعليمية واضحة
              تجمع بين التقوية، الإثراء ومهارات المستقبل.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <RegisterButton size="lg">
                <GraduationCap className="h-5 w-5" />
                سجل الآن
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
                  استفسار عبر WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-[#f7f9fc] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-sm font-black text-amber-800">
              اختاروا الدورة المناسبة
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#03152f] md:text-5xl">
              جميع برامجنا التعليمية
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              يمكن التواصل معنا للحصول على تفاصيل المواعيد، الأسعار
              والمجموعات المتاحة.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {courses.map((course, index) => {
              const Icon = course.icon;

              return (
                <Reveal
                  key={course.title}
                  delay={index * 0.04}
                >
                  <Card className="group h-full overflow-hidden border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(3,21,47,.12)]">
                    <CardContent className="p-0">
                      <div
                        className={`relative overflow-hidden bg-gradient-to-br ${course.color} p-7 text-white`}
                      >
                        <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-white/10" />
                        <div className="absolute -bottom-14 -right-10 h-44 w-44 rounded-full bg-white/10" />

                        <div className="relative flex items-start justify-between gap-5">
                          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                            <Icon className="h-8 w-8" />
                          </div>

                          <span className="text-5xl font-black text-white/15">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="relative mt-6">
                          <span className="text-sm font-bold text-white/70">
                            {course.subtitle}
                          </span>

                          <h2 className="mt-1 text-3xl font-black">
                            {course.title}
                          </h2>
                        </div>
                      </div>

                      <div className="p-7">
                        <p className="leading-8 text-slate-600">
                          {course.description}
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {course.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"
                            >
                              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-100 text-[#07529c]">
                                <Check className="h-4 w-4" />
                              </span>

                              <span className="text-sm font-bold text-slate-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-6">
                          <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                            <Users className="h-5 w-5 text-[#07529c]" />
                            {course.audience}
                          </div>

                          <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                            <Clock3 className="h-5 w-5 text-[#07529c]" />
                            التفاصيل حسب المجموعة
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                          <RegisterButton>
                            سجل في الدورة
                          </RegisterButton>

                          <Button
                            asChild
                            variant="outline"
                            className="border-slate-300 text-[#07529c]"
                          >
                            <a
                              href={`https://wa.me/972502933050?text=${encodeURIComponent(
                                `مرحبًا، أود الحصول على تفاصيل حول دورة: ${course.title}`,
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              اسأل عن الدورة
                              <ArrowLeft className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-sm font-black text-[#07529c]">
              طريقة العمل
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#03152f] md:text-5xl">
              رحلة تعليمية واضحة ومنظمة
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "نتعرف على احتياج الطالب",
                description:
                  "نفهم المرحلة، الهدف والمستوى التعليمي قبل اختيار المسار المناسب.",
              },
              {
                number: "02",
                title: "نختار البرنامج المناسب",
                description:
                  "نحدد الدورة أو المجموعة التي تناسب عمر الطالب واحتياجاته.",
              },
              {
                number: "03",
                title: "نتابع التقدم",
                description:
                  "نراقب تطور الطالب ونتواصل مع الأهل بصورة واضحة ومستمرّة.",
              },
            ].map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 0.08}
              >
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <span className="text-5xl font-black text-amber-400">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-black text-[#03152f]">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-l from-[#03152f] to-[#0a5ca8] py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-right">
          <div>
            <span className="font-black text-amber-300">
              لم تعرفوا أي دورة تناسبكم؟
            </span>

            <h2 className="mt-2 text-3xl font-black">
              تواصلوا معنا وسنساعدكم في الاختيار
            </h2>

            <p className="mt-2 text-white/65">
              فريق IQ PLUS جاهز للإجابة عن أسئلتكم.
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
              <Link href="/contact">
                تواصل معنا
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}