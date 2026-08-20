import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function CalendarExamsSchedule() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      
{/*  Top AppBar  */}
<header className="bg-background fixed docked full-width top-0 z-50 flex justify-between items-center px-margin-mobile py-4 w-full">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container shadow-sm border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A close-up high-quality portrait of a friendly university student with a warm smile, wearing modern glasses and casual academic attire. The background is a blurred university library with soft, bright natural lighting, consistent with a clean and professional modern UI aesthetic using a soft neutral color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABF0ACRfd7EQ8RAfwzot2kxlnHus37CM2_B6VJYSINF4_pYXbQ4AzMqn_gNVZuH3uXuVwJLvgNbx7fus2Z-tePdWZNOjfMtj1ZfmzB47o_c094Dj48Qp6jnGC4fvJF8WNrh8foorMvRIcAjO-yT4siK8uGQcKjdEQzzIYb4Y5o5DBYFOXM0N_9kA_X20mLQtyhO0ZOJE-mLE69XSDzpNG2IRcjBHUxz0DikzaSPiTq8yFegschR1AU"/>
</div>
<span className="font-headline-md text-headline-md-mobile font-bold text-on-surface">EduFlow</span>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest hover:opacity-80 transition-opacity active:scale-95 transition-transform">
<span className="material-symbols-outlined text-primary">notifications</span>
</button>
</header>
<main className="pt-20 pb-32 px-margin-mobile max-w-md mx-auto">
{/*  Month Selector  */}
<section className="flex items-center justify-between mb-6">
<h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-background">May</h1>
<div className="flex gap-2">
<button className="p-2 bg-surface rounded-full shadow-sm active:scale-90 transition-transform">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="p-2 bg-surface rounded-full shadow-sm active:scale-90 transition-transform">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</section>
{/*  Calendar Section  */}
<section className="bg-surface rounded-card-padding p-6 shadow-sm mb-8">
<div className="calendar-grid mb-4">
{/*  Days Header  */}
<div className="text-center text-label-sm font-label-sm text-outline">Mon</div>
<div className="text-center text-label-sm font-label-sm text-outline">Tue</div>
<div className="text-center text-label-sm font-label-sm text-outline">Wed</div>
<div className="text-center text-label-sm font-label-sm text-outline">Thu</div>
<div className="text-center text-label-sm font-label-sm text-outline">Fri</div>
<div className="text-center text-label-sm font-label-sm text-outline">Sat</div>
<div className="text-center text-label-sm font-label-sm text-outline">Sun</div>
{/*  Empty cells for start of month alignment (assuming May starts on Wednesday for visual demo)  */}
<div className="calendar-day text-outline opacity-20 font-label-sm">29</div>
<div className="calendar-day text-outline opacity-20 font-label-sm">30</div>
{/*  Day 1: Orange circle  */}
<div className="calendar-day bg-subject-yellow/20 border-2 border-subject-yellow text-on-surface font-bold font-label-sm">1</div>
<div className="calendar-day font-label-sm">2</div>
<div className="calendar-day font-label-sm">3</div>
<div className="calendar-day font-label-sm">4</div>
<div className="calendar-day font-label-sm">5</div>
<div className="calendar-day font-label-sm">6</div>
{/*  Day 7: Purple with +2 badge  */}
<div className="calendar-day bg-primary text-on-primary font-bold font-label-sm">
                    7
                    <span className="absolute -top-1 -right-1 bg-secondary text-[10px] text-white w-4 h-4 rounded-full flex items-center justify-center border border-surface">+2</span>
</div>
<div className="calendar-day font-label-sm">8</div>
<div className="calendar-day font-label-sm">9</div>
<div className="calendar-day font-label-sm">10</div>
<div className="calendar-day font-label-sm">11</div>
<div className="calendar-day font-label-sm">12</div>
<div className="calendar-day font-label-sm">13</div>
<div className="calendar-day font-label-sm">14</div>
<div className="calendar-day font-label-sm">15</div>
<div className="calendar-day font-label-sm">16</div>
{/*  Day 17: Dark purple with +2 badge  */}
<div className="calendar-day bg-on-primary-fixed-variant text-on-primary-container font-bold font-label-sm">
                    17
                    <span className="absolute -top-1 -right-1 bg-secondary text-[10px] text-white w-4 h-4 rounded-full flex items-center justify-center border border-surface">+2</span>
