import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function DashboardHome() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  Status Bar  */}
<div className="px-margin-mobile pt-3 pb-2 flex justify-between items-center text-[14px] font-semibold">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">signal_cellular_4_bar</span>
<span className="material-symbols-outlined text-[18px]">wifi</span>
<span className="material-symbols-outlined text-[18px]">battery_full</span>
</div>
</div>
{/*  Top App Bar  */}
<header className="flex justify-between items-center px-margin-mobile py-4 w-full bg-background">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container shadow-sm border border-white/20">
<img className="w-full h-full object-cover" data-alt="A clean, professional close-up portrait of Anna Lane, a young female student with a friendly smile. She has warm lighting on her face, positioned against a soft-focus library background. The aesthetic is modern and corporate-friendly, using a high-clarity lens effect with natural skin tones and a sense of approachability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-HACFyMEImumBab9jPvhuX6PAiA1KGo0b2wc_r-uoIVsI69MadKRfF0UWZObWmcVfRLyCElNMQJOLgpsojaeYgtIBVbzCcTfVBVFJ5V2ebbp8vj4-z7gm8ErXZBhgWtNK2ZMxzXSZq8mWWnIu7vrjY3UldD_r3Zztga05i4TAUrLceD_24xcSGfZLJEnCXDPcbGQLJyf1HCOR5BPtjFysHlxIJher5dF9qdedzm-2Ndj65JmX722k"/>
</div>
<span className="font-headline-md text-headline-md-mobile font-bold text-on-surface">EduFlow</span>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:opacity-80 transition-opacity active:scale-95 transition-transform shadow-sm">
<span className="material-symbols-outlined text-primary" data-icon="notifications">notifications</span>
</button>
</header>
{/*  Welcome Section  */}
<section className="px-margin-mobile mt-4 mb-6">
<h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-background">Good morning, Anna Lane!</h1>
<p className="font-body-base text-body-base text-text-secondary mt-1">Ready to continue your learning journey?</p>
</section>
{/*  Filter Pills  */}
<nav className="px-margin-mobile mb-8">
<div className="flex gap-2 overflow-x-auto no-scrollbar">
<button className="px-6 py-2.5 rounded-full bg-primary text-white font-label-sm text-label-sm whitespace-nowrap active:scale-95 transition-transform shadow-md shadow-primary/20">Lessons</button>
<button className="px-6 py-2.5 rounded-full bg-white text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap active:scale-95 transition-transform border border-surface-variant">Add. classes</button>
<button className="px-6 py-2.5 rounded-full bg-white text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap active:scale-95 transition-transform border border-surface-variant">Forum</button>
</div>
</nav>
{/*  Subject Bento Grid  */}
<main className="px-margin-mobile grid grid-cols-2 gap-gap-md">
{/*  Card 1: Culture  */}
<div className="bg-primary-container rounded-[32px] p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden group active:scale-95 transition-transform">
<div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
<span className="material-symbols-outlined text-white" data-icon="star" style={{ "fontVariationSettings": "'FILL' 1" }}>star</span>
</div>
</div>
<div>
<h3 className="text-white font-headline-md text-headline-md font-bold">Culture</h3>
<p className="text-white/80 font-label-sm text-[12px] mt-1">Teacher: Dianne Russell</p>
<div className="mt-4 w-8 h-8 rounded-full border-2 border-white/30 overflow-hidden bg-white/20">
<img className="w-full h-full object-cover" data-alt="Close up professional headshot of instructor Dianne Russell, a mature woman with a kind expression. Soft, warm directional lighting highlights her professional attire. The style is soft-minimalist with a clean, light-colored backdrop, consistent with a high-end educational app user profile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARNNppIVlQuxmB0W4H55mhBAd93NHztW9F1LMjj5w9bd0VFhXoLd99wvOlT3np52M7FrCXNrbED080VtmQf0rImsAwX2OUFF1_-7ljvk-MhEZQDG6pIw-bmvmZIlBB7LwmVBZPxoFb1Y_7C11Yz71WmMluGEeYSJkER1SXDoYPYLaInpWSV-aRGM05tjIKPMi9ZBhDH46ZS1BXCC7hn098qTbMCcdurWuBpuWQ2jDS6486j2r3U0dQ"/>
</div>
</div>
</div>
{/*  Card 2: History  */}
<div className="bg-secondary-container rounded-[32px] p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden active:scale-95 transition-transform">
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black/5 rounded-full blur-xl"></div>
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
<span className="material-symbols-outlined text-white" data-icon="description">description</span>
</div>
</div>
<div>
<h3 className="text-white font-headline-md text-headline-md font-bold">History</h3>
<p className="text-white/80 font-label-sm text-[12px] mt-1">Teacher: Amy Adams</p>
<div className="mt-4 w-8 h-8 rounded-full border-2 border-white/30 overflow-hidden bg-white/20">
<img className="w-full h-full object-cover" data-alt="Portrait of Amy Adams, an academic instructor with an inspiring presence. She is depicted in a bright, modern office setting with natural lighting. The visual style follows a professional corporate aesthetic with high-saturation but natural skin tones, perfect for a friendly student app interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi9yFUCORGS2_BblOQjMtK5R70IoCvWe8PyshkCiPRBBnU19nmVz4uiO0XA3bNFe_AN4-HGmu8oB9kvAf7E5Ba0b8VyiboFLs5G8vij7RyXH8LGokyd79nY-bpU5M1CZYilhSXEvSg7QdWswx9DR_zMgI8oTfhsaXeXyYPkG80_j-2VuiOev2ZJOs4dytZzwrbQvhaXUwzIIDWzo_D39_y1WTnL7OUogfuAbgmi16nCk9FeWCEtJ_H"/>
</div>
</div>
</div>
{/*  Card 3: Math  */}
<div className="bg-subject-yellow rounded-[32px] p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden active:scale-95 transition-transform">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center backdrop-blur-md">
<span className="material-symbols-outlined text-on-surface" data-icon="school">school</span>
</div>
</div>
<div>
<h3 className="text-on-surface font-headline-md text-headline-md font-bold">Math</h3>
<p className="text-on-surface/60 font-label-sm text-[12px] mt-1">Teacher: Amy Johnson</p>
<div className="mt-4 w-8 h-8 rounded-full border-2 border-on-surface/10 overflow-hidden bg-black/5">
<img className="w-full h-full object-cover" data-alt="Professional studio headshot of Amy Johnson, a mathematics teacher with a bright, welcoming smile. High-key lighting and a vibrant yellow background accent that matches the card color theme. The image is clean and focused, emphasizing a supportive and organized learning atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRh5YPb7Hg69Woz1Tny0e_q7u-WE5wMMNy16iSZXUIERMqmwDsRNXdxYsUZoOqOSYkf2YCyjLRbaquzh_suQ9dyh-Fx63we2Sq1sBj5JIDtO7mKDnC4d72G4sq3u-vTA6A0mUESs1dBxDTvqrSl5PRD6vFE1_55FQ5Bak2JJTITizbumREyojkg06OM71SdXI2Z8NrSjctGRsK0eU3wydlZmiRe0DdlKqyTuNJl4OZSSDpyfRQmlsJ"/>
</div>
</div>
</div>
{/*  Card 4: Literature  */}
<div className="bg-subject-green rounded-[32px] p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden active:scale-95 transition-transform">
<div className="absolute -top-10 -left-10 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
<span className="material-symbols-outlined text-white" data-icon="menu_book">menu_book</span>
</div>
</div>
<div>
<h3 className="text-white font-headline-md text-headline-md font-bold">Literature</h3>
<p className="text-white/80 font-label-sm text-[12px] mt-1">Teacher: Leona Smith</p>
<div className="mt-4 w-8 h-8 rounded-full border-2 border-white/30 overflow-hidden bg-white/20">
<img className="w-full h-full object-cover" data-alt="Portrait of Leona Smith, a literature teacher, shown in a cozy study environment filled with books and soft ambient lighting. The photography style is modern and approachable, utilizing a bright color palette that evokes curiosity and organized learning. High resolution and professional grade." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn4N5J0-J0SlOV4JXpRP79sSCLKojM1X6CLdRxb_J5C1Pjtf8V109Z5c5zxeftpGBGZmc9kzkBxfwLktQByUirozgCLeNT08OOrq-sjzvbd94fsyy1NXOmf1H-sPkZehil-Zyofr0M4npuDvrcWnLjMVjdz_XeMeuPJ-TVfhqQYHRacTMHL-0z8TUW80NdVbQ-6agi2z4bJ-0B-SBycw5LsPwWn1Z2ONkywhPOVKCXw4Nv54lBgPXZ"/>
</div>
</div>
</div>
</main>
{/*  Bottom Navigation Capsule  */}
<nav className="fixed bottom-margin-mobile left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md z-50 flex justify-around items-center p-2 bg-on-background rounded-full shadow-lg shadow-primary/20">
<button className="flex items-center justify-center bg-primary-container text-on-primary-container rounded-full p-3 active:scale-90 transition-all duration-200 hover:bg-primary/20">
<span className="material-symbols-outlined" data-icon="home" style={{ "fontVariationSettings": "'FILL' 1" }}>home</span>
</button>
<button className="flex items-center justify-center text-surface-variant p-3 active:scale-90 transition-all duration-200 hover:bg-primary/20">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
</button>
<button className="flex items-center justify-center text-surface-variant p-3 active:scale-90 transition-all duration-200 hover:bg-primary/20">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
</button>
<button className="flex items-center justify-center text-surface-variant p-3 active:scale-90 transition-all duration-200 hover:bg-primary/20">
<span className="material-symbols-outlined" data-icon="person">person</span>
</button>
</nav>


    </div>
  );
}
