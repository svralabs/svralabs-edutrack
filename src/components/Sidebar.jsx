import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, BookOpen, ShoppingBag, CalendarDays, X } from 'lucide-react';

const sidebarItems = [
  { name: 'Dashboard', path: '/dashboard', icon: Home },
  { name: 'Exams', path: '/exams', icon: Calendar },
  { name: 'Homework', path: '/homework', icon: BookOpen },
  { name: 'Products', path: '/products', icon: ShoppingBag },
  { name: 'Events', path: '/events', icon: CalendarDays },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();

  return (
    <div className={`fixed inset-y-0 left-0 z-20 w-64 bg-white shadow-md transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition duration-200 ease-in-out`}>
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <Link to="/dashboard" className="flex items-center">
          <img
            className="h-8 w-auto"
            src="/logo.svg"
            alt="SVRALABS"
          />
        </Link>
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-5">
        <nav className="px-2 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                <item.icon
                  className={`mr-4 h-6 w-6 ${isActive ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500'}`}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
