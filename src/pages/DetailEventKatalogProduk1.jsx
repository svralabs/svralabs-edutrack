import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DetailEventKatalogProduk1() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="bg-background sticky top-0 z-40 flex justify-between items-center px-margin-mobile py-4 w-full">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden ring-2 ring-primary/10">
<img className="w-full h-full object-cover" data-alt="A professional studio portrait of a friendly Indonesian female personal shopper in her 30s. She is smiling warmly against a clean, soft-lit background that matches the minimalist EduFlow aesthetic. The lighting is high-key and soft, emphasizing a reliable and organized persona in a modern light-mode interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd0CrLOAC3AP_Ux8hWv-ClYHcRna_DoTR9rsSfii1yzHM-WCm3zVb0HF5L9viJREqmKRUvcICtAydb2p5TL_e2qpZZLhETVbzMoLWbiHOeIAKE5qQqHbEMlDAhJ9-xAUhBVE6-RLFXNh2IK3LjlHHnqSFdu6u8YcTVC-7K2OWMJR1ivukfnOXbyARgq5yCdXo9gO2bOKY9J_tnnzGwYX9uR0lQvg-yuVzZtSG1LApfLKvsPfATHlWN"/>
</div>
<h1 className="font-headline-md text-headline-md-mobile font-bold text-on-surface">EduFlow</h1>
</div>
<button className="hover:opacity-80 transition-opacity active:scale-95 transition-transform text-primary">
<span className="material-symbols-outlined text-[28px]">notifications</span>
</button>
</header>
<main className="max-w-md mx-auto">

<section className="px-margin-mobile relative h-56 w-full mb-6">
<div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl shadow-primary/5 group">
<img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrZ4oFt01WK7MpuqRXOeq0mODV_k9U1T6dnKaTvzSekd-Wc2tD7PC687A7bpQANhN1K3MwhxacJWRw8OfkaNFPpINviHo9KDVqun1fQzBvOU_C3AALM6d9lwELHSibQrol3LAhPoo23HS8vyamzvXhbQZ4c0JCzN_QpZWhNF76lqICf4Lz3JL7LHjk1JD434Q5FNqR4ErSrRep7TNyRDm32Itpt94zIc9xjEiQZ_35Ge25by6wRdmc"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-on-background/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex items-center gap-2 mb-2">
<span className="bg-subject-green text-on-primary font-label-sm text-label-sm px-3 py-1 rounded-full flex items-center gap-1">
<span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            Aktif
                        </span>
<span className="bg-white/20 backdrop-blur-md text-white font-label-sm text-label-sm px-3 py-1 rounded-full">
                            Periode: 10–20 Juli 2026
                        </span>
</div>
<h2 className="text-white font-headline-xl-mobile text-headline-xl-mobile">Event Perlengkapan Bayi</h2>
</div>
</div>
</section>

<nav className="sticky top-[72px] z-30 bg-background/95 backdrop-blur-md py-4 mb-2">
<div className="flex gap-3 px-margin-mobile overflow-x-auto no-scrollbar">
<button className="flex-shrink-0 px-6 py-2 rounded-full bg-primary text-white font-label-sm text-label-sm shadow-md shadow-primary/20 transition-all active:scale-95">
                    Semua
                </button>
<button className="flex-shrink-0 px-6 py-2 rounded-full bg-surface text-on-surface-variant border border-outline-variant font-label-sm text-label-sm hover:bg-surface-container transition-all active:scale-95">
                    Popok
                </button>
<button className="flex-shrink-0 px-6 py-2 rounded-full bg-surface text-on-surface-variant border border-outline-variant font-label-sm text-label-sm hover:bg-surface-container transition-all active:scale-95">
                    Susu
                </button>
<button className="flex-shrink-0 px-6 py-2 rounded-full bg-surface text-on-surface-variant border border-outline-variant font-label-sm text-label-sm hover:bg-surface-container transition-all active:scale-95">
                    Mainan
                </button>
</div>
</nav>

<section className="px-margin-mobile">
<div className="grid grid-cols-2 gap-4">

