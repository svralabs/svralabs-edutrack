import { Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Layout from './components/Layout';
import Splash from './pages/Splash';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ExamsCalendar from './pages/ExamsCalendar';
import HomeworkSearch from './pages/HomeworkSearch';
import ProductDetail from './pages/ProductDetail';
import EventDetail from './pages/EventDetail';

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/register" element={<Register />} />
      {isAuthenticated && (
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exams" element={<ExamsCalendar />} />
          <Route path="/homework" element={<HomeworkSearch />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/events/:id" element={<EventDetail />} />
        </Route>
      )}
    </Routes>
  );
}
