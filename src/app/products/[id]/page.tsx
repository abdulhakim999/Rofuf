import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ProductDetailPage() {
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
            <Link href="/products" className="hover:text-primary transition-colors">
              الخضار والفواكه
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="text-on-surface font-bold">تفاح جالا أحمر</span>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6">
          {/* Product Overview Section */}
          <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-sm shadow-emerald-900/5 mb-12 flex flex-col lg:flex-row gap-12 border border-outline-variant/10">
            {/* Image Gallery Column */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="relative aspect-square w-full rounded-[2rem] bg-surface-container-lowest overflow-hidden border border-outline-variant/10 group cursor-zoom-in">
                <div className="absolute top-6 left-6 z-10 bg-secondary text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg shadow-secondary/20">-٢٠٪</div>
                <Image
                  alt="تفاح جالا أحمر"
                  fill
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp6jFEqV-OYVGw2lGRuMdjkooM4OBC_5vGe6-xSCm3SmhI2Rl0OI-GA7ixu-pI7xn0k3vy5CXQI9uRISs4xI53EYR0dWA3cm7PYYJLe427CZog9nArrZZjufEM6nynzufUlB7UiT3kFlseJEbsqYtodO5-iBag41yK2NXwjhJnY5-ADcTYmBzlsQGfY-aehuwpFf1rfRpW4Z6dfxZTyDwt5TOZXI1B7ATGabjcf19Of8Z7bjYrMdM0dW_YmPT7ywdr09mCKDgjjf8"
                />
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`relative aspect-square rounded-2xl bg-surface-container-lowest overflow-hidden border-2 cursor-pointer transition-all ${i === 1 ? 'border-primary' : 'border-transparent hover:border-outline-variant/30'}`}>
                    <Image
                      alt="thumbnail"
                      fill
                      className="w-full h-full object-contain p-2"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp6jFEqV-OYVGw2lGRuMdjkooM4OBC_5vGe6-xSCm3SmhI2Rl0OI-GA7ixu-pI7xn0k3vy5CXQI9uRISs4xI53EYR0dWA3cm7PYYJLe427CZog9nArrZZjufEM6nynzufUlB7UiT3kFlseJEbsqYtodO5-iBag41yK2NXwjhJnY5-ADcTYmBzlsQGfY-aehuwpFf1rfRpW4Z6dfxZTyDwt5TOZXI1B7ATGabjcf19Of8Z7bjYrMdM0dW_YmPT7ywdr09mCKDgjjf8"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details Column */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-emerald-50 text-primary text-[11px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider">خضار وفواكه طازجة</span>
                <button className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-secondary hover:bg-secondary-container transition-all">
                  <span className="material-symbols-outlined text-2xl">favorite</span>
                </button>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-extrabold font-headline mb-4 text-emerald-950 leading-tight">تفاح جالا أحمر - كيس ١ كجم طازج ومستورد</h1>
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-outline-variant/10">
                <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-lg">
                  <span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-sm font-bold text-amber-700">٤.٨</span>
                </div>
                <span className="text-sm font-medium text-outline underline cursor-pointer hover:text-primary">قراءة ١٥٤ تقييم</span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="text-sm font-medium text-emerald-600 flex items-center gap-1">
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                  متوفر في المخزون
                </span>
              </div>

              <div className="flex items-end gap-4 mb-8">
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-outline uppercase tracking-wider mb-1">السعر</span>
                  <div className="flex items-end gap-3">
                    <span className="text-5xl font-extrabold text-primary font-headline">١٢.٠٠</span>
                    <span className="text-xl font-bold text-primary mb-1">ر.س</span>
                  </div>
                </div>
                <div className="flex flex-col items-start pb-2">
                  <span className="text-lg font-bold text-outline line-through">١٥.٠٠ ر.س</span>
                  <span className="text-xs text-secondary font-bold">توفير ٣.٠٠ ر.س</span>
                </div>
              </div>

              <p className="text-base text-on-surface-variant leading-relaxed mb-10">
                تفاح جالا أحمر طازج ومقرمش، يتميز بحلاوته الطبيعية وقشرته الرقيقة. مصدر غني بالألياف والفيتامينات، ممتاز كوجبة خفيفة أو لإضافته للسلطات، يتم قطفه بعناية لضمان أعلى مستويات الجودة ويصلكم مبرداً للحفاظ على نضارته.
              </p>

              <div className="mt-auto bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/10">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Quantity */}
                  <div className="w-full sm:w-auto">
                    <span className="block text-[11px] font-bold text-on-surface-variant mb-2 uppercase">الكمية</span>
                    <div className="flex items-center bg-white rounded-2xl p-1 shadow-sm border border-outline-variant/10">
                      <button className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
                        <span className="material-symbols-outlined font-bold">remove</span>
                      </button>
                      <input type="text" className="w-16 h-12 text-center font-bold text-lg border-none bg-transparent focus:ring-0 p-0" defaultValue="1" />
                      <button className="w-12 h-12 rounded-xl flex items-center justify-center text-primary font-bold hover:bg-emerald-50 transition-colors">
                        <span className="material-symbols-outlined font-bold">add</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Add to Cart */}
                  <div className="w-full sm:flex-1">
                    <span className="block text-[11px] font-bold text-on-surface-variant mb-2 uppercase invisible">الإجراء</span>
                    <button className="w-full h-[56px] rounded-2xl bg-primary text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary-container transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 transform active:scale-[0.98]">
                      <span className="material-symbols-outlined">shopping_cart_checkout</span>
                      إضافة للسلة
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-outline-variant/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary">local_shipping</span>
                    جاهز للتوصيل خلال ٦٠ دقيقة
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary">verified</span>
                    ضمان نضارة المنتج
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
