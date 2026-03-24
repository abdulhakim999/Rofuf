import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-[154px] pt-8 pb-20">
        {/* Hero Section */}
        <section className="max-w-screen-2xl mx-auto px-6 mb-12">
          <div className="asymmetric-grid">
            {/* Main Banner */}
            <div className="relative h-[480px] rounded-[2rem] overflow-hidden group">
              <Image
                alt="vibrant collection of fresh organic vegetables"
                fill
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_D0q92bYj9OPwmpsxuZ9UBSQk6aWOvOE9suE3rHK5n7jvreQPH92F87XTS1MUTFuok50T4YNE4BU1G0hnBo37BeR8dZjaE85Wrn22qCF2W9TMifBzDFvXzRPJ9IvZyppA_NjGjbgitYafVTGFT_YC_etvpAEUvHMzu7G5D--2oDT_QmxmI7VhqOPsrVViIT0znvGqKJV1i1pF2iwKoE8GfspFs6toa1GE9nr24ChKYrx432UvucamyI1HECZJwyrW0ztb7tUo8ZI"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-emerald-950/60 to-transparent flex flex-col justify-center px-8 md:px-16 text-white rtl">
                <span className="bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold w-fit mb-6 animate-pulse">
                  عرض حصري للتطبيق
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 max-w-lg font-headline">
                  كل احتياجات بيتك<br />تصلك بسرعة وبجودة طازجة
                </h1>
                <p className="text-lg text-emerald-50 mb-8 max-w-md opacity-90">
                  استمتع بتجربة تسوق فريدة مع خدمة التوصيل الأسرع في الرياض وجدة
                </p>
                <button className="bg-white text-emerald-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all w-fit shadow-xl shadow-black/20">
                  ابدأ التسوق الآن
                </button>
              </div>
            </div>

            {/* Side Banners */}
            <div className="flex flex-col gap-6">
              <div className="relative h-[228px] rounded-[2rem] overflow-hidden bg-secondary-container p-8 flex flex-col justify-end text-white">
                <Image
                  alt="professional cleaning supplies"
                  fill
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDndeEBs6x1P4LTvA1bMzh_Zp7fae5vGN7HIhy11zmI2Fv6FtTAslRuUeRNGHivzhCzjAQu7V5Wv0JhWXqFMqJ0SWOMtw5NshB24gaD6W_8_7AaDCh_rICju-d62iLluVhSq9DkBKXnOibH9-s9rw6R7GOGakOVh4LWPBebVS-xW-vBP3CINKKkK0W3W9GHgFEv_PcXMbJwLFEcpZCHxhJk6VFxcY4_WaHNys7ro-37UQT31JKiBARrEpsCzaTorQsYdQtHq64ODHg"
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">وفر ٥٠٪ على المنظفات</h3>
                  <p className="text-sm opacity-90 mb-4">أفضل الماركات العالمية بأسعار مذهلة</p>
                  <span className="text-sm underline font-bold cursor-pointer">تسوق الآن</span>
                </div>
              </div>

              <div className="relative h-[228px] rounded-[2rem] overflow-hidden bg-tertiary-container p-8 flex flex-col justify-end text-white">
                <Image
                  alt="tropical fruits"
                  fill
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHfijp1n3S_VRX9hITVsQkNdO5HJpKbsBFZDzMF4-fBnUyd7Utot-L8AQdIt8Q4LUp1omvQ6F6xZC89l8am3yvUimlnGbSQQ5Va-lc6wlCC_7Zrl_K-iPC5vY7cAW9riX13AeaLtQHUs0Goe4IGpiECsCbscGjF5MHEND_O60NRxEZPdHzhyLcXvPxyfBH3wAM6AWdZJJoj7r-0ukBM3RXn7EDKkhXdUBHuCpFZJF-jz7foItn82CVVST_OF6bc4PWtct4QPkkeCg"
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">سلة الفواكه الطازجة</h3>
                  <p className="text-sm opacity-90 mb-4">قطاف اليوم يصل إلى باب منزلك</p>
                  <span className="text-sm underline font-bold cursor-pointer">اكتشف المزيد</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Categories (Grid) */}
        <section className="max-w-screen-2xl mx-auto px-6 mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold font-headline text-emerald-900">تسوق بالأقسام</h2>
            <Link href="/categories" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
              عرض جميع الأقسام <span className="material-symbols-outlined text-sm">arrow_back</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 gap-4">
            {/* Category 1 */}
            <div className="flex flex-col items-center gap-3 p-4 bg-surface-container-lowest rounded-2xl hover:bg-emerald-50 transition-all cursor-pointer group border border-transparent hover:border-emerald-100">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              </div>
              <span className="text-xs font-bold text-on-surface text-center">خضار</span>
            </div>
            {/* Category 2 */}
            <div className="flex flex-col items-center gap-3 p-4 bg-surface-container-lowest rounded-2xl hover:bg-emerald-50 transition-all cursor-pointer group border border-transparent hover:border-emerald-100">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>fiber_manual_record</span>
              </div>
              <span className="text-xs font-bold text-on-surface text-center">فواكه</span>
            </div>
            {/* Category 3 */}
            <div className="flex flex-col items-center gap-3 p-4 bg-surface-container-lowest rounded-2xl hover:bg-emerald-50 transition-all cursor-pointer group border border-transparent hover:border-emerald-100">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>egg</span>
              </div>
              <span className="text-xs font-bold text-on-surface text-center">ألبان</span>
            </div>
            {/* Category 4 */}
            <div className="flex flex-col items-center gap-3 p-4 bg-surface-container-lowest rounded-2xl hover:bg-emerald-50 transition-all cursor-pointer group border border-transparent hover:border-emerald-100">
              <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-700 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>bakery_dining</span>
              </div>
              <span className="text-xs font-bold text-on-surface text-center">مخبوزات</span>
            </div>
            {/* Category 5 */}
            <div className="flex flex-col items-center gap-3 p-4 bg-surface-container-lowest rounded-2xl hover:bg-emerald-50 transition-all cursor-pointer group border border-transparent hover:border-emerald-100">
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-red-700 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>kebab_dining</span>
              </div>
              <span className="text-xs font-bold text-on-surface text-center">لحوم</span>
            </div>
            {/* Category 6 */}
            <div className="flex flex-col items-center gap-3 p-4 bg-surface-container-lowest rounded-2xl hover:bg-emerald-50 transition-all cursor-pointer group border border-transparent hover:border-emerald-100">
              <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-700 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>set_meal</span>
              </div>
              <span className="text-xs font-bold text-on-surface text-center">دواجن</span>
            </div>
            {/* Category 7 */}
            <div className="flex flex-col items-center gap-3 p-4 bg-surface-container-lowest rounded-2xl hover:bg-emerald-50 transition-all cursor-pointer group border border-transparent hover:border-emerald-100">
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-700 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>ac_unit</span>
              </div>
              <span className="text-xs font-bold text-on-surface text-center">مجمدات</span>
            </div>
            {/* Category 8 */}
            <div className="flex flex-col items-center gap-3 p-4 bg-surface-container-lowest rounded-2xl hover:bg-emerald-50 transition-all cursor-pointer group border border-transparent hover:border-emerald-100">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_drink</span>
              </div>
              <span className="text-xs font-bold text-on-surface text-center">مشروبات</span>
            </div>
            {/* Category 9 */}
            <div className="flex flex-col items-center gap-3 p-4 bg-surface-container-lowest rounded-2xl hover:bg-emerald-50 transition-all cursor-pointer group border border-transparent hover:border-emerald-100">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>cookie</span>
              </div>
              <span className="text-xs font-bold text-on-surface text-center">سناكات</span>
            </div>
            {/* Category 10 */}
            <div className="flex flex-col items-center gap-3 p-4 bg-surface-container-lowest rounded-2xl hover:bg-emerald-50 transition-all cursor-pointer group border border-transparent hover:border-emerald-100">
              <div className="w-16 h-16 rounded-2xl bg-slate-200 flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>cleaning_services</span>
              </div>
              <span className="text-xs font-bold text-on-surface text-center">منظفات</span>
            </div>
            {/* Category 11 */}
            <div className="flex flex-col items-center gap-3 p-4 bg-surface-container-lowest rounded-2xl hover:bg-emerald-50 transition-all cursor-pointer group border border-transparent hover:border-emerald-100">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>home_work</span>
              </div>
              <span className="text-xs font-bold text-on-surface text-center">منزليات</span>
            </div>
            {/* Category 12 (Offers) */}
            <div className="flex flex-col items-center gap-3 p-4 bg-red-50 rounded-2xl hover:bg-red-100 transition-all cursor-pointer group border border-red-100">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
              <span className="text-xs font-bold text-secondary text-center">عروض</span>
            </div>
          </div>
        </section>

        {/* Flash Deals Section */}
        <section className="bg-surface-container-low py-16 mb-16">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
              <div className="flex items-center gap-6">
                <h2 className="text-3xl font-extrabold font-headline text-emerald-950 flex items-center gap-3">
                  عروض قوية
                  <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                </h2>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-secondary/20">
                  <span className="text-xs font-bold text-on-surface-variant">تنتهي خلال:</span>
                  <div className="flex gap-2 text-secondary font-headline font-bold">
                    <span className="bg-secondary/10 px-2 rounded">١٢</span>:<span className="bg-secondary/10 px-2 rounded">٤٥</span>:<span className="bg-secondary/10 px-2 rounded">٣٠</span>
                  </div>
                </div>
              </div>
              <button className="bg-secondary text-white px-8 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
                مشاهدة الكل
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {/* Product Card 1 */}
              <div className="bg-white rounded-3xl p-5 group relative transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/5 flex flex-col">
                <button className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-outline hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
                <div className="absolute top-4 left-4 z-10 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-lg">-٣٥٪</div>
                <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl">
                  <Image
                    alt="pineapple"
                    fill
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoTM6MhxbIIhtdGca1EOvCKTRVirl4NUiceb0KdulsX0aQxLoKeRbRPcFn_WIpduU1AgSy5zxThQqgTNecslPkb3OsLpL8sAZ45X-2fFQRNCgWB-gjO0mnZE4v5yeNHFve-67yRpAi-trv3yJTTNdL5ikTthdFq6CVYMV7YgkqhbukIdAYnJ8GEj8cSjQWUHYFCRCkNN0mp3rrqSyxQ0lm8ll3a7x5Rm7n8L6qVEMbQLzC4VuN11WhW-0p9A858lubnD0rdGXqzPE"
                  />
                </div>
                <div className="mb-2">
                  <span className="text-[10px] text-outline font-bold uppercase tracking-wider">خضار وفواكه</span>
                  <h3 className="text-sm font-bold text-on-surface line-clamp-2 mt-1">أناناس فاخر - حبة واحدة</h3>
                  <p className="text-[11px] text-on-surface-variant mt-1">حوالي ١.٢ كجم</p>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <span className="material-symbols-outlined text-amber-400 text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-[10px] font-bold">٤.٩</span>
                  <span className="text-[10px] text-outline">(١٢٠ تقييم)</span>
                </div>
                <div className="mt-auto flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-secondary text-lg font-bold">١٢.٥٠ ر.س</span>
                    <span className="text-xs text-outline line-through">١٨.٧٥ ر.س</span>
                  </div>
                  <button className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-all shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-white rounded-3xl p-5 group relative transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/5 flex flex-col">
                <div className="absolute top-4 left-4 z-10 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-lg">-٢٠٪</div>
                <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl">
                  <Image
                    alt="milk"
                    fill
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4EcBJcIWZ5dG5O9QW67nJBWOsFAsie6hs2nQDATSnMIh6CLAQ4bglXckwc7m3d8DTv1GooljAoLRf1wSw1MmCC3MWPDV2-VTqDCdzLQQye1VJcY15xWyufrTW7_jgiWSl2Gv4xg72nWUpyRi_0hOoTOymqwpPv7cWG7dJItXp_whMhsdR5M5HEcQO3NftNPV94GJgwmN2-vl5YLy4MzZP3gzoP50QPZPJm7PwVFtcVKC-46jdFALoFXRosVPICaxgrY5VrzAmPs4"
                  />
                </div>
                <div className="mb-2">
                  <span className="text-[10px] text-outline font-bold uppercase tracking-wider">ألبان</span>
                  <h3 className="text-sm font-bold text-on-surface line-clamp-2 mt-1">حليب طازج كامل الدسم - ٢ لتر</h3>
                  <p className="text-[11px] text-on-surface-variant mt-1">عبوة بلاستيكية</p>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <span className="material-symbols-outlined text-amber-400 text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-[10px] font-bold">٥.٠</span>
                </div>
                <div className="mt-auto flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-secondary text-lg font-bold">٩.٠٠ ر.س</span>
                    <span className="text-xs text-outline line-through">١١.٥٠ ر.س</span>
                  </div>
                  <button className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-all shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="bg-white rounded-3xl p-5 group relative transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/5 flex flex-col">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl">
                  <Image
                    alt="eggs"
                    fill
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6QE3xSnw38y3iOK6eyn6fUSHbZUTKhXCEbXOTVIDI2VlS3lDAeUowBZXsnItecS6cE4z1zzgEla_ZTM9wpTYt91tQP6VqqUU85yBFUIqQnuPx-vUuWpo2X1sHM_likav6zPc7HPRbfejm_1dQlCFXR7AaSGCpQ6UULAHus1_NUWqq83m637LdrMINWIrjYWS1jVlgX_iKC4UGmpsarn9aMb8FxE9gpzQyalhiDVb_cMUxB5B7jiwNbIS29c4e84QQoOqDPJyGpZ0"
                  />
                </div>
                <div className="mb-2">
                  <span className="text-[10px] text-outline font-bold uppercase tracking-wider">ألبان وبيض</span>
                  <h3 className="text-sm font-bold text-on-surface line-clamp-2 mt-1">بيض دجاج طازج - طبق ٣٠ حبة</h3>
                  <p className="text-[11px] text-on-surface-variant mt-1">كبير الحجم</p>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <span className="material-symbols-outlined text-amber-400 text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-[10px] font-bold">٤.٧</span>
                </div>
                <div className="mt-auto flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-primary text-lg font-bold">٢٢.٠٠ ر.س</span>
                  </div>
                  <button className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-all shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>

              {/* Product Card 4 */}
              <div className="bg-white rounded-3xl p-5 group relative transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/5 flex flex-col">
                <div className="absolute top-4 left-4 z-10 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-lg">الأكثر مبيعاً</div>
                <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl">
                  <Image
                    alt="apples"
                    fill
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp6jFEqV-OYVGw2lGRuMdjkooM4OBC_5vGe6-xSCm3SmhI2Rl0OI-GA7ixu-pI7xn0k3vy5CXQI9uRISs4xI53EYR0dWA3cm7PYYJLe427CZog9nArrZZjufEM6nynzufUlB7UiT3kFlseJEbsqYtodO5-iBag41yK2NXwjhJnY5-ADcTYmBzlsQGfY-aehuwpFf1rfRpW4Z6dfxZTyDwt5TOZXI1B7ATGabjcf19Of8Z7bjYrMdM0dW_YmPT7ywdr09mCKDgjjf8"
                  />
                </div>
                <div className="mb-2">
                  <span className="text-[10px] text-outline font-bold uppercase tracking-wider">خضار وفواكه</span>
                  <h3 className="text-sm font-bold text-on-surface line-clamp-2 mt-1">تفاح جالا أحمر - كيس ١ كجم</h3>
                  <p className="text-[11px] text-on-surface-variant mt-1">مستورد طازج</p>
                </div>
                <div className="mt-auto flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-primary text-lg font-bold">٦.٥٠ ر.س</span>
                  </div>
                  <button className="w-12 h-12 rounded-2xl bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-all shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>

              {/* Product Card 5 */}
              <div className="bg-white rounded-3xl p-5 group relative transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/5 flex flex-col">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl">
                  <Image
                    alt="baguette"
                    fill
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0V2uT8xZAVI30YRnzfIUk-_mPAFgxFVrHaGv6eNLTnhXQ-7peSzYMKyKWcMuNvY7rRWZL2y9fyMgBGZVtXV1MKoDYuD3fPBINc_6ZHw8WSxxXpzY1BXzRR19Gg8yt0b2rtmR5bDWJrCyqt81LscQjJmbG4PnGoxOF1lU7qqNcxLLUldHpNCBQyFui6hUqcQtk_pI4aOfJB08JXhujqhWC5VazyQ4D5-tL7uCFci9lDuvSRBRI50meZ1ekK9Kg2xE6FeVApCauvAs"
                  />
                </div>
                <div className="mb-2">
                  <span className="text-[10px] text-outline font-bold uppercase tracking-wider">مخبوزات</span>
                  <h3 className="text-sm font-bold text-on-surface line-clamp-2 mt-1">خبز باجيت فرنسي طازج - حبتين</h3>
                  <p className="text-[11px] text-on-surface-variant mt-1">مخبوز يومياً</p>
                </div>
                <div className="mt-auto flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-primary text-lg font-bold">٤.٥٠ ر.س</span>
                  </div>
                  <div className="flex items-center bg-surface-container rounded-xl overflow-hidden">
                    <button className="w-8 h-8 flex items-center justify-center text-primary font-bold hover:bg-emerald-100 transition-colors">+</button>
                    <span className="px-3 text-xs font-bold">١</span>
                    <button className="w-8 h-8 flex items-center justify-center text-primary font-bold hover:bg-emerald-100 transition-colors">-</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buy & Save Bundles */}
        <section className="max-w-screen-2xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-[2.5rem] overflow-hidden p-12 bg-emerald-900 text-white min-h-[320px] flex flex-col justify-center">
              <Image
                alt="pasta"
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc2B44LNCp5pV_zBCQ91xNQYP5HED8lhKgWK9d4sb2NUL2_HmHWnoAQyV5c_kQtZcOcgw2vYBfRVonktHX6FPg3Zs0YJsssQzf3ZJ1knW4EhFI6WN2R601xTs3pgXpnLRCl7WB6ZzkMRxM05bsZJxvQvwdKvyfCKxvi84cjM7U3D_oX4tSwXuDzOMko97Sn37Qwc_eIk6OGpymzMv4pP09sNwgEqpmwqkls2yeh2QAofRDar0HIfDiRm0KBtfDZV6YfsLY7DEowj0"
              />
              <div className="relative z-10 max-w-sm">
                <h2 className="text-3xl font-extrabold mb-4 font-headline">عروض اشترِ ووفر</h2>
                <p className="text-lg opacity-80 mb-8">وفر حتى ٤٠٪ عند شراء المجموعات المختارة من مستلزمات الطبخ</p>
                <button className="bg-primary-fixed text-on-primary-fixed px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
                  تصفح الباقات
                </button>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden p-12 bg-secondary text-white min-h-[320px] flex flex-col justify-center">
              <Image
                alt="detergents"
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiVSKaN_ObpvLEqO3JujEgKRVZjhSA6fugltPURMAFYB4dkDBWWjW8hia2FBW-J5ZaZFpP581_7qh_NjIL6QhsrBAQev1D1jCozki3SFu3OOmdGMHALNdrvfqqKYzZCTO5t5OaLQdwFmaFW-mNqnLYA747yiHiDaemPw8D_afG0vXSeFpHqA6I_Hic1XJHqsr3RwJEu9Cp9GNRw6AIrHKgDD4t9Vp0Yk7edvAyWcZc1fiSRAo3kRsSGQX_uAnM1db59ecCokYG4YM"
              />
              <div className="relative z-10 max-w-sm">
                <h2 className="text-3xl font-extrabold mb-4 font-headline">مهرجان النظافة</h2>
                <p className="text-lg opacity-80 mb-8">اشترِ ٢ واحصل على ١ مجاناً على جميع منتجات العناية بالمنزل</p>
                <button className="bg-white text-secondary px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-all">
                  اكتشف العروض
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Features */}
        <section className="max-w-screen-2xl mx-auto px-6 mb-16 border-y border-outline-variant/10 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">bolt</span>
              </div>
              <div>
                <h4 className="font-bold text-sm">توصيل سريع</h4>
                <p className="text-[10px] text-outline mt-1">خلال ٦٠ دقيقة داخل الرياض</p>
              </div>
            </div>
            {/* Trust feature 2 */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">eco</span>
              </div>
              <div>
                <h4 className="font-bold text-sm">منتجات طازجة</h4>
                <p className="text-[10px] text-outline mt-1">جودة مضمونة ١٠٠٪</p>
              </div>
            </div>
            {/* Trust feature 3 */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">local_offer</span>
              </div>
              <div>
                <h4 className="font-bold text-sm">أسعار منافسة</h4>
                <p className="text-[10px] text-outline mt-1">عروض يومية لا تنتهي</p>
              </div>
            </div>
            {/* Trust feature 4 */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <div>
                <h4 className="font-bold text-sm">دفع آمن</h4>
                <p className="text-[10px] text-outline mt-1">خيارات دفع متعددة وموثوقة</p>
              </div>
            </div>
            {/* Trust feature 5 */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">support_agent</span>
              </div>
              <div>
                <h4 className="font-bold text-sm">دعم فني ٢٤/٧</h4>
                <p className="text-[10px] text-outline mt-1">دائماً في خدمتك</p>
              </div>
            </div>
          </div>
        </section>

        {/* App Promotion */}
        <section className="max-w-screen-2xl mx-auto px-6">
          <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 rounded-[3rem] p-12 overflow-hidden relative">
            <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12">
              <div className="flex-1 text-white text-center lg:text-right">
                <h2 className="text-4xl font-extrabold mb-6 font-headline leading-tight">تسوّق من أي مكان<br />عبر تطبيقنا الجديد</h2>
                <p className="text-lg opacity-80 mb-10">حمّل التطبيق الآن واحصل على خصم ١٥٪ على أول طلب لك باستخدام الكود: APP15</p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
                  <Image width={150} height={48} alt="App Store" className="h-12 w-auto cursor-pointer hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnucQR8g4Kr7mbk6j-Jp6__dMuz_31QnWf6f1jyQnHPlwuajEZD1yCxelJZJ_zBnGbb_LYhqjMqHErCIseEPPZKhKV0QlGVeifTLhUxb62yfnz7nHgNdHatWkjocTd4y_Gc2OOF9HSBOtDCUsdE84ekc6oVzp1kJd73qrukebW1UJzszI0tdxf_qTwUJK8WXf-bkt52FnwLLe2msHvRNxOllZYOC5ht4D0Q7s7m84_rcPlznFrNwrA60yxzwYsLXsB2kcOgGoynvE" />
                  <Image width={150} height={48} alt="Google Play" className="h-12 w-auto cursor-pointer hover:scale-105 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkvoLZIVAGKJGWs49oVTRxuhZluLrSrJCrsIZ4m1ewDbuAMNQR_vcfBbBmvJ-SplwuQamowKgYvvR6J0KqoBEKwIXONASOFe0EAEPhB9SaQQsPmBo3dI-1rNZOxvJgQMzkXku2OWV2ZlSOtka4msfQUUOgI6HN-LvEPiikCzBmrpa_i9fh2a4KBmpH7Mnir_19A4RMSxKgQXlhSfnyR4aEOneyudExMwQuq3v6N_z7DESwwkclTVusWVEiQ85cgyhyjEGJqdr0TXY" />
                  <div className="bg-white p-3 rounded-2xl flex items-center gap-3">
                    <Image width={56} height={56} alt="QR Code" className="w-14 h-14" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGxqof6UVGPCiC7NXI3bQ6QvKx2_8BlYqxjLMLQNr7R_lwmuva10deqgmC69bMhqbB20L-zwlWMJU1KBIzOhjziz30bGkLf-HQ7mDryxGac_acRNGlVTucZutfwbgXbAfzhDph7eLpk-b6-Qnj2si8kkFUTFBwuM_-o7wGFYs4fsHnyE-qlUqsx8AbVEMaTEG-pD8Jgw274ubkPErIYf7wXINk-95lgFooA8oKHTFHVFZfqvR6ISacq1b5CjgvKdj6kfbDioh4ICU" />
                    <div className="text-on-surface text-right">
                      <p className="text-[10px] font-bold">امسح الكود</p>
                      <p className="text-[10px] opacity-70">للتحميل السريع</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <Image width={400} height={600} alt="App mockup" className="max-w-md w-full h-auto drop-shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo_nhVJJIgAOwRnLhqhy3sJ7aMxjpMySiH8E0BsdWsXGMvR_l8EA9r81e6yhkqgYh9jwTpGfosm1E4zynojKSLR9JfKPizadgF7i_stgqp_ZFC7OpVwjDn9njHgFDNegraM6VdMFyG8rwZb77Vb0Fr5hw9iENlrLUOfDCSCnnKdht7ORzmVyj1Kb_JPWQi9ZnhNmLhTynQAxdTYKuAblWpYepzXqqWn7XBpYsfsu-alVS-2HraSYivCzu0p--0RiSJYwASy4CK9ko" />
              </div>
            </div>
            {/* Background decorations */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
