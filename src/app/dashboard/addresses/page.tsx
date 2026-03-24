import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const addresses = [
  { id: 1, type: "المنزل", isDefault: true, name: "محمد عبدالله", details: "الرياض، حي النخيل، شارع التخصصي، مبنى ٤٥", phone: "+966 50 123 4567" },
  { id: 2, type: "العمل", isDefault: false, name: "محمد عبدالله", details: "الرياض، حي العقيق، شارع التحلية، برج الراجحي", phone: "+966 50 123 4567" },
];

export default function AddressesPage() {
  return (
    <>
      <Header />
      <main className="mt-[154px] pt-4 pb-20 bg-surface-container-low min-h-screen">
        <div className="max-w-screen-2xl mx-auto px-6 mb-8">
          <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">home</span>
              الرئيسية
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <Link href="/dashboard" className="hover:text-primary transition-colors">
              لوحة التحكم
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_left</span>
            <span className="text-on-surface font-bold">العناوين المحفوظة</span>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-[2rem] shadow-sm shadow-emerald-900/5 sticky top-[180px] border border-outline-variant/10 overflow-hidden">
                <div className="p-8 bg-gradient-to-br from-emerald-950 to-primary text-white text-center flex flex-col items-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full border-4 border-white/20 flex items-center justify-center mb-4 relative overflow-hidden backdrop-blur-md">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                  </div>
                  <h2 className="text-xl font-bold font-headline mb-1">محمد عبدالله</h2>
                  <p className="text-xs text-emerald-100 opacity-90">+966 50 123 4567</p>
                </div>
                
                <div className="p-4 flex flex-col gap-2">
                  <Link href="/dashboard" className="flex items-center gap-3 p-4 rounded-2xl text-on-surface-variant hover:bg-surface-container-lowest hover:text-primary transition-all font-medium border border-transparent">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
                    لوحة التحكم
                  </Link>
                  <Link href="/orders" className="flex items-center gap-3 p-4 rounded-2xl text-on-surface-variant hover:bg-surface-container-lowest hover:text-primary transition-all font-medium border border-transparent">
                    <span className="material-symbols-outlined">shopping_bag</span>
                    سجل الطلبات
                  </Link>
                  <Link href="/dashboard/addresses" className="flex items-center gap-3 p-4 rounded-2xl bg-primary/10 text-primary font-bold transition-all border border-primary/20">
                    <span className="material-symbols-outlined">location_on</span>
                    العناوين المحفوظة
                  </Link>
                  <button className="flex items-center gap-3 p-4 rounded-2xl text-on-surface-variant hover:bg-surface-container-lowest hover:text-primary transition-all font-medium border border-transparent w-full">
                    <span className="material-symbols-outlined">favorite</span>
                    قائمة الأمنيات
                  </button>
                  <button className="flex items-center gap-3 p-4 rounded-2xl text-on-surface-variant hover:bg-surface-container-lowest hover:text-primary transition-all font-medium border border-transparent w-full">
                    <span className="material-symbols-outlined">settings</span>
                    إعدادات الحساب
                  </button>
                  
                  <div className="h-px bg-outline-variant/20 my-2"></div>
                  
                  <button className="flex items-center gap-3 p-4 rounded-2xl text-secondary hover:bg-secondary/5 font-bold transition-all border border-transparent w-full group">
                    <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">logout</span>
                    تسجيل الخروج
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col gap-8">
              <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-sm shadow-emerald-900/5 border border-outline-variant/10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-10 pb-6 border-b border-outline-variant/20 gap-4">
                  <h1 className="text-3xl font-extrabold font-headline text-emerald-950 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary bg-emerald-50 p-2 rounded-xl">location_city</span>
                    العناوين المحفوظة
                  </h1>
                  <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-container transition-all shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined">add</span>
                    إضافة عنوان جديد
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {addresses.map((addr) => (
                    <div key={addr.id} className={`p-6 rounded-2xl border-2 transition-all relative ${addr.isDefault ? 'border-primary bg-emerald-50/20' : 'border-outline-variant/20 hover:border-primary/40 bg-surface-container-lowest'}`}>
                      {addr.isDefault && (
                        <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-lg">الافتراضي</div>
                      )}
                      
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center ${addr.isDefault ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant'}`}>
                          <span className="material-symbols-outlined text-[28px]">{addr.type === 'المنزل' ? 'home' : 'work'}</span>
                        </div>
                        <h3 className="text-xl font-bold font-headline text-on-surface">{addr.type}</h3>
                      </div>
                      
                      <div className="flex flex-col gap-2 mb-8">
                        <span className="text-sm font-bold text-on-surface">{addr.name}</span>
                        <p className="text-sm text-on-surface-variant leading-relaxed">{addr.details}</p>
                        <span className="text-sm font-bold text-primary mt-2 flex items-center gap-2" dir="ltr">
                          <span className="material-symbols-outlined text-sm">call</span>
                          {addr.phone}
                        </span>
                      </div>
                      
                      <div className="flex gap-4 pt-6 border-t border-outline-variant/20">
                        <button className="flex-1 py-3 text-sm font-bold text-primary bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-[18px]">edit_square</span>
                          تعديل
                        </button>
                        <button className="flex-1 py-3 text-sm font-bold text-secondary bg-red-50 rounded-xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                          حذف
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Empty Slot for Addition */}
                  <button className="p-6 rounded-2xl border-2 border-dashed border-outline-variant/30 bg-surface-container-lowest hover:bg-emerald-50/50 hover:border-primary/50 transition-all flex flex-col items-center justify-center gap-4 min-h-[280px]">
                    <div className="w-16 h-16 rounded-full bg-surface-container-low text-on-surface-variant flex items-center justify-center group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-3xl">add_location_alt</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-on-surface mb-2 font-headline">إضافة عنوان جديد</h3>
                      <p className="text-xs text-outline font-medium">حفظ عنوان إضافي لتسهيل الطلب في المرات القادمة</p>
                    </div>
                  </button>
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
