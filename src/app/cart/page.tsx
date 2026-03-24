import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cartItems = [
  { id: 1, name: "تفاح جالا أحمر", desc: "كيس ١ كجم طازج ومستورد", price: 12.0, oldPrice: 15.0, qty: 2, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp6jFEqV-OYVGw2lGRuMdjkooM4OBC_5vGe6-xSCm3SmhI2Rl0OI-GA7ixu-pI7xn0k3vy5CXQI9uRISs4xI53EYR0dWA3cm7PYYJLe427CZog9nArrZZjufEM6nynzufUlB7UiT3kFlseJEbsqYtodO5-iBag41yK2NXwjhJnY5-ADcTYmBzlsQGfY-aehuwpFf1rfRpW4Z6dfxZTyDwt5TOZXI1B7ATGabjcf19Of8Z7bjYrMdM0dW_YmPT7ywdr09mCKDgjjf8", category: "فواكه" },
  { id: 2, name: "طماطم بلدي طازجة", desc: "حوالي ١ كجم", price: 4.5, oldPrice: 6.0, qty: 1, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoTM6MhxbIIhtdGca1EOvCKTRVirl4NUiceb0KdulsX0aQxLoKeRbRPcFn_WIpduU1AgSy5zxThQqgTNecslPkb3OsLpL8sAZ45X-2fFQRNCgWB-gjO0mnZE4v5yeNHFve-67yRpAi-trv3yJTTNdL5ikTthdFq6CVYMV7YgkqhbukIdAYnJ8GEj8cSjQWUHYFCRCkNN0mp3rrqSyxQ0lm8ll3a7x5Rm7n8L6qVEMbQLzC4VuN11WhW-0p9A858lubnD0rdGXqzPE", category: "خضروات" },
  { id: 3, name: "خبز باجيت فرنسي طازج - حبتين", desc: "مخبوز يومياً", price: 4.5, oldPrice: null, qty: 3, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0V2uT8xZAVI30YRnzfIUk-_mPAFgxFVrHaGv6eNLTnhXQ-7peSzYMKyKWcMuNvY7rRWZL2y9fyMgBGZVtXV1MKoDYuD3fPBINc_6ZHw8WSxxXpzY1BXzRR19Gg8yt0b2rtmR5bDWJrCyqt81LscQjJmbG4PnGoxOF1lU7qqNcxLLUldHpNCBQyFui6hUqcQtk_pI4aOfJB08JXhujqhWC5VazyQ4D5-tL7uCFci9lDuvSRBRI50meZ1ekK9Kg2xE6FeVApCauvAs", category: "مخبوزات" },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const discount = 4.0;
  const shipping = 0; // Free shipping
  const total = subtotal - discount + shipping;

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
            <span className="text-on-surface font-bold">سلة التسوق</span>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10 border-b border-outline-variant/10 pb-6">
            <div>
              <h1 className="text-4xl font-extrabold font-headline text-emerald-950 mb-2">سلة المشتريات</h1>
              <p className="text-on-surface-variant">لديك {cartItems.length} منتجات في سلتك</p>
            </div>
            
            {/* Free Shipping Progress */}
            <div className="w-full lg:w-96 bg-white rounded-[2rem] p-4 shadow-sm border border-outline-variant/10">
              <div className="flex justify-between text-xs font-bold text-on-surface-variant mb-2">
                <span>توصيل مجاني للطلبات فوق ٢٠٠ ر.س</span>
                <span className="text-primary">متبقي ١٥٨.٠٠ ر.س</span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '21%' }}></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Cart Items List */}
            <div className="w-full lg:flex-1 flex flex-col gap-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-[2rem] p-5 shadow-sm shadow-emerald-900/5 border border-transparent hover:border-outline-variant/20 transition-colors flex flex-col sm:flex-row items-center gap-6">
                  {/* Image */}
                  <div className="w-32 h-32 flex-shrink-0 bg-surface-container-lowest rounded-2xl relative overflow-hidden border border-outline-variant/10 p-2">
                    <Image
                      alt={item.name}
                      fill
                      className="object-contain"
                      src={item.image}
                    />
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 w-full text-center sm:text-right">
                    <span className="text-[10px] text-outline font-bold uppercase tracking-wider mb-1 block">{item.category}</span>
                    <h3 className="text-base font-bold font-headline text-on-surface mb-1">{item.name}</h3>
                    <p className="text-[11px] text-on-surface-variant mb-4">{item.desc}</p>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      {/* Price */}
                      <div className="flex flex-col items-center sm:items-start">
                        <span className="text-xl font-extrabold text-primary">{item.price.toFixed(2)} ر.س</span>
                        {item.oldPrice && (
                          <span className="text-xs text-outline line-through">{item.oldPrice.toFixed(2)} ر.س</span>
                        )}
                      </div>
                      
                      {/* Qty & Actions */}
                      <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3">
                        <button className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-center text-outline hover:text-secondary hover:bg-secondary-container transition-colors shadow-sm">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                        <button className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-center text-outline hover:text-secondary transition-colors shadow-sm">
                          <span className="material-symbols-outlined text-[20px]">favorite</span>
                        </button>
                        <div className="flex items-center bg-surface-container rounded-xl p-1 shadow-inner border border-outline-variant/5">
                          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-white hover:shadow-sm transition-all focus:ring-2 focus:ring-primary/20">
                            <span className="material-symbols-outlined font-bold text-[18px]">remove</span>
                          </button>
                          <input type="text" className="w-10 h-8 text-center font-bold text-sm bg-transparent border-none p-0 focus:ring-0 text-on-surface" defaultValue={item.qty} />
                          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-primary font-bold hover:bg-white hover:shadow-sm transition-all focus:ring-2 focus:ring-primary/20">
                            <span className="material-symbols-outlined font-bold text-[18px]">add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-between items-center mt-4">
                <Link href="/products" className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  متابعة التسوق
                </Link>
                <button className="text-sm font-bold text-outline hover:text-secondary transition-colors">
                  إفراغ السلة بالكامل
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <aside className="w-full lg:w-96 flex-shrink-0">
              <div className="bg-white rounded-[2rem] p-8 shadow-sm shadow-emerald-900/5 sticky top-[180px] border border-outline-variant/10">
                <h2 className="text-xl font-bold font-headline text-emerald-950 mb-6 pb-4 border-b border-outline-variant/20">ملخص الطلب</h2>
                
                {/* Coupon Code */}
                <div className="mb-6 relative">
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary">discount</span>
                  <input type="text" placeholder="كود الخصم" className="w-full h-14 bg-surface-container-low border-none rounded-2xl pr-12 pl-24 focus:ring-2 focus:ring-primary/20 text-sm font-bold transition-all" />
                  <button className="absolute left-2 top-2 bottom-2 bg-emerald-900 text-white px-4 rounded-xl text-xs font-bold hover:bg-emerald-950 transition-colors">تفعيل</button>
                </div>

                <div className="flex flex-col gap-4 text-sm font-medium mb-6">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>المجموع الفرعي ({cartItems.length} منتجات)</span>
                    <span className="font-bold text-on-surface">{subtotal.toFixed(2)} ر.س</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>الخصومات</span>
                    <span className="font-bold text-secondary">-{discount.toFixed(2)} ر.س</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>التوصيل</span>
                    <span className="font-bold text-primary">مجاني</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xl font-extrabold font-headline mb-8 pt-6 border-t border-outline-variant/20">
                  <span className="text-emerald-950">الإجمالي</span>
                  <span className="text-primary">{total.toFixed(2)} <span className="text-sm font-bold">ر.س</span></span>
                </div>
                
                <p className="text-[10px] text-outline text-center mb-6 leading-relaxed">بإتمام الطلب، أنت توافق على شروط الاستخدام وسياسة الخصوصية الخاصة بالمتجر.</p>

                <Link href="/checkout" className="w-full h-14 flex items-center justify-center gap-2 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-container transition-colors shadow-xl shadow-primary/20 group transform active:scale-[0.98]">
                  <span className="material-symbols-outlined group-hover:block transition-all">shopping_bag</span>
                  المتابعة للدفع
                </Link>
                
                {/* Accepted Payment Methods */}
                <div className="mt-8 flex items-center justify-center gap-4 grayscale opacity-50">
                  <div className="w-12 h-8 bg-surface-container rounded-md"></div>
                  <div className="w-12 h-8 bg-surface-container rounded-md"></div>
                  <div className="w-12 h-8 bg-surface-container rounded-md"></div>
                  <div className="w-12 h-8 bg-surface-container rounded-md"></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
