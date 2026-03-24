"use client";
import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Create user document in Firestore directly mimicking Backend structure!
      await setDoc(doc(db, "users", userCredential.user.uid), {
        uid: userCredential.user.uid,
        fullName: name,
        email: email,
        phone: "",
        loyaltyPoints: 0,
        role: "user",
        createdAt: serverTimestamp()
      });
      router.push("/");
    } catch (err) {
      setError("حدث خطأ أثناء التسجيل. ربما البريد مستخدم مسبقاً؟");
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6 my-10">
      <div className="bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] shadow-xl border border-outline-variant/10 w-full max-w-md">
        <div className="text-center mb-8">
          <span className="material-symbols-outlined text-primary text-5xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
          <h1 className="text-3xl font-bold font-headline text-emerald-950">حساب جديد</h1>
          <p className="text-on-surface-variant mt-2 font-medium">انضم لعائلة رفوف الآن</p>
        </div>
        {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm font-bold border border-red-200">{error}</div>}
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant">الاسم الكامل</label>
            <input type="text" className="w-full bg-surface-container border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/50" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant">البريد الإلكتروني</label>
            <input type="email" className="w-full bg-surface-container border-none rounded-xl py-4 px-5 text-right focus:ring-2 focus:ring-primary/50" dir="ltr" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant">كلمة المرور (6 أحرف على الأقل)</label>
            <input type="password" className="w-full bg-surface-container border-none rounded-xl py-4 px-5 text-right focus:ring-2 focus:ring-primary/50" dir="ltr" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
          </div>
          <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-[#008648] transition-colors">
            إنشاء الحساب
          </button>
        </form>
        <p className="text-center mt-8 text-on-surface-variant text-sm font-medium">
          لديك حساب بالفعل؟ <Link href="/login" className="text-primary font-bold hover:underline">سجل دخولك</Link>
        </p>
      </div>
    </div>
  );
}
