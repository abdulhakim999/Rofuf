import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function OrdersPage() {
  const orders = [
    { id: "ORD-98342", date: "١٢ أكتوبر ٢٠٢٤", items: 4, total: 145.0, status: "completed", dateStr: "توصيل اليوم، ٥:٠٠ م" },
    { id: "ORD-87123", date: "٢٥ سبتمبر ٢٠٢٤", items: 12, total: 340.5, status: "completed", dateStr: "تم التوصيل" },
    { id: "ORD-76234", date: "١٤ أغسطس ٢٠٢٤", items: 2, total: 45.0, status: "cancelled", dateStr: "تم الإلغاء" },
  ];

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
            <Link href="/dashboard" className="hover:text-primary transition-colors">
              لوحة التحكم
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="text-on-surface font-bold">تاريخ الطلبات</span>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-sm shadow-emerald-900/5 border border-outline-variant/10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 pb-6 border-b border-outline-variant/20 gap-4">
              <h1 className="text-3xl font-extrabold font-headline text-emerald-950 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary bg-emerald-50 p-2 rounded-xl">receipt_long</span>
                تاريخ الطلبات
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant">search</span>
                  <input type="text" placeholder="ابحث برقم الطلب..." className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl pl-4 pr-12 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none w-64" />
                </div>
                <button className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-3 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-surface-container-lowest border border-outline-variant/20 rounded-[2rem] p-6 hover:shadow-lg hover:shadow-emerald-900/5 transition-all group">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center text-on-surface-variant group-hover:bg-emerald-50 group-hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl font-bold font-headline text-emerald-950" dir="ltr">#{order.id}</h3>
                          <span className={`px-3 py-1 rounded-lg text-[10px] font-bold ${order.status === 'completed' ? 'bg-emerald-50 text-primary' : order.status === 'cancelled' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'}`}>
                            {order.status === 'completed' ? 'مكتمل' : 'ملغي'}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-outline flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                          {order.date}
                        </p>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex flex-col items-end">
                      <span className="text-xs text-outline font-bold uppercase tracking-widest mb-1">إجمالي الطلب</span>
                      <span className="text-2xl font-extrabold text-primary font-headline">{order.total.toFixed(2)} <span className="text-sm font-bold">ر.س</span></span>
                    </div>
                  </div>

                  <div className="bg-surface-container-low rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-outline-variant/10">
                    <div className="flex items-center gap-6">
                      <div className="flex -space-x-4 space-x-reverse">
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-white overflow-hidden shadow-sm">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp6jFEqV-OYVGw2lGRuMdjkooM4OBC_5vGe6-xSCm3SmhI2Rl0OI-GA7ixu-pI7xn0k3vy5CXQI9uRISs4xI53EYR0dWA3cm7PYYJLe427CZog9nArrZZjufEM6nynzufUlB7UiT3kFlseJEbsqYtodO5-iBag41yK2NXwjhJnY5-ADcTYmBzlsQGfY-aehuwpFf1rfRpW4Z6dfxZTyDwt5TOZXI1B7ATGabjcf19Of8Z7bjYrMdM0dW_YmPT7ywdr09mCKDgjjf8" alt="" className="w-full h-full object-contain p-1" />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-white overflow-hidden shadow-sm">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoTM6MhxbIIhtdGca1EOvCKTRVirl4NUiceb0KdulsX0aQxLoKeRbRPcFn_WIpduU1AgSy5zxThQqgTNecslPkb3OsLpL8sAZ45X-2fFQRNCgWB-gjO0mnZE4v5yeNHFve-67yRpAi-trv3yJTTNdL5ikTthdFq6CVYMV7YgkqhbukIdAYnJ8GEj8cSjQWUHYFCRCkNN0mp3rrqSyxQ0lm8ll3a7x5Rm7n8L6qVEMbQLzC4VuN11WhW-0p9A858lubnD0rdGXqzPE" alt="" className="w-full h-full object-contain p-1" />
                        </div>
                        {order.items > 2 && (
                          <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container-high flex items-center justify-center text-xs font-bold text-outline-variant shadow-sm backdrop-blur-sm">
                            +{order.items - 2}
                          </div>
                        )}
                      </div>
                      <span className="text-sm font-bold text-on-surface-variant">{order.items} منتجات</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <Link href={`/orders/${order.id.replace('ORD-', '')}/tracking`} className="flex-1 sm:flex-none bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary-container transition-all shadow-md shadow-primary/20 text-center">
                        تتبع الطلب
                      </Link>
                      <button className="flex-1 sm:flex-none border border-outline-variant/30 text-on-surface-variant px-6 py-3 rounded-xl font-bold text-sm hover:bg-surface-container transition-colors text-center">
                        إعادة الطلب
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center gap-2">
              <button className="w-10 h-10 rounded-xl bg-white border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors disabled:opacity-50">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
              <button className="w-10 h-10 rounded-xl bg-primary text-white font-bold shadow-md shadow-primary/20">١</button>
              <button className="w-10 h-10 rounded-xl bg-white border border-outline-variant/20 font-bold text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors">٢</button>
              <button className="w-10 h-10 rounded-xl bg-white border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
