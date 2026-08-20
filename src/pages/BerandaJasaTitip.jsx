import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BerandaJasaTitip() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="sticky top-0 z-40 bg-background flex justify-between items-center px-margin-mobile py-4 w-full">
<div className="flex flex-col">
<span className="text-text-secondary font-label-sm text-label-sm">Selamat Datang,</span>
<h1 className="font-headline-md text-headline-md-mobile font-bold text-on-surface">Halo, Rio</h1>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface hover:opacity-80 transition-opacity active:scale-95">
<span className="material-symbols-outlined text-primary" data-icon="notifications">notifications</span>
</button>
</header>
<main className="px-margin-mobile space-y-6">

<div className="relative mt-2">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="w-full pl-12 pr-4 py-4 bg-surface border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-primary-container text-body-base font-body-base" placeholder="Cari produk atau event" type="text"/>
</div>

<section>
<div className="flex justify-between items-end mb-4">
<h2 className="font-heading-md text-heading-md text-on-surface">Event Berlangsung</h2>
<button className="text-primary font-label-sm text-label-sm hover:underline">Lihat Semua</button>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">

<div className="min-w-[280px] bg-surface rounded-2xl p-3 shadow-sm border border-surface-variant flex flex-col gap-3">
<div className="relative w-full h-40 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A vibrant digital illustration of a Tokyo street market at night with neon lights in pink and blue. The scene is clean, modern, and captures a high-end travel shopping vibe with a soft-minimalist aesthetic. Professional lighting emphasizes the exciting atmosphere of a shopping event." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJmGC89dvP-dagNCdJGn2JcYpBqu7aKeZFMwHW0XqYGVQQwDnwFfGgm7e6rW1BMVv4yA6OVaUWls2wcfoxl4EUzlihNimBg7taK67ReP8xTW7nAVW4YJ4qv3jNYr0AfVaLwAR050n-gAIAiWIcQG_OfJlxi8eAZf_VnMt1MPEutc6FLVJqOfQwGirmRBJemRjoMKh7MgaLtwaRZ3c7WfShIYR1VW6R4CswNoxBsL4lntqEX2Tg_mB0"/>
<div className="absolute top-2 left-2 px-3 py-1 bg-secondary-container text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                            Populer
                        </div>
</div>
<div className="px-1">
<h3 className="font-heading-md text-on-surface mb-1">Tokyo Flash Sale</h3>
<div className="flex justify-between items-center">
<span className="px-2 py-1 bg-[#FF6161]/10 text-secondary font-bold text-[11px] rounded-lg">
                                Berakhir 3 hari lagi
                            </span>
<button className="bg-primary-container text-white px-4 py-1.5 rounded-lg text-label-sm font-bold active:scale-95 transition-transform">
                                Lihat
                            </button>
</div>
</div>
</div>

<div className="min-w-[280px] bg-surface rounded-2xl p-3 shadow-sm border border-surface-variant flex flex-col gap-3">
<div className="relative w-full h-40 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A stylish flat-lay of premium skincare products and high-end fashion accessories from Paris. The background is a clean, neutral soft grey. Lighting is soft and natural, emphasizing the luxury and organized nature of a personal shopper service. Colors are muted with vibrant accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuClyZWS0mZR8vFOLecqv8RWtiM_yLTQADAWNmljHEnTMjUqnklD3TnQ9VP_Aec9svgglcKl9g_Wgt1GoMpC90sR0jujJ6D8YLP78ZtX5SGfTi4zGX8kw8nMQf8T6FHBrBQakCpEsvBRvsb1PgiDz0Jq62UrsQ-QiDShyXWzEMPesnHweVqK4VGRg_PXdPa7DXY5HQnIYihGYxRcxZkoBzFkgPGEs2nR7SX3kWRz-VmewMMvWMEsbp9v"/>
<div className="absolute top-2 left-2 px-3 py-1 bg-subject-yellow text-on-tertiary-fixed font-bold text-[10px] rounded-full uppercase tracking-wider">
                            Baru
                        </div>
</div>
<div className="px-1">
<h3 className="font-heading-md text-on-surface mb-1">Paris Fashion Week</h3>
<div className="flex justify-between items-center">
<span className="px-2 py-1 bg-[#FFC043]/10 text-tertiary font-bold text-[11px] rounded-lg">
                                Berakhir 5 hari lagi
                            </span>
