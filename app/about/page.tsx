import {
  Award,
  BookOpenCheck,
  Brain,
  Cpu,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/motion-reveal";
import { RegisterButton } from "@/components/register-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Award,
    title: "التميّز",
    description:
      "نسعى إلى تقديم تعليم مهني ومنظم يساعد كل طالب على التقدم وتحقيق أفضل ما لديه.",
  },
  {
    icon: HeartHandshake,
    title: "الاحترام",
    description:
      "نوفر بيئة تعليمية داعمة تقوم على الاحترام، الاستماع والثقة المتبادلة.",
  },
  {
    icon: Lightbulb,
    title: "الابتكار",
    description:
      "نستخدم أساليب حديثة ونربط التعلم بالتكنولوجيا، الإبداع ومهارات المستقبل.",
  },
  {
    icon: ShieldCheck,
    title: "المسؤولية",
    description:
      "نلتزم بمتابعة الطالب، التواصل مع الأهل وتقديم تجربة تعليمية واضحة وآمنة.",
  },
];

const advantages = [
  {
    icon: GraduationCap,
    title: "خبرة تعليمية طويلة",
    description:
      "خبرة تراكمية تتجاوز 20 عامًا في التدريس، المتابعة وبناء البرامج التعليمية.",
  },
  {
    icon: Users,
    title: "مجموعات صغيرة",
    description:
      "عدد طلاب مناسب يتيح وقتًا أكبر للشرح، الأسئلة والمتابعة الشخصية.",
  },
  {
    icon: Brain,
    title: "تعليم يطوّر التفكير",
    description:
      "لا نركز فقط على الحفظ، بل على الفهم، التفكير، حل المشكلات والاستقلالية.",
  },
  {
    icon: Cpu,
    title: "دمج التكنولوجيا",
    description:
      "البرمجة، الذكاء الاصطناعي والروبوتيكا جزء من رؤيتنا التعليمية الحديثة.",
  },
  {
    icon: Handshake,
    title: "شراكة مع الأهل",
    description:
      "تواصل مستمر وواضح حول تقدم الطالب، احتياجاته وأهدافه التعليمية.",
  },
  {
    icon: BookOpenCheck,
    title: "برامج مصممة بعناية",
    description:
      "محتوى مناسب للعمر، المستوى والهدف، مع أنشطة وتدريبات عملية ومتدرجة.",
  },
];

