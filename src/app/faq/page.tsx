import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function FAQPage() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen pt-24 max-w-7xl mx-auto px-6 lg:px-0">
        {/* Sidebar Navigation (Mandatory Shared Component) */}
        <aside className="hidden lg:flex flex-col p-4 space-y-2 h-[calc(100vh-5rem)] w-64 border-l border-surface-container-high bg-slate-50 sticky top-28 rounded-xl ml-8 rtl:ml-0 rtl:mr-8 border border-outline-variant/10">
          <div className="px-4 py-6 mb-4">
            <h2 className="font-bold text-emerald-800 text-lg font-headline">مركز المساعدة</h2>
            <p className="text-slate-500 text-sm">المعلومات والسياسات</p>
          </div>
          <nav className="space-y-1">
            <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-lg transition-transform hover:translate-x-[-4px]" href="/about">
              <span className="material-symbols-outlined">info</span>
              <span className="font-medium text-sm">عن رفوف</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-lg transition-transform hover:translate-x-[-4px]" href="/contact">
              <span className="material-symbols-outlined">mail</span>
              <span className="font-medium text-sm">تواصل معنا</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 bg-emerald-50 text-emerald-900 font-bold rounded-lg" href="/faq">
              <span className="material-symbols-outlined text-emerald-700" style={{ fontVariationSettings: "'FILL' 1" }}>help_center</span>
              <span className="font-medium text-sm">الأسئلة الشائعة</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-lg transition-transform hover:translate-x-[-4px]" href="/policies#privacy">
              <span className="material-symbols-outlined">shield</span>
              <span className="font-medium text-sm">سياسة الخصوصية</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-lg transition-transform hover:translate-x-[-4px]" href="/policies#terms">
              <span className="material-symbols-outlined">gavel</span>
              <span className="font-medium text-sm">الشروط والأحكام</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-lg transition-transform hover:translate-x-[-4px]" href="/policies#returns">
              <span className="material-symbols-outlined">assignment_return</span>
              <span className="font-medium text-sm">سياسة الاسترجاع</span>
            </a>
          </nav>
        </aside>

        {/* Main Content Canvas */}
        <main className="flex-1 lg:px-12 pb-12 w-full lg:w-auto mt-4">
          {/* Hero Header Section */}
          <header className="mb-12 relative overflow-hidden rounded-[2rem] p-12 bg-gradient-to-br from-[#006a38] to-[#008648] text-white shadow-lg">
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline leading-tight">كيف يمكننا مساعدتك اليوم؟</h1>
              <p className="text-white/80 text-lg mb-8 font-medium">ابحث عن إجابات لجميع استفساراتك حول الطلب، الشحن، والخدمات الأخرى في رفوف.</p>
              
              <div className="relative max-w-md">
                <input className="w-full bg-white text-emerald-950 border-none rounded-2xl py-4 px-6 pr-12 shadow-inner focus:ring-2 focus:ring-[#66dd8f] font-medium" placeholder="اكتب سؤالك هنا..." type="text" />
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-2xl">search</span>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-400 rounded-full blur-3xl opacity-30"></div>
            <div 
              className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDa0--u7ZqzgrF1qZYVkOFOBvgxCdq2TlIGqeQG86_K930ROFTS9ANrCRFCVVcanxYAFMdgItQUjKosrUi_0qafbNUy_kLDPSRuY_fAAZEiuGe_LC3agIkRHZutFqKYKZF6U90MmdXz94lLbPkyyCWBJ-tjlQMnHHSGvF_WpUps8kcAnQPI5kf0XtHnI9Tjb-yvczvUQH88f2U95yxaxB5ArqDDr__O8agCCoi8v1ByrvVwJtkLjbPd5873R94GiWorS1x4yCUd264')" }}>
            </div>
          </header>

          {/* FAQ Sections - Bento Grid Style Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* FAQ Accordion Container */}
            <div className="md:col-span-8 space-y-8">
              {/* Section: Ordering */}
              <section className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-8 text-primary">
                  <span className="material-symbols-outlined text-3xl">shopping_basket</span>
                  <h2 className="text-2xl font-bold font-headline text-emerald-950">الطلبات <span className="text-sm text-outline font-label ml-2" dir="ltr">(Ordering)</span></h2>
                </div>
                <div className="space-y-4">
                  <details className="group border-b border-surface-container pb-4 open:pb-6 transition-all duration-300">
                    <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none py-2 hover:text-primary marker:hidden">
                      <span>كيف يمكنني تتبع طلبي؟</span>
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="mt-4 text-on-surface-variant leading-relaxed font-medium">
                      يمكنك تتبع طلبك من خلال الانتقال إلى "حسابي" ثم "طلباتي". ستجد هناك تفاصيل حالة الشحن الحالية ورابط تتبع مباشر مع شركة التوصيل.
                    </div>
                  </details>
                  <details className="group border-b border-surface-container pb-4 open:pb-6 transition-all duration-300">
                    <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none py-2 hover:text-primary marker:hidden">
                      <span>هل يمكنني تعديل طلبي بعد تأكيده؟</span>
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="mt-4 text-on-surface-variant leading-relaxed font-medium">
                      للأسف، لا يمكن تعديل الطلبات بمجرد دخولها مرحلة التجهيز. يمكنك إلغاء الطلب وإعادة الطلب مرة أخرى إذا لم يتم شحنه بعد.
                    </div>
                  </details>
                </div>
              </section>

              {/* Section: Payment */}
              <section className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-8 text-primary">
                  <span className="material-symbols-outlined text-3xl">payments</span>
                  <h2 className="text-2xl font-bold font-headline text-emerald-950">الدفع <span className="text-sm text-outline font-label ml-2" dir="ltr">(Payment)</span></h2>
                </div>
                <div className="space-y-4">
                  <details className="group border-b border-surface-container pb-4 open:pb-6 transition-all duration-300">
                    <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none py-2 hover:text-primary marker:hidden">
                      <span>ما هي خيارات الدفع المتاحة؟</span>
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="mt-4 text-on-surface-variant leading-relaxed font-medium">
                      نقبل الدفع عبر بطاقات مدى، فيزا، ماستركارد، Apple Pay، بالإضافة إلى خيار الدفع عند الاستلام في مناطق محددة.
                    </div>
                  </details>
                </div>
              </section>

              {/* Section: Delivery */}
              <section className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm border border-outline-variant/10">
                <div className="flex items-center gap-3 mb-8 text-primary">
                  <span className="material-symbols-outlined text-3xl">local_shipping</span>
                  <h2 className="text-2xl font-bold font-headline text-emerald-950">التوصيل <span className="text-sm text-outline font-label ml-2" dir="ltr">(Delivery)</span></h2>
                </div>
                <div className="space-y-4">
                  <details className="group border-b border-surface-container pb-4 open:pb-6 transition-all duration-300">
                    <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none py-2 hover:text-primary marker:hidden">
                      <span>كم يستغرق توصيل الطلب؟</span>
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="mt-4 text-on-surface-variant leading-relaxed font-medium">
                      يستغرق التوصيل عادةً من 24 إلى 48 ساعة داخل المدن الرئيسية، ومن 3 إلى 5 أيام عمل لبقية المناطق.
                    </div>
                  </details>
                </div>
              </section>
            </div>

            {/* Sidebar Content / Info Cards */}
            <div className="md:col-span-4 space-y-6">
              <div className="bg-primary text-white p-8 rounded-[2rem] relative overflow-hidden group shadow-md shadow-primary/20">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 font-headline">تحتاج مساعدة فورية؟</h3>
                  <p className="mb-6 opacity-90 text-sm font-medium leading-relaxed">فريق الدعم الفني متاح على مدار الساعة للإجابة على استفساراتك.</p>
                  <button className="bg-white text-primary font-bold py-4 px-6 rounded-xl w-full transition-transform active:scale-95 shadow-sm">
                    تحدث معنا الآن
                  </button>
                </div>
                <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-8xl opacity-10 group-hover:scale-110 transition-transform">support_agent</span>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-[2rem] border border-outline-variant/10 shadow-sm">
                <h4 className="font-bold mb-6 text-emerald-950 font-headline">روابط سريعة</h4>
                <ul className="space-y-4">
                  <li>
                    <a className="flex items-center gap-3 text-primary hover:underline text-sm font-bold" href="/policies#privacy">
                      <span className="material-symbols-outlined text-xl">description</span> 
                      سياسة الخصوصية
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-3 text-primary hover:underline text-sm font-bold" href="/policies#returns">
                      <span className="material-symbols-outlined text-xl">assignment_return</span> 
                      سياسة الاسترجاع
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-3 text-primary hover:underline text-sm font-bold" href="/policies#terms">
                      <span className="material-symbols-outlined text-xl">gavel</span> 
                      الشروط والأحكام
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-[2rem] overflow-hidden aspect-square relative shadow-lg">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqXrP1nfV3GAfNXPOgJlXSO6oDvFmLPHTI5NaMn1dDckBtibZ9rBU_uG2hoImK2E-YdNiun4R2PJ3cMYXIxEGQIxMReaXVNPudUlZ18EEevkBB0dUiktn8zsOjAYVB6m_BffV0Th6e1Waa0nD57czy19gBJrFriAeIIw0R1UVBCMMTs0mQZmNkmhwBGDlBb8XIcgI-wNhjyD4Sgc8pjxc29_HtH1fCKM4D4thyUmiRrav7RxVPlkSGPINVWfmYQhGK7iCnGMtfRSM" 
                  alt="Customer Service" 
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent flex flex-col justify-end p-8">
                  <span className="text-white font-bold text-xl font-headline">تجربة تسوق آمنة وموثوقة</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Sections (Returns, Account, Offers) */}
          <div className="mt-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border-t-[6px] border-[#bb0013] border border-outline-variant/10">
                <span className="material-symbols-outlined text-[#bb0013] text-4xl mb-6">assignment_return</span>
                <h3 className="font-bold text-xl mb-3 font-headline text-emerald-950">الاسترجاع</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-medium">يمكنك استرجاع المنتجات خلال ١٤ يوماً من تاريخ الاستلام بشرط أن تكون في حالتها الأصلية.</p>
                <a className="mt-6 inline-block text-[#bb0013] font-bold text-sm hover:underline" href="/policies#returns">المزيد عن السياسة ←</a>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border-t-[6px] border-primary border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">person</span>
                <h3 className="font-bold text-xl mb-3 font-headline text-emerald-950">الحساب الشخصي</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-medium">إدارة بياناتك، عناوين الشحن، وتفضيلات الخصوصية من مكان واحد بكل سهولة.</p>
                <a className="mt-6 inline-block text-primary font-bold text-sm hover:underline" href="/dashboard">إدارة حسابي ←</a>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border-t-[6px] border-[#795600] border border-outline-variant/10">
                <span className="material-symbols-outlined text-[#795600] text-4xl mb-6">loyalty</span>
                <h3 className="font-bold text-xl mb-3 font-headline text-emerald-950">العروض والخصومات</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-medium">اكتشف أحدث العروض الحصرية وكيفية استخدام كوبونات الخصم في طلباتك.</p>
                <a className="mt-6 inline-block text-[#795600] font-bold text-sm hover:underline" href="/offers">مشاهدة العروض ←</a>
              </div>
            </div>
          </div>
        </main>

        {/* FAB (Contextual for Contacting Support) */}
        <button className="fixed bottom-6 right-6 lg:right-auto lg:left-6 w-16 h-16 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
        </button>
      </div>
      <Footer />
    </>
  );
}
