import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function DeliveryAreasPage() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-24 md:pb-12 bg-surface">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-l from-primary to-primary-container opacity-90 z-10"></div>
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe75MAIcjXCgnmtZ7bQ6UYG0B1nSrVFKpNl7uUslTakvDexVox7e4aBONexz4321AEYfMwHvKFdiAsufaA0A1QbbTfAk8F5PvJIset2bo-T5k7WX9ZcdugDyPmp8hfPJVzxQIKcfAi68v82o5JfSbXRsGN_LxsnFcu9dAfZSVHalxTF7AyoAlFOqxejaD2oSffMw2xRUMpC-OGSt3zZUKw0tHaPvOLaQXHmW4AaN7tGwMw9kyk8ZDmYyJRaNuogIG-05u_MasfG5Q" 
            alt="Modern aerial view of Riyadh city skyline" 
            fill
            className="object-cover absolute inset-0 z-0"
            unoptimized
          />
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-headline">مناطق التوصيل والفروع</h1>
              <p className="text-xl text-on-primary-container/90 mb-8 leading-relaxed font-body">
                نحن ننمو باستمرار لنصل إليكم أينما كنتم في المملكة. استكشف خريطة التغطية وفروعنا القريبة منك.
              </p>
              <div className="flex gap-4">
                <button className="bg-surface-container-lowest text-primary px-8 py-4 rounded-xl font-bold font-headline shadow-lg flex items-center gap-2 hover:bg-surface transition-all active:scale-95">
                  <span className="material-symbols-outlined">near_me</span>
                  تحديد موقعي الحالي
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6">
          {/* Coverage Map Section */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cities Info */}
              <div className="lg:col-span-1 space-y-4">
                <h2 className="text-2xl font-bold font-headline mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  تغطية المدن الرئيسية
                </h2>
                
                {/* Riyadh */}
                <div className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow group border-r-[6px] border-primary border border-outline-variant/10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-primary/10 p-4 rounded-xl text-primary">
                      <span className="material-symbols-outlined text-2xl">location_city</span>
                    </div>
                    <span className="bg-emerald-50 text-primary text-xs font-bold px-3 py-1 mt-2 rounded-full font-headline tracking-wider">نشط الآن</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-headline">الرياض</h3>
                  <p className="text-on-surface-variant text-sm mb-4 font-medium">تغطية شاملة لجميع الأحياء السكنية والتجارية.</p>
                  <div className="flex items-center gap-4 py-3 border-t border-outline-variant/10">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-outline uppercase font-bold font-label">وقت التوصيل</span>
                      <span className="font-bold text-emerald-950 font-label">60 دقيقة</span>
                    </div>
                    <div className="w-px h-8 bg-outline-variant/20"></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-outline uppercase font-bold font-label">الحد الأدنى</span>
                      <span className="font-bold text-emerald-950 font-label">50 ر.س</span>
                    </div>
                  </div>
                </div>

                {/* Jeddah */}
                <div className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow group border border-outline-variant/10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-primary/10 p-4 rounded-xl text-primary">
                      <span className="material-symbols-outlined text-2xl">water_drop</span>
                    </div>
                    <span className="bg-emerald-50 text-primary text-xs font-bold px-3 py-1 mt-2 rounded-full font-headline tracking-wider">نشط الآن</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-headline">جدة</h3>
                  <p className="text-on-surface-variant text-sm mb-4 font-medium">نصل إليكم في عروس البحر الأحمر بكافة أحيائها.</p>
                  <div className="flex items-center gap-4 py-3 border-t border-outline-variant/10">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-outline uppercase font-bold font-label">وقت التوصيل</span>
                      <span className="font-bold text-emerald-950 font-label">45 دقيقة</span>
                    </div>
                    <div className="w-px h-8 bg-outline-variant/20"></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-outline uppercase font-bold font-label">الحد الأدنى</span>
                      <span className="font-bold text-emerald-950 font-label">40 ر.س</span>
                    </div>
                  </div>
                </div>

                {/* Dammam */}
                <div className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow group border border-outline-variant/10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-primary/10 p-4 rounded-xl text-primary">
                      <span className="material-symbols-outlined text-2xl">factory</span>
                    </div>
                    <span className="bg-emerald-50 text-primary text-xs font-bold px-3 py-1 mt-2 rounded-full font-headline tracking-wider">نشط الآن</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-headline">الدمام والخبر</h3>
                  <p className="text-on-surface-variant text-sm mb-4 font-medium">تغطية المنطقة الشرقية بمنتجاتنا الطازجة يومياً.</p>
                  <div className="flex items-center gap-4 py-3 border-t border-outline-variant/10">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-outline uppercase font-bold font-label">وقت التوصيل</span>
                      <span className="font-bold text-emerald-950 font-label">90 دقيقة</span>
                    </div>
                    <div className="w-px h-8 bg-outline-variant/20"></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-outline uppercase font-bold font-label">الحد الأدنى</span>
                      <span className="font-bold text-emerald-950 font-label">60 ر.س</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Map Component */}
              <div className="lg:col-span-2 relative min-h-[500px] bg-surface-container rounded-[3rem] overflow-hidden shadow-inner border-[12px] border-surface-container-lowest">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkb3557upaV0LuYVVG4M1iCXuCri2t2snssZgcxc862IT-KmOjgVLcelJ4_U8uGuE__aMUUuIxeyKOVwEaD6RAZzSUwTVRTLgS6kBIkmNaevWfM32AOK9KgoO7mRgt8vRCVD3GpTJk0m4HBnWm_K6iVN2r8xXq-RUtGuI4mVFtFurUnCby0jzmPk4skfHNuHGyYYbznvIiUGi1pCkFLiwQHHsytcN8X_mrWMb70mAabeNaNhHk7LQQZp5zQULu21n_Y72NXQP2Sag" 
                  alt="Minimalistic vector map" 
                  fill
                  className="object-cover opacity-60 mix-blend-multiply"
                  unoptimized
                />
                
                {/* Map Floating Controls */}
                <div className="absolute top-6 right-6 flex flex-col gap-2 z-10">
                  <button className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <span className="material-symbols-outlined font-bold">add</span>
                  </button>
                  <button className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <span className="material-symbols-outlined font-bold">remove</span>
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-xl flex flex-wrap items-center justify-between gap-4 border border-outline-variant/10">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-primary animate-pulse shadow-sm shadow-primary/50"></div>
                      <div>
                        <p className="font-bold text-emerald-950 font-headline">نغطي حالياً 12 مدينة</p>
                        <p className="text-xs text-on-surface-variant font-medium">يتم تحديث مناطق التغطية أسبوعياً</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-4 py-2 bg-emerald-50 text-primary text-xs font-bold rounded-xl shadow-sm border border-primary/10">الرياض</span>
                      <span className="px-4 py-2 bg-emerald-50 text-primary text-xs font-bold rounded-xl shadow-sm border border-primary/10">جدة</span>
                      <span className="px-4 py-2 bg-emerald-50 text-primary text-xs font-bold rounded-xl shadow-sm border border-primary/10">الدمام</span>
                      <span className="px-4 py-2 bg-surface-container text-zinc-500 text-xs font-bold rounded-xl shadow-sm">تصفح الكل</span>
                    </div>
                  </div>
                </div>

                {/* Pulse Markers */}
                <div className="absolute top-1/2 right-[45%] w-8 h-8 bg-primary/40 rounded-full flex items-center justify-center animate-ping"></div>
                <div className="absolute top-1/2 right-[45%] w-4 h-4 bg-primary border-2 border-white rounded-full flex items-center justify-center shadow-lg"></div>

                <div className="absolute top-[60%] right-[15%] w-6 h-6 bg-primary/40 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                
                <div className="absolute top-[40%] right-[80%] w-6 h-6 bg-primary/40 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Branches List Section */}
          <section className="mb-20">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold font-headline mb-3 text-emerald-950">فروعنا ونقاط الاستلام</h2>
                <p className="text-on-surface-variant text-lg font-medium">تفضل بزيارتنا في أحد فروعنا أو اختر الاستلام من الفرع لطلباتك عبر التطبيق</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-surface-container-low rounded-full p-2 border border-outline-variant/10">
                <button className="bg-white text-emerald-950 px-6 py-2.5 rounded-full font-bold shadow-sm font-headline">قائمة الفروع</button>
                <button className="text-on-surface-variant px-6 py-2.5 rounded-full font-bold font-headline hover:bg-surface-container-high transition-colors">نقاط الاستلام الذكية</button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {/* Branch 1 */}
              <div className="bg-surface-container-lowest overflow-hidden rounded-[2rem] group border border-outline-variant/10 hover:border-primary/30 transition-all shadow-sm">
                <div className="h-56 relative overflow-hidden">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo1mFSXpV42Cn9rSDSsan7AlT3PxQ-Xf_pdN3MQYAYz4OX_roTXUDrNRfXhrZm8hSVDmXa-oA0-fhOlDFpnmYxhdp7paP_uZ9HngrbeUpLaufP5OYDiVO_N6Z3sFwrO_8G8qwxTxfWRUUkOyRpxUiMAbdKAYIC-WHxY-XO28Om4X4bJIGgOjuhLQBet0bPEqSPGDequyhVhlwdjtQ5WsXBGvyqec554ZDxa-O4Le238kU5_3laooixpfnxf1UXqTULKRotdn7EAjo" 
                    alt="Luxury organic grocery store" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold font-headline px-4 py-1.5 rounded-full shadow-md">مفتوح الآن</div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-2 font-headline text-emerald-950">فرع مجمع النخيل</h4>
                  <p className="text-sm text-on-surface-variant mb-6 flex items-start gap-2 font-medium">
                    <span className="material-symbols-outlined text-[18px] text-primary mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    طريق الملك عبدالعزيز، حي المغرزات، الرياض
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm bg-surface-container-low p-3 rounded-lg border border-outline-variant/5">
                      <span className="text-on-surface-variant font-medium">ساعات العمل:</span>
                      <span className="font-bold text-emerald-950 font-label">08:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm bg-surface-container-low p-3 rounded-lg border border-outline-variant/5">
                      <span className="text-on-surface-variant font-medium">خدمة الاستلام:</span>
                      <span className="text-primary font-bold">متاحة (مواقف خاصة)</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-primary to-[#008648] text-white py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-md shadow-primary/20">الاتجاهات</button>
                    <button className="p-3.5 bg-emerald-50 rounded-xl text-primary hover:bg-primary hover:text-white transition-all border border-primary/10">
                      <span className="material-symbols-outlined">call</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Branch 2 */}
              <div className="bg-surface-container-lowest overflow-hidden rounded-[2rem] group border border-outline-variant/10 hover:border-primary/30 transition-all shadow-sm">
                <div className="h-56 relative overflow-hidden">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOeNwAUiMLCBfbKrkCGevMEUfBU5fVW9sJK1_jLXfWfL7hM7m0ia0GsUG_b7_17L7vUTpkDWPefH2jjSqwwcujKZLxbOT-qV0mUKtpgohN3YhemuIAe-pPdqNlRMnOdzcRnmKPFjj51fbeFEI-X1Tj5Z40cAF9rkFS6xg6qhTRFrtpkJhMjKtyOvVW5KVgHUg1jInMTylSVDIKa4m-_rOJ5vHg0Mp2GF8f-cFyRS9AYb-FzkYLh1JqbwG_pi7L6gv6AByEcC_M3GY" 
                    alt="Checkout area" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold font-headline px-4 py-1.5 rounded-full shadow-md">مفتوح الآن</div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-2 font-headline text-emerald-950">فرع التحلية</h4>
                  <p className="text-sm text-on-surface-variant mb-6 flex items-start gap-2 font-medium">
                    <span className="material-symbols-outlined text-[18px] text-primary mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    شارع التحلية، حي الروضة، جدة
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm bg-surface-container-low p-3 rounded-lg border border-outline-variant/5">
                      <span className="text-on-surface-variant font-medium">ساعات العمل:</span>
                      <span className="font-bold text-emerald-950 font-label">07:00 AM - 01:00 AM</span>
                    </div>
                    <div className="flex justify-between text-sm bg-surface-container-low p-3 rounded-lg border border-outline-variant/5">
                      <span className="text-on-surface-variant font-medium">خدمة الاستلام:</span>
                      <span className="text-primary font-bold">متاحة</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-primary to-[#008648] text-white py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-md shadow-primary/20">الاتجاهات</button>
                    <button className="p-3.5 bg-emerald-50 rounded-xl text-primary hover:bg-primary hover:text-white transition-all border border-primary/10">
                      <span className="material-symbols-outlined">call</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Branch 3 */}
              <div className="bg-surface-container-lowest overflow-hidden rounded-[2rem] group border border-outline-variant/10 hover:border-primary/30 transition-all shadow-sm">
                <div className="h-56 relative overflow-hidden">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOBPLf_71CFjg9cLhyHUOT6pzCOvDNAP3brnkYEoYgRmDj5AaMFQTnMlRzHAgKgv621NfBQZY0cqvdofmrkrJkULgHjzuhber0CfvJmuxGajiqsMMnphxeghQJhUdyjJphl-WfdSO_SQLbxgx1Ofau2XcYqKYO8s37FWQm9TjC-1DBPzp3tNCrjVy3dPZKOETlAaFETr-D7k92OqRvAllKIFiaEqjW9WMuTIQAwqoZ92CiAByjR0J6U2mBddQChMbsFaogb4vB7Fw" 
                    alt="Produce section" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4 bg-tertiary text-white text-xs font-bold font-headline px-4 py-1.5 rounded-full shadow-md">يفتح قريباً</div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-2 font-headline text-emerald-950">فرع الخبر الشمالية</h4>
                  <p className="text-sm text-on-surface-variant mb-6 flex items-start gap-2 font-medium">
                    <span className="material-symbols-outlined text-[18px] text-zinc-400 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    طريق الأمير تركي، حي الخبر الشمالية، الخبر
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm bg-surface-container-low p-3 rounded-lg border border-outline-variant/5">
                      <span className="text-on-surface-variant font-medium">ساعات العمل:</span>
                      <span className="font-bold text-[#795600] italic">يفتح ١٥ يوليو</span>
                    </div>
                    <div className="flex justify-between text-sm bg-surface-container-low p-3 rounded-lg border border-outline-variant/5">
                      <span className="text-on-surface-variant font-medium">خدمة الاستلام:</span>
                      <span className="text-outline font-bold">قيد التجهيز</span>
                    </div>
                  </div>
                  <div className="flex gap-3 opacity-60">
                    <button className="flex-1 bg-surface-container-high text-on-surface-variant py-3.5 rounded-xl font-bold text-sm cursor-not-allowed border border-outline-variant/10">قريباً</button>
                    <button className="p-3.5 bg-surface-container-high rounded-xl text-on-surface-variant cursor-not-allowed border border-outline-variant/10">
                      <span className="material-symbols-outlined">call</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-20 bg-emerald-950 rounded-[3rem] p-12 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#008648]/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 grid md:grid-cols-2 items-center gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-headline leading-tight">هل تبحث عن فرع محدد في حيك؟</h2>
                <p className="text-emerald-100/90 text-lg mb-10 leading-relaxed font-medium">استخدم تطبيق رفوف للحصول على تجربة تسوق مخصصة، تتبع طلبك في الوقت الفعلي، واحصل على عروض حصرية لمنطقتك.</p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-emerald-50 transition-colors shadow-lg group">
                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3lkL0g_TBnJiF7vhsdJ4CPjEQISuw3GkF5mr_XDF0JRKbUdZ5oPxnoQFyhVQS4iqriPSyb_cyLqYDH1P5ORUR42pRv8Ej1ogiGMM7KjWTYbfAXyMq-jSEkfQkADCZoV3wuKeO9eiGc_MaYZT7yBEvQfwFMMAQG33NfxVtBv6kmTfsT_j8_BqYzxVRXYL8Pg6Fk0gK2byu_cRAIdXcpMjzWfl1PnKF9k0OvZyi1a74KqwVQv9oUWceLQXqznese5bkbB04gqrelEE" alt="App Store" width={120} height={40} className="h-8 w-auto group-hover:scale-105 transition-transform" />
                  </button>
                  <button className="bg-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-emerald-50 transition-colors shadow-lg group">
                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMMluWwvfsBq708F7GDNmZGQgO_TXF7_XDVquahcEp6DJAnBKaKAIApoP-m3CRu3L5TuskOynbA3Ubu0TcQgiKReC_5xXoqwv7QgxHIWtQqDikKjJHRgWHhx0bfaUfZcXKWDX4obDDUYDLeI2j6PwMawanb7uzfuU7U6PsWTqMdRzfDhNkxA0PXbu93ICmWxAV5wEoGtVzZXk6qiGjXU1oUKLuxkbq1A-vtFQDva9s8h5N1DtNYJMq10AKr2APtX2Cxc1zEJLDDp0" alt="Google Play" width={120} height={40} className="h-8 w-auto group-hover:scale-105 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="relative hidden md:flex justify-end">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeOww7HpRhDyDPb8D67iVWBmiu6KwVCy2c6piLK1177TErqaI4-9DvBUZ34eku0lF0F0DOsHeCSOCVI6S7JDs7ciuP4S5Kh-23k5myGwkwNx8GGQq0i2xIvZgw_Jldwtyv2zVxyt_yfV6QGMglfkGmLcgCacArCCNpHNJjxxRTXw_-8Sg8V4fM8dAwkAlpYkjDSAHuE_S0cbxgsDCLHb3BXR1-q3fseSgGJgtoxxLdCiC4t5-rSPjrtFdhJMtOgHo502Dshfmga0o" 
                  alt="Delivery tracking app on phone" 
                  width={300} 
                  height={600} 
                  className="rounded-[2.5rem] border-[8px] border-emerald-900/50 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500" 
                  unoptimized
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
