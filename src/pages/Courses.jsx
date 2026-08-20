import { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import ModuleList from '../components/ModuleList';

const Courses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Computer Science Fundamentals',
      department: 'Computer Science',
      semester: 'Fall 2023',
      instructor: 'Dr. Alice Johnson',
      progress: 65,
      modules: [
        { id: 1, title: 'Introduction to Programming', completed: true },
        { id: 2, title: 'Data Structures', completed: true },
        { id: 3, title: 'Algorithms', completed: false },
        { id: 4, title: 'Software Engineering', completed: false },
      ],
    },
    {
      id: 2,
      title: 'Mathematics for Engineers',
      department: 'Mathematics',
      semester: 'Spring 2024',
      instructor: 'Prof. Robert Smith',
      progress: 30,
      modules: [
        { id: 1, title: 'Calculus I', completed: true },
        { id: 2, title: 'Linear Algebra', completed: false },
        { id: 3, title: 'Differential Equations', completed: false },
      ],
    },
  ]);
  const [filters, setFilters] = useState({
    department: '',
    semester: '',
  });
  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleModule = (courseId, moduleId) => {
    setCourses(courses.map(course => {
      if (course.id === courseId) {
        const updatedModules = course.modules.map(module =>
          module.id === moduleId ? { ...module, completed: !module.completed } : module
        );
        const completedCount = updatedModules.filter(module => module.completed).length;
        const progress = Math.round((completedCount / updatedModules.length) * 100);
        return { ...course, modules: updatedModules, progress };
      }
      return course;
    }));
  };

  const toggleCourseExpansion = (courseId) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const filteredCourses = courses.filter(course => {
    return (
      (filters.department === '' || course.department === filters.department) &&
      (filters.semester === '' || course.semester === filters.semester)
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
          <select
            className="w-full p-2 border rounded"
            value={filters.department}
            onChange={(e) => setFilters({ ...filters, department: e.target.value })}
          >
            <option value="">All Departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mathematics">Mathematics</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Semester</label>
          <select
            className="w-full p-2 border rounded"
            value={filters.semester}
            onChange={(e) => setFilters({ ...filters, semester: e.target.value })}
          >
            <option value="">All Semesters</option>
            <option value="Fall 2023">Fall 2023</option>
            <option value="Spring 2024">Spring 2024</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-1">{course.department}</p>
              <p className="text-gray-600 mb-4">{course.semester}</p>
              <p className="text-gray-700 mb-4">Instructor: {course.instructor}</p>

              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-blue-700">Progress</span>
                  <span className="text-sm font-medium text-blue-700">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              <button
                onClick={() => toggleCourseExpansion(course.id)}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                {expandedCourse === course.id ? (
                  <>
                    <ChevronUp className="mr-1" size={16} />
                    Hide Modules
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-1" size={16} />
                    Show Modules
                  </>
                )}
              </button>
            </div>

            {expandedCourse === course.id && (
              <ModuleList
                modules={course.modules}
                onToggleModule={(moduleId) => toggleModule(course.id, moduleId)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
