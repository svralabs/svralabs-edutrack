import { useState } from 'react';

const Attendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Nguyen Van A', status: 'Present' },
    { id: 2, name: 'Tran Thi B', status: 'Absent' },
    { id: 3, name: 'Le Van C', status: 'Late' },
  ]);

  const handleStatusChange = (id, status) => {
    const updatedStudents = students.map(student =>
      student.id === id ? { ...student, status } : student
    );
    setStudents(updatedStudents);
  };

  const markAllPresent = () => {
    const updatedStudents = students.map(student => ({
      ...student,
      status: 'Present'
    }));
    setStudents(updatedStudents);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Attendance</h1>
      <div className="mb-4">
        <button
          onClick={markAllPresent}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Mark All Present
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Student Name</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td className="py-2 px-4 border-b">{student.name}</td>
                <td className="py-2 px-4 border-b">
                  <select
                    value={student.status}
                    onChange={(e) => handleStatusChange(student.id, e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                    <option value="Late">Late</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
