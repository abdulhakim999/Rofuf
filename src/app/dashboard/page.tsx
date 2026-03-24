import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="mt-[154px] pt-4 pb-20 bg-surface-container-low min-h-screen">
        <div className="max-w-screen-2xl mx-auto px-6 mb-8">
          <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">home</span>
              الرئيسية
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="text-on-surface font-bold">لوحة التحكم</span>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-[2rem] shadow-sm shadow-emerald-900/5 sticky top-[180px] border border-outline-variant/10 overflow-hidden">
                {/* User Profile Header */}
                <div className="p-8 bg-gradient-to-br from-emerald-950 to-primary text-white text-center flex flex-col items-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full border-4 border-white/20 flex items-center justify-center mb-4 relative overflow-hidden backdrop-blur-md">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                  </div>
                  <h2 className="text-xl font-bold font-headline mb-1">محمد عبدالله</h2>
                  <p className="text-xs text-emerald-100 opacity-90">+966 50 123 4567</p>
                </div>
                
                {/* Links */}
                <div className="p-4 flex flex-col gap-2">
                  <Link href="/dashboard" className="flex items-center gap-3 p-4 rounded-2xl bg-primary/10 text-primary font-bold transition-all border border-primary/20">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
                    لوحة التحكم
                  </Link>
                  <Link href="/orders" className="flex items-center gap-3 p-4 rounded-2xl text-on-surface-variant hover:bg-surface-container-lowest hover:text-primary transition-all font-medium border border-transparent">
                    <span className="material-symbols-outlined">shopping_bag</span>
                    سجل الطلبات
                  </Link>
                  <Link href="/dashboard/addresses" className="flex items-center gap-3 p-4 rounded-2xl text-on-surface-variant hover:bg-surface-container-lowest hover:text-primary transition-all font-medium border border-transparent">
                    <span className="material-symbols-outlined">location_on</span>
                    العناوين المحفوظة
                  </Link>
                  <button className="flex items-center gap-3 p-4 rounded-2xl text-on-surface-variant hover:bg-surface-container-lowest hover:text-primary transition-all font-medium border border-transparent w-full">
                    <span className="material-symbols-outlined">favorite</span>
                    قائمة الأمنيات
                  </button>
                  <button className="flex items-center gap-3 p-4 rounded-2xl text-on-surface-variant hover:bg-surface-container-lowest hover:text-primary transition-all font-medium border border-transparent w-full">
                    <span className="material-symbols-outlined">settings</span>
                    إعدادات الحساب
                  </button>
                  
                  <div className="h-px bg-outline-variant/20 my-2"></div>
                  
                  <button className="flex items-center gap-3 p-4 rounded-2xl text-secondary hover:bg-secondary/5 font-bold transition-all border border-transparent w-full group">
                    <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">logout</span>
                    تسجيل الخروج
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col gap-8">
              <h1 className="text-4xl font-extrabold font-headline text-emerald-950 mb-2">أهلاً بك، محمد!</h1>
              <p className="text-on-surface-variant mb-4">من هنا يمكنك إدارة حسابك، تتبع طلباتك، ومراجعة بياناتك الشخصية.</p>
              
              {/* Quick Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-[2rem] p-6 shadow-sm shadow-emerald-900/5 border border-outline-variant/10 flex items-center justify-between group hover:border-primary/30 transition-colors">
                  <div>
                    <span className="block text-xs text-outline font-bold uppercase tracking-wider mb-2">إجمالي الطلبات</span>
                    <span className="text-3xl font-extrabold text-emerald-950 font-headline">١٢</span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <span className="material-symbols-outlined text-3xl">shopping_cart_checkout</span>
                  </div>
                </div>

                <div className="bg-white rounded-[2rem] p-6 shadow-sm shadow-emerald-900/5 border border-outline-variant/10 flex items-center justify-between group hover:border-primary/30 transition-colors">
                  <div>
                    <span className="block text-xs text-outline font-bold uppercase tracking-wider mb-2">قيد التوصيل</span>
                    <span className="text-3xl font-extrabold text-secondary font-headline">١</span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                  </div>
                </div>

                <div className="bg-white rounded-[2rem] p-6 shadow-sm shadow-emerald-900/5 border border-outline-variant/10 flex items-center justify-between group hover:border-amber-500/30 transition-colors">
                  <div>
                    <span className="block text-xs text-outline font-bold uppercase tracking-wider mb-2">نقاط الولاء</span>
                    <span className="text-3xl font-extrabold text-amber-600 font-headline">٤٥٠</span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-sm">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                </div>
              </div>

              {/* Active Order Widget */}
              <div className="bg-gradient-to-r from-emerald-950 to-primary text-white rounded-[2rem] p-8 shadow-lg shadow-primary/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 py-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                
                <div className="relative z-10 flex items-center gap-6 w-full md:w-auto">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center relative border border-white/20 p-2">
                    <div className="absolute -top-2 -right-2 bg-secondary text-white w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold shadow-sm">١</div>
                    <Image alt="tomato" fill className="object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoTM6MhxbIIhtdGca1EOvCKTRVirl4NUiceb0KdulsX0aQxLoKeRbRPcFn_WIpduU1AgSy5zxThQqgTNecslPkb3OsLpL8sAZ45X-2fFQRNCgWB-gjO0mnZE4v5yeNHFve-67yRpAi-trv3yJTTNdL5ikTthdFq6CVYMV7YgkqhbukIdAYnJ8GEj8cSjQWUHYFCRCkNN0mp3rrqSyxQ0lm8ll3a7x5Rm7n8L6qVEMbQLzC4VuN11WhW-0p9A858lubnD0rdGXqzPE" />
                  </div>
                  <div>
                    <span className="bg-emerald-800 text-white rounded-lg px-3 py-1 text-[10px] font-bold tracking-wider uppercase mb-2 inline-block">في الطريق إليك</span>
                    <h3 className="font-bold font-headline text-lg sm:text-xl">طلب رقم #ORD-98342</h3>
                    <p className="text-sm opacity-90 mt-1">المندوب المتجه إليك يبعد حوالي ١٥ دقيقة</p>
                  </div>
                </div>
                
                <Link href="/orders/1/tracking" className="relative z-10 w-full md:w-auto bg-white text-emerald-950 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-50 transition-colors shadow-xl text-sm whitespace-nowrap">
                  تتبع مسار الطلب
                  <span className="material-symbols-outlined text-primary">arrow_back</span>
                </Link>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-[2rem] p-8 shadow-sm shadow-emerald-900/5 border border-outline-variant/10">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline-variant/20">
                  <h3 className="text-2xl font-bold font-headline text-emerald-950">أحدث الطلبات</h3>
                  <Link href="/orders" className="text-sm font-bold text-primary hover:underline">عرض الكل</Link>
                </div>

                <div className="flex flex-col gap-4">
                  {[1, 2, 3].map((order) => (
                    <Link href={`/orders/${order}/tracking`} key={order} className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 rounded-2xl border border-outline-variant/20 hover:border-primary/30 hover:bg-surface-container-low transition-colors group gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-surface-container-low rounded-xl flex items-center justify-center text-on-surface-variant group-hover:bg-white group-hover:text-primary transition-colors border border-outline-variant/10">
                          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-outline font-bold uppercase tracking-wider mb-1">١٢ أكتوبر ٢٠٢٤</span>
                          <h4 className="font-bold text-on-surface">طلب رقم #ORD-98342</h4>
                        </div>
                      </div>
                      <div className="flex items-center justify-between w-full md:w-auto md:gap-8">
                        <span className="bg-emerald-50 text-primary px-4 py-2 rounded-xl text-xs font-bold">مكتمل</span>
                        <div className="flex flex-col items-end md:items-center">
                          <span className="text-[10px] text-outline font-bold uppercase tracking-wider mb-1">الإجمالي</span>
                          <span className="font-bold text-emerald-950">١٤٥.٠٠ ر.س</span>
                        </div>
                      </div>
                    </Link>
                  ))}
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
