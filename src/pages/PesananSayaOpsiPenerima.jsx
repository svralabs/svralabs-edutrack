import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PesananSayaOpsiPenerima() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="sticky top-0 z-50 bg-background dark:bg-on-background flex justify-between items-center px-margin-mobile py-4 w-full">
<div className="flex items-center gap-4">
<button className="hover:opacity-80 transition-opacity active:scale-95 transition-transform">
<span className="material-symbols-outlined text-primary font-bold">arrow_back</span>
</button>
<h1 className="font-headline-md text-headline-md-mobile font-bold text-on-surface">Pesanan Saya</h1>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">notifications</span>
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container text-xs font-bold overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A professional headshot of a friendly young man with a slight smile, representing a student user profile. The lighting is soft and natural against a minimalist grey background, matching a modern and clean corporate aesthetic. The overall mood is approachable and trustworthy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN_2OcchmhCoLLI7QxGvK5scy2C4afAnHNNil5LD1Q1Bttupmjo9MLEyEnOAUCkUWVcMHSFtZuUqhpn0J__YLEySDM9cH5x5qSkzaQ2arKkwq9E7mVgrT2rJzYd8tdTF5PELwLPxUA-WOEPpFXMPCEN3FuS9PJThZgukZLQJv-lwF5LX3bXPSF9H1PHM1tm3rhq36m0xsroGExPWnjf5Gl8uW3M2t3Oq8ebdJSlzrm2LWIHlgSIAry"/>
</div>
</div>
</header>
<main className="px-margin-mobile pt-4 safe-bottom-padding">

<section className="space-y-4 mb-8">
<h2 className="text-label-sm font-label-sm text-text-secondary uppercase tracking-wider">Item Pesanan</h2>

<div className="bg-surface rounded-2xl p-card-padding shadow-sm flex gap-4 relative group transition-all hover:shadow-md">
<div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLsfvnpIJB45H2aM-zSg_G0Sl9UzuA4H5_SiqxlyKDfcXL4LfzQwSORJPYYUyecJ-eMLzkYDbfwe2DqhHyl8E4Dr7XUxpHg3TkkauQK7ahYD4H-u8lGTE_sE5hly2J1Pl2vzKg9aY2bXcG34z-nrtlwaM-bWt0wqiMBVhC8IjDqGb0cxKlTECWEBWjObLJGgjQiX-N4koRudRAJpqJ3zfDp7y9--D2kWo2t5gQGho1z3AFUxD1tTLqfwVEw"/>
</div>
<div className="flex flex-col justify-between flex-grow">
<div>
<h3 className="font-heading-md text-text-primary mb-1">Paket Perlengkapan Bayi Premium</h3>
<p className="text-label-sm text-text-secondary">Quantity: 1x</p>
</div>
<div className="flex flex-col">
<span className="font-bold text-primary">Rp150.000</span>
<span className="text-[12px] text-tertiary">Fee Rp15.000</span>
</div>
</div>
<div className="absolute top-4 right-4 flex gap-2">
<button className="text-outline hover:text-primary transition-colors active:scale-90"><span className="material-symbols-outlined text-[20px]">edit</span></button>
<button className="text-outline hover:text-error transition-colors active:scale-90"><span className="material-symbols-outlined text-[20px]">delete</span></button>
</div>
</div>

<div className="bg-surface rounded-2xl p-card-padding shadow-sm flex gap-4 relative group transition-all hover:shadow-md">
<div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Close up photography of a high-quality educational wooden toy set with bright primary colors. The style is clean, vibrant, and encourages learning. Soft daylight illuminates the smooth wood grain, following the approachable and friendly EduFlow brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMHA8Y4noGsmWL7txl5DdkbtTfXUjLOO2sA5dARQahjrgY54mYD0zKBaox9cq805wdm2mHQcV7bWgZ1XN1jMXwVK_9-8_9eVYPuzTmjTXElEi-RflR8KHurljAoQnuoA908b0mQXT_mKHdbci9BPjXkWI6F80HShpIM0iIsS-4tBbL-l4IGQeeJskxbeeWGgCHjhYPv1JuleKO96SeZRkmfSVzgxAygjOe2UAwPJQ-w5jO7nQ_yvC0"/>
</div>
<div className="flex flex-col justify-between flex-grow">
<div>
<h3 className="font-heading-md text-text-primary mb-1">Set Mainan Edukasi Kayu</h3>
<p className="text-label-sm text-text-secondary">Quantity: 2x</p>
</div>
<div className="flex flex-col">
<span className="font-bold text-primary">Rp85.000</span>
<span className="text-[12px] text-tertiary">Fee Rp5.000</span>
</div>
</div>
<div className="absolute top-4 right-4 flex gap-2">
<button className="text-outline hover:text-primary transition-colors active:scale-90"><span className="material-symbols-outlined text-[20px]">edit</span></button>
<button className="text-outline hover:text-error transition-colors active:scale-90"><span className="material-symbols-outlined text-[20px]">delete</span></button>
</div>
</div>
</section>

