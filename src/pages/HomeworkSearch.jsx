import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeworkSearch() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('lessons');

  return (
    <div className="min-h-screen bg-background text-on-background max-w-md mx-auto relative shadow-2xl overflow-hidden pb-24">
      
{/*  TopAppBar  */}
<header className="flex justify-between items-center px-margin-mobile py-4 w-full bg-background docked full-width top-0 z-40">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/10">
<img className="w-full h-full object-cover" data-alt="A professional headshot of a young, diverse university student with a friendly smile, captured in high-key natural light against a soft-focus library background. The aesthetic is clean and modern, following a corporate-friendly visual style with high clarity and a bright, motivating atmosphere consistent with a premium educational app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtGPNpEDryWoYbolyWWBz3x9oRxC5Ty0arhQ0-O_PSxbR-hKGluMJWieDser_udDaKc4Hjy6mFqz5gN8vR4vYv-VVi573epHhaXNSiqegy9WBeNB3hUHWR6zjdC--0bgzRO7ikAI400C4Ju3BSBk7hMAd4wRmKu88jXUnpH7dgz_nnZ-qm_Kij-2Q-4PcXs4fBhJYqr1z67VPrwHA1Bk328Er6JZTsSh1qH63kvOOKRplKf3F1_nEB"/>
</div>
<h1 className="font-headline-md text-headline-md-mobile font-bold text-on-surface">EduFlow</h1>
</div>
<button className="text-primary hover:opacity-80 transition-opacity active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[28px]" data-icon="notifications">notifications</span>
</button>
</header>
<main className="px-margin-mobile space-y-8 mt-2">
{/*  Search Section  */}
<section className="relative">
<div className="flex items-center bg-surface w-full rounded-full px-6 py-3.5 shadow-sm border border-outline-variant/30 group focus-within:ring-2 focus-within:ring-primary/20 transition-all">
<span className="material-symbols-outlined text-outline mr-3" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 w-full font-body-base text-on-surface placeholder:text-outline-variant" placeholder="Search" type="text"/>
<button className="ml-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="tune">tune</span>
</button>
</div>
</section>
{/*  Subjects Section  */}
<section>
<div className="flex justify-between items-center mb-4">
<h2 className="font-headline-md text-on-surface">Subjects</h2>
<a className="text-primary font-label-sm hover:underline" href="#">See all</a>
</div>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
{/*  Music  */}
<div className="flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full whitespace-nowrap active:scale-95 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-[18px]" data-icon="music_note">music_note</span>
<span className="font-label-sm">Music</span>
</div>
{/*  History  */}
<div className="flex items-center gap-2 bg-tertiary-container/10 text-tertiary-container px-4 py-2 rounded-full whitespace-nowrap active:scale-95 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-[18px]" data-icon="history_edu">history_edu</span>
<span className="font-label-sm">History</span>
</div>
{/*  Math  */}
<div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full whitespace-nowrap active:scale-95 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-[18px]" data-icon="calculate">calculate</span>
<span className="font-label-sm">Math</span>
</div>
{/*  Science  */}
<div className="flex items-center gap-2 bg-subject-green/10 text-subject-green px-4 py-2 rounded-full whitespace-nowrap active:scale-95 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-[18px]" data-icon="biotech">biotech</span>
<span className="font-label-sm">Science</span>
</div>
</div>
</section>
{/*  Homework Section  */}
<section>
<div className="flex justify-between items-center mb-4">
<h2 className="font-headline-md text-on-surface">Homework</h2>
<a className="text-primary font-label-sm hover:underline" href="#">See all</a>
</div>
<div className="grid grid-cols-2 gap-4">
{/*  Homework Card 1  */}
<div className="bg-surface p-6 rounded-xl border border-outline-variant/10 shadow-sm active:scale-[0.98] transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4">
<span className="material-symbols-outlined" data-icon="piano">piano</span>
</div>
<h3 className="font-heading-md text-on-surface mb-1">Jazz Theory</h3>
<p className="font-label-sm text-text-secondary">Music - 19 May</p>
</div>
{/*  Homework Card 2  */}
<div className="bg-surface p-6 rounded-xl border border-outline-variant/10 shadow-sm active:scale-[0.98] transition-all cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
<span className="material-symbols-outlined" data-icon="functions">functions</span>
</div>
<h3 className="font-heading-md text-on-surface mb-1">Calculus II</h3>
<p className="font-label-sm text-text-secondary">Math - 29 May</p>
</div>
</div>
</section>
{/*  Tests Section  */}
<section>
<div className="flex justify-between items-center mb-4">
<h2 className="font-headline-md text-on-surface">Tests</h2>
<a className="text-primary font-label-sm hover:underline" href="#">See all</a>
</div>
<div className="bg-surface p-6 rounded-xl border border-outline-variant/10 shadow-sm flex items-center gap-4 active:scale-[0.99] transition-all cursor-pointer group">
<div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-white text-[28px]" data-icon="quiz">quiz</span>
</div>
<div className="flex-1">
<h3 className="font-heading-md text-on-surface">Math Test April</h3>
<div className="flex items-center gap-2 mt-1">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<p className="font-label-sm text-text-secondary">Math • 12 Quizzes</p>
</div>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-margin-mobile left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md z-50 flex justify-around items-center p-2 bg-on-background dark:bg-surface-container-lowest shadow-lg shadow-primary/10 rounded-full">
{/*  Home  */}
<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined" onClick={() => navigate("/")} data-icon="home">home</span>
</a>
{/*  Lessons (Active)  */}
<a className="flex items-center justify-center bg-primary-container text-on-primary-container rounded-full p-3 active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined" onClick={() => navigate("/homework")} data-icon="menu_book" style={{ "fontVariationSettings": "'FILL' 1" }}>menu_book</span>
</a>
{/*  Calendar  */}
<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined" onClick={() => navigate("/exams")} data-icon="calendar_today">calendar_today</span>
</a>
{/*  Profile  */}
<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined" onClick={() => navigate("/register")} data-icon="person">person</span>
</a>
</nav>


    </div>
  );
}
