import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Splash from './pages/Splash';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ExamsCalendar from './pages/ExamsCalendar';
import HomeworkSearch from './pages/HomeworkSearch';
import ProductDetail from './pages/ProductDetail';
import EventDetail from './pages/EventDetail';

function ScreenBar() {
  const loc = useLocation();
  const navs = [
    { path: '/', label: 'Splash' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/exams', label: 'Exams' },
    { path: '/homework', label: 'Homework' },
    { path: '/events/1', label: 'Event Detail' },
    { path: '/products/1', label: 'Product Detail' },
    { path: '/register', label: 'Register' },
  ];

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-full px-3 py-1.5 shadow-2xl flex items-center gap-1.5 overflow-x-auto max-w-[95vw]">
      <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest px-2 hidden sm:inline">Stitch Screens:</span>
      {navs.map((n) => {
        const active = loc.pathname === n.path || (n.path.includes(':') && loc.pathname.startsWith(n.path.split(':')[0]));
        return (
          <Link
            key={n.path}
            to={n.path}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
              active
                ? 'bg-violet-600 text-white shadow-md shadow-violet-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            {n.label}
          </Link>
        );
      })}
    </div>
  );
}

export default function AppRoutes() {
  return (
    <>
      <ScreenBar />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/exams" element={<ExamsCalendar />} />
        <Route path="/homework" element={<HomeworkSearch />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </>
  );
}
