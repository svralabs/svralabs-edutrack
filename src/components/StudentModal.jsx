import { X } from 'lucide-react';

const StudentModal = ({ student, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">{student.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Basic Information</h3>
              <div className="space-y-2">
                <p><span className="font-medium">ID:</span> {student.id}</p>
                <p><span className="font-medium">Grade:</span> {student.grade}</p>
                <p><span className="font-medium">Status:</span> {student.status}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Academic Performance</h3>
              <div className="space-y-2">
                <p><span className="font-medium">GPA:</span> {student.gpa}</p>
                <p><span className="font-medium">Attendance:</span> {student.attendance}%</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Enrolled Courses</h3>
            <div className="flex flex-wrap gap-2">
              {student.courses.map((course, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Notes</h3>
            <p className="text-gray-700">{student.notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;
