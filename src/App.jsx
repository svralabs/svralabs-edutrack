import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import InvoiceActionValidationManager from './pages/InvoiceActionValidationManager';
import EventDetailKatalogProduk from './pages/EventDetailKatalogProduk';
import CalendarExamsSchedule from './pages/CalendarExamsSchedule';
import DashboardHome from './pages/DashboardHome';
import HomeworkSearch from './pages/HomeworkSearch';
import SplashScreenNamaBrand from './pages/SplashScreenNamaBrand';
import DetailEventKatalogProduk1 from './pages/DetailEventKatalogProduk1';
import DetailEventKatalogProduk2 from './pages/DetailEventKatalogProduk2';
import PesananSayaOpsiPenerima from './pages/PesananSayaOpsiPenerima';
import DetailProdukProductDetail from './pages/DetailProdukProductDetail';
import DaftarAkunRegistration from './pages/DaftarAkunRegistration';
import BerandaJasaTitip from './pages/BerandaJasaTitip';
import PesananSayaOrderReview from './pages/PesananSayaOrderReview';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
        {/* Navigation Header for Multi-Screen Stitch Pages */}
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="font-bold text-sm tracking-wide text-white capitalize">edutrack</span>
          </div>
          <nav className="flex items-center space-x-2 overflow-x-auto py-1">
            <Link to="/" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Invoice Action Validation Manager</Link>
            <Link to="/event-detail-katalog-produk" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Event Detail Katalog Produk</Link>
            <Link to="/calendar-exams-schedule" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Calendar Exams Schedule</Link>
            <Link to="/dashboard-home" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Dashboard Home</Link>
            <Link to="/homework-search" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Homework Search</Link>
            <Link to="/splash-screen-nama-brand" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Splash Screen Nama Brand</Link>
            <Link to="/detail-event-katalog-produk-1" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Detail Event Katalog Produk 1</Link>
            <Link to="/detail-event-katalog-produk-2" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Detail Event Katalog Produk 2</Link>
            <Link to="/pesanan-saya-opsi-penerima" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Pesanan Saya Opsi Penerima</Link>
            <Link to="/detail-produk-product-detail" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Detail Produk Product Detail</Link>
            <Link to="/daftar-akun-registration" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Daftar Akun Registration</Link>
            <Link to="/beranda-jasa-titip" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Beranda Jasa Titip</Link>
            <Link to="/pesanan-saya-order-review" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Pesanan Saya Order Review</Link>
          </nav>
        </header>

        {/* Dynamic Routed Pages */}
        <main className="flex-1 w-full">
          <Routes>
          <Route path="/" element={<InvoiceActionValidationManager />} />
          <Route path="/event-detail-katalog-produk" element={<EventDetailKatalogProduk />} />
          <Route path="/calendar-exams-schedule" element={<CalendarExamsSchedule />} />
          <Route path="/dashboard-home" element={<DashboardHome />} />
          <Route path="/homework-search" element={<HomeworkSearch />} />
          <Route path="/splash-screen-nama-brand" element={<SplashScreenNamaBrand />} />
          <Route path="/detail-event-katalog-produk-1" element={<DetailEventKatalogProduk1 />} />
          <Route path="/detail-event-katalog-produk-2" element={<DetailEventKatalogProduk2 />} />
          <Route path="/pesanan-saya-opsi-penerima" element={<PesananSayaOpsiPenerima />} />
          <Route path="/detail-produk-product-detail" element={<DetailProdukProductDetail />} />
          <Route path="/daftar-akun-registration" element={<DaftarAkunRegistration />} />
          <Route path="/beranda-jasa-titip" element={<BerandaJasaTitip />} />
          <Route path="/pesanan-saya-order-review" element={<PesananSayaOrderReview />} />
          <Route path="*" element={<InvoiceActionValidationManager />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
