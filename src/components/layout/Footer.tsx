import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface-container py-20 px-8 border-t border-emerald-100 dark:border-emerald-900 pb-24 md:pb-20">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 rtl">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <div className="text-xl font-bold text-emerald-900 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              eco
            </span>
            <span>The Verdant Curator</span>
          </div>
          <p className="text-sm text-outline leading-relaxed">
            المتجر الخضري المنسق هو وجهتك الأولى للحصول على أجود المنتجات الطازجة والمواد الاستهلاكية في المملكة العربية السعودية.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="font-bold text-emerald-900 mb-6 font-headline">روابط سريعة</h4>
          <ul className="flex flex-col gap-4 text-xs uppercase tracking-wider text-slate-500">
            <li className="hover:text-primary transition-colors cursor-pointer">
              <Link href="/about">من نحن</Link>
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              <Link href="/policies">سياسة الخصوصية</Link>
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              <Link href="/policies">الشروط والأحكام</Link>
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              <Link href="/faq">الأسئلة الشائعة</Link>
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              <Link href="/contact">تواصل معنا</Link>
            </li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="font-bold text-emerald-900 mb-6 font-headline">الأقسام الرئيسية</h4>
          <ul className="flex flex-col gap-4 text-xs uppercase tracking-wider text-slate-500">
            <li className="hover:text-primary transition-colors cursor-pointer">خضار وفواكه طازجة</li>
            <li className="hover:text-primary transition-colors cursor-pointer">اللحوم والدواجن</li>
            <li className="hover:text-primary transition-colors cursor-pointer">منتجات الألبان والأجبان</li>
            <li className="hover:text-primary transition-colors cursor-pointer">المخبوزات والحلويات</li>
            <li className="hover:text-primary transition-colors cursor-pointer">المنظفات والعناية بالمنزل</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-emerald-900 mb-6 font-headline">اشترك في نشرتنا</h4>
          <p className="text-sm text-outline mb-6">احصل على آخر العروض والخصومات الحصرية مباشرة في بريدك</p>
          <div className="flex gap-2">
            <input
              className="flex-grow bg-white border-none rounded-xl text-xs px-4 focus:ring-1 focus:ring-primary"
              placeholder="بريدك الإلكتروني"
              type="email"
            />
            <button className="bg-primary text-white px-4 py-3 rounded-xl hover:bg-primary-container transition-all">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 grayscale opacity-60">
            {/* Payment method icons */}
            <div className="h-6 w-10 bg-slate-300 rounded"></div>
            <div className="h-6 w-10 bg-slate-300 rounded"></div>
            <div className="h-6 w-10 bg-slate-300 rounded"></div>
            <div className="h-6 w-10 bg-slate-300 rounded"></div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto mt-20 pt-8 border-t border-emerald-100 dark:border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest">
        <p>© 2024 The Verdant Curator. جميع الحقوق محفوظة.</p>
        <div className="flex gap-8">
          <span>صنع بكل فخر في المملكة العربية السعودية</span>
          <span>سجل تجاري: 1010XXXXXX</span>
        </div>
      </div>
    </footer>
  );
}
