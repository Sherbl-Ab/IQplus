"use client";

import { FormEvent, useEffect, useState } from "react";

import {
  CheckCircle2,
  GraduationCap,
  MessageCircle,
  School,
  Send,
  User,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const courses = [
  "التحضير لامتحان الموهوبين",
  "مسابقة الأعالي في الرياضيات",
  "الرياضيات",
  "اللغة الإنجليزية",
  "اللغة العبرية",
  "البرمجة",
  "الذكاء الاصطناعي",
  "الروبوتيكا",
  "الدورات الصيفية",
  "أخرى",
];

export function RegistrationDialog() {
  const [open, setOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    grade: "",
    school: "",
    course: "",
    notes: "",
  });

  useEffect(() => {
    const openDialog = () => {
      setOpen(true);
      setShowConfirmation(false);
    };

    window.addEventListener("open-registration", openDialog);

    return () => {
      window.removeEventListener("open-registration", openDialog);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeDialog = () => {
    setOpen(false);
    setShowConfirmation(false);
  };

  const updateField = (
    field: keyof typeof formData,
    value: string,
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.fullName.trim()) {
      alert("يرجى إدخال الاسم الكامل");
      return;
    }

    if (!formData.phone.trim()) {
      alert("يرجى إدخال رقم الهاتف");
      return;
    }

    if (!formData.course) {
      alert("يرجى اختيار الدورة المطلوبة");
      return;
    }

    setShowConfirmation(true);
  };

  const sendToWhatsApp = () => {
    const message = [
      "مرحبًا IQ PLUS، أود التسجيل:",
      "",
      `الاسم الكامل: ${formData.fullName}`,
      `رقم الهاتف: ${formData.phone}`,
      `الصف: ${formData.grade || "غير محدد"}`,
      `المدرسة: ${formData.school || "غير محددة"}`,
      `الدورة المطلوبة: ${formData.course}`,
      `ملاحظات: ${formData.notes || "لا توجد"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/972502933050?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setOpen(false);
    setShowConfirmation(false);

    setFormData({
      fullName: "",
      phone: "",
      grade: "",
      school: "",
      course: "",
      notes: "",
    });
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-[#03152f]/75 p-4 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeDialog();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="registration-dialog-title"
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[32px] bg-white shadow-[0_40px_120px_rgba(0,0,0,.35)]"
      >
        <button
          type="button"
          onClick={closeDialog}
          aria-label="إغلاق نافذة التسجيل"
          className="absolute left-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
        >
          <X className="h-5 w-5" />
        </button>

        {!showConfirmation ? (
          <>
            <div className="relative overflow-hidden rounded-t-[32px] bg-gradient-to-br from-[#07529c] to-[#03152f] px-7 py-9 text-white sm:px-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />

              <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-amber-400/10" />

              <div className="relative">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-black text-amber-300">
                  التسجيل مفتوح
                </span>

                <h2
                  id="registration-dialog-title"
                  className="mt-5 text-3xl font-black sm:text-4xl"
                >
                  ابدأوا رحلتكم مع IQ PLUS
                </h2>

                <p className="mt-3 max-w-xl leading-8 text-white/70">
                  املؤوا التفاصيل، وسنفتح رسالة WhatsApp جاهزة لإتمام
                  التسجيل.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-7 sm:p-10"
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block font-black text-[#03152f]"
                >
                  الاسم الكامل
                </label>

                <div className="relative">
                  <User className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(event) =>
                      updateField("fullName", event.target.value)
                    }
                    placeholder="اكتبوا الاسم الكامل"
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pr-12 pl-4 outline-none transition focus:border-[#07529c] focus:bg-white focus:ring-4 focus:ring-blue-100"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block font-black text-[#03152f]"
                >
                  رقم الهاتف
                </label>

                <div className="relative">
                  <MessageCircle className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    placeholder="05X-XXXXXXX"
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pr-12 pl-4 outline-none transition focus:border-[#07529c] focus:bg-white focus:ring-4 focus:ring-blue-100"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="grade"
                    className="mb-2 block font-black text-[#03152f]"
                  >
                    الصف
                  </label>

                  <div className="relative">
                    <GraduationCap className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                    <input
                      id="grade"
                      type="text"
                      value={formData.grade}
                      onChange={(event) =>
                        updateField("grade", event.target.value)
                      }
                      placeholder="مثال: الصف الخامس"
                      className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pr-12 pl-4 outline-none transition focus:border-[#07529c] focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="school"
                    className="mb-2 block font-black text-[#03152f]"
                  >
                    المدرسة
                  </label>

                  <div className="relative">
                    <School className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                    <input
                      id="school"
                      type="text"
                      value={formData.school}
                      onChange={(event) =>
                        updateField("school", event.target.value)
                      }
                      placeholder="اسم المدرسة"
                      className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pr-12 pl-4 outline-none transition focus:border-[#07529c] focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="course"
                  className="mb-2 block font-black text-[#03152f]"
                >
                  الدورة المطلوبة
                </label>

                <select
                  id="course"
                  value={formData.course}
                  onChange={(event) =>
                    updateField("course", event.target.value)
                  }
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-[#07529c] focus:bg-white focus:ring-4 focus:ring-blue-100"
                  required
                >
                  <option value="">
                    اختاروا الدورة
                  </option>

                  {courses.map((course) => (
                    <option
                      key={course}
                      value={course}
                    >
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="mb-2 block font-black text-[#03152f]"
                >
                  ملاحظات
                </label>

                <textarea
                  id="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={(event) =>
                    updateField("notes", event.target.value)
                  }
                  placeholder="أي تفاصيل إضافية"
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-[#07529c] focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="h-14 w-full bg-gradient-to-l from-amber-400 to-amber-500 text-base font-black text-[#03152f] shadow-lg hover:from-amber-500 hover:to-amber-400"
              >
                <Send className="h-5 w-5" />
                متابعة التسجيل
              </Button>

              <p className="text-center text-xs leading-6 text-slate-500">
                عند المتابعة ستظهر شاشة تأكيد قبل فتح WhatsApp.
              </p>
            </form>
          </>
        ) : (
          <div className="p-8 text-center sm:p-12">
            <span className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-12 w-12" />
            </span>

            <h2 className="mt-6 text-3xl font-black text-[#03152f]">
              التفاصيل جاهزة للإرسال
            </h2>

            <p className="mx-auto mt-4 max-w-lg leading-8 text-slate-600">
              اضغطوا على الزر التالي لفتح WhatsApp وإرسال تفاصيل التسجيل
              إلى IQ PLUS.
            </p>

            <div className="mt-8 rounded-3xl bg-slate-50 p-6 text-right">
              <div className="space-y-3 text-sm">
                <p>
                  <strong className="text-[#03152f]">
                    الاسم:
                  </strong>{" "}
                  {formData.fullName}
                </p>

                <p>
                  <strong className="text-[#03152f]">
                    الهاتف:
                  </strong>{" "}
                  {formData.phone}
                </p>

                <p>
                  <strong className="text-[#03152f]">
                    الدورة:
                  </strong>{" "}
                  {formData.course}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => setShowConfirmation(false)}
                className="border-slate-300 text-[#03152f]"
              >
                تعديل التفاصيل
              </Button>

              <Button
                type="button"
                size="lg"
                onClick={sendToWhatsApp}
                className="bg-[#25D366] text-white hover:bg-[#1ebc59]"
              >
                <MessageCircle className="h-5 w-5" />
                إرسال عبر WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}