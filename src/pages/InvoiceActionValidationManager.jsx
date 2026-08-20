import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function InvoiceActionValidationManager() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="fixed top-0 left-0 w-full z-50 bg-surface flex flex-col items-start px-margin-mobile py-4 shadow-sm">
<div className="flex items-center w-full">
<button className="p-2 -ml-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95">
<span className="material-symbols-outlined text-primary">arrow_back</span>
</button>
<div className="ml-2 flex flex-col">
<h1 className="font-headline-md text-headline-md-mobile text-text-primary">Validasi &amp; Invoice</h1>
<p className="font-label-sm text-label-sm text-text-secondary tracking-wide">#ORD-2023001</p>
</div>
<button className="ml-auto p-2 rounded-full hover:bg-surface-container-low">
<span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
</button>
</div>
</header>

<main className="flex-1 mt-20 mb-32 px-margin-mobile overflow-y-auto hide-scrollbar">

<section className="mt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
<div className="bg-surface rounded-3xl p-card-padding shadow-sm space-y-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-primary">payments</span>
</div>
<h2 className="font-heading-md text-text-primary">Penyesuaian Biaya</h2>
</div>
<div className="space-y-4">

<div className="space-y-2">
<label className="font-label-sm text-label-sm text-on-surface-variant ml-1">Biaya Packing</label>
<div className="relative custom-focus transition-all duration-200 bg-surface-container-low rounded-2xl border border-outline-variant flex items-center px-4">
<span className="text-on-surface-variant font-medium">Rp</span>
<input className="w-full bg-transparent border-none focus:ring-0 text-text-primary font-semibold py-4 px-2" placeholder="0" type="number" value="5000"/>
</div>
</div>

<div className="space-y-2">
<label className="font-label-sm text-label-sm text-on-surface-variant ml-1">Biaya Ongkir Manual</label>
<div className="relative custom-focus transition-all duration-200 bg-surface-container-low rounded-2xl border border-outline-variant flex items-center px-4 shadow-[0_0_0_2px_rgba(98,54,255,1)] border-primary-container">
<span className="text-on-surface-variant font-medium">Rp</span>
<input className="w-full bg-transparent border-none focus:ring-0 text-text-primary font-semibold py-4 px-2" placeholder="0" type="number" value="22000"/>
</div>
</div>
</div>
</div>
</section>

<section className="mt-6">
<div className="flex flex-col items-center space-y-3">
<button className="w-full bg-[#25D366] text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold shadow-md active:scale-[0.98] transition-transform">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>send</span>
                    Kirim Reminder WhatsApp (Kirimdev)
                </button>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">history</span>
<p className="font-label-sm text-[12px]">Reminder Terakhir Dikirim via Kirimdev: 2 Jam Lalu</p>
</div>
</div>
</section>

<section className="mt-8 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
<div className="bg-surface rounded-3xl p-card-padding shadow-sm space-y-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-secondary">verified_user</span>
</div>
<h2 className="font-heading-md text-text-primary">Validasi Pembayaran</h2>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-video bg-surface-container-lowest border border-outline-variant cursor-zoom-in">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="A clean, professionally photographed close-up of a mobile banking transaction receipt on a smartphone screen. The image shows details of a bank transfer including the amount, date, and recipient name, framed by soft ambient studio lighting. The background is a blurred, minimalist modern office desk setting with neutral grey and purple accents. High-quality digital art style for an administration dashboard." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuA7cqjYjNUwXofDiw5KrBdaMHLZIDeelXPFPtJ4T8yfy9i_ip2PIRGNkHjX56VFw5BsEEOlVzKahqrW8SAYwMDSB-PPB7HJL3YU7SAINTa1_e6luD2ygDfl-tDuUL_zp1T1YpPNb3eYrWDLwPJa8YoXSeGBIF-MPEYt5zr0MX-RuQl4v_Fsvr_XgPgX8V2IjKSLlTSUFBNMwH7TLjFhIvQaHbGSE6aenHxN8I2xTdIknBR8fwTKyeLr\')'}}>
</div>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3 text-white">
<p className="text-[10px] font-medium opacity-90 uppercase tracking-widest">Bukti Transfer - JPG</p>
</div>
</div>

<div className="grid grid-cols-2 gap-4 bg-surface-container-low p-4 rounded-2xl border border-surface-variant">
<div className="space-y-1">
<p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tighter">Nama Bank</p>
<p className="font-label-sm font-semibold text-text-primary">BCA Digital</p>
</div>
<div className="space-y-1">
<p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tighter">Atas Nama</p>
<p className="font-label-sm font-semibold text-text-primary">Andi Pratama</p>
</div>
<div className="col-span-2 pt-2 border-t border-outline-variant/30 flex justify-between items-end">
<div>
<p className="text-[11px] text-on-surface-variant uppercase font-bold tracking-tighter">Total Nominal</p>
<p className="text-heading-md font-bold text-primary">Rp 452.000</p>
</div>
<span className="material-symbols-outlined text-subject-green mb-1" style={{fontVariationSettings: '\'FILL\' 1'}}>check_circle</span>
</div>
</div>
</div>
</section>
</main>

<footer className="fixed bottom-0 left-0 w-full bg-surface/80 backdrop-blur-md p-4 pb-safe border-t border-surface-variant/50 shadow-[0_-8px_24px_rgba(0,0,0,0.03)] z-50">
<div className="flex gap-3">
<button className="flex-1 py-4 px-2 rounded-2xl border-2 border-secondary text-secondary font-bold font-label-sm hover:bg-secondary-fixed transition-all active:scale-95 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[20px]">close</span>
                Reject Bukti
            </button>
<button className="flex-[1.5] py-4 px-2 rounded-2xl bg-primary-container text-white font-bold font-label-sm shadow-lg shadow-primary-container/20 hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[20px]">verified</span>
                Validasi &amp; Kirim
            </button>
</div>
</footer>



    </div>
  );
}
