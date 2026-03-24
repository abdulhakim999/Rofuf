import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF8uLsZQ3ITtbmmdoN7rqPyZLiJ-nmWKT0t7bOB4vngjZBlG5WdjawgCcHVaOCscKeJM_xtpS4ikwd6btxI290l-KPXiwvxxMR54GsnMLdKem21X9oVfpAO7atzPSY6g3FDNhBQo9cH9xTrzPAD5Ubn2AqOPI5cBz4pE_PrIK31yXf-TzabLcFmH0BcvpK0H0iRT1I6sRT-tsX8AleuvVbTEr18vQkAzM9ADK_piSDeJWbaJ-kyXgDm3SNYXvKv8gMPoOmYFMwqWA" 
              alt="Cinematic wide shot of fresh organic vegetables and fruits beautifully arranged in a high-end grocery boutique setting with soft ambient lighting" 
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
            <div className="max-w-2xl space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed/20 border border-primary-fixed/30 text-primary-fixed font-medium text-sm">تراثنا في كل تفاصيلنا</span>
              <h1 className="text-5xl md:text-7xl font-bold font-headline leading-tight">نعيد تعريف مفهوم التسوق الغذائي</h1>
              <p className="text-lg md:text-xl text-surface-container-low/90 leading-relaxed font-light">في رفوف، نؤمن أن الجودة ليست مجرد خيار، بل هي التزام يومي تجاه مجتمعنا لتوفير أفضل ما تجود به الطبيعة.</p>
            </div>
          </div>
        </section>

        {/* Our Story: Bento Grid Layout */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 p-12 rounded-xl bg-surface-container-low flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-bold text-primary font-headline">قصة رفوف</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">بدأت رحلة رفوف من رؤية بسيطة: سد الفجوة بين المزارع المحلية والمستهلك العصري. نحن لسنا مجرد متجر إلكتروني، بل نحن ركيزة أساسية في التحول الرقمي للقطاع الغذائي في المنطقة. نسعى لخلق تجربة تسوق تحترم وقت المستهلك وتقدّر جودة المنتج.</p>
              <div className="flex gap-12 pt-4">
                <div>
                  <span className="block text-4xl font-bold text-emerald-900 font-headline" dir="ltr">15k+</span>
                  <span className="text-sm text-outline font-label">عميل سعيد</span>
                </div>
                <div>
                  <span className="block text-4xl font-bold text-emerald-900 font-headline" dir="ltr">500+</span>
                  <span className="text-sm text-outline font-label">مزارع شريك</span>
                </div>
                <div>
                  <span className="block text-4xl font-bold text-emerald-900 font-headline" dir="ltr">24h</span>
                  <span className="text-sm text-outline font-label">توصيل سريع</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 rounded-xl overflow-hidden shadow-sm aspect-square relative md:aspect-auto">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkSHcYKbsUStIV5z3jlK9wBRVJ5LVZUQZkhy_FWmGdgND8TfUJao_Td-EdD8icdDcHCXmuPMD_O7-makFY6uysPhCp1wNKL5H0ZySE2q-PQ-kZ5Ndo-Slgug7PixZdlQ6yAK1wS6YkSiqaayW75Wz9yc68itgxiwSa6M268rG2rZ80dijw2kgRwGz1G2KtwZePQJbme3AwIkUV3qsDalDKptKYl76A_k7E1HW4E_ahOyZMhHnZsPG7q7_pZVjU3PjgiQy1XW-lSSw" 
                alt="Close up of high quality fresh green herbs and vegetables in a wooden crate" 
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="md:col-span-4 rounded-xl overflow-hidden shadow-sm h-64 md:h-auto relative">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqcjEMzew3EjBrerf_Arb6U4q5jKKsMTxyWHBBgkqZto9QOls58w4RwZ-YcbEbYw8ZzOCB5XPGS1DYfLZexjqWN_WtfJ__vBvw-pRxq69zaztaEEBrWMsT15WG-jlH73aIPCpe2N_DjlwjdFr5fMOduzRMTDS63huGWb-PTqzytn630HcvMLtXpUyM_8JSTggmUpi6GE_IGc4ZRvReo6Lu-mGm8VFJ68dFTvVa9BYXxTQOxkUmwld-BlNmveWyZO8D9j_BSywmuMk" 
                alt="Interior of a modern logistics warehouse with organized shelves" 
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="md:col-span-8 p-12 rounded-xl bg-primary text-white flex flex-col justify-center bg-gradient-to-br from-[#006a38] to-[#008648]">
              <h3 className="text-3xl font-bold mb-4 font-headline">التزامنا بالاستدامة</h3>
              <p className="text-lg opacity-90 leading-relaxed">نحن ملتزمون بتقليل الأثر البيئي من خلال استخدام التغليف القابل لإعادة التدوير ودعم المزارع التي تتبع أساليب الزراعة المستدامة. كل طلب من رفوف هو خطوة نحو مستقبل أكثر اخضراراً.</p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-surface-container py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8 bg-surface-container-lowest p-10 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary">visibility</span>
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 font-headline">رؤيتنا</h3>
                <p className="text-lg text-on-surface-variant leading-relaxed">أن نكون الوجهة الأولى والموثوقة للتسوق الغذائي الذكي في منطقة الخليج، من خلال دمج التكنولوجيا المتطورة مع أصالة المنتجات المحلية، لنرتقي بجودة حياة عملائنا.</p>
              </div>
              <div className="space-y-8 bg-surface-container-lowest p-10 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary">rocket_launch</span>
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 font-headline">مهمتنا</h3>
                <p className="text-lg text-on-surface-variant leading-relaxed">توفير تجربة تسوق سلسة وشفافة تضمن وصول المنتجات الطازجة من الحقل إلى المائدة في أقل وقت ممكن، مع الحفاظ على أعلى معايير السلامة والجودة العالمية.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us / Service Features */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-on-surface font-headline">لماذا تختار رفوف؟</h2>
            <p className="text-outline max-w-2xl mx-auto">نحن نجمع بين الخبرة التشغيلية والابتكار التقني لنقدم لك خدمة لا تضاهى.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-xl bg-surface-container-lowest hover:bg-surface-bright transition-all border border-transparent hover:border-emerald-100 block cursor-default">
              <div className="mb-6 p-4 w-fit rounded-lg bg-surface-container-low group-hover:bg-primary-fixed/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl">verified</span>
              </div>
              <h4 className="text-xl font-bold mb-3 font-headline">ضمان الجودة</h4>
              <p className="text-on-surface-variant leading-relaxed">نطبق نظام صارم لفحص الجودة يمر به كل منتج قبل وصوله إلى رفوفنا الإلكترونية.</p>
            </div>
            <div className="group p-8 rounded-xl bg-surface-container-lowest hover:bg-surface-bright transition-all border border-transparent hover:border-emerald-100 block cursor-default">
              <div className="mb-6 p-4 w-fit rounded-lg bg-surface-container-low group-hover:bg-primary-fixed/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl">speed</span>
              </div>
              <h4 className="text-xl font-bold mb-3 font-headline">لوجستيات ذكية</h4>
              <p className="text-on-surface-variant leading-relaxed">أسطولنا مجهز بأحدث تقنيات التبريد لضمان الحفاظ على نضارة المنتجات أثناء النقل.</p>
            </div>
            <div className="group p-8 rounded-xl bg-surface-container-lowest hover:bg-surface-bright transition-all border border-transparent hover:border-emerald-100 block cursor-default">
              <div className="mb-6 p-4 w-fit rounded-lg bg-surface-container-low group-hover:bg-primary-fixed/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl">support_agent</span>
              </div>
              <h4 className="text-xl font-bold mb-3 font-headline">دعم متواصل</h4>
              <p className="text-on-surface-variant leading-relaxed">فريقنا متاح على مدار الساعة للإجابة على استفساراتك وضمان رضاك الكامل عن كل طلب.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="rounded-3xl bg-gradient-to-br from-[#006a38] to-[#008648] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary-fixed/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold font-headline">جاهز لاكتشاف التميز؟</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">انضم إلى آلاف العملاء الذين يستمتعون بتجربة تسوق فريدة يومياً.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/products" className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-bright transition-all active:scale-95 shadow-xl">
                  ابدأ التسوق الآن
                </Link>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
                  تحميل التطبيق
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
