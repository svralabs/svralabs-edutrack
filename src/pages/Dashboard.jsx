import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, CheckCircle, Plus, Edit, Trash2 } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalStudents: 0,
    completionRate: 0,
  });

  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    const mockStats = {
      totalCourses: 15,
      totalStudents: 234,
      completionRate: 78,
    };

    const mockActivity = [
      { id: 1, student: 'Nguyen Van A', course: 'React Basics', date: '2023-05-15' },
      { id: 2, student: 'Tran Thi B', course: 'Advanced JavaScript', date: '2023-05-14' },
      { id: 3, student: 'Le Van C', course: 'Node.js Fundamentals', date: '2023-05-13' },
      { id: 4, student: 'Pham Thi D', course: 'CSS Mastery', date: '2023-05-12' },
      { id: 5, student: 'Hoang Van E', course: 'Web Performance', date: '2023-05-11' },
    ];

    setStats(mockStats);
    setRecentActivity(mockActivity);
  }, []);

  const handleQuickAction = (action) => {
    console.log(`Quick action: ${action}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Total Courses</h2>
            <BookOpen className="h-6 w-6 text-blue-500" />
          </div>
          <p className="text-3xl font-bold">{stats.totalCourses}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Total Students</h2>
            <Users className="h-6 w-6 text-green-500" />
          </div>
          <p className="text-3xl font-bold">{stats.totalStudents}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Completion Rate</h2>
            <CheckCircle className="h-6 w-6 text-purple-500" />
          </div>
          <p className="text-3xl font-bold">{stats.completionRate}%</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => handleQuickAction('add-course')}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Course
          </button>
          <button
            onClick={() => handleQuickAction('add-student')}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Student
          </button>
          <button
            onClick={() => handleQuickAction('edit')}
            className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </button>
          <button
            onClick={() => handleQuickAction('delete')}
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentActivity.map((activity) => (
                <tr key={activity.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{activity.student}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.course}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link to={`/students/${activity.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">View</Link>
                    <button onClick={() => handleQuickAction(`edit-${activity.id}`)} className="text-yellow-600 hover:text-yellow-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
