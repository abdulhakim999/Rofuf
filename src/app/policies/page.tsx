import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PoliciesPage() {
  return (
    <>
      <Header />
      <div className="pt-24 min-h-screen max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-6 pb-12 mt-8">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:flex flex-col w-72 shrink-0 space-y-2 sticky top-28 self-start bg-slate-50/50 p-4 rounded-xl border border-outline-variant/10">
          <div className="px-3 py-2 mb-4">
            <h2 className="font-bold text-emerald-800 text-lg font-headline">مركز المساعدة</h2>
            <p className="text-slate-500 text-sm">المعلومات والسياسات</p>
          </div>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-lg transition-transform hover:translate-x-[-4px]" href="/about">
            <span className="material-symbols-outlined">info</span>
            <span className="font-medium">عن رفوف</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-lg transition-transform hover:translate-x-[-4px]" href="/contact">
            <span className="material-symbols-outlined">mail</span>
            <span className="font-medium">تواصل معنا</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-lg transition-transform hover:translate-x-[-4px]" href="/faq">
            <span className="material-symbols-outlined">help_center</span>
            <span className="font-medium">الأسئلة الشائعة</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 bg-emerald-50 text-emerald-900 font-bold rounded-lg transition-transform" href="/policies#privacy">
            <span className="material-symbols-outlined text-emerald-700" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
            <span>سياسة الخصوصية</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-lg transition-transform hover:translate-x-[-4px]" href="/policies#terms">
            <span className="material-symbols-outlined">gavel</span>
            <span className="font-medium">الشروط والأحكام</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-lg transition-transform hover:translate-x-[-4px]" href="/policies#returns">
            <span className="material-symbols-outlined">assignment_return</span>
            <span className="font-medium">سياسة الاسترجاع</span>
          </a>
        </aside>

        {/* Main Content Canvas */}
        <main className="flex-1 max-w-3xl w-full">
          {/* Hero Header */}
          <header className="mb-12">
            <div className="w-20 h-1 bg-primary mb-6 rounded-full"></div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-on-surface mb-4 leading-tight">السياسات والخصوصية</h1>
            <p className="text-lg text-on-surface-variant leading-relaxed opacity-80 font-medium">نحن في رفوف (Rofof) نلتزم بأعلى معايير الشفافية والأمان لضمان تجربة تسوق موثوقة لعملائنا.</p>
          </header>

          {/* Policy Content Sections */}
          <div className="space-y-16">
            {/* Privacy Policy Section */}
            <section className="bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-sm border border-outline-variant/10" id="privacy">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-50 text-primary flex items-center justify-center rounded-xl shadow-sm border border-primary/10">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                </div>
                <h2 className="text-2xl font-bold font-headline text-on-surface" dir="ltr">Privacy Policy</h2>
              </div>
              <div className="prose prose-emerald max-w-none text-on-surface-variant space-y-6">
                <p className="leading-loose font-medium">توضح سياسة الخصوصية هذه كيفية جمع بياناتك واستخدامها وحمايتها عند استخدام منصة رفوف. نحن نقدّر ثقتك بنا ونحرص على حماية معلوماتك الشخصية.</p>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-headline text-on-surface">١. البيانات التي نجمعها</h3>
                  <ul className="list-disc list-inside space-y-3 marker:text-primary font-medium">
                    <li>المعلومات الشخصية مثل الاسم، العنوان، ورقم الجوال.</li>
                    <li>بيانات الدفع والمعاملات المالية المشفرة.</li>
                    <li>بيانات الموقع الجغرافي لتحسين دقة توصيل الطلبات.</li>
                    <li>سجل المشتريات والتفضيلات لتخصيص تجربتك.</li>
                  </ul>
                </div>
                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-bold font-headline text-on-surface">٢. كيف نستخدم معلوماتك</h3>
                  <p className="leading-loose font-medium">نستخدم البيانات لتحسين خدماتنا، معالجة الطلبات، والتواصل معك بشأن التحديثات أو العروض الترويجية التي قد تهمك.</p>
                </div>
              </div>
            </section>

            {/* Terms & Conditions Section */}
            <section className="bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-sm border border-outline-variant/10" id="terms">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-50 text-primary flex items-center justify-center rounded-xl shadow-sm border border-primary/10">
                  <span className="material-symbols-outlined text-3xl">gavel</span>
                </div>
                <h2 className="text-2xl font-bold font-headline text-on-surface" dir="ltr">Terms & Conditions</h2>
              </div>
              <div className="prose prose-emerald max-w-none text-on-surface-variant space-y-6">
                <p className="leading-loose font-medium">باستخدامك لمنصة رفوف، فإنك توافق على الالتزام بالشروط والأحكام التالية. يرجى قراءتها بعناية.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
                    <h4 className="font-bold text-primary mb-2 font-headline">الأهلية</h4>
                    <p className="text-sm opacity-80 leading-relaxed font-medium">يجب أن يكون عمر المستخدم ١٨ عاماً أو أكثر لاستخدام خدماتنا وإجراء عمليات الشراء.</p>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
                    <h4 className="font-bold text-primary mb-2 font-headline">الأسعار</h4>
                    <p className="text-sm opacity-80 leading-relaxed font-medium">جميع الأسعار المعروضة تشمل ضريبة القيمة المضافة ما لم يذكر خلاف ذلك.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-headline text-on-surface">المسؤولية</h3>
                  <p className="leading-loose font-medium">نحن نسعى لضمان دقة توفر المنتجات ومعلومات الأسعار، ولكننا نحتفظ بالحق في إلغاء أي طلب في حال حدوث خطأ تقني أو تسعيري واضح.</p>
                </div>
              </div>
            </section>

            {/* Returns Policy Section */}
            <section className="bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-sm border border-outline-variant/10" id="returns">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-emerald-50 text-primary flex items-center justify-center rounded-xl shadow-sm border border-primary/10">
                  <span className="material-symbols-outlined text-3xl">assignment_return</span>
                </div>
                <h2 className="text-2xl font-bold font-headline text-on-surface" dir="ltr">Returns Policy</h2>
              </div>
              <div className="prose prose-emerald max-w-none text-on-surface-variant space-y-6">
                <p className="leading-loose font-medium">نهدف دائماً إلى تقديم منتجات طازجة وذات جودة عالية. في حال عدم رضاك، نوفر سياسة استرجاع مرنة.</p>
                
                <div className="bg-[#ba1a1a]/5 border-r-4 border-[#ba1a1a] p-6 rounded-2xl mb-8">
                  <h4 className="font-bold text-[#ba1a1a] mb-2 font-headline">هام جداً: المنتجات الطازجة</h4>
                  <p className="text-sm leading-relaxed font-medium text-on-surface-variant">نظراً لطبيعة المنتجات الاستهلاكية والطازجة (مثل الخضار والفواكه واللحوم)، يجب تقديم طلب الاستبدال أو الاسترجاع خلال ساعتين من وقت استلام الطلب.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-headline text-on-surface">خطوات الاسترجاع</h3>
                  <ol className="list-decimal list-inside space-y-4 marker:text-primary marker:font-bold font-medium">
                    <li>التواصل مع فريق خدمة العملاء عبر التطبيق أو الواتساب.</li>
                    <li>إرفاق صورة للمنتج توضح سبب الاسترجاع.</li>
                    <li>سيتم فحص الطلب ومعالجته خلال ٢٤ ساعة.</li>
                    <li>تتم إعادة الأموال إلى المحفظة الإلكترونية أو البطاقة البنكية خلال ٣-٧ أيام عمل.</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Support Banner */}
            <section className="bg-gradient-to-r from-primary to-[#008648] text-white p-8 md:p-10 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-md shadow-primary/20">
              <div className="text-center md:text-right">
                <h3 className="text-2xl font-bold font-headline mb-3">هل لديك استفسار إضافي؟</h3>
                <p className="opacity-90 font-medium">فريقنا متاح لمساعدتك على مدار الساعة بخصوص أي استفسارات قانونية.</p>
              </div>
              <a href="/contact" className="bg-white text-emerald-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform active:scale-95 w-full md:w-auto text-center border-2 border-transparent">
                تواصل معنا الآن
              </a>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
