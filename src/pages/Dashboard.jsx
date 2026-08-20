import React from 'react';
import { Users, BookOpen, Calendar, Percent } from 'lucide-react';
import MetricCard from '../components/MetricCard';

const Dashboard = () => {
  const metrics = [
    { title: 'Total Students', value: '1,245', icon: Users, color: 'bg-blue-50' },
    { title: 'Active Courses', value: '28', icon: BookOpen, color: 'bg-green-50' },
    { title: 'Avg Attendance', value: '87%', icon: Calendar, color: 'bg-yellow-50' },
    { title: 'Passing Rate', value: '72%', icon: Percent, color: 'bg-purple-50' },
  ];

  const recentSubmissions = [
    { id: 1, student: 'Nguyen Van A', course: 'Math 101', date: '2023-05-15', status: 'Graded' },
    { id: 2, student: 'Tran Thi B', course: 'Physics 201', date: '2023-05-14', status: 'Pending' },
    { id: 3, student: 'Le Van C', course: 'Chemistry 101', date: '2023-05-13', status: 'Graded' },
  ];

  const atRiskStudents = [
    { id: 1, name: 'Pham Thi D', course: 'Math 101', risk: 'Low' },
    { id: 2, name: 'Hoang Van E', course: 'Physics 201', risk: 'Medium' },
    { id: 3, name: 'Vu Thi F', course: 'Chemistry 101', risk: 'High' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recent Submissions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Student</th>
                  <th className="px-4 py-2 text-left">Course</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentSubmissions.map((submission) => (
                  <tr key={submission.id} className="border-b">
                    <td className="px-4 py-2">{submission.student}</td>
                    <td className="px-4 py-2">{submission.course}</td>
                    <td className="px-4 py-2">{submission.date}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${submission.status === 'Graded' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {submission.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">At-Risk Students</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Course</th>
                  <th className="px-4 py-2 text-left">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                {atRiskStudents.map((student) => (
                  <tr key={student.id} className="border-b">
                    <td className="px-4 py-2">{student.name}</td>
                    <td className="px-4 py-2">{student.course}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        student.risk === 'Low' ? 'bg-green-100 text-green-800' :
                        student.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {student.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Quick Filters</h2>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">All Terms</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">Spring 2023</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">Fall 2022</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">Summer 2022</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
