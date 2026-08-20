import React, { useEffect } from 'react';
import useUserStore from '../stores/userStore';
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
  const { user, setUser } = useUserStore();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const mockUserData = {
          name: 'Anna Lane',
          profileImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-HACFyMEImumBab9jPvhuX6PAiA1KGo0b2wc_r-uoIVsI69MadKRfF0UWZObWmcVfRLyCElNMQJOLgpsojaeYgtIBVbzCcTfVBVFJ5V2ebbp8vj4-z7gm8ErXZBhgWtNK2ZMxzXSZq8mWWnIu7vrjY3UldD_r3Zztga05i4TAUrLceD_24xcSGfZLJEnCXDPcbGQLJyf1HCOR5BPtjFysHlxIJher5dF9qdedzm-2Ndj65JmX722k',
        };
        setUser(mockUserData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [setUser]);

  const subjects = [
    {
      title: 'Culture',
      teacher: 'Dianne Russell',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARNNppIVlQuxmB0W4H55mhBAd93NHztW9F1LMjj5w9bd0VFhXoLd99wvOlT3np52M7FrCXNrbED080VtmQf0rImsAwX2OUFF1_-7ljvk-MhEZQDG6pIw-bmvmZIlBB7LwmVBZPxoFb1Y_7C11Yz71WmMluGEeYSJkER1SXDoYPYLaInpWSV-aRGM05tjIKPMi9ZBhDH46ZS1BXCC7hn098qTbMCcdurWuBpuWQ2jDS6486j2r3U0dQ',
      bgColor: 'bg-primary-container',
      icon: 'star',
    },
    {
      title: 'History',
      teacher: 'Amy Adams',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi9yFUCORGS2_BblOQjMtK5R70IoCvWe8PyshkCiPRBBnU19nmVz4uiO0XA3bNFe_AN4-HGmu8oB9kvAf7E5Ba0b8VyiboFLs5G8vij7RyXH8LGokyd79nY-bpU5M1CZYilhSXEvSg7QdWswx9DR_zMgI8oTfhsaXeXyYPkG80_j-2VuiOev2ZJOs4dytZzwrbQvhaXUwzIIDWzo_D39_y1WTnL7OUogfuAbgmi16nCk9FeWCEtJ_H',
      bgColor: 'bg-secondary-container',
      icon: 'description',
    },
    {
      title: 'Math',
      teacher: 'Amy Johnson',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRh5YPb7Hg69Woz1Tny0e_q7u-WE5wMMNy16iSZXUIERMqmw',
      bgColor: 'bg-subject-yellow',
      icon: 'school',
    },
  ];

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
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
            <img className="w-full h-full object-cover" src={user.profileImage} alt="User profile" />
          </div>
          <span className="font-headline-md text-headline-md-mobile font-bold text-on-surface">EduFlow</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:opacity-80 transition-opacity active:scale-95 transition-transform shadow-sm">
          <span className="material-symbols-outlined text-primary" data-icon="notifications">notifications</span>
        </button>
      </header>

      {/* Welcome Section */}
      <section className="px-margin-mobile mt-4 mb-6">
        <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-background">Good morning, {user.name}!</h1>
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
        {subjects.map((subject, index) => (
          <DashboardCard
            key={index}
            title={subject.title}
            teacher={subject.teacher}
            imageUrl={subject.imageUrl}
            bgColor={subject.bgColor}
            icon={subject.icon}
          />
        ))}
      </main>
    </div>
  );
};

export default Dashboard;