<div className="bg-surface rounded-xl p-3 border border-surface-container-high hover:border-primary/30 transition-colors group flex flex-col h-full">
<div className="relative w-full aspect-square bg-surface-container rounded-lg overflow-hidden mb-3">
<img className="w-full h-full object-cover" data-alt="A clean, studio-lit photograph of a premium pack of eco-friendly baby diapers. The packaging is minimalist and cream-colored, sitting on a light wooden surface. Soft natural light illuminates the texture of the organic cotton materials. The overall aesthetic is high-end, consumer-friendly, and modern, fitting a luxury baby care theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Ys8fXLAfXVU7OmeuSiOnqS7e2LfAxJJ3Z7zLZURWi9NeHcAIUPyhKu8baaoAtpDvk4rR2IAMb7wNUzr_9He44Qj8PisDCTqyyv6EivgFNv-1PI5Vr5nym71lH8Tqnwcev7TIu7am-5ZvNqBWPB2YxgXeYJV8i8A3kAlseBopGK_Dut_-AXBL57Jumq7YeYsn1CH72NVdUb0eSg9mzlPwUh4MHHlabfEF4M7V_WR-_zvuX__-7a8x"/>
<div className="absolute top-2 left-2">
<span className="bg-primary-container/90 backdrop-blur-sm text-on-primary-container text-[10px] font-bold px-2 py-0.5 rounded-full">+Fee Rp15.000</span>
</div>
</div>
<div className="flex-grow">
<h3 className="text-on-surface font-semibold text-sm line-clamp-2 leading-snug mb-1">Popok Premium XL</h3>
<p className="text-primary font-bold text-base">Rp150.000</p>
</div>
<button className="mt-3 w-full bg-surface-container-low hover:bg-primary-container text-primary hover:text-on-primary-container font-semibold py-2 rounded-lg text-sm transition-all active:scale-95 flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-sm">add</span>
                        Tambah
                    </button>
</div>

<div className="bg-surface rounded-xl p-3 border border-surface-container-high hover:border-primary/30 transition-colors group flex flex-col h-full">
<div className="relative w-full aspect-square bg-surface-container rounded-lg overflow-hidden mb-3">
<img className="w-full h-full object-cover" data-alt="A high-quality product shot of an advanced anti-colic glass baby bottle with a soft silicone nipple. The bottle has a modern ergonomic shape and is displayed against a clean, white minimalist backdrop. The lighting creates subtle reflections on the glass, conveying a sense of hygiene and premium quality for a modern parenting lifestyle." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgfBvDKHXnfYyFoppz9uFeKeHsYmKmFNL-dJAEaaY4lHKKNdniUSEYaUYC6JK58hdaxEBfIObPAOYWoJQVQR93bLYKpR2b14Cz98hE-0QXMExr2OBnTJlpkfvfW7ieXxpkOeQNJENeDjWtTCuj0S91qyDqD3qUrwSeW2q6tNDY4Ww0L3JbtFTPIODeCwaRT3914LwIQW16z8Owb9Ji4bCf6Q8wxqMyX1tom_XGEOgV19Nfp4iPuT5v"/>
<div className="absolute top-2 left-2">
<span className="bg-secondary-container/90 backdrop-blur-sm text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full">+Fee 10%</span>
</div>
</div>
<div className="flex-grow">
<h3 className="text-on-surface font-semibold text-sm line-clamp-2 leading-snug mb-1">Botol Susu Anti-Colic</h3>
<p className="text-primary font-bold text-base">Rp85.000</p>
</div>
<button className="mt-3 w-full bg-surface-container-low hover:bg-primary-container text-primary hover:text-on-primary-container font-semibold py-2 rounded-lg text-sm transition-all active:scale-95 flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-sm">add</span>
                        Tambah
                    </button>
</div>

