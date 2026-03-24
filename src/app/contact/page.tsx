import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto min-h-screen">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary h-64 md:h-80 flex items-center px-8 md:px-16 shadow-sm">
            <div className="absolute inset-0 opacity-20">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpbizSHdkSOdfw9GBiRxgP2Uwtq-eU7c4BwM9CepwpffrgDO5VgQNGpy7bYfsKnoKX392M7vgL8Gs6AHkeg88X_fmy-8nQ_O6uKCvaEMary-xTzFXKOWXhmsuEybfjqMXEiG6HavhSw5uvZahPDADrPGyX9cyeCtWVsEFn9cYfZDOcQuLD3-FwSMckUvmYthvXsfZx0d6dtHsWiq22FaiVgURw17fqiTOaMseXNuMZQavyo0EDQv2I3rkL7WFdhrAY9R9S5gOq7N4" 
                alt="Modern minimalist office interior with green plants" 
                fill
                className="object-cover object-center"
                unoptimized
              />
            </div>
            <div className="relative z-10 max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">تواصل معنا</h1>
              <p className="opacity-80 text-lg md:text-xl leading-relaxed">نحن هنا لمساعدتكم. تواصلوا معنا لأي استفسارات حول منتجاتنا أو خدماتنا، وسيقوم فريقنا بالرد عليكم في أقرب وقت.</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form Section (Bento Style) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-[2rem] shadow-sm border border-outline-variant/10">
              <h2 className="text-2xl font-bold mb-8 text-primary font-headline">أرسل لنا رسالة</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface-variant px-1 font-headline">الاسم الكامل</label>
                    <input className="w-full bg-surface-container border-none rounded-xl focus:ring-2 focus:ring-primary/50 transition-all py-4 px-5 font-medium" placeholder="أدخل اسمك" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-on-surface-variant px-1 font-headline">البريد الإلكتروني</label>
                    <input className="w-full bg-surface-container border-none rounded-xl focus:ring-2 focus:ring-primary/50 transition-all py-4 px-5 text-right font-medium" dir="ltr" placeholder="example@domain.com" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-on-surface-variant px-1 font-headline">رقم الجوال</label>
                  <input className="w-full bg-surface-container border-none rounded-xl focus:ring-2 focus:ring-primary/50 transition-all py-4 px-5 text-right font-medium" dir="ltr" placeholder="+966 50 000 0000" type="tel" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-on-surface-variant px-1 font-headline">الرسالة</label>
                  <textarea className="w-full bg-surface-container border-none rounded-xl focus:ring-2 focus:ring-primary/50 transition-all py-4 px-5 resize-none font-medium h-32" placeholder="كيف يمكننا مساعدتك؟"></textarea>
                </div>
                <button className="w-full py-4 mt-2 bg-gradient-to-r from-primary to-[#008648] text-white font-bold rounded-xl shadow-md shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                  <span>إرسال الرسالة</span>
                  <span className="material-symbols-outlined pb-1">send</span>
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="h-80 bg-surface-container rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-sm border border-outline-variant/10">
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center overflow-hidden">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRySJTDJYeNaf8YWTx6rMNJ4E1SqctQuMZXKuAXYO9c2hizZvEsOYIotKVgm1u_FKIi5-8gqog4evb_qVic9eDbSyZA9bAAcQSOv3vTT9et7tDCxJ_f3o5AAzkFdQgPFkZxRXl_ewlpRJ0UeiKMPgJ8P0bLGaQT7EEJU6U2SCiiwlbly7_oCkdyg8kGOzPlDj0yAUgcNtEj34qudIFk0KBjW_13shePf7pX8sNI90FhCmLuZoIKSHfEyVJ6XSRV5apMI2UNl_xhHs" 
                  alt="Stylized map showing urban city layout of Riyadh" 
                  fill
                  className="object-cover grayscale opacity-50 group-hover:opacity-70 transition-opacity"
                  unoptimized
                />
                <div className="absolute bg-surface-container-lowest px-6 py-4 rounded-xl shadow-lg border border-outline-variant/20 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface font-headline">موقعنا في الرياض</p>
                    <p className="text-xs text-on-surface-variant mt-1">حي الملقا، طريق أنس بن مالك</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Service Info (Side Bento Columns) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Working Hours */}
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 border-r-4 border-r-primary">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
                <h3 className="text-xl font-bold font-headline">أوقات العمل</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-surface-container pb-4">
                  <span className="text-on-surface-variant font-medium">السبت - الخميس</span>
                  <span className="font-bold text-emerald-950 font-label" dir="ltr">08:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-surface-container pb-4">
                  <span className="text-on-surface-variant font-medium">الجمعة</span>
                  <span className="font-bold text-emerald-950 font-label" dir="ltr">01:00 PM - 11:00 PM</span>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <span className="text-on-surface-variant font-medium">خدمة العملاء (واتساب)</span>
                  <span className="font-black text-primary font-label tracking-wider">24/7</span>
                </li>
              </ul>
            </div>

            {/* Contact Detail Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="bg-surface-container-low p-6 rounded-[2rem] hover:bg-surface-bright transition-colors border border-outline-variant/10">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-outline-variant/5">
                    <span className="material-symbols-outlined text-primary text-xl">call</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-on-surface-variant mb-1 font-label uppercase tracking-widest font-bold">Call Us</p>
                    <p className="font-bold text-lg text-emerald-950 font-label" dir="ltr">+966 9200 00000</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-6 rounded-[2rem] hover:bg-surface-bright transition-colors border border-outline-variant/10">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-outline-variant/5">
                    <span className="material-symbols-outlined text-primary text-xl">mail</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-on-surface-variant mb-1 font-label uppercase tracking-widest font-bold">Email Support</p>
                    <p className="font-bold text-lg text-emerald-950 font-label" dir="ltr">support@rofof.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Location */}
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10">
              <h3 className="text-xl font-bold mb-6 font-headline">تابعنا على</h3>
              <div className="flex gap-4">
                <a className="w-14 h-14 flex items-center justify-center bg-surface-container-low rounded-2xl hover:bg-primary hover:text-white text-emerald-950 transition-all border border-outline-variant/10 shadow-sm" href="#">
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a className="w-14 h-14 flex items-center justify-center bg-surface-container-low rounded-2xl hover:bg-primary hover:text-white text-emerald-950 transition-all border border-outline-variant/10 shadow-sm" href="#">
                  <span className="material-symbols-outlined">share_reviews</span>
                </a>
                <a className="w-14 h-14 flex items-center justify-center bg-surface-container-low rounded-2xl hover:bg-primary hover:text-white text-emerald-950 transition-all border border-outline-variant/10 shadow-sm" href="#">
                  <span className="material-symbols-outlined">photo_camera</span>
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-surface-container">
                <p className="text-sm leading-relaxed text-on-surface-variant font-medium">
                  المكتب الرئيسي: <br/>
                  برج رفوف، طريق الملك فهد <br/>
                  الرياض 11234، المملكة العربية السعودية
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
