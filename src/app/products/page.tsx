"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

const filters = ["الكل", "خضروات فراش", "فواكه موسمية", "ورقيات", "أعشاب طبيعية"];

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // جلب المنتجات من فايربيس بشكل حي ومباشر
    const q = query(collection(db, "products"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedProducts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(fetchedProducts);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

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
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-bold text-sm mb-4 text-on-surface">نطاق السعر</h3>
                  <div className="px-2">
                    <input type="range" className="w-full accent-primary" min="0" max="100" defaultValue="50" />
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="bg-white rounded-[2rem] p-4 shadow-sm shadow-emerald-900/5 mb-6 flex items-center justify-between">
                <span className="font-bold text-on-surface">إظهار {products.length} نتائج</span>
              </div>

              {/* Products Grid */}
              {loading ? (
                <div className="flex justify-center py-20">جاري تحميل المنتجات...</div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map((product: any) => (
                    <Link href={`/products/${product.id}`} key={product.id} className="bg-white rounded-3xl p-5 group relative transition-all duration-300 hover:shadow-2xl flex flex-col border border-transparent hover:border-emerald-100">
                      
                      {product.discount > 0 ? (
                        <div className="absolute top-4 left-4 z-10 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-lg">-{product.discount}٪</div>
                      ) : product.isBestSeller ? (
                        <div className="absolute top-4 left-4 z-10 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-lg">الأكثر مبيعاً</div>
                      ) : null}
                      
                      <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-surface-container-lowest">
                        <Image
                          alt={product.name || 'product'}
                          fill
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                          src={product.image || '/placeholder.png'}
                        />
                      </div>
                      
                      <div className="mb-2">
                        <span className="text-[10px] text-outline font-bold tracking-wider">{product.category}</span>
                        <h3 className="text-sm font-bold text-on-surface line-clamp-2 mt-1">{product.name}</h3>
                        <p className="text-[11px] text-on-surface-variant mt-1">{product.desc}</p>
                      </div>
                      
                      <div className="mt-auto flex items-end justify-between">
                        <div className="flex flex-col">
                          <span className="text-primary text-lg font-bold">{product.price?.toFixed(2)} ر.س</span>
                          {product.oldPrice && (
                            <span className="text-xs text-outline line-through">{product.oldPrice?.toFixed(2)} ر.س</span>
                          )}
                        </div>
                        <button className="w-12 h-12 rounded-2xl bg-surface-container text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                          <span className="material-symbols-outlined">add_shopping_cart</span>
                        </button>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