<button className="bg-primary-container text-white px-4 py-1.5 rounded-lg text-label-sm font-bold active:scale-95 transition-transform">
                                Lihat
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="flex gap-2 overflow-x-auto no-scrollbar py-2">
<button className="whitespace-nowrap px-6 py-2.5 bg-primary text-white rounded-full font-label-sm text-label-sm shadow-md shadow-primary/20">Semua</button>
<button className="whitespace-nowrap px-6 py-2.5 bg-surface text-on-surface-variant border border-outline-variant rounded-full font-label-sm text-label-sm hover:bg-surface-container transition-colors">Bayi</button>
<button className="whitespace-nowrap px-6 py-2.5 bg-surface text-on-surface-variant border border-outline-variant rounded-full font-label-sm text-label-sm hover:bg-surface-container transition-colors">Skincare</button>
<button className="whitespace-nowrap px-6 py-2.5 bg-surface text-on-surface-variant border border-outline-variant rounded-full font-label-sm text-label-sm hover:bg-surface-container transition-colors">Fashion</button>
<button className="whitespace-nowrap px-6 py-2.5 bg-surface text-on-surface-variant border border-outline-variant rounded-full font-label-sm text-label-sm hover:bg-surface-container transition-colors">Elektronik</button>
<button className="whitespace-nowrap px-6 py-2.5 bg-surface text-on-surface-variant border border-outline-variant rounded-full font-label-sm text-label-sm hover:bg-surface-container transition-colors">Makanan</button>
</section>

<section>
<div className="flex justify-between items-end mb-4">
<h2 className="font-heading-md text-heading-md text-on-surface">Katalog Populer</h2>
<span className="material-symbols-outlined text-outline" data-icon="tune">tune</span>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="bg-surface rounded-2xl p-3 shadow-sm border border-surface-variant">
<div className="relative aspect-square rounded-xl overflow-hidden mb-3">
<img className="w-full h-full object-cover" data-alt="Close up professional studio photography of a premium luxury moisturizer jar. Soft focus background with clean white lighting. The image represents high-end skincare, featuring a minimalist aesthetic with vibrant teal accents on the label. 8k resolution, crisp detail." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzjwDhfsLkxP1MQTb9IpRpl2uOSQ8CL_0OnCY4z2b36u4Wewu3APiXq2OxCOe9_ofjEZGkxbWNWCK0b7L_Ae3taHUIzR1BSDi14ojN3Mrkfl1_bgProxgERxfpqhDbIHWFnLEMJaYKac1eJyDOcWySwx8BXSrViGNjXcH6SaZJDDB2EgDhMH9RVZdm6duispv9EAYltsSwDuCIy1GxgaFvW5MDPR-Af40jXmdLIG2I_ELVTOjyy2iD"/>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 flex items-center justify-center">
<span className="material-symbols-outlined text-error text-[18px]" data-icon="favorite" style={{fontVariationSettings: '\'FILL\' 1'}}>favorite</span>
</div>
</div>
<div className="space-y-1">
<span className="text-[10px] font-bold text-primary tracking-wide uppercase">SKINCARE</span>
<h4 className="font-label-sm text-label-sm text-on-surface leading-tight h-9 line-clamp-2">Laneige Water Bank Blue Hyaluronic</h4>
<div className="flex flex-col">
<span className="font-bold text-on-background text-body-base">Rp 450.000</span>
<span className="inline-block w-fit px-1.5 py-0.5 bg-surface-container-high text-on-primary-fixed-variant text-[10px] font-bold rounded-md mt-1">
                                +Fee 10%
                            </span>
</div>
</div>
</div>

<div className="bg-surface rounded-2xl p-3 shadow-sm border border-surface-variant">
<div className="relative aspect-square rounded-xl overflow-hidden mb-3">
<img className="w-full h-full object-cover" data-alt="A fashionable luxury designer crossbody bag in beige leather. Isolated on a clean, soft-minimalist studio background with warm lighting. The product looks premium and carefully handled, perfect for a personal shopper catalog. High-end fashion photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPXsAqZt_Q-wOG-46Wnq0GJ1EXamCXzIZ2XWZMrSEXHnuTFv9COayO_WZoWKEzUtMbW0AsnWWPFsFpPTvU1oQUoqX7sE7j6hsBXCNBReGIrKrdsA-1C4cvghumA0kZKnHtFq-W6QrN0vGywYNb5GMIq4hs7dB4bPLTZf4SlHW-NEx-Q1VwWFNBJfZezERMv9v_V4nGm_Dsah9acqhRNZdgEFdcK-ysFqU9KekhzCXBQay5v_WGFUIa"/>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 flex items-center justify-center">
<span className="material-symbols-outlined text-outline-variant text-[18px]" data-icon="favorite">favorite</span>
</div>
</div>
<div className="space-y-1">
<span className="text-[10px] font-bold text-primary tracking-wide uppercase">FASHION</span>
<h4 className="font-label-sm text-label-sm text-on-surface leading-tight h-9 line-clamp-2">Coach Tabby Shoulder Bag 26</h4>
<div className="flex flex-col">
<span className="font-bold text-on-background text-body-base">Rp 6.250.000</span>
<span className="inline-block w-fit px-1.5 py-0.5 bg-surface-container-high text-on-primary-fixed-variant text-[10px] font-bold rounded-md mt-1">
                                +Fee 10%
                            </span>
