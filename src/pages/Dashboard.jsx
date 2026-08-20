import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Bell } from 'lucide-react';
import Card from '../components/Card';
import { mockDashboardData } from '../mocks/dashboard';

const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    const saved = localStorage.getItem('sidebarCollapsed');
    return saved !== null ? JSON.parse(saved) : false;
  });

  const { data: dashboardData } = useQuery({
    queryKey: ['dashboard'],
    queryFn: () => Promise.resolve(mockDashboardData)
  });

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', JSON.stringify(isSidebarCollapsed));
  }, [isSidebarCollapsed]);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  if (!dashboardData) return <div>Loading...</div>;

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className={`bg-surface-container h-full transition-all duration-300 ${isSidebarCollapsed ? 'w-20' : 'w-64'}`}>
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:opacity-80 transition-opacity active:scale-95 transition-transform shadow-sm"
          >
            <span className="material-symbols-outlined text-primary">{isSidebarCollapsed ? 'menu' : 'close'}</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
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
              <img className="w-full h-full object-cover" src={dashboardData.user.avatar} alt="User avatar" />
            </div>
            <span className="font-headline-md text-headline-md-mobile font-bold text-on-surface">EduFlow</span>
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:opacity-80 transition-opacity active:scale-95 transition-transform shadow-sm">
            <Bell className="text-primary" size={20} />
          </button>
        </header>

        {/* Welcome Section */}
        <section className="px-margin-mobile mt-4 mb-6">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-background">Good morning, {dashboardData.user.name}!</h1>
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
          {dashboardData.subjects.map((subject) => (
            <Card
              key={subject.id}
              className={`${subject.color} rounded-[32px] p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden group active:scale-95 transition-transform`}
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>{subject.icon}</span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-headline-md text-headline-md font-bold">{subject.name}</h3>
                <p className="text-white/80 font-label-sm text-[12px] mt-1">Teacher: {subject.teacher}</p>
                <div className="mt-4 w-8 h-8 rounded-full border-2 border-white/30 overflow-hidden bg-white/20">
                  <img className="w-full h-full object-cover" src={subject.teacherAvatar} alt={`Teacher ${subject.teacher}`} />
                </div>
              </div>
            </Card>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
