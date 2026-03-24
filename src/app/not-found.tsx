import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="mt-[154px] pt-4 pb-20 bg-surface-container-low min-h-screen flex items-center justify-center">
        <div className="max-w-screen-md mx-auto px-6 py-12 w-full">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-sm shadow-emerald-900/5 text-center flex flex-col items-center justify-center border border-outline-variant/10 relative overflow-hidden">
            {/* 404 Background Typography */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-black font-headline text-surface-container-low/50 pointer-events-none select-none z-0">
              404
            </div>

            <div className="w-40 h-40 mb-10 relative z-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-red-50 rounded-full animate-ping opacity-30"></div>
              <div className="absolute inset-4 bg-red-100 rounded-full"></div>
              <span className="material-symbols-outlined text-red-500 text-7xl relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>
                manage_search
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold font-headline text-emerald-950 mb-6 z-10">عذراً، الصفحة غير موجودة</h1>
            <p className="text-xl text-outline max-w-sm mx-auto mb-12 leading-relaxed font-medium z-10">
              يبدو أن الصفحة التي تبحث عنها غير موجودة، أو تم نقلها، أو الرابط خاطئ.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-10">
              <Link href="/" className="w-full sm:w-auto bg-primary text-white border-2 border-primary px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-container hover:border-primary-container transition-colors shadow-xl shadow-primary/20 transform active:scale-95 group">
                <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">home</span>
                الرئيسية
              </Link>
              <Link href="/products" className="w-full sm:w-auto bg-white text-emerald-950 px-10 py-5 rounded-2xl font-bold border-2 border-outline-variant/20 hover:border-primary/50 hover:bg-emerald-50 transition-colors shadow-sm flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-primary">storefront</span>
                تسوق المنتجات
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
