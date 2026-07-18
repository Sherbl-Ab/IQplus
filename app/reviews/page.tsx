import {
  Heart,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import { RegisterButton } from "@/components/register-button";
import { Reveal } from "@/components/motion-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "مريان رشرش",
    role: "ولية أمر",
    text: "تجربة أكثر من رائعة. لاحظنا تطورًا واضحًا في المستوى الدراسي، والاهتمام بكل طالب كان مميزًا.",
  },
  {
    name: "كارولين عرطول",
    role: "ولية أمر",
    text: "مركز منظم وراقٍ، يضم طاقمًا مهنيًا وأساليب تعليم حديثة. النتائج كانت واضحة ومشجعة.",
  },
  {
    name: "رنا جهشان",
    role: "ولية أمر",
    text: "أنصح بكل ثقة بمركز IQ PLUS. البيئة التعليمية ممتازة والتواصل مع الأهل مستمر وواضح.",
  },
];

const trustPoints = [
  {
    icon: Users,
    title: "متابعة شخصية",
    description:
      "اهتمام حقيقي بكل طالب ومتابعة مستمرة لتقدمه واحتياجاته.",
  },
  {
    icon: ShieldCheck,
    title: "بيئة تعليمية آمنة",
    description:
      "أجواء مريحة، داعمة ومحفزة تساعد الطالب على التعلم بثقة.",
  },
  {
    icon: MessageCircle,
    title: "تواصل واضح",
    description:
      "تواصل مستمر مع الأهل وتحديثات واضحة حول تقدم الطالب.",
  },
];

export default function ReviewsPage() {
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
              آراء الأهالي
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-[#03152f] md:text-7xl">
              ثقة الأهالي
              <span className="block text-[#0a5ca8]">
                هي أجمل شهادة
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-600">
              كلمات نعتز بها وتعكس تجربة الأهالي مع برامج IQ PLUS،
              المتابعة الشخصية والبيئة التعليمية الداعمة.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#f7f9fc] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-sm font-black text-amber-800">
              كلمات نعتز بها
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#03152f] md:text-5xl">
              تجارب حقيقية من الأهالي
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              بدون صور شخصية، مع الحفاظ على الخصوصية والتصميم المهني.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Reveal
                key={review.name}
                delay={index * 0.07}
              >
                <Card className="group h-full overflow-hidden border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-[0_25px_70px_rgba(3,21,47,.12)]">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-[#07529c] to-[#03152f] p-7 text-white">
                      <div className="flex items-center justify-between">
                        <Quote className="h-12 w-12 text-amber-300" />

                        <span className="text-5xl font-black text-white/10">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="mt-6 flex text-amber-300">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="h-5 w-5 fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="p-7">
                      <p className="min-h-[170px] text-lg leading-9 text-slate-600">
                        {review.text}
                      </p>

                      <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-6">
                        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#03152f] text-xl font-black text-white">
                          {review.name[0]}
                        </span>

                        <div>
                          <strong className="block text-lg text-[#03152f]">
                            {review.name}
                          </strong>

                          <span className="text-sm text-slate-500">
                            {review.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-sm font-black text-[#07529c]">
              لماذا يثق بنا الأهالي؟
            </span>

            <h2 className="mt-4 text-4xl font-black text-[#03152f] md:text-5xl">
              علاقة مبنية على الثقة والمتابعة
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <Reveal
                  key={point.title}
                  delay={index * 0.07}
                >
                  <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#07529c] to-[#03152f] text-white">
                      <Icon className="h-8 w-8" />
                    </span>

                    <h3 className="mt-5 text-xl font-black text-[#03152f]">
                      {point.title}
                    </h3>

                    <p className="mt-3 leading-8 text-slate-600">
                      {point.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feedback CTA */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="grid items-center gap-10 rounded-[40px] border border-blue-100 bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-12">
              <div>
                <span className="inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-sm font-black text-amber-800">
                  رأيكم يهمنا
                </span>

                <h2 className="mt-5 text-4xl font-black leading-tight text-[#03152f] md:text-5xl">
                  شاركونا تجربتكم
                  <span className="block text-[#0a5ca8]">
                    وساعدونا على التطور
                  </span>
                </h2>

                <p className="mt-5 text-lg leading-9 text-slate-600">
                  نرحب دائمًا بملاحظات الأهالي، لأنها تساعدنا على تطوير
                  البرامج وتحسين تجربة الطلاب.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#07529c] text-white hover:bg-[#03152f]"
                  >
                    <a
                      href="https://wa.me/972502933050?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D9%85%D8%B4%D8%A7%D8%B1%D9%83%D8%A9%20%D8%B1%D8%A3%D9%8A%D9%8A%20%D8%AD%D9%88%D9%84%20IQ%20PLUS"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      شاركوا رأيكم
                    </a>
                  </Button>
                </div>
              </div>

              <div className="grid min-h-[320px] place-items-center rounded-[32px] bg-gradient-to-br from-[#07529c] to-[#03152f] text-white shadow-xl">
                <div className="text-center">
                  <span className="mx-auto grid h-24 w-24 place-items-center rounded-[28px] bg-white/15">
                    <Heart className="h-12 w-12 text-amber-300" />
                  </span>

                  <p className="mt-5 text-2xl font-black">
                    شكرًا لثقتكم
                  </p>

                  <p className="mt-2 text-sm text-white/65">
                    ثقتكم تدفعنا دائمًا للأفضل
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-l from-[#03152f] to-[#0a5ca8] py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-right">
          <div>
            <span className="font-black text-amber-300">
              انضموا إلى عائلة IQ PLUS
            </span>

            <h2 className="mt-2 text-3xl font-black">
              ابدأوا رحلة تعليمية جديدة معنا
            </h2>

            <p className="mt-2 text-white/65">
              سجلوا الآن واحصلوا على تفاصيل الدورات والمجموعات.
            </p>
          </div>

          <RegisterButton size="lg">
            <Sparkles className="h-5 w-5" />
            سجل الآن
          </RegisterButton>
        </div>
      </section>
    </main>
  );
}