<section className="bg-surface rounded-2xl p-card-padding shadow-sm mb-8">
<h2 className="font-headline-md text-headline-md-mobile font-bold text-on-surface mb-6">Data Penerima</h2><div className="flex gap-2 mb-6 p-1 bg-surface-container rounded-full">
<button className="flex-1 py-2 px-4 rounded-full text-label-sm font-medium transition-all bg-primary text-on-primary shadow-sm" id="btn-self">
    Diri Sendiri
  </button>
<button className="flex-1 py-2 px-4 rounded-full text-label-sm font-medium transition-all text-on-surface-variant hover:bg-surface-variant/50" id="btn-others">
    Orang Lain
  </button>
</div>
<div className="border-t border-surface-variant/50 mb-6"></div>
<div className="hidden" id="recipient-form-container">
<div className="space-y-5">
<div className="space-y-2">
<label className="block text-label-sm font-label-sm text-on-surface-variant ml-1">Nama Penerima</label>
<input className="w-full border-outline-variant bg-surface rounded-2xl px-4 py-3 focus:ring-primary focus:border-primary transition-all text-body-base" placeholder="Masukkan nama lengkap" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-label-sm font-label-sm text-on-surface-variant ml-1">No. Telepon Penerima</label>
<input className="w-full border-outline-variant bg-surface rounded-2xl px-4 py-3 focus:ring-primary focus:border-primary transition-all text-body-base" placeholder="0812xxxx" type="tel"/>
</div>
<div className="space-y-2">
<label className="block text-label-sm font-label-sm text-on-surface-variant ml-1">Alamat Lengkap Penerima</label>
<textarea className="w-full border-outline-variant bg-surface rounded-2xl px-4 py-3 focus:ring-primary focus:border-primary transition-all text-body-base resize-none" placeholder="Tuliskan alamat lengkap pengiriman..." rows="4"></textarea>
</div>
</div>
</div>
</section>

<section className="bg-surface rounded-2xl p-card-padding shadow-sm mb-4">
<h2 className="font-headline-md text-headline-md-mobile font-bold text-on-surface mb-4">Ringkasan Biaya</h2>
<div className="space-y-3">
<div className="flex justify-between items-center text-body-base">
<span className="text-on-surface-variant">Subtotal</span>
<span className="font-medium">Rp235.000</span>
</div>
<div className="flex justify-between items-center text-body-base">
<span className="text-on-surface-variant">Total Fee</span>
<span className="font-medium">Rp20.000</span>
</div>
<div className="pt-3 mt-3 border-t border-surface-variant flex justify-between items-center">
<span className="font-bold text-text-primary">Total Pembayaran</span>
<span className="font-bold text-primary text-xl">Rp255.000</span>
</div>
<div className="bg-surface-container-low rounded-xl p-3 flex gap-3 mt-4">
<span className="material-symbols-outlined text-tertiary">info</span>
<p className="text-xs text-text-secondary italic leading-relaxed">
                        Ongkir &amp; biaya packing dihitung setelah barang dibeli oleh kurir kami.
                    </p>
</div>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 right-0 p-margin-mobile bg-surface/80 backdrop-blur-md border-t border-surface-variant/50">
<button className="w-full bg-primary hover:bg-primary-container text-on-primary font-bold py-4 rounded-full shadow-lg shadow-primary/20 active:scale-[0.98] transition-all duration-200">
            Buat Pesanan
        </button>
</div>



    </div>
  );
}