</div>
<div className="calendar-day font-label-sm">18</div>
<div className="calendar-day font-label-sm">19</div>
<div className="calendar-day font-label-sm">20</div>
<div className="calendar-day font-label-sm">21</div>
<div className="calendar-day font-label-sm">22</div>
<div className="calendar-day font-label-sm">23</div>
<div className="calendar-day font-label-sm">24</div>
<div className="calendar-day font-label-sm">25</div>
<div className="calendar-day font-label-sm">26</div>
<div className="calendar-day font-label-sm">27</div>
<div className="calendar-day font-label-sm">28</div>
{/*  Day 29: Purple circle  */}
<div className="calendar-day bg-primary-container text-on-primary-container font-bold font-label-sm">29</div>
<div className="calendar-day font-label-sm">30</div>
<div className="calendar-day font-label-sm">31</div>
</div>
</section>
{/*  Upcoming Exams  */}
<section>
<div className="flex justify-between items-center mb-4">
<h2 className="font-headline-md text-headline-md-mobile text-on-background">Upcoming exams</h2>
<a className="text-primary font-label-sm hover:underline" href="#">See all</a>
</div>
<div className="space-y-4">
{/*  Exam Card 1  */}
<div className="bg-surface rounded-xl p-4 flex items-center gap-4 shadow-sm border border-surface-variant transition-transform active:scale-[0.98]">
<div className="w-14 h-14 bg-subject-yellow rounded-xl flex flex-col items-center justify-center text-on-background shrink-0">
<span className="font-bold text-lg">17</span>
<span className="text-[10px] uppercase font-bold opacity-70">May</span>
</div>
<div className="flex-1">
<h3 className="font-headline-md text-base text-on-surface">Math Test</h3>
<div className="flex items-center gap-2 mt-1">
<div className="w-5 h-5 rounded-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="A professional studio portrait of a woman with blond hair and glasses, representing a university instructor. She has a knowledgeable and helpful expression. Soft focus office background, professional lighting, corporate modern style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKyyM81uTWSAWSJRudT_F4-uh2dVYlzLyraq-eIjq0v9Mn7DcrQFClToz5Kx1N5vgTuL6pJETdcvWmHgmUbrJ6eHdc4phpIsrCddBKbUuOjbxDfAsLusztKwmI7vwBC_-zB0drz1RteFsm4nxltXuFSbFIVwG1jSN8gAIoZFsAB24b7D6lBJINhNfmfYeHC4ZlxVBP81_PaG6TXOyYsbeg7IT5ZJKTCbSbpPV4aWf-9Qmyw01nwyCS"/>
</div>
<span className="text-on-surface-variant text-label-sm font-label-sm">Dr. Anna Lesli</span>
</div>
</div>
<button className="text-outline hover:text-primary">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
{/*  Exam Card 2  */}
<div className="bg-surface rounded-xl p-4 flex items-center gap-4 shadow-sm border border-surface-variant transition-transform active:scale-[0.98]">
<div className="w-14 h-14 bg-secondary-container rounded-xl flex flex-col items-center justify-center text-white shrink-0">
<span className="font-bold text-lg">17</span>
<span className="text-[10px] uppercase font-bold opacity-80">May</span>
</div>
<div className="flex-1">
<h3 className="font-headline-md text-base text-on-surface">History Test</h3>
<div className="flex items-center gap-2 mt-1">
<div className="w-5 h-5 rounded-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="A professional portrait of a distinguished university professor with brown hair, in a modern academic setting. Friendly and approachable demeanor, high-quality professional photography with bright light-mode aesthetic. Consistent with EduFlow branding." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4bbx-DYYMcIX-PovaxS2_bfdGF5W-o6nQh9MOWLdnqgJlgLJydbknEOXDqiKMu6j23xDoendnO7io91qM9oRC6CSC7yRZn5UbMdWFy_cC65nvmGWkfKEnO_lkOO2wXWSvYQv55nQZ_Rzizin-L9ds0J7uB4uiM3Ow2pG9k0AxIGvWQpfpVF3CMfHs-Td0pUeNN6kqjHKof4ueWsB5Bui8Z0AJARiIiUgcRNSzO2Nqs0Glg3HF6RIU"/>
</div>
<span className="text-on-surface-variant text-label-sm font-label-sm">Dr. Kate Adams</span>
</div>
</div>
<button className="text-outline hover:text-primary">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
</section>
</main>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-margin-mobile left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md z-50 bg-on-background dark:bg-surface-container-lowest rounded-full p-2 flex justify-around items-center shadow-lg shadow-primary/10">
<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
</a>
<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
</a>
{/*  ACTIVE TAB: Calendar  */}
<a className="flex items-center justify-center bg-primary-container text-on-primary-container rounded-full p-3 active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today" style={{ "fontVariationSettings": "'FILL' 1" }}>calendar_today</span>
</a>
<a className="flex items-center justify-center text-surface-variant dark:text-on-surface-variant p-3 hover:bg-primary/20 transition-colors active:scale-90 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
</a>
</nav>


    </div>
  );
}
