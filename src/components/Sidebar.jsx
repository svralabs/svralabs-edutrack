import { Link } from 'react-router-dom';
import { Home, Users, BookOpen, FileText, Calendar, BarChart } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: Home, path: '/' },
  { name: 'Students', icon: Users, path: '/students' },
  { name: 'Courses', icon: BookOpen, path: '/courses' },
  { name: 'Assessments', icon: FileText, path: '/assessments' },
  { name: 'Attendance', icon: Calendar, path: '/attendance' },
  { name: 'Analytics', icon: BarChart, path: '/analytics' },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition duration-200 ease-in-out`}>
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">EduTrack</h1>
        </div>
        <nav className="mt-5 flex-1 px-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={onClose}
              className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
            >
              <item.icon className="mr-4 h-6 w-6" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
