import { useState } from 'react';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const Courses = () => {
  const mockCourses = [
    { id: 1, name: 'Introduction to React', instructor: 'John Doe', students: 45, status: 'Active' },
    { id: 2, name: 'Advanced JavaScript', instructor: 'Jane Smith', students: 32, status: 'Completed' },
    { id: 3, name: 'Web Development Basics', instructor: 'Mike Johnson', students: 56, status: 'Active' },
    { id: 4, name: 'Data Structures and Algorithms', instructor: 'Sarah Williams', students: 28, status: 'Upcoming' },
    { id: 5, name: 'Database Management', instructor: 'David Brown', students: 39, status: 'Active' },
    { id: 6, name: 'Mobile App Development', instructor: 'Emily Davis', students: 41, status: 'Completed' },
    { id: 7, name: 'UI/UX Design Principles', instructor: 'Robert Wilson', students: 35, status: 'Upcoming' },
    { id: 8, name: 'Software Engineering', instructor: 'Jennifer Miller', students: 50, status: 'Active' },
    { id: 9, name: 'Cybersecurity Fundamentals', instructor: 'Thomas Moore', students: 25, status: 'Completed' },
    { id: 10, name: 'Cloud Computing', instructor: 'Lisa Taylor', students: 37, status: 'Active' },
    { id: 11, name: 'Machine Learning Basics', instructor: 'Kevin Anderson', students: 48, status: 'Upcoming' },
    { id: 12, name: 'Artificial Intelligence', instructor: 'Michelle Thomas', students: 33, status: 'Active' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || course.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>

        <div className="relative">
          <select
            className="pl-10 pr-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="Upcoming">Upcoming</option>
          </select>
          <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left">Course Name</th>
              <th className="py-3 px-4 text-left">Instructor</th>
              <th className="py-3 px-4 text-left">Students</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedCourses.map((course) => (
              <tr key={course.id} className="border-t">
                <td className="py-3 px-4">{course.name}</td>
                <td className="py-3 px-4">{course.instructor}</td>
                <td className="py-3 px-4">{course.students}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    course.status === 'Active' ? 'bg-green-100 text-green-800' :
                    course.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {course.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-600">
          Showing {filteredCourses.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredCourses.length)} of {filteredCourses.length} courses
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 border rounded-lg ${
                currentPage === page ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