<div className="bg-surface rounded-xl p-3 border border-surface-container-high hover:border-primary/30 transition-colors group flex flex-col h-full">
<div className="relative w-full aspect-square bg-surface-container rounded-lg overflow-hidden mb-3">
<img className="w-full h-full object-cover" data-alt="A set of beautifully crafted geometric wooden baby toys in muted pastel tones like sage green and soft mustard. The toys are arranged artistically on a light neutral background. The photo style is professional and warm, highlighting the natural grain of the wood and the smooth finish of the child-safe paint. Clean and organized composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8O1Bc_slosjAsELXkWYp6EKUD4hrofWssV8_68jlQublsnjtK8Xj1qvh3fKPHKplxMqHi3z6dSOVNHM-cGAdVj6-Gz87y0ZqDK1t7Sv2Ma8M-k4hk03Z-Rh-EIDfRuPSBvafwV8MfGqzynT_Ri5y1iVEFBUZ9gA-5b_Xh8sVzS6wtjatEBpG2FDWmb3pTRgBlXtlVBFtTa4HQvF2EotQsioJ9jQC-3yH2ONN0SHnMza4zyFRTJSjf"/>
<div className="absolute top-2 left-2">
<span className="bg-secondary-container/90 backdrop-blur-sm text-on-secondary-container text-[10px] font-bold px-2 py-0.5 rounded-full">+Fee 10%</span>
</div>
</div>
<div className="flex-grow">
<h3 className="text-on-surface font-semibold text-sm line-clamp-2 leading-snug mb-1">Mainan Edukasi Kayu</h3>
<p className="text-primary font-bold text-base">Rp120.000</p>
</div>
<button className="mt-3 w-full bg-surface-container-low hover:bg-primary-container text-primary hover:text-on-primary-container font-semibold py-2 rounded-lg text-sm transition-all active:scale-95 flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-sm">add</span>
                        Tambah
                    </button>
</div>

<div className="bg-surface rounded-xl p-3 border border-surface-container-high hover:border-primary/30 transition-colors group flex flex-col h-full">
<div className="relative w-full aspect-square bg-surface-container rounded-lg overflow-hidden mb-3">
<img className="w-full h-full object-cover" data-alt="A neatly folded set of soft, organic cotton baby clothing in a creamy off-white color. The set includes a bodysuit and a small matching hat, resting on a textured linen surface. The soft morning light coming from the side emphasizes the soft fabric quality. The overall mood is gentle, cozy, and high-end, perfect for a curated baby boutique app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBZPkNTC4IZHPqEOcfixiyArGxRNktwoRWBCUdushBZFI5VWVKrqWEEO9BnSgrnY11y7MhxRGPMJh9oOflLd1Q0J8q3PhjQiEKAHK2GxFUmy_QcH9yKFdwSQWp9tZSO0facn74QD1oB3fGRPckfMx2SZdME9gqQFsbG_EoMVQSIW9N9B89HS3Btn4jv0pW-69yKbo0tBT99zDT876LAh99TZmbvD9UdHgHmtuHIA95Z-3550Slz574"/>
<div className="absolute top-2 left-2">
<span className="bg-primary-container/90 backdrop-blur-sm text-on-primary-container text-[10px] font-bold px-2 py-0.5 rounded-full">+Fee Rp20.000</span>
</div>
</div>
<div className="flex-grow">
<h3 className="text-on-surface font-semibold text-sm line-clamp-2 leading-snug mb-1">Set Pakaian Bayi Kapas</h3>
<p className="text-primary font-bold text-base">Rp200.000</p>
</div>
<button className="mt-3 w-full bg-surface-container-low hover:bg-primary-container text-primary hover:text-on-primary-container font-semibold py-2 rounded-lg text-sm transition-all active:scale-95 flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-sm">add</span>
                        Tambah
                    </button>
</div>
</div>
</section>
</main>

<button className="fixed bottom-32 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center z-50 active:scale-90 transition-transform group">
<span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">shopping_cart</span>
<span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-background">3</span>
</button>

<nav className="fixed bottom-margin-mobile left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md z-50 flex justify-around items-center p-2 bg-on-background dark:bg-surface-container-lowest shadow-lg shadow-primary/10 rounded-full">
<button className="flex items-center justify-center bg-primary-container text-on-primary-container rounded-full p-3 active:scale-90 transition-all duration-200">
<span className="material-symbols-outlined">home</span>
</button>
<button className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200">
<span className="material-symbols-outlined">menu_book</span>
</button>
<button className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200">
<span className="material-symbols-outlined">calendar_today</span>
</button>
<button className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200">
<span className="material-symbols-outlined">person</span>
</button>
</nav>


    </div>
  );
}
