import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const filters = ["الكل", "خضروات فراش", "فواكه موسمية", "ورقيات", "أعشاب طبيعية"];

const products = [
  { id: 1, name: "طماطم بلدي طازجة", desc: "حوالي ١ كجم", price: 4.5, oldPrice: 6.0, unit: "كجم", category: "خضار وفواكه", rating: 4.8, reviews: 154, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoTM6MhxbIIhtdGca1EOvCKTRVirl4NUiceb0KdulsX0aQxLoKeRbRPcFn_WIpduU1AgSy5zxThQqgTNecslPkb3OsLpL8sAZ45X-2fFQRNCgWB-gjO0mnZE4v5yeNHFve-67yRpAi-trv3yJTTNdL5ikTthdFq6CVYMV7YgkqhbukIdAYnJ8GEj8cSjQWUHYFCRCkNN0mp3rrqSyxQ0lm8ll3a7x5Rm7n8L6qVEMbQLzC4VuN11WhW-0p9A858lubnD0rdGXqzPE", isBestSeller: true, discount: 25 },
  { id: 2, name: "خيار طازج - حزمة", desc: "انتاج مزارع عضوية", price: 3.0, oldPrice: null, unit: "كجم", category: "خضار وفواكه", rating: 4.5, reviews: 89, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp6jFEqV-OYVGw2lGRuMdjkooM4OBC_5vGe6-xSCm3SmhI2Rl0OI-GA7ixu-pI7xn0k3vy5CXQI9uRISs4xI53EYR0dWA3cm7PYYJLe427CZog9nArrZZjufEM6nynzufUlB7UiT3kFlseJEbsqYtodO5-iBag41yK2NXwjhJnY5-ADcTYmBzlsQGfY-aehuwpFf1rfRpW4Z6dfxZTyDwt5TOZXI1B7ATGabjcf19Of8Z7bjYrMdM0dW_YmPT7ywdr09mCKDgjjf8", isBestSeller: false, discount: 0 },
  { id: 3, name: "بطاطس مستوردة جاهزة للقلي", desc: "كيس ١.٥ كجم", price: 5.0, oldPrice: 7.5, unit: "كيس", category: "خضار وفواكه", rating: 4.9, reviews: 231, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6QE3xSnw38y3iOK6eyn6fUSHbZUTKhXCEbXOTVIDI2VlS3lDAeUowBZXsnItecS6cE4z1zzgEla_ZTM9wpTYt91tQP6VqqUU85yBFUIqQnuPx-vUuWpo2X1sHM_likav6zPc7HPRbfejm_1dQlCFXR7AaSGCpQ6UULAHus1_NUWqq83m637LdrMINWIrjYWS1jVlgX_iKC4UGmpsarn9aMb8FxE9gpzQyalhiDVb_cMUxB5B7jiwNbIS29c4e84QQoOqDPJyGpZ0", isBestSeller: false, discount: 33 },
  { id: 4, name: "بصل أبيض يمني", desc: "شبك صغير - ١ كجم", price: 3.5, oldPrice: null, unit: "شبك", category: "خضار وفواكه", rating: 4.7, reviews: 112, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoTM6MhxbIIhtdGca1EOvCKTRVirl4NUiceb0KdulsX0aQxLoKeRbRPcFn_WIpduU1AgSy5zxThQqgTNecslPkb3OsLpL8sAZ45X-2fFQRNCgWB-gjO0mnZE4v5yeNHFve-67yRpAi-trv3yJTTNdL5ikTthdFq6CVYMV7YgkqhbukIdAYnJ8GEj8cSjQWUHYFCRCkNN0mp3rrqSyxQ0lm8ll3a7x5Rm7n8L6qVEMbQLzC4VuN11WhW-0p9A858lubnD0rdGXqzPE", isBestSeller: false, discount: 0 },
  { id: 5, name: "تفاح جالا أحمر", desc: "كيس ١ كجم مستورد طازج", price: 12.0, oldPrice: 15.0, unit: "كيس", category: "فواكه", rating: 5.0, reviews: 405, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp6jFEqV-OYVGw2lGRuMdjkooM4OBC_5vGe6-xSCm3SmhI2Rl0OI-GA7ixu-pI7xn0k3vy5CXQI9uRISs4xI53EYR0dWA3cm7PYYJLe427CZog9nArrZZjufEM6nynzufUlB7UiT3kFlseJEbsqYtodO5-iBag41yK2NXwjhJnY5-ADcTYmBzlsQGfY-aehuwpFf1rfRpW4Z6dfxZTyDwt5TOZXI1B7ATGabjcf19Of8Z7bjYrMdM0dW_YmPT7ywdr09mCKDgjjf8", isBestSeller: true, discount: 20 },
  { id: 6, name: "موز فلبيني فاخر", desc: "حوالي ١ كجم", price: 5.5, oldPrice: null, unit: "كجم", category: "فواكه", rating: 4.6, reviews: 76, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6QE3xSnw38y3iOK6eyn6fUSHbZUTKhXCEbXOTVIDI2VlS3lDAeUowBZXsnItecS6cE4z1zzgEla_ZTM9wpTYt91tQP6VqqUU85yBFUIqQnuPx-vUuWpo2X1sHM_likav6zPc7HPRbfejm_1dQlCFXR7AaSGCpQ6UULAHus1_NUWqq83m637LdrMINWIrjYWS1jVlgX_iKC4UGmpsarn9aMb8FxE9gpzQyalhiDVb_cMUxB5B7jiwNbIS29c4e84QQoOqDPJyGpZ0", isBestSeller: false, discount: 0 },
  { id: 7, name: "برتقال أبو صرة", desc: "للأكل والعصير", price: 8.0, oldPrice: 10.0, unit: "كجم", category: "فواكه", rating: 4.8, reviews: 198, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoTM6MhxbIIhtdGca1EOvCKTRVirl4NUiceb0KdulsX0aQxLoKeRbRPcFn_WIpduU1AgSy5zxThQqgTNecslPkb3OsLpL8sAZ45X-2fFQRNCgWB-gjO0mnZE4v5yeNHFve-67yRpAi-trv3yJTTNdL5ikTthdFq6CVYMV7YgkqhbukIdAYnJ8GEj8cSjQWUHYFCRCkNN0mp3rrqSyxQ0lm8ll3a7x5Rm7n8L6qVEMbQLzC4VuN11WhW-0p9A858lubnD0rdGXqzPE", isBestSeller: false, discount: 20 },
  { id: 8, name: "عنب أحمر بدون بذر", desc: "علبة ٥٠٠ جم", price: 15.0, oldPrice: null, unit: "علبة", category: "فواكه", rating: 4.9, reviews: 312, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp6jFEqV-OYVGw2lGRuMdjkooM4OBC_5vGe6-xSCm3SmhI2Rl0OI-GA7ixu-pI7xn0k3vy5CXQI9uRISs4xI53EYR0dWA3cm7PYYJLe427CZog9nArrZZjufEM6nynzufUlB7UiT3kFlseJEbsqYtodO5-iBag41yK2NXwjhJnY5-ADcTYmBzlsQGfY-aehuwpFf1rfRpW4Z6dfxZTyDwt5TOZXI1B7ATGabjcf19Of8Z7bjYrMdM0dW_YmPT7ywdr09mCKDgjjf8", isBestSeller: false, discount: 0 },
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="mt-[154px] pt-4 pb-20 bg-surface-container-low min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-screen-2xl mx-auto px-6 mb-6">
          <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">home</span>
              الرئيسية
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="text-on-surface font-bold">الخضار والفواكه</span>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-72 flex-shrink-0">
              <div className="bg-white rounded-[2rem] p-6 shadow-sm shadow-emerald-900/5 sticky top-[180px]">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-outline-variant/20">
                  <h2 className="text-xl font-bold font-headline text-emerald-950 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">filter_list</span>
                    الفلاتر
                  </h2>
                  <button className="text-[10px] text-secondary font-bold hover:underline">مسح الكل</button>
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <h3 className="font-bold text-sm mb-4 text-on-surface">التصنيفات</h3>
                  <div className="flex flex-col gap-3">
                    {filters.map((filter, i) => (
                      <label key={filter} className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center gap-3 text-sm text-on-surface-variant group-hover:text-primary transition-colors">
                          <input 
                            type="checkbox" 
                            defaultChecked={i === 0}
                            className="w-5 h-5 rounded-md border-outline-variant text-primary focus:ring-primary focus:ring-offset-0 bg-surface cursor-pointer" 
                          />
                          <span className={i === 0 ? "font-bold text-primary" : "font-medium"}>{filter}</span>
                        </div>
                        <span className="text-[10px] bg-surface-container px-2 py-1 rounded-md text-outline font-bold">٢٤</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-bold text-sm mb-4 text-on-surface">نطاق السعر</h3>
                  <div className="px-2">
                    <input type="range" className="w-full accent-primary" min="0" max="100" defaultValue="50" />
                    <div className="flex items-center justify-between mt-4 text-xs font-bold text-on-surface-variant">
                      <div className="bg-surface-container px-3 py-2 rounded-lg border border-outline-variant/20">
                        ٠ ر.س
                      </div>
                      <span>إلى</span>
                      <div className="bg-surface-container px-3 py-2 rounded-lg border border-outline-variant/20">
                        ٥٠ ر.س
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="bg-white rounded-[2rem] p-4 shadow-sm shadow-emerald-900/5 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-bold text-on-surface">إظهار {products.length} نتائج</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-on-surface-variant">ترتيب حسب:</span>
                  <div className="relative group">
                    <select className="appearance-none bg-surface-container border-none text-sm font-bold text-primary px-4 py-2 pr-10 rounded-xl focus:ring-2 focus:ring-primary/20 cursor-pointer min-w-[160px]">
                      <option>الأكثر مبيعاً</option>
                      <option>السعر: من الأقل للأعلى</option>
                      <option>السعر: من الأعلى للأقل</option>
                      <option>وصلنا حديثاً</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none text-xl">
                      swap_vert
                    </span>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Link href={`/products/${product.id}`} key={product.id} className="bg-white rounded-3xl p-5 group relative transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/5 flex flex-col border border-transparent hover:border-emerald-100">
                    <button className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm flex items-center justify-center text-outline hover:text-secondary hover:bg-white transition-all">
                      <span className="material-symbols-outlined text-xl">favorite</span>
                    </button>
                    {product.discount > 0 ? (
                      <div className="absolute top-4 left-4 z-10 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-lg">-{product.discount}٪</div>
                    ) : product.isBestSeller ? (
                      <div className="absolute top-4 left-4 z-10 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-lg">الأكثر مبيعاً</div>
                    ) : null}
                    
                    <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-surface-container-lowest">
                      <Image
                        alt={product.name}
                        fill
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                        src={product.image}
                      />
                    </div>
                    
                    <div className="mb-2">
                      <span className="text-[10px] text-outline font-bold uppercase tracking-wider">{product.category}</span>
                      <h3 className="text-sm font-bold text-on-surface line-clamp-2 mt-1 transition-colors group-hover:text-primary">{product.name}</h3>
                      <p className="text-[11px] text-on-surface-variant mt-1">{product.desc}</p>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-4">
                      <span className="material-symbols-outlined text-amber-400 text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="text-[10px] font-bold text-on-surface">{product.rating}</span>
                      <span className="text-[10px] text-outline">({product.reviews} تقييم)</span>
                    </div>
                    
                    <div className="mt-auto flex items-end justify-between">
                      <div className="flex flex-col">
                        <span className="text-primary text-lg font-bold">{product.price.toFixed(2)} ر.س</span>
                        {product.oldPrice && (
                          <span className="text-xs text-outline line-through">{product.oldPrice.toFixed(2)} ر.س</span>
                        )}
                      </div>
                      <button className="w-12 h-12 rounded-2xl bg-surface-container text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all transform active:scale-95 shadow-sm">
                        <span className="material-symbols-outlined">add_shopping_cart</span>
                      </button>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex items-center justify-center gap-2">
                <button className="w-10 h-10 rounded-xl bg-white border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors disabled:opacity-50">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
                <button className="w-10 h-10 rounded-xl bg-primary text-white font-bold shadow-md shadow-primary/20">١</button>
                <button className="w-10 h-10 rounded-xl bg-white border border-outline-variant/20 font-bold text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors">٢</button>
                <button className="w-10 h-10 rounded-xl bg-white border border-outline-variant/20 font-bold text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors">٣</button>
                <span className="text-outline mx-1">...</span>
                <button className="w-10 h-10 rounded-xl bg-white border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
