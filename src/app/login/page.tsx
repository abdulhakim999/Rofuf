"use client";
import { useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (err) {
      setError("فشل تسجيل الدخول بحساب جوجل");
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6 my-10 relative overflow-hidden">
      <div className="bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-xl border border-outline-variant/10 w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <span className="material-symbols-outlined text-primary text-5xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          <h1 className="text-3xl font-bold font-headline text-emerald-950">تسجيل الدخول</h1>
          <p className="text-on-surface-variant mt-2 font-medium">مرحباً بعودتك إلى رفوف</p>
        </div>
        {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm font-bold border border-red-200">{error}</div>}
        <form onSubmit={handleEmailLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant font-headline">البريد الإلكتروني</label>
            <input 
              type="email" 
              className="w-full bg-surface-container border-none rounded-xl py-4 px-5 text-right focus:ring-2 focus:ring-primary/50" 
              dir="ltr"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant font-headline">كلمة المرور</label>
            <input 
              type="password" 
              className="w-full bg-surface-container border-none rounded-xl py-4 px-5 text-right focus:ring-2 focus:ring-primary/50" 
              dir="ltr"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-[#008648] transition-colors">
            دخول
          </button>
        </form>
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant/20"></div></div>
          <div className="relative flex justify-center text-sm"><span className="bg-surface-container-lowest px-4 text-on-surface-variant">أو</span></div>
        </div>
        <button onClick={handleGoogleLogin} className="w-full py-4 bg-white border border-outline-variant/20 text-emerald-950 font-bold rounded-xl shadow-sm hover:bg-surface-container transition-colors flex items-center justify-center gap-3">
          <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMMluWwvfsBq708F7GDNmZGQgO_TXF7_XDVquahcEp6DJAnBKaKAIApoP-m3CRu3L5TuskOynbA3Ubu0TcQgiKReC_5xXoqwv7QgxHIWtQqDikKjJHRgWHhx0bfaUfZcXKWDX4obDDUYDLeI2j6PwMawanb7uzfuU7U6PsWTqMdRzfDhNkxA0PXbu93ICmWxAV5wEoGtVzZXk6qiGjXU1oUKLuxkbq1A-vtFQDva9s8h5N1DtNYJMq10AKr2APtX2Cxc1zEJLDDp0" alt="Google" width={20} height={20} className="w-5 h-5 object-contain" unoptimized />
          المتابعة باستخدام Google
        </button>
        <p className="text-center mt-8 text-on-surface-variant text-sm font-medium">
          ليس لديك حساب؟ <Link href="/register" className="text-primary font-bold hover:underline">سجل الآن</Link>
        </p>
      </div>
    </div>
  );
}
