import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function EventDetailKatalogProduk() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  Top Navigation Shell (TopAppBar)  */}
<header className="bg-background dark:bg-on-background font-headline-md text-headline-md-mobile docked full-width top-0 z-40">
<div className="flex justify-between items-center px-margin-mobile py-4 w-full">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A professional studio portrait of a friendly Indonesian female user in a modern home setting. The lighting is soft and natural, emphasizing a bright, welcoming atmosphere with high-key whites and subtle primary purple accents in the background decor. The aesthetic is clean, corporate-modern, and consumer-friendly." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCNXQLg5bBMtmr0XylDZqY_3-cXwJH0gKC4OKytDdiUVGRpwmkudKxMAf9QUkhj7pb-BwCitxynQAmusSNFCexIVd3ia-W1aEtLygWkyM06eoqDjJvp8HogjPqTPCAad4f8WVuxoW9dT150JfeT-0PNhCCGmm_luCTZwezupLNTELm9EFKTlK9vyX5iybmowpsuwrmfHvmkB6SHCxfour0sBxaHzbLexuJQx5cPyvy2Kr9_GO6VRyh"/>
</div>
<span className="font-headline-md text-headline-md-mobile font-bold text-on-surface dark:text-on-primary-fixed-variant">EduFlow</span>
</div>
<button className="text-primary dark:text-primary-fixed-dim hover:opacity-80 transition-opacity active:scale-95 transition-transform">
<span className="material-symbols-outlined">notifications</span>
</button>
</div>
</header>
<main className="max-w-md mx-auto">
{/*  Event Banner Section  */}
<section className="relative w-full h-64 overflow-hidden shadow-lg">
<div className="absolute inset-0 bg-cover bg-center" data-alt="A warm and inviting photograph of premium baby gear including a modern stroller, plush toys, and wooden blocks arranged artistically in a sunlit room. The scene uses a soft color palette of creams and light purples to match the EduFlow brand. High-quality textures and soft-focus backgrounds create a premium retail feel." style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBYfWjYXc-DWyvV9VTdoIa7xx9rr2P5xemvZO_Omx9umR0wLaIgi_osy1yeQBoUK-z9bevNdW5Od33dGnJK1ZK7GW0zFoFnXbv2xIJwPbui-SXjSJncwfXv0VmlbHVehHeEzoNi-hxQPq6m79-pAE5LYWaB4GpcuZ6aBiU4hyt1jC2d2fQkxXZSWscDAdF2GQO76137NIheWA9Lr4clB6AW7pk6_Z5o42iIsjAM0dsXzEMX7qzo3VW')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-on-background/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-margin-mobile">
<h1 className="font-headline-xl-mobile text-headline-xl-mobile text-white mb-2">Event Perlengkapan Bayi</h1>
<div className="flex items-center gap-3">
<span className="bg-subject-green text-on-background px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Aktif</span>
<span className="text-white/90 text-sm font-medium">Periode: 10–20 Juli 2026</span>
</div>
</div>
</section>
{/*  Category Filters (Sticky)  */}
<nav className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm py-4 px-margin-mobile overflow-x-auto hide-scrollbar flex gap-3">
<button className="whitespace-nowrap px-6 py-2 bg-primary-container text-on-primary-container rounded-full text-sm font-semibold shadow-sm shadow-primary/20">Semua</button>
<button className="whitespace-nowrap px-6 py-2 bg-white text-text-secondary border border-outline-variant rounded-full text-sm font-medium hover:bg-surface-container transition-colors">Popok</button>
<button className="whitespace-nowrap px-6 py-2 bg-white text-text-secondary border border-outline-variant rounded-full text-sm font-medium hover:bg-surface-container transition-colors">Susu</button>
<button className="whitespace-nowrap px-6 py-2 bg-white text-text-secondary border border-outline-variant rounded-full text-sm font-medium hover:bg-surface-container transition-colors">Mainan</button>
</nav>
{/*  Product Grid  */}
<section className="px-margin-mobile grid grid-cols-2 gap-4 mt-2">
{/*  Product Card 1  */}
<div className="bg-surface rounded-2xl p-3 shadow-sm border border-surface-container-high flex flex-col">
<div className="aspect-square rounded-xl bg-surface-container-low mb-3 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A high-quality product shot of a pack of premium eco-friendly baby diapers displayed against a clean, minimalist studio background. The packaging features soft purple and green design elements that align with the brand's vibrant accent style. Soft lighting highlights the soft texture and organic materials of the product." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuHsjHypyH8hL1CoL6K4VOK25kGlPs74k_3BxqFl3PniOBAYUiYCAzGW6ZA-z3kpK4oII4cSW1HxtYOvCiTVwcTves0zHsCeu8X7TrgsCBukC7WZ4iUdUOc0-k_sgG8rJRXAZHzxq79GxXjGP1v_EVL4F5keZxSlScVkP8K9HtfkJxjIIMOQ8hRkTxvGWAcC9_JhIrOXn_Y0ITA4jKfC7SmHRFfvD92YuhWCCQYPht5gi1IzQ57EIT"/>
</div>
<h3 className="font-label-sm text-on-surface line-clamp-2 mb-1">Popok Bayi Organik Ultra Soft S24</h3>
<p className="text-primary font-bold text-sm">Rp150.000</p>
<div className="mt-1 mb-3">
<span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">+Fee Rp15.000</span>
</div>
<button className="mt-auto w-full py-2 bg-primary-container text-on-primary-container rounded-lg text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-transform">
<span className="material-symbols-outlined text-sm">add</span>
                    Tambah
                </button>
