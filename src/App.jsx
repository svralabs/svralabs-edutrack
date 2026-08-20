import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HomeworkSearch from './pages/HomeworkSearch';
import ExamsCalendar from './pages/ExamsCalendar';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';
import EventDetail from './pages/EventDetail';
import Splash from './pages/Splash';

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  if (path === '/splash' || path === '/register') return null;

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md z-50 flex justify-around items-center p-2 bg-[#1c1a25] rounded-full shadow-2xl border border-white/10">
      <button 
        onClick={() => navigate('/')} 
        className={`flex items-center justify-center rounded-full p-3 transition-all duration-200 ${
          path === '/' ? 'bg-[#6236ff] text-white shadow-lg shadow-purple-500/30' : 'text-slate-400 hover:text-white'
        }`}
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: path === '/' ? "'FILL' 1" : "'FILL' 0" }}>home</span>
      </button>
      <button 
        onClick={() => navigate('/homework')} 
        className={`flex items-center justify-center rounded-full p-3 transition-all duration-200 ${
          path === '/homework' ? 'bg-[#6236ff] text-white shadow-lg shadow-purple-500/30' : 'text-slate-400 hover:text-white'
        }`}
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: path === '/homework' ? "'FILL' 1" : "'FILL' 0" }}>menu_book</span>
      </button>
      <button 
        onClick={() => navigate('/exams')} 
        className={`flex items-center justify-center rounded-full p-3 transition-all duration-200 ${
          path === '/exams' ? 'bg-[#6236ff] text-white shadow-lg shadow-purple-500/30' : 'text-slate-400 hover:text-white'
        }`}
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: path === '/exams' ? "'FILL' 1" : "'FILL' 0" }}>calendar_today</span>
      </button>
      <button 
        onClick={() => navigate('/register')} 
        className={`flex items-center justify-center rounded-full p-3 transition-all duration-200 ${
          path === '/register' ? 'bg-[#6236ff] text-white shadow-lg shadow-purple-500/30' : 'text-slate-400 hover:text-white'
        }`}
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: path === '/register' ? "'FILL' 1" : "'FILL' 0" }}>person</span>
      </button>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900/10 flex justify-center items-center py-0 sm:py-6">
        <div className="w-full max-w-md bg-background min-h-screen shadow-2xl sm:rounded-3xl overflow-hidden relative">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/homework" element={<HomeworkSearch />} />
            <Route path="/exams" element={<ExamsCalendar />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/splash" element={<Splash />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
          <BottomNav />
        </div>
      </div>
    </BrowserRouter>
  );
}
