import React from 'react'

const IMG = {
  anna: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-HACFyMEImumBab9jPvhuX6PAiA1KGo0b2wc_r-uoIVsI69MadKRfF0UWZObWmcVfRLyCElNMQJOLgpsojaeYgtIBVbzCcTfVBVFJ5V2ebbp8vj4-z7gm8ErXZBhgWtNK2ZMxzXSZq8mWWnIu7vrjY3UldD_r3Zztga05i4TAUrLceD_24xcSGfZLJEnCXDPcbGQLJyf1HCOR5BPtjFysHlxIJher5dF9qdedzm-2Ndj65JmX722k',
  dianne: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARNNppIVlQuxmB0W4H55mhBAd93NHztW9F1LMjj5w9bd0VFhXoLd99wvOlT3np52M7FrCXNrbED080VtmQf0rImsAwX2OUFF1_-7ljvk-MhEZQDG6pIw-bmvmZIlBB7LwmVBZPxoFb1Y_7C11Yz71WmMluGEeYSJkER1SXDoYPYLaInpWSV-aRGM05tjIKPMi9ZBhDH46ZS1BXCC7hn098qTbMCcdurWuBpuWQ2jDS6486j2r3U0dQ',
  amy: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi9yFUCORGS2_BblOQjMtK5R70IoCvWe8PyshkCiPRBBnU19nmVz4uiO0XA3bNFe_AN4-HGmu8oB9kvAf7E5Ba0b8VyiboFLs5G8vij7RyXH8LGokyd79nY-bpU5M1CZYilhSXEvSg7QdWswx9DR_zMgI8oTfhsaXeXyYPkG80_j-2VuiOev2ZJOs4dytZzwrbQvhaXUwzIIDWzo_D39_y1WTnL7OUogfuAbgmi16nCk9FeWCEtJ_H',
  amyj: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRh5YPb7Hg69Woz1Tny0e_q7u-WE5wMMNy16iSZXUIERMqmwDsRNXdxYsUZoOqOSYkf2YCyjLRbaquzh_suQ9dyh-Fx63we2Sq1sBj5JIDtO7mKDnC4d72G4sq3u-vTA6A0mUESs1dBxDTvqrSl5PRD6vFE1_55FQ5Bak2JJTITizbumREyojkg06OM71SdXI2Z8NrSjctGRsK0eU3wydlZmiRe0DdlKqyTuNJl4OZSSDpyfRQmlsJ',
  leona: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn4N5J0-J0SlOV4JXpRP79sSCLKojM1X6CLdRxb_J5C1Pjtf8V109Z5c5zxeftpGBGZmc9kzkBxfwLktQByUirozgCLeNT08OOrq-sjzvbd94fsyy1NXOmf1H-sPkZehil-Zyofr0M4npuDvrcWnLjMVjdz_XeMeuPJ-TVfhqQYHRacTMHL-0z8TUW80NdVbQ-6agi2z4bJ-0B-SBycw5LsPwWn1Z2ONkywhPOVKCXw4Nv54lBgPXZ',
}

const SUBJECTS = [
  {
    bg: 'bg-primary-container', icon: 'star', filled: true, title: 'Culture',
    teacher: 'Dianne Russell', avatar: IMG.dianne, textClass: 'text-white',
    subClass: 'text-white/80', blob: 'absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl',
    iconBg: 'bg-white/20', avatarBorder: 'border-white/30', avatarBg: 'bg-white/20',
  },
  {
    bg: 'bg-secondary-container', icon: 'description', title: 'History',
    teacher: 'Amy Adams', avatar: IMG.amy, textClass: 'text-white',
    subClass: 'text-white/80', blob: 'absolute -bottom-6 -right-6 w-32 h-32 bg-black/5 rounded-full blur-xl',
    iconBg: 'bg-white/20', avatarBorder: 'border-white/30', avatarBg: 'bg-white/20',
  },
  {
    bg: 'bg-subject-yellow', icon: 'school', title: 'Math',
    teacher: 'Amy Johnson', avatar: IMG.amyj, textClass: 'text-on-surface',
    subClass: 'text-on-surface/60', blob: null,
    iconBg: 'bg-black/10', avatarBorder: 'border-on-surface/10', avatarBg: 'bg-black/5',
  },
  {
    bg: 'bg-subject-green', icon: 'menu_book', title: 'Literature',
    teacher: 'Leona Smith', avatar: IMG.leona, textClass: 'text-white',
    subClass: 'text-white/80', blob: 'absolute -top-10 -left-10 w-24 h-24 bg-white/20 rounded-full blur-2xl',
    iconBg: 'bg-white/20', avatarBorder: 'border-white/30', avatarBg: 'bg-white/20',
  },
]

