import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PaymentMethodsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-12 min-h-screen flex max-w-7xl mx-auto px-4 gap-8">
        {/* SideNavBar */}
        <aside className="hidden md:flex flex-col sticky top-28 h-[calc(100vh-140px)] w-64 p-4 rtl bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-outline-variant/10">
          <div className="mb-8 px-4">
            <h3 className="text-lg font-bold text-emerald-950 font-headline">مرحباً بك</h3>
            <p className="text-zinc-500 text-sm">إدارة حسابك</p>
          </div>
          <nav className="space-y-2 flex-grow">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-zinc-100 transition-all duration-300 ease-in-out rounded-lg">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-medium">لوحة التحكم</span>
            </Link>
            <Link href="/orders" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-zinc-100 transition-all duration-300 ease-in-out rounded-lg">
              <span className="material-symbols-outlined">package_2</span>
              <span className="font-medium">طلباتي</span>
            </Link>
            <Link href="/dashboard/addresses" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-zinc-100 transition-all duration-300 ease-in-out rounded-lg">
              <span className="material-symbols-outlined">location_on</span>
              <span className="font-medium">العناوين المحفوظة</span>
            </Link>
            <Link href="/checkout/payment" className="flex items-center gap-3 px-4 py-3 bg-white text-emerald-700 rounded-lg shadow-sm border border-outline-variant/10 font-bold transition-all duration-300 ease-in-out">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>credit_card</span>
              <span className="font-medium">وسائل الدفع</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-zinc-100 transition-all duration-300 ease-in-out rounded-lg">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-medium">الإعدادات</span>
            </Link>
          </nav>
          <button className="mt-auto flex items-center gap-3 px-4 py-3 text-red-600 font-bold hover:bg-red-50 rounded-lg transition-colors">
            <span className="material-symbols-outlined">logout</span>
            <span>تسجيل الخروج</span>
          </button>
        </aside>

        {/* Main Content Area */}
        <section className="flex-grow">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-emerald-950 mb-2 font-headline">وسائل الدفع</h2>
            <p className="text-on-surface-variant">قم بإدارة بطاقاتك ووسائل الدفع المفضلة لتجربة تسوق أسرع.</p>
          </div>

          {/* Bento Grid Layout for Payment Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1: Visa */}
            <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 group hover:shadow-md transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[4rem] -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="bg-surface-container-low p-2 rounded-lg">
                    <span className="material-symbols-outlined text-primary text-3xl">credit_card</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-emerald-950">البطاقة الرئيسية</h4>
                    <p className="text-xs text-on-surface-variant font-label" dir="ltr">VISA • Al Rajhi Bank</p>
                  </div>
                </div>
                <span className="bg-emerald-50 text-primary text-xs px-3 py-1 rounded-full font-bold">افتراضية</span>
              </div>
              <div className="flex justify-between items-end relative z-10">
                <div className="space-y-1" dir="ltr">
                  <p className="text-xl font-bold tracking-[0.2em] font-label text-emerald-950">•••• •••• •••• 4592</p>
                  <p className="text-sm text-on-surface-variant uppercase font-label">Expires 09/26</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors text-on-surface-variant">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="p-2 hover:bg-red-50 rounded-full transition-colors text-red-600">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Add New Card CTA */}
            <button className="bg-emerald-50/50 border-2 border-dashed border-primary/20 hover:border-primary/50 hover:bg-emerald-50 transition-all rounded-xl flex flex-col items-center justify-center p-8 gap-4 group">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-primary/20">
                <span className="material-symbols-outlined text-2xl">add</span>
              </div>
              <span className="font-bold text-primary">إضافة بطاقة جديدة</span>
            </button>

            {/* Card 2: Mada */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-[#0033a015] p-2 rounded-lg">
                    <span className="material-symbols-outlined text-[#0033a0] text-2xl">payments</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-950">بطاقة مدى</h4>
                    <p className="text-xs text-on-surface-variant font-label" dir="ltr">MADA • SNB</p>
                  </div>
                </div>
              </div>
              <p className="text-lg font-bold tracking-widest font-label mb-6 text-emerald-950" dir="ltr">•••• •••• •••• 8821</p>
              <div className="flex justify-between items-center" dir="ltr">
                <span className="text-xs text-on-surface-variant font-label">EXP 12/24</span>
                <div className="flex gap-1" dir="rtl">
                  <button className="text-xs font-bold text-primary hover:underline px-2 py-1">تعيين كافتراضية</button>
                </div>
              </div>
            </div>

            {/* Apple Pay Section */}
            <div className="lg:col-span-2 bg-[#1b1c1c] text-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden group gap-6 md:gap-0">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>ios</span>
                  <h4 className="text-xl font-bold font-headline">Apple Pay</h4>
                </div>
                <p className="text-zinc-400 text-sm max-w-md leading-relaxed">استمتع بدفع آمن وسريع بضغطة واحدة باستخدام Apple Pay. لا نحتاج لتخزين بيانات بطاقتك.</p>
              </div>
              <div className="relative z-10 flex flex-col items-start md:items-end gap-3 w-full md:w-auto">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-bold">مفعل</span>
                </div>
                <button className="w-full md:w-auto bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-zinc-200 transition-colors text-sm">إعدادات المحفظة</button>
              </div>
              {/* Decorative element */}
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Digital Wallet / Credits */}
            <div className="bg-surface-container p-6 rounded-xl relative border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                <h4 className="font-bold text-emerald-950">رصيد المحفظة</h4>
              </div>
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary tracking-tight font-headline" dir="ltr">125.00 <span className="text-sm font-label text-on-surface-variant">SAR</span></p>
                <p className="text-xs text-on-surface-variant mt-1">رصيد متاح للاستخدام في مشترياتك القادمة</p>
              </div>
              <button className="w-full py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-container transition-all text-sm shadow-md shadow-primary/20">
                شحن المحفظة
              </button>
            </div>
          </div>

          {/* Security Trust Badges */}
          <div className="mt-12 p-8 bg-surface-container-lowest rounded-2xl flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 md:gap-12 border border-outline-variant/20 shadow-sm">
            <div className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-2xl">encrypted</span>
              <span className="text-sm font-bold">تشفير SSL آمن 100%</span>
            </div>
            <div className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
              <span className="text-sm font-bold">متوافق مع معايير PCI DSS</span>
            </div>
            <div className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-2xl">gpp_good</span>
              <span className="text-sm font-bold">حماية المشتري المتقدمة</span>
            </div>
          </div>

          {/* Promotion / Banner */}
          <div className="mt-8 rounded-2xl h-auto md:h-48 relative overflow-hidden flex items-center p-8 md:px-12">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdIwJ-7mh2JhjbbZNS5fsJ8D40UAxq0OwhJU7ONfIv1KT41IkHTaj5aDZ7O1lObO8rkAEZM2VCXw-h3eCdjszzvT4jvYuMljlkHrdGGlaL3WI_Ckd-0EFy9nKdVG827gSAgAfjF-193YIOL-i4yLcBgisCUwGm0jvCLkzGAV-_zuXZI3nbMUtc7JsochN-6ZQ7lxevbaIpJD9M0qZG3fs2tyclcrXAzjQuESGiAdU48ClKUelZBlUNLkgCDmfuwtTeBVCXodMqmys" 
              alt="Cashback promotion" 
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-l from-emerald-950/90 via-emerald-950/50 to-transparent"></div>
            <div className="relative z-10 text-white max-w-sm">
              <h3 className="text-2xl lg:text-3xl font-bold font-headline mb-2 text-emerald-300">كاش باك ١٠٪!</h3>
              <p className="text-zinc-200 text-sm mb-6 leading-relaxed">عند الدفع باستخدام بطاقات مصرف الراجحي بحد أقصى ٥٠ ر.س.</p>
              <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                استخدم العرض الآن
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