const milestones = [
  {
    year: "20+",
    title: "سنة خبرة تعليمية",
    description:
      "خبرة في التدريس، إدارة البرامج ومتابعة الطلاب في مراحل عمرية مختلفة.",
  },
  {
    year: "2025",
    title: "تأسيس IQ PLUS",
    description:
      "تأسس المركز ليجمع الخبرة التعليمية مع التكنولوجيا والأساليب الحديثة.",
  },
  {
    year: "8+",
    title: "مجالات تعليمية",
    description:
      "رياضيات، لغات، موهوبون، برمجة، ذكاء اصطناعي، روبوتيكا والمزيد.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-28 top-0 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />

          <div className="absolute -left-28 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-black text-[#07529c] shadow-sm">
                من نحن
              </span>

              <h1 className="mt-6 text-5xl font-black leading-tight text-[#03152f] md:text-7xl">
                خبرة طويلة
                <span className="block text-[#0a5ca8]">
                  برؤية تعليمية حديثة
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
                IQ PLUS هو مركز تعليمي متكامل في المغار، يجمع بين الخبرة
                التعليمية الطويلة، المتابعة الشخصية، التكنولوجيا ومهارات
                المستقبل.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <RegisterButton size="lg">
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
                    تواصل عبر WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="relative min-h-[500px]">
              <div className="absolute inset-6 overflow-hidden rounded-[48px] bg-gradient-to-br from-[#07529c] via-[#0a66b7] to-[#03152f] shadow-[0_35px_90px_rgba(3,21,47,.25)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(255,255,255,.2),transparent_35%)]" />

                <div className="absolute inset-8 rounded-[36px] border border-white/20" />

                <div className="absolute left-1/2 top-1/2 w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-[32px] bg-white p-8 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-amber-100 text-amber-600">
                      <Sparkles className="h-8 w-8" />
                    </span>

                    <div>
                      <span className="text-sm font-black text-amber-500">
                        IQ PLUS
                      </span>

                      <h2 className="text-2xl font-black text-[#03152f]">
                        تعليم يصنع فرقًا
                      </h2>
                    </div>
                  </div>

                  <div className="mt-7 space-y-4">
                    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                      <Target className="h-6 w-6 text-[#07529c]" />

                      <span className="font-bold text-slate-700">
                        أهداف تعليمية واضحة
                      </span>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                      <Users className="h-6 w-6 text-[#07529c]" />

                      <span className="font-bold text-slate-700">
                        متابعة شخصية لكل طالب
                      </span>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                      <Cpu className="h-6 w-6 text-[#07529c]" />

                      <span className="font-bold text-slate-700">
                        أدوات وتقنيات حديثة
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-0 grid h-24 w-24 place-items-center rounded-[28px] border-4 border-white bg-amber-400 text-2xl font-black text-[#03152f] shadow-xl">
                +20
              </div>

              <div className="absolute bottom-6 left-0 grid h-24 w-24 place-items-center rounded-[28px] border-4 border-white bg-white text-[#07529c] shadow-xl">
                <GraduationCap className="h-10 w-10" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-sm font-black text-amber-800">
                قصتنا
              </span>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[#03152f] md:text-5xl">
                تأسس عام 2025
                <span className="block text-[#0a5ca8]">
                  بخبرة تتجاوز 20 عامًا
                </span>
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-9 text-slate-600">
                <p>
                  جاء تأسيس IQ PLUS ليجمع الخبرة التعليمية الطويلة مع أساليب
                  التعليم الحديثة، التكنولوجيا والمتابعة الشخصية.
                </p>

                <p>
                  نؤمن أن النجاح لا يقتصر على تحسين العلامة، بل يشمل بناء
                  الثقة، تطوير التفكير، الاستقلالية والقدرة على مواجهة
                  التحديات.
                </p>

                <p>
                  لذلك نصمم برامجنا لتكون واضحة، ممتعة، عملية ومناسبة
                  لاحتياجات كل طالب.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.05}>
              <Card className="border-blue-100 bg-blue-50/50">
                <CardContent className="p-7">
                  <div className="flex gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#07529c] text-white">
                      <Target className="h-7 w-7" />
                    </span>

                    <div>
                      <h3 className="text-2xl font-black text-[#03152f]">
                        رؤيتنا
                      </h3>

                      <p className="mt-2 leading-8 text-slate-600">
                        بناء جيل واثق، مبدع ومجهز بالمعرفة والمهارات اللازمة
                        للمستقبل.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="border-amber-100 bg-amber-50/60">
                <CardContent className="p-7">
                  <div className="flex gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-amber-400 text-[#03152f]">
                      <Handshake className="h-7 w-7" />
                    </span>

                    <div>
                      <h3 className="text-2xl font-black text-[#03152f]">
                        رسالتنا
                      </h3>

                      <p className="mt-2 leading-8 text-slate-600">
                        تقديم تعليم عالي الجودة يجمع بين الخبرة، الابتكار
                        والمتابعة الحقيقية لكل طالب.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {milestones.map((milestone, index) => (
              <Reveal
                key={milestone.title}
                delay={index * 0.07}
              >
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm">
                  <strong className="text-5xl font-black text-[#07529c]">
                    {milestone.year}
                  </strong>

                  <h3 className="mt-4 text-xl font-black text-[#03152f]">
                    {milestone.title}
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    {milestone.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-sm font-black text-[#07529c]">
              قيمنا
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#03152f] md:text-5xl">
              المبادئ التي تقود عملنا
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              قيم واضحة تنعكس في طريقة التعليم، التواصل والمتابعة.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <Reveal
                  key={value.title}
                  delay={index * 0.07}
                >
                  <Card className="h-full border-slate-200 text-center transition hover:-translate-y-1 hover:shadow-xl">
                    <CardContent className="p-7">
                      <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#07529c] to-[#03152f] text-white">
                        <Icon className="h-8 w-8" />
                      </span>

                      <h3 className="mt-5 text-xl font-black text-[#03152f]">
                        {value.title}
                      </h3>

                      <p className="mt-3 leading-8 text-slate-600">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-gradient-to-br from-[#03152f] to-[#0a5ca8] py-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm font-black text-amber-300">
              ما يميزنا
            </span>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              تعليم واضح، ممتع ومؤثر
            </h2>

            <p className="mt-4 text-lg leading-8 text-white/65">
              نجمع بين الخبرة، المتابعة والتكنولوجيا لتقديم تجربة تعليمية
              متكاملة.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;

              return (
                <Reveal
                  key={advantage.title}
                  delay={index * 0.06}
                >
                  <div className="h-full rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.08]">
                    <Icon className="h-8 w-8 text-amber-300" />

                    <h3 className="mt-5 text-xl font-black">
                      {advantage.title}
                    </h3>

                    <p className="mt-3 leading-8 text-white/65">
                      {advantage.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-[36px] border border-blue-100 bg-gradient-to-l from-blue-50 to-amber-50 p-8 text-center shadow-sm md:flex-row md:p-12 md:text-right">
              <div>
                <span className="font-black text-amber-600">
                  انضموا إلى عائلة IQ PLUS
                </span>

                <h2 className="mt-2 text-3xl font-black text-[#03152f] md:text-4xl">
                  بداية تعليمية أقوى تبدأ من هنا
                </h2>

                <p className="mt-3 text-slate-600">
                  تواصلوا معنا للحصول على تفاصيل البرامج والمجموعات المتاحة.
                </p>
              </div>

              <RegisterButton size="lg">
                سجل الآن
              </RegisterButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}