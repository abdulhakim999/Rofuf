import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function OrderSuccessPage() {
  return (
    <>
      <Header />
      <main className="mt-[154px] pt-4 pb-20 bg-surface-container-low min-h-screen">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-16 md:p-24 shadow-sm shadow-emerald-900/5 text-center flex flex-col items-center justify-center border border-outline-variant/10 relative overflow-hidden">
            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="w-32 h-32 mb-8 relative z-10">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-50"></div>
              <div className="absolute inset-2 bg-primary/20 rounded-full animate-pulse opacity-70"></div>
              <div className="absolute inset-4 bg-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-primary/30">
                <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl font-extrabold font-headline text-emerald-950 mb-4 z-10">تم استلام طلبك بنجاح!</h1>
            <p className="text-lg text-outline max-w-md mb-8 leading-relaxed z-10">
              شكراً لتسوقك معنا في المتجر الخضري المنسق. يتم الآن تجهيز طلبك بعناية فائقة لضمان وصوله إليك بأعلى معايير الجودة.
            </p>

            <div className="bg-surface-container-low px-8 py-5 rounded-2xl border border-outline-variant/20 inline-flex flex-col md:flex-row items-center gap-6 mb-12 z-10">
              <div className="flex flex-col items-center md:items-start text-right">
                <span className="text-xs text-outline font-bold uppercase tracking-widest mb-1">رقم الطلب</span>
                <span className="text-2xl font-black text-primary font-headline tracking-widest" dir="ltr">#ORD-98342</span>
              </div>
              <span className="hidden md:block w-px h-12 bg-outline-variant/30"></span>
              <div className="flex flex-col items-center md:items-start text-right">
                <span className="text-xs text-outline font-bold uppercase tracking-widest mb-1">المبلغ المدفوع</span>
                <span className="text-xl font-black text-on-surface font-headline tracking-wider">٣٣.٠٠ ر.س</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full sm:w-auto">
              <Link href="/orders/1/tracking" className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-container transition-all shadow-lg shadow-primary/20 text-center">
                تتبع الطلب
              </Link>
              <Link href="/" className="w-full sm:w-auto bg-surface-container-lowest border-2 border-primary text-primary px-10 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors text-center">
                العودة للرئيسية
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
