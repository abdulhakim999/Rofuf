"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Product } from "@/types/product";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id as string);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() } as Product);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="mt-[154px] pt-4 pb-20 bg-surface-container-low min-h-screen flex items-center justify-center">
          <div className="text-xl font-bold text-primary animate-pulse">جاري تحميل المنتج...</div>
        </main>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <main className="mt-[154px] pt-4 pb-20 bg-surface-container-low min-h-screen flex flex-col items-center justify-center gap-4">
          <div className="text-2xl font-bold text-emerald-950">المنتج غير موجود</div>
          <Link href="/products" className="text-primary font-bold hover:underline">العودة للمنتجات</Link>
        </main>
        <Footer />
      </>
    );
  }

  const saving = product.oldPrice ? product.oldPrice - product.price : 0;

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
              {product.category || "المنتجات"}
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="text-on-surface font-bold">{product.name}</span>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6">
          {/* Product Overview Section */}
          <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-sm shadow-emerald-900/5 mb-12 flex flex-col lg:flex-row gap-12 border border-outline-variant/10">
            {/* Image Gallery Column */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="relative aspect-square w-full rounded-[2rem] bg-surface-container-lowest overflow-hidden border border-outline-variant/10 group cursor-zoom-in">
                {product.discount && product.discount > 0 && (
                  <div className="absolute top-6 left-6 z-10 bg-secondary text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg shadow-secondary/20">-{product.discount}٪</div>
                )}
                <Image
                  alt={product.name}
                  fill
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  src={product.image || "/placeholder.png"}
                />
              </div>
            </div>

            {/* Details Column */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-emerald-50 text-primary text-[11px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider">{product.category}</span>
                <button className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-secondary hover:bg-secondary-container transition-all">
                  <span className="material-symbols-outlined text-2xl">favorite</span>
                </button>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-extrabold font-headline mb-4 text-emerald-950 leading-tight">{product.name} - {product.desc}</h1>
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-outline-variant/10">
                <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-lg">
                  <span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-sm font-bold text-amber-700">{product.rating || "5.0"}</span>
                </div>
                <span className="text-sm font-medium text-outline underline cursor-pointer hover:text-primary">قراءة {product.reviews || 0} تقييم</span>
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
                    <span className="text-5xl font-extrabold text-primary font-headline">{(product.price || 0).toFixed(2)}</span>
                    <span className="text-xl font-bold text-primary mb-1">ر.س</span>
                  </div>
                </div>
                {product.oldPrice && (
                  <div className="flex flex-col items-start pb-2">
                    <span className="text-lg font-bold text-outline line-through">{product.oldPrice.toFixed(2)} ر.س</span>
                    <span className="text-xs text-secondary font-bold">توفير {saving.toFixed(2)} ر.س</span>
                  </div>
                )}
              </div>

              <p className="text-base text-on-surface-variant leading-relaxed mb-10">
                {product.longDesc || "هذا المنتج عالي الجودة ومختار بعناية لضمان رضاكم. يتم قطفه وتعبئته وفق أعلى معايير الجودة العالمية لضمان وصوله إليكم طازجاً."}
              </p>

              <div className="mt-auto bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/10">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Quantity */}
                  <div className="w-full sm:w-auto">
                    <span className="block text-[11px] font-bold text-on-surface-variant mb-2 uppercase">الكمية / {product.unit}</span>
                    <div className="flex items-center bg-white rounded-2xl p-1 shadow-sm border border-outline-variant/10">
                      <button 
                        onClick={() => setQty(prev => Math.max(1, prev - 1))}
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors"
                      >
                        <span className="material-symbols-outlined font-bold">remove</span>
                      </button>
                      <input type="text" readOnly className="w-16 h-12 text-center font-bold text-lg border-none bg-transparent focus:ring-0 p-0" value={qty} />
                      <button 
                        onClick={() => setQty(prev => prev + 1)}
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-primary font-bold hover:bg-emerald-50 transition-colors"
                      >
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

