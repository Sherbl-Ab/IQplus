import Link from "next/link";

import {
  ArrowLeft,
  Bot,
  Brain,
  Calculator,
  Code2,
  Cpu,
  GraduationCap,
  Handshake,
  Languages,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/motion-reveal";
import { RegisterButton } from "@/components/register-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "الموهوبون",
    description:
      "تحضير مهني بأحدث المواد والاستراتيجيات، مع تطوير التفكير وإدارة الوقت.",
  },
  {
    icon: Calculator,
    title: "الرياضيات",
    description:
      "تقوية، إثراء وتحضير للامتحانات لجميع المراحل وبأسلوب واضح ومتدرج.",
  },
  {
    icon: Languages,
    title: "اللغات",
    description:
      "الإنجليزية والعبرية بأسلوب عملي وتفاعلي يطوّر القراءة والمحادثة.",
  },
  {
    icon: Code2,
    title: "البرمجة",
    description:
      "تعلم التفكير البرمجي وبناء مواقع ومشاريع رقمية خطوة بخطوة.",
  },
  {
    icon: Sparkles,
    title: "الذكاء الاصطناعي",
    description:
      "التعرف على أدوات المستقبل واستخدامها بوعي، مسؤولية وإبداع.",
  },
  {
    icon: Bot,
    title: "الروبوتيكا",
    description:
      "تركيب، تصميم وبرمجة مشاريع روبوتية ضمن تحديات عملية ممتعة.",
  },
];

const statistics = [
  {
    value: "20+",
    label: "سنة خبرة",
  },
  {
    value: "2025",
    label: "سنة التأسيس",
  },
  {
    value: "8+",
    label: "مجالات تعليمية",
  },
];

const advantages = [
  {
    icon: ShieldCheck,
    title: "خبرة تتجاوز 20 عامًا",
    description:
      "معرفة عميقة باحتياجات الطلاب وأساليب التعليم التي تحقق نتائج حقيقية.",
  },
  {
    icon: Users,
    title: "مجموعات صغيرة",
    description:
      "متابعة شخصية ووقت أكبر لكل طالب داخل بيئة تعليمية مريحة.",
  },
  {
    icon: Cpu,
    title: "تعليم حديث",
    description:
      "دمج التكنولوجيا، الذكاء الاصطناعي، التفكير والإبداع في التعلم.",
  },
  {
    icon: Handshake,
    title: "شراكة مع الأهل",
    description:
      "تواصل واضح ومستمر حول تقدم الطالب واحتياجاته التعليمية.",
  },
];

const reviews = [
  {
    name: "مريان رشرش",
    text: "تجربة أكثر من رائعة. لاحظنا تطورًا واضحًا في المستوى الدراسي، والاهتمام بكل طالب كان مميزًا.",
  },
  {
    name: "كارولين عرطول",
    text: "مركز منظم وراقٍ، يضم طاقمًا مهنيًا وأساليب تعليم حديثة. النتائج كانت واضحة ومشجعة.",
  },
  {
    name: "رنا جهشان",
    text: "أنصح بكل ثقة بمركز IQ PLUS. البيئة التعليمية ممتازة والتواصل مع الأهل مستمر وواضح.",
  },
];

