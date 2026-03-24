import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function EmptyCartPage() {
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
            <span className="text-on-surface font-bold">سلة التسوق</span>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-16 md:p-24 shadow-sm shadow-emerald-900/5 text-center flex flex-col items-center justify-center min-h-[500px] border border-outline-variant/10">
            <div className="w-48 h-48 mb-10 relative">
              <div className="absolute inset-0 bg-emerald-50 rounded-full animate-ping opacity-20"></div>
              <div className="absolute inset-4 bg-emerald-100 rounded-full"></div>
              <span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                production_quantity_limits
              </span>
            </div>
            
            <h1 className="text-4xl font-extrabold font-headline text-emerald-950 mb-4">سلة المشتريات فارغة</h1>
            <p className="text-lg text-outline max-w-md mb-10 leading-relaxed">
              يبدو أنك لم تقم بإضافة أي منتجات إلى سلتك بعد. تصفح آلاف المنتجات الطازجة واحتياجات منزلك لتعبئة السلة.
            </p>
            
            <Link href="/products" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-container transition-all shadow-xl shadow-primary/20 flex items-center gap-3 transform active:scale-95 group">
              <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">shopping_basket</span>
              تسوق المنتجات الآن
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
