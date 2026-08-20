import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('lessons');

  return (
    <div className="min-h-screen bg-background text-on-background max-w-md mx-auto relative shadow-2xl overflow-hidden pb-24">
      
{/*  Top AppBar (Back to Top-level suppresses Shell according to logic)  */}
<header className="bg-background px-margin-mobile py-4 flex items-center justify-between sticky top-0 z-10">
<button aria-label="Kembali" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors active:scale-95">
<span className="material-symbols-outlined text-text-primary" data-icon="arrow_back">arrow_back</span>
</button>
<h1 className="font-headline-md text-headline-md text-text-primary flex-1 text-center pr-10">Daftar Akun</h1>
</header>
<main className="flex-1 px-margin-mobile pb-12">
<div className="mt-4 mb-8">
<h2 className="font-headline-xl-mobile text-headline-xl-mobile text-text-primary">Mulai Belajar</h2>
<p className="font-body-base text-body-base text-text-secondary mt-1">Lengkapi data diri Anda untuk membuat akun baru.</p>
</div>
<form className="space-y-6" id="registrationForm" onsubmit="event.preventDefault();">
{/*  Nama Lengkap  */}
<div className="relative form-group">
<input className="peer w-full h-14 px-4 pt-4 pb-2 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all" id="name" placeholder=" " type="text"/>
<label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="name">Nama Lengkap</label>
</div>
{/*  Email  */}
<div className="relative form-group">
<input className="peer w-full h-14 px-4 pt-4 pb-2 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all" id="email" placeholder=" " type="email"/>
<label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="email">Email</label>
</div>
{/*  No Telepon  */}
<div className="relative form-group">
<input className="peer w-full h-14 px-4 pt-4 pb-2 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all" id="phone" placeholder=" " type="tel"/>
<label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="phone">No. Telepon</label>
</div>
{/*  Alamat  */}
<div className="relative form-group">
<textarea className="peer w-full p-4 pt-6 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all resize-none" id="address" placeholder=" " rows="2"></textarea>
<label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="address">Alamat</label>
</div>
{/*  Kata Sandi  */}
<div className="relative form-group">
<input className="peer w-full h-14 px-4 pt-4 pb-2 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all" id="password" placeholder=" " type="password"/>
<label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="password">Kata Sandi</label>
<button className="absolute right-4 top-4 text-text-secondary hover:text-primary transition-colors" onclick="togglePassword()" type="button">
<span className="material-symbols-outlined" data-icon="visibility" id="password-toggle-icon">visibility</span>
</button>
</div>
{/*  Checkbox  */}
<div className="flex items-start gap-3 mt-2">
<div className="relative flex items-center">
<input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary-container cursor-pointer transition-all" id="terms" type="checkbox"/>
</div>
<label className="font-label-sm text-label-sm text-on-surface-variant cursor-pointer" htmlFor="terms">
                    Saya setuju dengan <a className="text-primary font-semibold hover:underline" href="#">syarat &amp; ketentuan</a>
</label>
</div>
{/*  Submit Button  */}
<div className="pt-4">
<button className="w-full bg-primary-container hover:bg-primary text-white font-semibold py-4 rounded-input shadow-lg shadow-primary/20 transition-all active:scale-[0.98]" type="submit">
                    Daftar
                </button>
</div>
</form>
{/*  Footer  */}
<div className="mt-8 text-center">
<p className="font-body-base text-body-base text-text-secondary">
                Sudah punya akun? 
                <a className="text-primary-container font-semibold hover:underline" href="#">Masuk</a>
</p>
</div>
</main>
{/*  Visual Element: Decorative Blurred Orb  */}
<div className="fixed -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="fixed -bottom-24 -left-24 w-64 h-64 bg-secondary-container/5 rounded-full blur-3xl pointer-events-none"></div>


    </div>
  );
}
