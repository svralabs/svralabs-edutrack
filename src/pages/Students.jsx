import { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import StudentModal from '../components/StudentModal';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [gradeFilter, setGradeFilter] = useState('');
  const [courseFilter, setCourseFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const mockStudents = [
      {
        id: 'S1001',
        name: 'Nguyen Van A',
        grade: '10',
        courses: ['Math', 'Physics'],
        status: 'Active',
        gpa: 3.8,
        attendance: 95,
        notes: 'Excellent student with strong analytical skills.'
      },
      {
        id: 'S1002',
        name: 'Tran Thi B',
        grade: '11',
        courses: ['Chemistry', 'Biology'],
        status: 'Probation',
        gpa: 2.5,
        attendance: 80,
        notes: 'Needs improvement in time management.'
      },
      {
        id: 'S1003',
        name: 'Le Van C',
        grade: '12',
        courses: ['History', 'Literature'],
        status: 'Graduated',
        gpa: 3.2,
        attendance: 90,
        notes: 'Graduated with honors.'
      },
      {
        id: 'S1004',
        name: 'Pham Thi D',
        grade: '10',
        courses: ['Math', 'Computer Science'],
        status: 'Active',
        gpa: 3.5,
        attendance: 92,
        notes: 'Shows potential in programming.'
      },
      {
        id: 'S1005',
        name: 'Hoang Van E',
        grade: '11',
        courses: ['Physics', 'Chemistry'],
        status: 'Probation',
        gpa: 2.8,
        attendance: 75,
        notes: 'Needs to improve attendance.'
      }
    ];
    setStudents(mockStudents);
    setFilteredStudents(mockStudents);
  }, []);

  useEffect(() => {
    let result = students;

    if (searchTerm) {
      result = result.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (gradeFilter) {
      result = result.filter(student => student.grade === gradeFilter);
    }

    if (courseFilter) {
      result = result.filter(student => student.courses.includes(courseFilter));
    }

    if (statusFilter) {
      result = result.filter(student => student.status === statusFilter);
    }

    setFilteredStudents(result);
  }, [searchTerm, gradeFilter, courseFilter, statusFilter, students]);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Probation':
        return 'bg-yellow-100 text-yellow-800';
      case 'Graduated':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Student Directory</h1>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by name or ID..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>

        <div className="flex gap-4">
          <div className="relative">
            <select
              className="pl-10 pr-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={gradeFilter}
              onChange={(e) => setGradeFilter(e.target.value)}
            >
              <option value="">All Grades</option>
              <option value="10">Grade 10</option>
              <option value="11">Grade 11</option>
              <option value="12">Grade 12</option>
            </select>
            <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
          </div>

          <div className="relative">
            <select
              className="pl-10 pr-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value)}
            >
              <option value="">All Courses</option>
              <option value="Math">Math</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="History">History</option>
              <option value="Literature">Literature</option>
              <option value="Computer Science">Computer Science</option>
            </select>
            <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
          </div>

          <div className="relative">
            <select
              className="pl-10 pr-4 py-2 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Probation">Probation</option>
              <option value="Graduated">Graduated</option>
            </select>
            <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Grade</th>
              <th className="py-3 px-4 text-left">Courses</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                className="border-t hover:bg-gray-50 cursor-pointer"
                onClick={() => handleStudentClick(student)}
              >
                <td className="py-3 px-4">{student.id}</td>
                <td className="py-3 px-4">{student.name}</td>
                <td className="py-3 px-4">{student.grade}</td>
                <td className="py-3 px-4">{student.courses.join(', ')}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedStudent && (
        <StudentModal student={selectedStudent} onClose={closeModal} />
      )}
    </div>
  );
};

export default Students;
