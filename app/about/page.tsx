import {
  Brain,
  Code2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/motion-reveal";
import { RegisterButton } from "@/components/register-button";

const values = [
  {
    icon: Users,
    title: "متابعة شخصية",
    description:
      "نحرص على فهم احتياجات كل طالب ومساعدته على التقدّم بثقة.",
  },
  {
    icon: Lightbulb,
    title: "تعليم حديث",
    description:
      "نستخدم أساليب تعليم تفاعلية تجمع بين المعرفة، التفكير والتكنولوجيا.",
  },
  {
    icon: Target,
    title: "أهداف واضحة",
    description:
      "نبني لكل برنامج مسارًا منظّمًا يهدف إلى تطوير مهارات الطالب ونتائجه.",
  },
];

export default function AboutPage() {
  return (
    <main dir="rtl" className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/60 to-white py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-[#07529c]">
                من نحن
              </span>

              <h1 className="mt-5 text-4xl font-black leading-tight text-[#03152f] md:text-6xl">
                تعليم يصنع فرقًا
                <span className="block text-[#07529c]">
                  في رحلة كل طالب
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
                IQ PLUS هو مركز تعليمي في المغار، تأسس عام 2025 بهدف
                تقديم برامج تعليمية حديثة تجمع بين المتابعة الشخصية،
                المعرفة الأكاديمية ومهارات المستقبل.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                نقدّم دورات في الرياضيات، اللغات، الموهوبين، البرمجة،
                الذكاء الاصطناعي والروبوتيكا، ضمن بيئة تعليمية مريحة
                ومحفّزة.
              </p>

              <div className="mt-8">
                <RegisterButton size="lg">
                  <GraduationCap className="h-5 w-5" />
                  سجل الآن
                </RegisterButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="rounded-[40px] bg-gradient-to-br from-[#07529c] to-[#03152f] p-8 shadow-[0_30px_80px_rgba(3,21,47,.2)]">
                <div className="rounded-[30px] border border-white/15 bg-white/10 p-7 backdrop-blur">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white p-5">
                      <Brain className="h-8 w-8 text-[#07529c]" />

                      <h3 className="mt-4 font-black text-[#03152f]">
                        تفكير
                      </h3>
                    </div>

                    <div className="rounded-2xl bg-white p-5">
                      <Code2 className="h-8 w-8 text-[#07529c]" />

                      <h3 className="mt-4 font-black text-[#03152f]">
                        تكنولوجيا
                      </h3>
                    </div>

                    <div className="rounded-2xl bg-white p-5">
                      <Sparkles className="h-8 w-8 text-amber-500" />

                      <h3 className="mt-4 font-black text-[#03152f]">
                        إبداع
                      </h3>
                    </div>

                    <div className="rounded-2xl bg-white p-5">
                      <HeartHandshake className="h-8 w-8 text-amber-500" />

                      <h3 className="mt-4 font-black text-[#03152f]">
                        متابعة
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-sm font-black text-amber-800">
              رؤيتنا التعليمية
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#03152f]">
              ما الذي يميز IQ PLUS؟
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <Reveal key={value.title} delay={index * 0.07}>
                  <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-[#07529c]">
                      <Icon className="h-7 w-7" />
                    </span>

                    <h3 className="mt-5 text-xl font-black text-[#03152f]">
                      {value.title}
                    </h3>

                    <p className="mt-3 leading-8 text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Owners */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-sm font-black text-[#07529c]">
              إدارة المركز
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#03152f]">
              من يقف وراء IQ PLUS؟
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              إدارة تجمع بين المعرفة الأكاديمية، الهندسة، التكنولوجيا
              والرؤية التعليمية.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Laren */}
            <Reveal>
              <div className="h-full overflow-hidden rounded-[30px] border border-slate-200 bg-[#f8fafc] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="h-2 bg-gradient-to-l from-[#07529c] to-blue-400" />

                <div className="p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#07529c] to-[#03152f] text-2xl font-black text-white">
                      ل
                    </span>

                    <div>
                      <h3 className="text-2xl font-black text-[#03152f]">
                        لارين عبدالله
                      </h3>

                      <span className="text-sm font-bold text-amber-600">
                        مؤسسة ومديرة المركز
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 leading-8 text-slate-600">
                    حاصلة على اللقب الأول في علوم الحاسوب من جامعة حيفا،
                    وطالبة ماجستير في هندسة البرمجيات. تعمل على دمج
                    التعليم، التكنولوجيا والابتكار في برامج المركز.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Sharbel */}
            <Reveal delay={0.08}>
              <div className="h-full overflow-hidden rounded-[30px] border border-slate-200 bg-[#f8fafc] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="h-2 bg-gradient-to-l from-amber-400 to-orange-500" />

                <div className="p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 text-2xl font-black text-white">
                      ش
                    </span>

                    <div>
                      <h3 className="text-2xl font-black text-[#03152f]">
                        شربل عبدالله
                      </h3>

                      <span className="text-sm font-bold text-amber-600">
                        مؤسس ومدير المركز
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 leading-8 text-slate-600">
                    مهندس برمجيات، حاصل على اللقب الأول في هندسة
                    البرمجيات من الكلية الأكاديمية للهندسة أورط براودة،
                    ويساهم في تطوير البرامج التعليمية والتكنولوجية في
                    المركز.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-l from-[#03152f] to-[#07529c] py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-right">
          <div>
            <h2 className="text-3xl font-black">
              جاهزون لبدء رحلة تعليمية جديدة؟
            </h2>

            <p className="mt-2 text-white/70">
              تواصلوا معنا وسنساعدكم في اختيار البرنامج المناسب.
            </p>
          </div>

          <RegisterButton size="lg">
            سجل الآن
          </RegisterButton>
        </div>
      </section>
    </main>
  );
}