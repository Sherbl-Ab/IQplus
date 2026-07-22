import Link from "next/link";

import {
  ArrowLeft,
  Bot,
  Brain,
  Calculator,
  CheckCircle2,
  ChevronDown,
  Code2,
  Cpu,
  GraduationCap,
  Handshake,
  Languages,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/motion-reveal";
import { RegisterButton } from "@/components/register-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const statistics = [
  {
    value: "20+",
    label: "خبرة طاقمنا التعليمية",
  },
  {
    value: "2025",
    label: "سنة التأسيس",
  },
  {
    value: "8+",
    label: "برامج ودورات",
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

const featuredCourses = [
  {
    icon: Brain,
    title: "التحضير لامتحان الموهوبين",
    subtitle: "للصف الثالث – المرحلة الأولى",
    description:
      "تدريب مهني على أنماط الأسئلة، استراتيجيات الحل، التركيز وإدارة الوقت.",
    badge: "التسجيل مفتوح",
    badgeClass: "bg-emerald-100 text-emerald-700",
    gradient: "from-[#07529c] to-[#03152f]",
  },
  {
    icon: Languages,
    title: "العبرية المحكية",
    subtitle: "تطوير المحادثة والثقة",
    description:
      "تكوين جمل صحيحة، توسيع المفردات والتحدث باللغة العبرية بصورة عملية.",
    badge: "دورة جديدة",
    badgeClass: "bg-blue-100 text-blue-700",
    gradient: "from-cyan-600 to-blue-900",
  },
  {
    icon: Trophy,
    title: "الأعالي في الرياضيات",
    subtitle: "تفكير رياضي وإثراء",
    description:
      "تحديات ومسائل غير اعتيادية لتطوير المنطق، التفكير الرياضي والاستنتاج.",
    badge: "الأماكن محدودة",
    badgeClass: "bg-amber-100 text-amber-800",
    gradient: "from-amber-500 to-orange-700",
  },
];

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
      "تقوية، إثراء وتحضير للامتحانات لجميع المراحل بأسلوب واضح ومتدرج.",
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

const advantages = [
  {
    icon: ShieldCheck,
    title: "خبرة تعليمية واسعة",
    description:
      "طاقم بخبرة طويلة في التدريس، المتابعة وبناء البرامج التعليمية.",
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

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "التواصل معنا",
    description:
      "تواصلوا معنا للحصول على تفاصيل الدورات، المواعيد والمجموعات المتاحة.",
  },
  {
    number: "02",
    icon: CheckCircle2,
    title: "اختيار الدورة",
    description:
      "نساعدكم في اختيار البرنامج المناسب لعمر الطالب، مستواه وهدفه.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "بدء رحلة التعلم",
    description:
      "يبدأ الطالب ضمن مجموعة مناسبة مع متابعة تعليمية واضحة ومستمرّة.",
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

const faqs = [
  {
    question: "كيف يتم التسجيل في الدورات؟",
    answer:
      "يمكن الضغط على زر سجل الآن، إدخال التفاصيل وإرسالها مباشرة إلى IQ PLUS عبر WhatsApp.",
  },
  {
    question: "كيف أعرف أي دورة تناسب ابني أو ابنتي؟",
    answer:
      "تواصلوا معنا وسنساعدكم في اختيار الدورة والمجموعة المناسبة حسب الصف، المستوى والهدف التعليمي.",
  },
  {
    question: "هل يتم التعليم ضمن مجموعات صغيرة؟",
    answer:
      "نعم، نحرص على العمل ضمن مجموعات مناسبة تسمح بالمشاركة، طرح الأسئلة والمتابعة الشخصية.",
  },
  {
    question: "هل توجد متابعة مع الأهل؟",
    answer:
      "نعم، نؤمن بأهمية التواصل مع الأهل وتقديم صورة واضحة عن تقدم الطالب واحتياجاته.",
  },
  {
     question: "أين يقع مركز IQ PLUS؟",
     answer:
              "يقع مركز IQ PLUS في مدينة المغار، ويمكن طلب الموقع الدقيق عبر WhatsApp.",
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
              <h1 className="text-5xl font-black leading-[1.15] text-[#03152f] md:text-7xl">
                نصنع جيلاً
                <br />
                <span className="text-[#0a5ca8]">يتعلّم ويبدع</span>
                <br />
                <span className="text-amber-500">ويتقدّم</span>
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

                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="text-[#07529c] hover:bg-blue-50"
                >
                  <Link href="/courses">
                    اكتشف الدورات
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
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

                <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[30px] border border-white/20 bg-white/95 p-7 shadow-2xl backdrop-blur">
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <span className="text-sm font-black text-amber-500">
                        IQ PLUS
                      </span>

                      <h2 className="mt-1 whitespace-nowrap text-xl font-black text-[#03152f] sm:text-2xl">
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

      {/* Featured Courses */}
      <section className="bg-[#f7f9fc] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-sm font-black text-amber-800">
              الدورات الأكثر طلبًا
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#03152f] md:text-5xl">
              ابدأوا من البرنامج المناسب
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              دورات مختارة تحظى باهتمام كبير، مع مجموعات ومواعيد يتم
              تحديثها بصورة مستمرة.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {featuredCourses.map((course, index) => {
              const Icon = course.icon;

              return (
                <Reveal key={course.title} delay={index * 0.07}>
                  <Card className="group h-full overflow-hidden border-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(3,21,47,.15)]">
                    <CardContent className="p-0">
                      <div
                        className={`relative overflow-hidden bg-gradient-to-br ${course.gradient} p-7 text-white`}
                      >
                        <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-white/10" />
                        <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/5" />

                        <div className="relative flex items-start justify-between gap-4">
                          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                            <Icon className="h-8 w-8" />
                          </span>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-black ${course.badgeClass}`}
                          >
                            {course.badge}
                          </span>
                        </div>

                        <span className="relative mt-7 block text-sm font-bold text-white/70">
                          {course.subtitle}
                        </span>

                        <h3 className="relative mt-1 text-2xl font-black">
                          {course.title}
                        </h3>
                      </div>

                      <div className="p-7">
                        <p className="min-h-[80px] leading-8 text-slate-600">
                          {course.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                          <RegisterButton>سجل الآن</RegisterButton>

                          <Button
                            asChild
                            variant="outline"
                            className="border-slate-300 text-[#07529c]"
                          >
                            <Link href="/courses">
                              التفاصيل
                              <ArrowLeft className="h-4 w-4" />
                            </Link>
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
                <Reveal key={service.title} delay={index * 0.05}>
                  <Card className="group h-full overflow-hidden border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-[0_25px_70px_rgba(3,21,47,.12)]">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden bg-gradient-to-br from-[#07529c] to-[#03152f] px-6 py-8 text-white">
                        <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/10" />

                        <div className="relative flex items-center justify-between">
                          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15">
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
        </div>
      </section>

      {/* Why IQ PLUS */}
      <section className="bg-gradient-to-br from-[#03152f] to-[#0a5ca8] py-24 text-white">
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
                <Reveal key={advantage.title} delay={index * 0.07}>
                  <div className="h-full rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.08]">
                    <span className="text-3xl font-black text-amber-300">
                      0{index + 1}
                    </span>

                    <Icon className="mt-5 h-7 w-7 text-blue-200" />

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

      {/* Steps */}
      <section className="bg-[#f7f9fc] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-sm font-black text-[#07529c]">
              كيف نبدأ؟
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#03152f] md:text-5xl">
              ثلاث خطوات بسيطة
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.number} delay={index * 0.08}>
                  <div className="relative h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                    <span className="absolute left-6 top-5 text-5xl font-black text-slate-100">
                      {step.number}
                    </span>

                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#07529c] to-[#03152f] text-white">
                      <Icon className="h-8 w-8" />
                    </span>

                    <h3 className="mt-6 text-xl font-black text-[#03152f]">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-8 text-slate-600">
                      {step.description}
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
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Reveal key={review.name} delay={index * 0.06}>
                <Card className="h-full border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="p-7">
                    <Quote className="h-10 w-10 text-amber-400" />

                    <p className="mt-5 min-h-28 leading-8 text-slate-600">
                      {review.text}
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-[#03152f] font-black text-white">
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

      {/* FAQ */}
      <section className="bg-[#f7f9fc] py-24">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-sm font-black text-[#07529c]">
              الأسئلة الشائعة
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#03152f] md:text-5xl">
              كل ما تحتاجون إلى معرفته
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              إجابات سريعة عن التسجيل، الدورات وطريقة العمل.
            </p>
          </Reveal>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.04}>
                <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm open:border-blue-200 open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black text-[#03152f]">
                    <span>{faq.question}</span>

                    <ChevronDown className="h-5 w-5 shrink-0 text-[#07529c] transition group-open:rotate-180" />
                  </summary>

                  <p className="mt-4 border-t border-slate-100 pt-4 leading-8 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <p className="text-slate-600">لديكم سؤال آخر؟</p>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="mt-4 border-[#07529c] text-[#07529c] hover:bg-blue-50"
            >
              <a
                href="https://wa.me/972502933050"
                target="_blank"
                rel="noopener noreferrer"
              >
                اسألوا عبر WhatsApp
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-l from-[#03152f] to-[#0a5ca8] py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-4 text-center md:flex-row md:text-right">
          <div>
            <span className="font-black text-amber-300">
              جاهزون للانطلاق؟
            </span>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              امنحوا أبناءكم بداية أقوى اليوم
            </h2>

            <p className="mt-3 text-white/65">
              تواصلوا معنا واحصلوا على تفاصيل الدورات والمجموعات المتاحة.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <RegisterButton size="lg">
              <GraduationCap className="h-5 w-5" />
              سجل الآن
            </RegisterButton>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#03152f]"
            >
              <Link href="/courses">عرض جميع الدورات</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}