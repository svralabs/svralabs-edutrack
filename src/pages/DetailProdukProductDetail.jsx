import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DetailProdukProductDetail() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="relative w-full h-[397px]">
<div className="absolute top-4 left-4 z-20">
<button className="w-10 h-10 flex items-center justify-center bg-surface/80 backdrop-blur-md rounded-full text-on-surface transition-transform active:scale-95">
<span className="material-symbols-outlined">arrow_back</span>
</button>
</div>
<div className="absolute top-4 right-4 z-20 flex gap-2">
<button className="w-10 h-10 flex items-center justify-center bg-surface/80 backdrop-blur-md rounded-full text-on-surface transition-transform active:scale-95">
<span className="material-symbols-outlined">share</span>
</button>
<button className="w-10 h-10 flex items-center justify-center bg-surface/80 backdrop-blur-md rounded-full text-on-surface transition-transform active:scale-95">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>

<div className="w-full h-full bg-surface">
<img className="w-full h-full object-cover" data-alt="A clean, professionally photographed product showcase of high-quality baby essentials, including milk formula, wipes, and soft organic clothing. The items are neatly arranged on a light wooden surface against a pristine white background. The lighting is soft and airy, creating a gentle and nurturing atmosphere. The aesthetic is modern, minimalist, and consumer-friendly, reflecting the vibrant yet clean look of a premium nursery brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB1tO-hhvc7bTBqn_nMiytbFPrx3qt-Zj6mldIwbPovYwBomWey2X_NkcciSXjRofdHOYN6dbIAtB8XpbAxawJ8QyaATFp6T7wIOa47AW-RdE-7IMDUVmm6g89jtQ6x3yc3PSn7C4_s_ZHalpcpT7KArlGxkdLiCZ0q3cQ8Mgtti-5jx2TsIuK_d1YBS-dTCgqpCApkwChjop5ugK-0E3gXh8lYmHbkeo_vBjBpFZmOlRVsQyDkrWd"/>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
<div className="w-6 h-1.5 bg-primary rounded-full"></div>
<div className="w-1.5 h-1.5 bg-surface/50 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-surface/50 rounded-full"></div>
</div>
</header>

<main className="relative -mt-6 bg-background rounded-t-[24px] z-30 px-margin-mobile pt-6">
<section className="bg-surface rounded-lg p-card-padding">
<h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface mb-2">Susu Formula Bayi (Nature's Care)</h1>
<div className="flex items-baseline gap-2 mb-1">
<span className="font-headline-md text-headline-md text-primary">Rp150.000</span>
<span className="text-label-sm font-label-sm text-text-secondary bg-surface-container-low px-2 py-0.5 rounded">Jasa Titip</span>
</div>
<p className="text-label-sm font-label-sm text-text-secondary mb-4">
                Harga Rp150.000 + Fee Rp15.000
            </p>
<div className="flex items-center gap-2 p-3 bg-secondary-fixed/30 rounded-lg border border-secondary-fixed mb-6">
<span className="material-symbols-outlined text-secondary text-[20px]">event_available</span>
<p className="text-label-sm font-label-sm text-on-secondary-fixed-variant">
                    Event: <span className="font-bold">Perlengkapan Bayi</span> · Berakhir 3 hari lagi
                </p>
</div>
<hr className="border-outline-variant/30 mb-6"/>

<div className="flex items-center justify-between mb-8">
<span className="font-heading-md text-heading-md">Jumlah</span>
<div className="flex items-center bg-surface-container rounded-full p-1 border border-outline-variant/20">
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface text-primary transition-all active:scale-90 hover:bg-primary-fixed" onclick="updateQty(-1)">
<span className="material-symbols-outlined">remove</span>
</button>
<span className="w-12 text-center font-bold text-lg" id="qty-display">1</span>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary transition-all active:scale-90 shadow-lg shadow-primary/20" onclick="updateQty(1)">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>

<div className="space-y-3">
<h2 className="font-heading-md text-heading-md">Deskripsi Produk</h2>
<p className="text-on-surface-variant text-body-base leading-relaxed">
                    Susu formula premium untuk bayi yang membutuhkan asupan nutrisi lengkap. Diimpor langsung dari store resmi selama event perlengkapan bayi berlangsung. 
                </p>
<ul className="space-y-2 text-on-surface-variant text-body-base">
<li className="flex gap-3">
<span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>Asli & Segel dari store resmi</span>
</li>
<li className="flex gap-3">
<span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>Expired date panjang (Min. 12 bulan)</span>
</li>
<li className="flex gap-3">
<span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
<span>Packaging aman dengan bubble wrap</span>
</li>
</ul>
</div>
</section>

<section className="mt-4 bg-surface rounded-lg p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full overflow-hidden bg-primary-container flex items-center justify-center text-on-primary-container font-bold">
                    JP
                </div>
<div>
<h3 className="font-label-sm font-bold">Jastiper Professional</h3>
<div className="flex items-center gap-1 text-[12px] text-text-secondary">
<span className="material-symbols-outlined text-[14px] text-subject-yellow" style={{fontVariationSettings: '\'FILL\' 1'}}>star</span>
                        4.9 (2k+ pesanan)
                    </div>
</div>
</div>
<button className="px-4 py-2 text-primary border border-primary/20 rounded-full font-label-sm hover:bg-primary/5 transition-colors">
                Chat
            </button>
</section>
</main>

<nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-outline-variant/10 px-margin-mobile py-4 z-50 flex items-center justify-between shadow-[0_-8px_20px_-10px_rgba(0,0,0,0.1)]">
<div className="flex flex-col">
<span className="text-text-secondary text-[12px]">Total Harga</span>
<span className="font-headline-md text-headline-md text-on-surface" id="total-price">Rp165.000</span>
</div>
<button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 flex items-center gap-2 transition-transform active:scale-95 hover:opacity-90">
<span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            Tambah ke Pesanan
        </button>
</nav>


    </div>
  );
}
