import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CheckoutPage() {
  const subtotal = 33.0;
  const delivery = 0;
  const total = 33.0;

  return (
    <>
      <Header />
      <main className="mt-[154px] pt-4 pb-20 bg-surface-container-low min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-screen-2xl mx-auto px-6 mb-8">
          <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">home</span>
              الرئيسية
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <Link href="/cart" className="hover:text-primary transition-colors">
              سلة التسوق
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="text-on-surface font-bold">إتمام الطلب</span>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold font-headline text-emerald-950 mb-10 pb-6 border-b border-outline-variant/10">إتمام الطلب</h1>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column: Details */}
            <div className="flex-1 flex flex-col gap-8">
              
              {/* Delivery Address */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm shadow-emerald-900/5 border border-outline-variant/10">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold font-headline text-on-surface flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary bg-emerald-50 p-2 rounded-xl">location_on</span>
                    عنوان التوصيل
                  </h2>
                  <button className="text-sm font-bold text-primary hover:underline">تغيير العنوان</button>
                </div>

                <label className="flex items-start gap-4 p-5 rounded-2xl border-2 border-primary bg-emerald-50/30 cursor-pointer transition-colors relative">
                  <span className="material-symbols-outlined text-primary absolute left-4 top-1/2 -translate-y-1/2" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <div className="flex flex-col gap-1 w-full pl-10 text-right">
                    <div className="flex items-center justify-between pointer-events-none w-full">
                      <span className="font-bold text-on-surface text-lg">المنزل</span>
                      <span className="bg-emerald-100 text-primary px-3 py-1 rounded-lg text-[10px] font-bold">الافتراضي</span>
                    </div>
                    <span className="text-sm text-on-surface-variant">محمد عبدالله</span>
                    <span className="text-sm text-on-surface-variant">الرياض، حي النخيل، شارع التخصصي، مبنى ٤٥</span>
                    <span className="text-sm text-on-surface-variant mt-2 font-bold" dir="ltr">+966 50 123 4567</span>
                  </div>
                </label>

                <button className="flex items-center gap-2 mt-4 text-sm font-bold text-outline hover:text-primary transition-colors w-fit mr-auto">
                  <span className="material-symbols-outlined text-xl">add_circle</span>
                  إضافة عنوان جديد
                </button>
              </div>

              {/* Delivery Time */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm shadow-emerald-900/5 border border-outline-variant/10">
                <h2 className="text-2xl font-bold font-headline text-on-surface flex items-center gap-3 mb-8">
                  <span className="material-symbols-outlined text-primary bg-emerald-50 p-2 rounded-xl">schedule</span>
                  وقت التوصيل
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex items-center gap-4 p-5 rounded-2xl border border-outline-variant/20 hover:border-primary/50 cursor-pointer transition-colors relative group">
                    <input type="radio" name="delivery_time" className="hidden" />
                    <div className="w-6 h-6 rounded-full border-2 border-outline-variant group-hover:border-primary flex items-center justify-center transition-colors">
                    </div>
                    <div>
                      <span className="block font-bold text-on-surface">أسرع وقت ممكن</span>
                      <span className="block text-xs text-on-surface-variant mt-1">خلال ٦٠ دقيقة (٢٤ ريال)</span>
                    </div>
                  </label>
                  
                  <label className="flex items-center gap-4 p-5 rounded-2xl border-2 border-primary bg-emerald-50/30 cursor-pointer transition-colors relative">
                    <input type="radio" name="delivery_time" defaultChecked className="hidden" />
                    <div className="w-6 h-6 rounded-full border-2 border-primary bg-primary flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    </div>
                    <div>
                      <span className="block font-bold text-on-surface">توصيل مجدول</span>
                      <span className="block text-xs text-primary mt-1 font-bold">اليوم، ٥:٠٠ م - ٧:٠٠ م (مجاناً)</span>
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Column: Order Summary */}
            <aside className="w-full lg:w-96 flex-shrink-0">
              <div className="bg-white rounded-[2rem] p-8 shadow-sm shadow-emerald-900/5 sticky top-[180px] border border-outline-variant/10">
                <h2 className="text-xl font-bold font-headline text-emerald-950 mb-6 pb-4 border-b border-outline-variant/20">ملخص الطلب</h2>
                
                <div className="flex flex-col gap-4 text-sm font-medium mb-6">
                  <div className="flex justify-between items-center bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/10 cursor-pointer group hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 bg-surface-container rounded-lg p-1 border border-outline-variant/10">
                         <Image alt="apple" fill className="object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp6jFEqV-OYVGw2lGRuMdjkooM4OBC_5vGe6-xSCm3SmhI2Rl0OI-GA7ixu-pI7xn0k3vy5CXQI9uRISs4xI53EYR0dWA3cm7PYYJLe427CZog9nArrZZjufEM6nynzufUlB7UiT3kFlseJEbsqYtodO5-iBag41yK2NXwjhJnY5-ADcTYmBzlsQGfY-aehuwpFf1rfRpW4Z6dfxZTyDwt5TOZXI1B7ATGabjcf19Of8Z7bjYrMdM0dW_YmPT7ywdr09mCKDgjjf8" />
                         <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">٢</span>
                      </div>
                      <span className="font-bold text-on-surface text-xs group-hover:text-primary transition-colors">تفاح جالا أحمر</span>
                    </div>
                    <span className="font-bold text-primary">٢٤.٠٠ ر.س</span>
                  </div>
                  
                  <div className="flex justify-between items-center bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/10 cursor-pointer group hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 bg-surface-container rounded-lg p-1 border border-outline-variant/10">
                         <Image alt="tomato" fill className="object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoTM6MhxbIIhtdGca1EOvCKTRVirl4NUiceb0KdulsX0aQxLoKeRbRPcFn_WIpduU1AgSy5zxThQqgTNecslPkb3OsLpL8sAZ45X-2fFQRNCgWB-gjO0mnZE4v5yeNHFve-67yRpAi-trv3yJTTNdL5ikTthdFq6CVYMV7YgkqhbukIdAYnJ8GEj8cSjQWUHYFCRCkNN0mp3rrqSyxQ0lm8ll3a7x5Rm7n8L6qVEMbQLzC4VuN11WhW-0p9A858lubnD0rdGXqzPE" />
                         <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">٢</span>
                      </div>
                      <span className="font-bold text-on-surface text-xs group-hover:text-primary transition-colors">طماطم بلدي طازجة</span>
                    </div>
                    <span className="font-bold text-primary">٩.٠٠ ر.س</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-sm font-medium mb-6 mt-6 pt-6 border-t border-outline-variant/20">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>المجموع الفرعي (٤ منتجات)</span>
                    <span className="font-bold text-on-surface">{subtotal.toFixed(2)} ر.س</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>التوصيل</span>
                    <span className="font-bold text-primary">مجاني</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xl font-extrabold font-headline mb-8 pt-6 border-y border-outline-variant/20 pb-6">
                  <span className="text-emerald-950">الإجمالي</span>
                  <span className="text-primary">{total.toFixed(2)} <span className="text-sm font-bold">ر.س</span></span>
                </div>

                <Link href="/checkout/payment" className="w-full h-14 flex items-center justify-center gap-2 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-container transition-colors shadow-xl shadow-primary/20 group transform active:scale-[0.98]">
                  <span>المتابعة لاختيار طريقة الدفع</span>
                  <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