</div>
</div>
</div>

<div className="bg-surface rounded-2xl p-3 shadow-sm border border-surface-variant">
<div className="relative aspect-square rounded-xl overflow-hidden mb-3">
<img className="w-full h-full object-cover" data-alt="A collection of colorful Japanese snacks and limited edition sweets in vibrant packaging. The image is bright, cheerful, and appetizing, set on a clean wooden table. Modern food photography with high saturation and sharp focus on the details of the packaging." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6Ww1Q3o4dJ93QscRuASZxwCJ1FlDeRIPTPqcnoALKwoqzIrfY1F3jA_lGyAkcx1EYEAzbQJEaoQ4Hm4ExTfaRn_zeGeQVb3rt_WeuLPf6PJDP-8gnWzuCPyGuKOm1vpi3bKP8Mqk-NuAUmpRwa5xIEhO0gAruhktp3cqx7_I-PNWI7FKOePTTs9Af29rrtGQFHf-tXp2F8NQcnvXMcGObERPG6KHs-UV8mu_4rlGo8982j9jLQGyZ"/>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 flex items-center justify-center">
<span className="material-symbols-outlined text-outline-variant text-[18px]" data-icon="favorite">favorite</span>
</div>
</div>
<div className="space-y-1">
<span className="text-[10px] font-bold text-primary tracking-wide uppercase">MAKANAN</span>
<h4 className="font-label-sm text-label-sm text-on-surface leading-tight h-9 line-clamp-2">Tokyo Banana Limited Edition</h4>
<div className="flex flex-col">
<span className="font-bold text-on-background text-body-base">Rp 280.000</span>
<span className="inline-block w-fit px-1.5 py-0.5 bg-surface-container-high text-on-primary-fixed-variant text-[10px] font-bold rounded-md mt-1">
                                +Fee 10%
                            </span>
</div>
</div>
</div>

<div className="bg-surface rounded-2xl p-3 shadow-sm border border-surface-variant">
<div className="relative aspect-square rounded-xl overflow-hidden mb-3">
<img className="w-full h-full object-cover" data-alt="Modern high-tech wireless noise cancelling headphones in matte black finish. Clean, minimalist product photography against a light grey background. Sharp details, soft shadows, and a professional sleek aesthetic representing the electronic category in a luxury app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBelNcZXHM6MAFwBOwwJMHGtc7jVaTXN3Fh8ly6dqqbGIEP6h2hpFt39llqTc4ktlJjd0jj07HpqeMHJgLmB9Z4qDXeNxijyzw0iWNE-G2aJUwHjrXhRz4phCv_aRfo3M83Q7sbxqobY8ltN-6wRzi-AbhGK819eGSh_r3anRxmNqDPCaiI-yOXk0Zfh2j6-UPxoujqWhDHQqVahJij_TnQAqQBA7XragLRMZWnpDcCDM5J7okdhBlM"/>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 flex items-center justify-center">
<span className="material-symbols-outlined text-outline-variant text-[18px]" data-icon="favorite">favorite</span>
</div>
</div>
<div className="space-y-1">
<span className="text-[10px] font-bold text-primary tracking-wide uppercase">ELEKTRONIK</span>
<h4 className="font-label-sm text-label-sm text-on-surface leading-tight h-9 line-clamp-2">Sony WH-1000XM5 Black</h4>
<div className="flex flex-col">
<span className="font-bold text-on-background text-body-base">Rp 4.999.000</span>
<span className="inline-block w-fit px-1.5 py-0.5 bg-surface-container-high text-on-primary-fixed-variant text-[10px] font-bold rounded-md mt-1">
                                +Fee 10%
                            </span>
</div>
</div>
</div>
</div>
</section>
</main>

<nav className="fixed bottom-margin-mobile left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md z-50 flex justify-around items-center p-2 bg-on-background dark:bg-surface-container-lowest rounded-full shadow-lg shadow-primary/10">

<a className="flex items-center justify-center bg-primary-container text-on-primary-container rounded-full p-3 active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="home" style={{fontVariationSettings: '\'FILL\' 1'}}>home</span>
</a>

<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
</a>

<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
</a>

<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
</a>
</nav>


    </div>
  );
}
