import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MaintenancePage() {
  return (
    <>
      <Header />
      <main className="mt-[154px] pt-4 pb-20 bg-surface-container-low min-h-screen flex items-center justify-center">
        <div className="max-w-screen-md mx-auto px-6 py-12">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-sm shadow-emerald-900/5 text-center flex flex-col items-center justify-center border border-outline-variant/10">
            <div className="w-32 h-32 mb-8 bg-amber-50 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-amber-100 rounded-full animate-ping opacity-30"></div>
              <span className="material-symbols-outlined text-6xl text-amber-500 relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>
                engineering
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold font-headline text-emerald-950 mb-4">نحن في وضع الصيانة المجدولة</h1>
            <p className="text-lg text-outline max-w-sm mx-auto mb-10 leading-relaxed">
              نقوم حالياً بتحديث أنظمتنا لنقدم لكم تجربة تسوق أفضل وأسرع. سنعود للعمل خلال فترة قصيرة. شكراً لتفهمكم!
            </p>
            
            <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden mb-4 max-w-xs">
              <div className="h-full bg-amber-400 rounded-full w-2/3 animate-pulse"></div>
            </div>
            <span className="text-xs font-bold text-amber-600 block mb-10">جاري التحديث: ٦٥٪...</span>
            
            <Link href="/" className="bg-surface-container-lowest border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-sm">
              العودة للصفحة الرئيسية
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
