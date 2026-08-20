import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const students = [
    { id: 1, name: 'Nguyen Van A', email: 'a.nguyen@example.com', courses: ['Math', 'Physics'], progress: '75%', status: 'active' },
    { id: 2, name: 'Tran Thi B', email: 'b.tran@example.com', courses: ['Chemistry', 'Biology'], progress: '60%', status: 'active' },
    { id: 3, name: 'Le Van C', email: 'c.le@example.com', courses: ['History', 'Geography'], progress: '90%', status: 'inactive' },
    { id: 4, name: 'Pham Thi D', email: 'd.pham@example.com', courses: ['Computer Science', 'English'], progress: '45%', status: 'active' },
    { id: 5, name: 'Hoang Van E', email: 'e.hoang@example.com', courses: ['Art', 'Music'], progress: '80%', status: 'inactive' },
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || student.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Students</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by name or email..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>

        <div className="relative">
          <select
            className="pl-10 pr-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Enrolled Courses</th>
              <th className="py-3 px-4 text-left">Progress</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id} className="border-t">
                <td className="py-3 px-4">{student.name}</td>
                <td className="py-3 px-4">{student.email}</td>
                <td className="py-3 px-4">{student.courses.join(', ')}</td>
                <td className="py-3 px-4">{student.progress}</td>
                <td className="py-3 px-4 capitalize">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    student.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
