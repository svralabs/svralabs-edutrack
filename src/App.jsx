import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path='/' element={<InvoiceActionValidationManager />} />
<Route path='/invoice-action-validation-manager' element={<InvoiceActionValidationManager />} />
<Route path='/event-detail-katalog-produk' element={<EventDetailKatalogProduk />} />
<Route path='/calendar-exams-schedule' element={<CalendarExamsSchedule />} />
<Route path='/dashboard-home' element={<DashboardHome />} />
<Route path='/homework-search' element={<HomeworkSearch />} />
<Route path='/splash-screen-nama-brand' element={<SplashScreenNamaBrand />} />
<Route path='/detail-event-katalog-produk-1' element={<DetailEventKatalogProduk1 />} />
<Route path='/detail-event-katalog-produk-2' element={<DetailEventKatalogProduk2 />} />
<Route path='/pesanan-saya-opsi-penerima' element={<PesananSayaOpsiPenerima />} />
<Route path='/detail-produk-product-detail' element={<DetailProdukProductDetail />} />
<Route path='/daftar-akun-registration' element={<DaftarAkunRegistration />} />
<Route path='/beranda-jasa-titip' element={<BerandaJasaTitip />} />
<Route path='/pesanan-saya-order-review' element={<PesananSayaOrderReview />} />
        <Route path="*" element={<InvoiceActionValidationManager />} />
      </Routes>
    </BrowserRouter>
  );
}
