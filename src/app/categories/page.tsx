import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const categories = [
  { id: 1, name: "خضار", icon: "eco", items: 120, color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  { id: 2, name: "فواكه", icon: "fiber_manual_record", items: 85, color: "bg-orange-50 text-orange-600 border-orange-100" },
  { id: 3, name: "ألبان وأجبان", icon: "egg", items: 64, color: "bg-blue-50 text-blue-600 border-blue-100" },
  { id: 4, name: "مخبوزات", icon: "bakery_dining", items: 42, color: "bg-amber-50 text-amber-700 border-amber-100" },
  { id: 5, name: "لحوم", icon: "kebab_dining", items: 30, color: "bg-red-50 text-red-700 border-red-100" },
  { id: 6, name: "دواجن", icon: "set_meal", items: 25, color: "bg-pink-50 text-pink-700 border-pink-100" },
  { id: 7, name: "مجمدات", icon: "ac_unit", items: 150, color: "bg-cyan-50 text-cyan-700 border-cyan-100" },
  { id: 8, name: "مشروبات", icon: "local_drink", items: 95, color: "bg-purple-50 text-purple-700 border-purple-100" },
  { id: 9, name: "سناكات", icon: "cookie", items: 210, color: "bg-yellow-50 text-yellow-800 border-yellow-100" },
  { id: 10, name: "منظفات", icon: "cleaning_services", items: 88, color: "bg-slate-50 text-slate-700 border-slate-200" },
  { id: 11, name: "احتياجات منزلية", icon: "home_work", items: 130, color: "bg-indigo-50 text-indigo-700 border-indigo-100" },
  { id: 12, name: "عروض مذهلة", icon: "auto_awesome", items: 45, color: "bg-rose-50 text-rose-600 border-rose-100 shadow-sm shadow-rose-200" },
];

export default function CategoriesPage() {
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
            <span className="text-on-surface font-bold">جميع الأقسام</span>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-extrabold font-headline text-emerald-950 mb-4">اكتشف جميع الأقسام</h1>
            <p className="text-outline text-lg">تصفح آلاف المنتجات الموزعة بعناية لتسهيل تجربة تسوقك.</p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link 
                href="/products" 
                key={category.id} 
                className="bg-white rounded-[2rem] p-6 flex flex-col items-center gap-4 group hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-20 h-20 rounded-[1.5rem] flex items-center justify-center border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${category.color}`}>
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {category.icon}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-on-surface font-headline text-lg group-hover:text-primary transition-colors">{category.name}</h3>
                  <p className="text-xs text-outline mt-1 font-medium">{category.items} منتجات</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Banner Promo */}
          <div className="mt-16 relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-emerald-900 to-primary p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 py-16">
            <div className="relative z-10 max-w-xl text-center lg:text-right">
              <span className="bg-secondary px-4 py-1 rounded-full text-xs font-bold mb-6 inline-block">الأقسام المميزة</span>
              <h2 className="text-4xl font-headline font-extrabold mb-4 leading-tight">منتجات المزارع العضوية في قسم الخضار والفواكه</h2>
              <p className="text-lg opacity-90 mb-8">اكتشف تشكيلة مختارة من الخضار والفواكه المزروعة عضوياً بدون أي أسمدة كيميائية. صحة طبيعية 100% بين يديك.</p>
              <button className="bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg shadow-black/10">
                تسوق المنتجات العضوية
              </button>
            </div>
            {/* Design Ornaments */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
              <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