</div>
{/*  Product Card 2  */}
<div className="bg-surface rounded-2xl p-3 shadow-sm border border-surface-container-high flex flex-col">
<div className="aspect-square rounded-xl bg-surface-container-low mb-3 overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="A premium tin of specialized infant formula milk with clear labeling, photographed in a bright, modern nursery environment. The scene is illuminated with professional studio lighting, emphasizing the product's safety and nutritional value. The surrounding environment is clean and organized, echoing the EduFlow corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtnCtdt3MuLPbTNox01jixu81WxCvJZBdeU1pKqTbHkotHmR7B0grV8Mzw8xweXZjhKw5x8ZoLk_Y4uA9PvJjX842ayc5UvZwXwoPG3uWsSE_FyRjE3_6lVynf0lF9-kdUvlY26xDA8i2JRtIISlkJdqPMADWTc8DAevaLcwxPRk8t9JCYhhB_6d3pssLlnpjBgJUM7mSU7jWftD2QZ6LwBxR3GgUy8HnUhLRAJR1FaChWMFlAn-Pk"/>
<div className="absolute top-2 right-2 bg-error text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Sale</div>
</div>
<h3 className="font-label-sm text-on-surface line-clamp-2 mb-1">Susu Formula Nutrisi Plus 800g</h3>
<p className="text-primary font-bold text-sm">Rp320.000</p>
<div className="mt-1 mb-3">
<span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">+Fee 10%</span>
</div>
<button className="mt-auto w-full py-2 bg-primary-container text-on-primary-container rounded-lg text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-transform">
<span className="material-symbols-outlined text-sm">add</span>
                    Tambah
                </button>
</div>
{/*  Product Card 3  */}
<div className="bg-surface rounded-2xl p-3 shadow-sm border border-surface-container-high flex flex-col">
<div className="aspect-square rounded-xl bg-surface-container-low mb-3 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A beautifully crafted wooden educational toy set for toddlers, featuring vibrant primary colors and smooth, rounded edges. The toys are arranged on a clean white surface with soft shadows, creating a spacious and encouraging mood. The lighting is cheerful and bright, perfectly capturing a modern, kid-friendly retail atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLsDbIWcxfThdnlwWb9M6_2SNP9wrYfZC0amrbFbkZlcUvezm-XqQNl8fF2VrVnp-fTyy38wXF9CVXv5QbkWE3u2KDuuAKtMn9I1nD6S5dg0Uqj8Hx0bvxdeCe5ZDKZMr7sUeF4wwp9oP9bn1-gxExY_s-im6aGES5iGVbh--1-NDRxNMIkeh5dNF5aA2c87k9Xrir2PB1hSDB-a7XgCtWfv9SXceFvQ897UXOKGhWjlyoMftLa1JX"/>
</div>
<h3 className="font-label-sm text-on-surface line-clamp-2 mb-1">Mainan Kayu Edukasi Balok Warna</h3>
<p className="text-primary font-bold text-sm">Rp125.000</p>
<div className="mt-1 mb-3">
<span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">+Fee Rp10.000</span>
</div>
<button className="mt-auto w-full py-2 bg-primary-container text-on-primary-container rounded-lg text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-transform">
<span className="material-symbols-outlined text-sm">add</span>
                    Tambah
                </button>
</div>
{/*  Product Card 4  */}
<div className="bg-surface rounded-2xl p-3 shadow-sm border border-surface-container-high flex flex-col">
<div className="aspect-square rounded-xl bg-surface-container-low mb-3 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A sleek, modern electronic breast pump with digital display, shown in a clean, high-tech pharmaceutical setting. The design uses high-contrast whites and purples to emphasize technological advancement and hygiene. The product is presented as a professional healthcare device with elegant industrial design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB92spVxRR2nBR-_GfxKExccmgX-I-rZjHWwAXAbG6x5-lkSlAV4lZ_Cln0Edc06FHQnV4ZmVoSXG9yGzZjRMqj29fQLYCAXeWZqdDKCI2Z6gSCeHMexz6RQD4TqTEWtafJejMu0ifw12wAZJeE_bm3zk5r-nNHQAoYb8539Ckz7B-kKKEIK4303C2TW8Ulx4WUDN9VBpQHt3JLRlVgqNrUO7UWd_kGXMn3bkxCM8JL9UQMCEOElswa"/>
</div>
<h3 className="font-label-sm text-on-surface line-clamp-2 mb-1">Pompa ASI Elektrik Portable Pro</h3>
<p className="text-primary font-bold text-sm">Rp850.000</p>
<div className="mt-1 mb-3">
<span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">+Fee 5%</span>
</div>
<button className="mt-auto w-full py-2 bg-primary-container text-on-primary-container rounded-lg text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-transform">
<span className="material-symbols-outlined text-sm">add</span>
                    Tambah
                </button>
</div>
</section>
</main>
{/*  Floating Cart Button  */}
<button className="fixed bottom-24 right-6 w-16 h-16 bg-primary-container text-on-primary-container rounded-full shadow-lg shadow-primary/40 flex items-center justify-center z-50 active:scale-90 transition-all duration-200">
<span className="material-symbols-outlined text-3xl" style={{ "fontVariationSettings": "'FILL' 1" }}>shopping_cart</span>
<div className="absolute -top-1 -right-1 bg-error text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">3</div>
</button>
{/*  Bottom Navigation Shell (BottomNavBar)  */}
<nav className="fixed bottom-margin-mobile left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md z-50 flex justify-around items-center p-2 bg-on-background dark:bg-surface-container-lowest rounded-full shadow-lg shadow-primary/10">
<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined">home</span>
</a>
<a className="flex items-center justify-center bg-primary-container text-on-primary-container rounded-full p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>menu_book</span>
</a>
<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined">calendar_today</span>
</a>
<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined">person</span>
</a>
</nav>


    </div>
  );
}
