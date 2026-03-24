import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function OrderTrackingPage() {
  const steps = [
    { title: "تم استلام الطلب", desc: "١٢:٣٠ م، ١٢ أكتوبر", status: "completed", icon: "inventory_2" },
    { title: "جاري التجهيز", desc: "١٢:٤٥ م، ١٢ أكتوبر", status: "completed", icon: "box" },
    { title: "في الطريق", desc: "الوقت المتوقع: ٤٥ دقيقة", status: "active", icon: "local_shipping" },
    { title: "تم التوصيل", desc: "قريباً", status: "pending", icon: "home" },
  ];

  return (
    <>
      <Header />
      <main className="mt-[154px] pt-4 pb-20 bg-surface-container-low min-h-screen">
        <div className="max-w-screen-xl mx-auto px-6 mb-8">
          <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">home</span>
              الرئيسية
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <Link href="/orders" className="hover:text-primary transition-colors">
              سجل الطلبات
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="text-on-surface font-bold">تتبع الطلب</span>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div className="bg-white rounded-[3rem] p-10 shadow-sm shadow-emerald-900/5 border border-outline-variant/10">
              <div className="flex items-center justify-between mb-10 pb-6 border-b border-outline-variant/10">
                <div>
                  <h1 className="text-3xl font-extrabold font-headline text-emerald-950 mb-2" dir="ltr">#ORD-98342</h1>
                  <p className="text-sm font-bold text-on-surface-variant">الطلب في الطريق إليك المندوب يبعد حوالي ١٥ دقيقة</p>
                </div>
                <div className="hidden sm:flex flex-col items-center justify-center p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <span className="text-xs text-primary font-bold uppercase tracking-widest mb-1">وقت الوصول المتوقع</span>
                  <span className="text-2xl font-black text-primary font-headline" dir="ltr">01:15 PM</span>
                </div>
              </div>

              {/* Progress Tracker */}
              <div className="relative py-8">
                {/* Connecting Line */}
                <div className="absolute right-7 top-14 bottom-14 w-1 bg-surface-container rounded-full z-0"></div>
                <div className="absolute right-7 top-14 h-3/4 w-1 bg-primary rounded-full z-0"></div>

                <div className="flex flex-col gap-10 relative z-10">
                  {steps.map((step, idx) => (
                    <div key={idx} className={`flex items-start gap-6 group ${step.status === 'pending' ? 'opacity-50' : ''}`}>
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border-2 transition-all ${step.status === 'completed' ? 'bg-primary border-primary text-white' : step.status === 'active' ? 'bg-emerald-50 border-primary text-primary shadow-lg shadow-primary/20 scale-110' : 'bg-surface-container-lowest border-outline-variant/30 text-outline-variant'}`}>
                        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                          {step.icon}
                        </span>
                      </div>
                      <div className="pt-3">
                        <h3 className={`text-xl font-bold font-headline mb-1 ${step.status === 'active' ? 'text-primary' : 'text-on-surface'}`}>{step.title}</h3>
                        <p className={`text-sm font-medium ${step.status === 'active' ? 'text-emerald-700' : 'text-outline'}`}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-[2rem] p-8 shadow-sm shadow-emerald-900/5 border border-outline-variant/10 flex items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center overflow-hidden border-2 border-primary">
                  <span className="material-symbols-outlined text-3xl text-outline-variant">person</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold font-headline text-emerald-950 mb-1">أحمد محمد</h4>
                  <div className="flex items-center gap-1 text-xs text-on-surface-variant font-bold">
                    <span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ٤.٩ (٣٠٠+ توصيلة)
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm">
                  <span className="material-symbols-outlined">chat</span>
                </button>
                <button className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-container transition-colors shadow-md shadow-primary/20">
                  <span className="material-symbols-outlined">call</span>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm shadow-emerald-900/5 sticky top-[180px] border border-outline-variant/10">
              <h3 className="text-xl font-bold font-headline text-emerald-950 mb-6 pb-4 border-b border-outline-variant/20">تفاصيل التوصيل</h3>
              
              <div className="flex items-start gap-4 mb-8">
                <span className="material-symbols-outlined text-outline">location_on</span>
                <div>
                  <span className="text-sm font-bold text-on-surface block mb-1">عنوان التوصيل</span>
                  <p className="text-sm text-on-surface-variant leading-relaxed">الرياض، حي النخيل<br/>شارع التخصصي، مبنى ٤٥</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-8">
                <span className="material-symbols-outlined text-outline">payments</span>
                <div>
                  <span className="text-sm font-bold text-on-surface block mb-1">طريقة الدفع</span>
                  <p className="text-sm text-on-surface-variant leading-relaxed">البطاقة الائتمانية (تم سداد ١٤٥ ر.س)</p>
                </div>
              </div>

              <div className="w-full h-48 bg-surface-container rounded-2xl overflow-hidden relative border border-outline-variant/20">
                <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=24.7136,46.6753&zoom=13&size=400x400&sensor=false')] bg-cover opacity-50 grayscale"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-primary/20 flex flex-col justify-center items-center text-primary font-bold text-xs gap-1">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>my_location</span>
                    تتبع حي
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