export default function App() {
  return (
    <div className="bg-background text-on-background min-h-screen pb-32">
      {/* Status Bar */}
      <div className="px-margin-mobile pt-3 pb-2 flex justify-between items-center text-[14px] font-semibold">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[18px]">signal_cellular_4_bar</span>
          <span className="material-symbols-outlined text-[18px]">wifi</span>
          <span className="material-symbols-outlined text-[18px]">battery_full</span>
        </div>
      </div>

      {/* Top App Bar */}
      <header className="flex justify-between items-center px-margin-mobile py-4 w-full bg-background">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container shadow-sm border border-white/20">
            <img className="w-full h-full object-cover" src={IMG.anna} alt="Anna Lane" />
          </div>
          <span className="font-headline-md font-bold text-on-surface">EduFlow</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:opacity-80 transition-opacity active:scale-95 transition-transform shadow-sm">
          <span className="material-symbols-outlined text-primary">notifications</span>
        </button>
      </header>

      {/* Welcome */}
      <section className="px-margin-mobile mt-4 mb-6">
        <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-background">Good morning, Anna Lane!</h1>
        <p className="font-body-base text-body-base text-text-secondary mt-1">Ready to continue your learning journey?</p>
      </section>

      {/* Filter Pills */}
      <nav className="px-margin-mobile mb-8">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          <button className="px-6 py-2.5 rounded-full bg-primary text-white font-label-sm text-label-sm whitespace-nowrap active:scale-95 transition-transform shadow-md shadow-primary/20">Lessons</button>
          <button className="px-6 py-2.5 rounded-full bg-white text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap active:scale-95 transition-transform border border-surface-variant">Add. classes</button>
          <button className="px-6 py-2.5 rounded-full bg-white text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap active:scale-95 transition-transform border border-surface-variant">Forum</button>
        </div>
      </nav>

      {/* Subject Bento Grid */}
      <main className="px-margin-mobile grid grid-cols-2 gap-gap-md">
        {SUBJECTS.map((s) => (
          <div key={s.title} className={`${s.bg} rounded-[32px] p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden active:scale-95 transition-transform`}>
            {s.blob && <div className={s.blob} />}
            <div className="flex justify-between items-start">
              <div className={`w-10 h-10 rounded-full ${s.iconBg} flex items-center justify-center backdrop-blur-md`}>
                <span className={`material-symbols-outlined ${s.textClass === 'text-white' ? 'text-white' : 'text-on-surface'}`} style={s.filled ? { fontVariationSettings: "'FILL' 1" } : undefined}>
                  {s.icon}
                </span>
              </div>
            </div>
            <div>
              <h3 className={`${s.textClass} font-headline-md text-headline-md font-bold`}>{s.title}</h3>
              <p className={`${s.subClass} font-label-sm text-[12px] mt-1`}>Teacher: {s.teacher}</p>
              <div className={`mt-4 w-8 h-8 rounded-full border-2 ${s.avatarBorder} overflow-hidden ${s.avatarBg}`}>
                <img className="w-full h-full object-cover" src={s.avatar} alt={s.teacher} />
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Bottom Nav Capsule */}
      <nav className="fixed bottom-margin-mobile left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md z-50 flex justify-around items-center p-2 bg-on-background rounded-full shadow-lg shadow-primary/20">
        <button className="flex items-center justify-center bg-primary-container text-on-primary-container rounded-full p-3 active:scale-90 transition-all duration-200 hover:bg-primary/20">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        </button>
        {['menu_book', 'calendar_today', 'person'].map((icon) => (
          <button key={icon} className="flex items-center justify-center text-surface-variant p-3 active:scale-90 transition-all duration-200 hover:bg-primary/20">
            <span className="material-symbols-outlined">{icon}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
