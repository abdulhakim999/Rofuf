"use client";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white/80 dark:bg-emerald-950/80 backdrop-blur-xl shadow-sm shadow-emerald-900/5 transition-all duration-300">
        {/* Top Small Bar */}
        <div className="w-full bg-surface-container-low py-2 px-6 border-b border-outline-variant/10">
          <div className="max-w-screen-2xl mx-auto flex justify-between items-center text-xs font-medium text-on-surface-variant">
            <div className="flex gap-6 items-center">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">bolt</span>توصيل سريع
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">local_offer</span>عروض اليوم
              </span>
              <span className="text-primary font-bold">توصيل مجاني للطلبات فوق 200 ريال</span>
            </div>
            <div className="flex gap-4">
              <Link className="hover:text-primary transition-colors" href="/contact">
                خدمة العملاء
              </Link>
              <span>|</span>
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="material-symbols-outlined text-sm">language</span>
                <span>English</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header Content */}
        <div className="flex flex-col w-full max-w-screen-2xl mx-auto px-6 py-4 rtl">
          <div className="flex items-center justify-between gap-8">
            {/* Brand Logo */}
            <Link href="/" className="text-2xl font-bold tracking-tight text-emerald-900 dark:text-emerald-50 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                eco
              </span>
              <span className="font-headline">The Verdant Curator</span>
            </Link>

            {/* Search Bar Central */}
            <div className="flex-grow max-w-2xl relative group hidden md:block">
              <input
                className="w-full h-12 bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary/20 pr-12 pl-4 text-sm transition-all duration-300 group-hover:bg-surface-container-high"
                placeholder="ابحث عن منتج، قسم أو ماركة..."
                type="text"
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">
                search
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <div className="hidden xl:flex flex-col items-start leading-tight">
                <span className="text-[10px] text-outline uppercase font-bold tracking-wider">توصيل إلى</span>
                <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                  <span className="material-symbols-outlined text-base">location_on</span>
                  <span>الرياض، حي النخيل</span>
                </div>
              </div>

              <div className="flex items-center gap-5">
                {user ? (
                  <>
                    <Link href="/dashboard" className="flex flex-col items-center group">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                        person
                      </span>
                      <span className="text-[10px] mt-1 font-medium">حسابي</span>
                    </Link>
                    <button onClick={logout} className="flex flex-col items-center group">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-red-500 transition-colors">
                        logout
                      </span>
                      <span className="text-[10px] mt-1 font-medium">خروج</span>
                    </button>
                  </>
                ) : (
                  <Link href="/login" className="flex flex-col items-center group">
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                      login
                    </span>
                    <span className="text-[10px] mt-1 font-medium">دخول</span>
                  </Link>
                )}
                <button className="flex flex-col items-center group relative">
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                    favorite
                  </span>
                  <span className="text-[10px] mt-1 font-medium">المفضلة</span>
                </button>
                <Link
                  href="/cart"
                  className="flex items-center gap-3 bg-primary text-on-primary px-5 py-2.5 rounded-xl hover:bg-primary-container transition-all shadow-lg shadow-primary/20"
                >
                  <div className="relative">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      shopping_cart
                    </span>
                    <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-primary">
                      3
                    </span>
                  </div>
                  <span className="font-bold text-sm">٢٤٠.٠٠ ر.س</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mega Menu Bar */}
        <nav className="bg-white/50 border-t border-outline-variant/5 hidden md:block">
          <div className="max-w-screen-2xl mx-auto px-6 overflow-x-auto no-scrollbar">
            <ul className="flex items-center gap-8 py-3 whitespace-nowrap text-sm font-medium">
              <li className="flex items-center gap-2 text-primary cursor-pointer font-bold">
                <span className="material-symbols-outlined">menu</span>
                كل الأقسام
              </li>
              <li className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">خضار وفواكه</li>
              <li className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">ألبان</li>
              <li className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">مخبوزات</li>
              <li className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">لحوم ودواجن</li>
              <li className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">مجمدات</li>
              <li className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">مشروبات</li>
              <li className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">سناكات</li>
              <li className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">منظفات</li>
              <li className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">احتياجات منزلية</li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Bottom Navigation for Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-outline-variant/10 px-4 py-2 z-50 flex justify-around items-center">
        <Link href="/" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="text-[10px] font-bold">الرئيسية</span>
        </Link>
        <Link href="/categories" className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">category</span>
          <span className="text-[10px] font-medium">الأقسام</span>
        </Link>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">search</span>
          <span className="text-[10px] font-medium">بحث</span>
        </button>
        <Link href="/cart" className="flex flex-col items-center gap-1 text-on-surface-variant relative">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="text-[10px] font-medium">السلة</span>
          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/4 bg-secondary text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
        </Link>
        {user ? (
          <Link href="/dashboard" className="flex flex-col items-center gap-1 text-on-surface-variant">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">حسابي</span>
          </Link>
        ) : (
          <Link href="/login" className="flex flex-col items-center gap-1 text-on-surface-variant">
            <span className="material-symbols-outlined">login</span>
            <span className="text-[10px] font-medium">دخول</span>
          </Link>
        )}
      </div>
    </>
  );
}