const heroSkills = [
  {
    icon: Brain,
    label: "تفكير",
  },
  {
    icon: Code2,
    label: "برمجة",
  },
  {
    icon: Sparkles,
    label: "إبداع",
  },
  {
    icon: Calculator,
    label: "رياضيات",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />

          <div className="absolute -left-24 bottom-10 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

          <div className="absolute right-1/2 top-1/2 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100" />
        </div>

        <div className="relative mx-auto grid min-h-[690px] max-w-7xl items-center gap-14 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-black text-[#07529c] shadow-sm">
                مركز تعليمي 
              </span>

              <h1 className="mt-6 text-5xl font-black leading-[1.15] text-[#03152f] md:text-7xl">
                نصنع جيلاً
                <br />

                <span className="text-[#0a5ca8]">
                  يتعلّم ويبدع
                </span>

                <br />

                <span className="text-amber-500">
                  ويتقدّم
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-9 text-slate-600">
                برامج تعليمية متطورة تجمع بين الخبرة، المتابعة الشخصية
                والتكنولوجيا الحديثة، في بيئة تعليمية محفزة وآمنة.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <RegisterButton size="lg">
                  <GraduationCap className="h-5 w-5" />

                  سجل الآن
                </RegisterButton>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#07529c] bg-white text-[#07529c] hover:bg-blue-50 hover:text-[#03152f]"
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

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                {statistics.map((statistic) => (
                  <div
                    key={statistic.label}
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                  >
                    <strong className="block text-2xl font-black text-[#07529c]">
                      {statistic.value}
                    </strong>

                    <span className="mt-1 block text-xs font-bold text-slate-500">
                      {statistic.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="relative min-h-[520px]">
              <div className="absolute inset-x-6 bottom-0 top-8 overflow-hidden rounded-[48px] bg-gradient-to-br from-[#07529c] via-[#0a66b7] to-[#03152f] shadow-[0_35px_90px_rgba(3,21,47,.25)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(255,255,255,.22),transparent_35%)]" />

                <div className="absolute inset-8 rounded-[36px] border border-white/20" />

                <div className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[30px] border border-white/20 bg-white/95 p-7 shadow-2xl backdrop-blur">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-sm font-black text-amber-500">
                        IQ PLUS
                      </span>

                      <h2 className="mt-1 text-2xl font-black text-[#03152f]">
                        تعليم لمستقبل أفضل
                      </h2>
                    </div>

                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-100 text-[#07529c]">
                      <GraduationCap className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {heroSkills.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3"
                        >
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#07529c] text-white">
                            <Icon className="h-5 w-5" />
                          </span>

                          <span className="font-black text-[#03152f]">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-0 grid h-24 w-24 place-items-center rounded-[28px] border-4 border-white bg-amber-400 text-2xl font-black text-[#03152f] shadow-xl">
                AI
              </div>

              <div className="absolute bottom-12 left-0 grid h-24 w-24 place-items-center rounded-[28px] border-4 border-white bg-white text-[#07529c] shadow-xl">
                <Bot className="h-10 w-10" />
              </div>

              <div className="absolute left-8 top-16 rounded-2xl border-4 border-white bg-[#03152f] px-5 py-3 font-black text-white shadow-xl">
                &lt;/&gt;
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f7f9fc] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-black text-[#07529c] shadow-sm">
              خدماتنا التعليمية
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#03152f] md:text-5xl">
              برامج مصممة لكل طالب
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              مسارات تعليمية متنوعة تجمع بين الدعم الأكاديمي، الإثراء،
              التكنولوجيا ومهارات المستقبل.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal
                  key={service.title}
                  delay={index * 0.05}
                >
                  <Card className="group h-full overflow-hidden border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-[0_25px_70px_rgba(3,21,47,.12)]">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden bg-gradient-to-br from-[#07529c] to-[#03152f] px-6 py-8 text-white">
                        <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/10" />

                        <div className="absolute -bottom-14 -right-8 h-40 w-40 rounded-full bg-amber-400/10" />

                        <div className="relative flex items-center justify-between">
                          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                            <Icon className="h-8 w-8" />
                          </div>

                          <span className="text-4xl font-black text-white/10">
                            0{index + 1}
                          </span>
                        </div>

                        <h3 className="relative mt-6 text-2xl font-black">
                          {service.title}
                        </h3>
                      </div>

                      <div className="p-6">
                        <p className="min-h-[84px] text-sm leading-7 text-slate-600">
                          {service.description}
                        </p>

                        <Link
                          href="/courses"
                          className="mt-5 inline-flex items-center gap-2 font-black text-[#07529c] transition group-hover:text-amber-600"
                        >
                          اقرأ المزيد

                          <ArrowLeft className="h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#07529c] px-8 text-white hover:bg-[#03152f]"
            >
              <Link href="/courses">
                عرض جميع الدورات
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why IQ PLUS */}
      <section className="bg-[radial-gradient(circle_at_50%_0,rgba(37,99,235,.18),transparent_40%),linear-gradient(135deg,#020e22,#062858)] py-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="text-center">
            <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm font-black text-amber-300">
              لماذا IQ PLUS؟
            </span>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              تعليم مصمم ليصنع فرقًا حقيقيًا
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;

              return (
                <Reveal
                  key={advantage.title}
                  delay={index * 0.07}
                >
                  <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.07]">
                    <span className="text-3xl font-black text-amber-300">
                      0{index + 1}
                    </span>

                    <Icon className="mt-5 h-7 w-7 text-blue-300" />

                    <h3 className="mt-4 text-lg font-black">
                      {advantage.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-white/65">
                      {advantage.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-sm font-black text-amber-800">
              آراء الأهالي
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#03152f] md:text-5xl">
              ثقة الأهالي هي أجمل شهادة
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              كلمات نعتز بها وتعكس تجربة الأهالي مع برامج IQ PLUS.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Reveal
                key={review.name}
                delay={index * 0.06}
              >
                <Card className="h-full border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-7">
                    <Quote className="h-10 w-10 text-amber-400" />

                    <p className="mt-5 min-h-28 leading-8 text-slate-600">
                      {review.text}
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#03152f] font-black text-white">
                        {review.name[0]}
                      </span>

                      <div>
                        <strong className="block text-[#03152f]">
                          {review.name}
                        </strong>

                        <span className="text-xs text-slate-500">
                          ولية أمر
                        </span>
                      </div>

                      <div className="mr-auto flex text-amber-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="h-4 w-4 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-l from-blue-950 to-blue-800 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-right">
          <div>
            <span className="font-black text-amber-300">
              جاهزون للانطلاق؟
            </span>

            <h2 className="mt-1 text-3xl font-black">
              امنحوا أبناءكم بداية أقوى اليوم
            </h2>

            <p className="mt-2 text-sm text-white/65">
              تواصلوا معنا للحصول على تفاصيل الدورات والمجموعات المتاحة.
            </p>
          </div>

          <RegisterButton size="lg">
            <GraduationCap className="h-5 w-5" />

            سجل الآن
          </RegisterButton>
        </div>
      </section>
    </main>
  );
}