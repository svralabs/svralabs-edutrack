import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function DetailEventKatalogProduk2() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  Top App Bar  */}
<header className="bg-background fixed docked full-width top-0 z-50 flex justify-between items-center px-margin-mobile py-4 w-full">
<div className="flex items-center gap-3">
<button className="active:scale-95 transition-transform">
<span className="material-symbols-outlined text-on-surface">arrow_back</span>
</button>
<h1 className="font-headline-md text-headline-md-mobile font-bold text-on-surface">EduFlow</h1>
</div>
<div className="flex items-center gap-4">
<button className="hover:opacity-80 transition-opacity active:scale-95 transition-transform">
<span className="material-symbols-outlined text-primary">notifications</span>
</button>
<div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A professional studio portrait of a friendly Southeast Asian user for an application profile avatar. The lighting is soft and warm, reflecting a clean and modern app aesthetic with a neutral studio background. The style is high-definition photography with a shallow depth of field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYxXQ1VsuHZsChatNIRB1I2Q9eqpqVxVbEEGIhvAOTs0zdIOIQo3rYHwaKKuWG2W03s5V6hmmWw55kx4zEvHPPkC88DeR5G61cqiAbrrjpd4DR6ADtI2VSNCbE43_PPQekZGMgps0ScyhJXUDd4Rq_M0MVeQ7vuUW8fobBf4qpgaNsWPAtq259r7CIOc0ME6bAY9KhY9AUw1fqhEXfeUaak0YIn6TAaG9age0ivcJ2MPcK8H5OlXrp"/>
</div>
</div>
</header>
<main className="pt-[64px]">
{/*  Event Banner  */}
<section className="relative w-full h-[240px] overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" data-alt="A beautifully arranged display of premium baby products including plush toys, organic cotton clothes, and designer bottles set in a bright, sunlit nursery. The image uses a soft focus and a warm, inviting color palette of pastels and clean whites, consistent with a modern corporate aesthetic for a baby equipment event. The mood is peaceful and professional." style={{ "backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBr2BzzZ7BpW4rtgJf00ctR9166hasfNFtkZRuRVm5OBnFt3UFlHm3-QcuI8VrwgdFpx_4FNLs91DCOjpjUeJeVaod9iNlzopBKZ-KZcGxGTqeLma7CdUvgxS11u3r9ucQwOEEXJ1pcQnClJFeQQtXD8abgOJx4Z1JqV5HAQdeaZuLxiucMPUW8DmcPBDDEiY97DNlQ30ImOnapUI49XFGqJtr-bCJODdNv711cZEh8Ffni28nw29uV')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-margin-mobile w-full flex flex-col gap-2">
<div className="flex items-center gap-2">
<span className="bg-subject-green text-on-background px-3 py-1 rounded-full text-label-sm font-label-sm uppercase tracking-wider">Aktif</span>
</div>
<h2 className="font-headline-xl-mobile text-headline-xl-mobile text-white leading-tight">Event Perlengkapan Bayi</h2>
<div className="flex items-center gap-2 text-white/80">
<span className="material-symbols-outlined text-sm">calendar_today</span>
<p className="text-label-sm font-label-sm">Periode: 10–20 Juli 2026</p>
</div>
</div>
</section>
{/*  Sticky Category Filter  */}
<nav className="sticky top-[64px] z-40 bg-background/80 backdrop-blur-md py-4 px-margin-mobile">
<div className="flex gap-3 overflow-x-auto hide-scrollbar">
<button className="whitespace-nowrap px-6 py-2.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm shadow-md shadow-primary/20 active:scale-95 transition-all">
                    Semua
                </button>
<button className="whitespace-nowrap px-6 py-2.5 rounded-full bg-surface text-on-surface-variant border border-outline-variant font-label-sm text-label-sm hover:bg-surface-container-low transition-colors">
                    Popok
                </button>
<button className="whitespace-nowrap px-6 py-2.5 rounded-full bg-surface text-on-surface-variant border border-outline-variant font-label-sm text-label-sm hover:bg-surface-container-low transition-colors">
                    Susu
                </button>
<button className="whitespace-nowrap px-6 py-2.5 rounded-full bg-surface text-on-surface-variant border border-outline-variant font-label-sm text-label-sm hover:bg-surface-container-low transition-colors">
                    Mainan
                </button>
</div>
</nav>
{/*  Product Grid  */}
<section className="px-margin-mobile grid grid-cols-2 gap-4 mt-2">
{/*  Product Card 1  */}
<div className="bg-surface rounded-card p-3 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow group">
<div className="relative aspect-square rounded-lg overflow-hidden bg-surface-container-low">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A pack of premium soft disposable diapers for babies, shown in professional product photography against a clean, white background. The packaging is modern and clean, with soft purple and blue accents. The lighting is bright and high-key, suitable for a commercial shopping application." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBloJ87nAA4ZerjsmBOqp2sU-loE2FukfXUUK3bMJnBeSxfg0bOOWNC15Ty1JLT14AIDdOukfK6qwaTB7VArIAqmrCeUxsaRqfYlZ3yf3z1r_Cko5XJYe7mzOLwwMNLYwYoBeEe3jgCTomeRqNttOybQkl8KExW0Hs0YG5zDLCGSnMfvtNwcCqyNYgK7yQd6nv0FlmN4Sh7PGvVtU1-usqZb0byIdwv67B4d6UwkqQ8eO7AAuXEjlRy"/>
<div className="absolute top-2 left-2">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-2 py-0.5 rounded-md text-[10px] font-bold uppercase">+Fee Rp15.000</span>
</div>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-label-sm text-label-sm text-on-surface line-clamp-2 min-h-[36px]">Popok Sekali Pakai Ultra Soft L-40</h3>
<p className="font-heading-md text-heading-md text-primary">Rp150.000</p>
</div>
<button className="w-full py-2 bg-primary-container text-on-primary-container rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-1 active:scale-95 transition-all">
<span className="material-symbols-outlined text-[18px]">add</span>
                    Tambah
                </button>
</div>
{/*  Product Card 2  */}
<div className="bg-surface rounded-card p-3 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow group">
<div className="relative aspect-square rounded-lg overflow-hidden bg-surface-container-low">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A canister of premium stage-2 baby formula milk, professionally photographed with soft morning light. The container is sleek and modern, standing on a clean wooden surface in a bright, airy environment. High-end lifestyle product photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUW9FthQZfvWbbYrWDU-ihtwV967YvvOEzQSeEYGX0UlHEClIQcgEyywGhkV2_BV5WuQQp7c9HOsLTvnBjR6GH4qPHFgKBtnZlBQdvH-11p2lqMOs4SrT1C7b1YoRKOP7fV-jmh7RDNrqH9raLZridpzPwzgYhGntftKIohxKqSIWhV-w4k5dL930jdcchtaGIIWxt2G9D6f8ai1GJupZq7bl7ODfS5LK1tXPG-UhcXUOR8RGYo2uC"/>
<div className="absolute top-2 left-2">
<span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-0.5 rounded-md text-[10px] font-bold uppercase">+Fee 10%</span>
</div>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-label-sm text-label-sm text-on-surface line-clamp-2 min-h-[36px]">Susu Formula Gold Pro-Nutra 800g</h3>
<p className="font-heading-md text-heading-md text-primary">Rp285.000</p>
</div>
<button className="w-full py-2 bg-primary-container text-on-primary-container rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-1 active:scale-95 transition-all">
<span className="material-symbols-outlined text-[18px]">add</span>
                    Tambah
                </button>
</div>
{/*  Product Card 3  */}
<div className="bg-surface rounded-card p-3 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow group">
<div className="relative aspect-square rounded-lg overflow-hidden bg-surface-container-low">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A set of educational wooden baby toys with colorful geometric shapes and soft pastel colors. The toys are arranged neatly on a light-colored surface with bright, even lighting that emphasizes their texture and quality. Modern, professional commercial photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTQXJG7T9XUSJdZBjl3nV7QZLerWFzRwiX97AYBemcLGSEXP_0mXJedCfkjGM7kz60Z1VrtnLN6Vr23sdULcZJCrR8kNk0n8qt3ShCHg3RDlxIp6n0WiC5euhoO0yLGukknhmHWsc0W6XMDhHrtalLJHtIvlZi8jotgjWFgdaGAnxoKzyj2XIocwhcmaR-GlcSN22w9GyGnr3WfIhqP9ENZ_Htf0H4b2XSTtJ_YjzcTOtqlmx9UaYn"/>
<div className="absolute top-2 left-2">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-2 py-0.5 rounded-md text-[10px] font-bold uppercase">+Fee Rp20.000</span>
</div>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-label-sm text-label-sm text-on-surface line-clamp-2 min-h-[36px]">Mainan Edukasi Kayu Montesorri</h3>
<p className="font-heading-md text-heading-md text-primary">Rp120.000</p>
</div>
<button className="w-full py-2 bg-primary-container text-on-primary-container rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-1 active:scale-95 transition-all">
<span className="material-symbols-outlined text-[18px]">add</span>
                    Tambah
                </button>
</div>
{/*  Product Card 4  */}
<div className="bg-surface rounded-card p-3 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow group">
<div className="relative aspect-square rounded-lg overflow-hidden bg-surface-container-low">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A pack of hypoallergenic baby wet wipes in clean white and soft green packaging. The product is shown from a 45-degree angle with soft shadows, highlighting the premium quality of the material. Minimalist background, high-end catalog style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-baSescjSP-EURKNXbufAPhylxjM_JEGrd84J7RkpG_etpvy0Yq0ZS60k8dGXqp-zn7SNaMOFMFDq0mEwATYBG2JAFTd3-U6RZx_Mig1bbmAzUoKNXuIcfI3rPEOG4Hq2qupGv8Nt9cahGoyOXKdHDDH77qX0LeC1NWnkZUxUik7uxK8GeCcjgjWnKpovBAHa64OvSrtNaWWT-zBF54kYQfBZ3IK0ZlycoYLvFDATIBw6m8qHo76t"/>
<div className="absolute top-2 left-2">
<span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-0.5 rounded-md text-[10px] font-bold uppercase">+Fee 10%</span>
</div>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-label-sm text-label-sm text-on-surface line-clamp-2 min-h-[36px]">Tisu Basah Sensitive Care (3 Pack)</h3>
<p className="font-heading-md text-heading-md text-primary">Rp45.000</p>
</div>
<button className="w-full py-2 bg-primary-container text-on-primary-container rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-1 active:scale-95 transition-all">
<span className="material-symbols-outlined text-[18px]">add</span>
                    Tambah
                </button>
</div>
</section>
</main>
{/*  Floating Action Button (Cart)  */}
<button className="fixed bottom-margin-mobile right-margin-mobile z-[60] w-14 h-14 rounded-full bg-primary-container text-on-primary-container shadow-lg shadow-primary/30 flex items-center justify-center active:scale-90 transition-all duration-200">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>shopping_cart</span>
<div className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-background">
            3
        </div>
</button>
{/*  Bottom Navigation Bar (Shared Component Filter Applied)  */}
<nav className="fixed bottom-margin-mobile left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md z-50 flex justify-around items-center p-2 bg-on-background dark:bg-surface-container-lowest shadow-lg shadow-primary/10 rounded-full">
<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined">home</span>
</a>
<a className="flex items-center justify-center bg-primary-container text-on-primary-container rounded-full p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined">menu_book</span>
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
