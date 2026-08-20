import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const Analytics = () => {
  const [grades, setGrades] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [roster, setRoster] = useState([]);

  useEffect(() => {
    // Mock data
    const mockGrades = [
      { grade: 'A', count: 12 },
      { grade: 'B', count: 18 },
      { grade: 'C', count: 10 },
      { grade: 'D', count: 5 },
      { grade: 'F', count: 3 },
    ];
    const mockAttendance = [
      { week: 1, present: 30, absent: 5 },
      { week: 2, present: 28, absent: 7 },
      { week: 3, present: 25, absent: 10 },
      { week: 4, present: 22, absent: 13 },
      { week: 5, present: 20, absent: 15 },
    ];
    const mockRoster = [
      { id: 1, name: 'John Doe', grade: 'A', attendance: '95%' },
      { id: 2, name: 'Jane Smith', grade: 'B', attendance: '90%' },
      { id: 3, name: 'Bob Johnson', grade: 'C', attendance: '85%' },
    ];

    setGrades(mockGrades);
    setAttendance(mockAttendance);
    setRoster(mockRoster);
  }, []);

  const exportToCSV = (data, filename) => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + data.map(row => Object.values(row).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const maxGradeCount = Math.max(...grades.map(g => g.count));
  const maxAttendance = Math.max(...attendance.map(a => a.present + a.absent));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Performance Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Grade Distribution</h2>
          <div className="space-y-4">
            {grades.map((grade, index) => (
              <div key={index} className="flex items-center">
                <span className="w-8 font-medium">{grade.grade}</span>
                <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: `${(grade.count / maxGradeCount) * 100}%` }}
                  ></div>
                </div>
                <span className="w-8 text-right">{grade.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Attendance Trend</h2>
          <div className="h-64 flex items-end justify-between">
            {attendance.map((week, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex">
                  <div
                    className="w-6 bg-green-500"
                    style={{ height: `${(week.present / maxAttendance) * 100}%` }}
                  ></div>
                  <div
                    className="w-6 bg-red-500"
                    style={{ height: `${(week.absent / maxAttendance) * 100}%` }}
                  ></div>
                </div>
                <span className="mt-2">W{week.week}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 mr-2"></div>
              <span>Present</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 mr-2"></div>
              <span>Absent</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Student Roster</h2>
          <button
            onClick={() => exportToCSV(roster, 'student_roster.csv')}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <Download className="mr-2" size={16} />
            Export CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Grade</th>
                <th className="px-4 py-2 text-left">Attendance</th>
              </tr>
            </thead>
            <tbody>
              {roster.map((student) => (
                <tr key={student.id} className="border-b">
                  <td className="px-4 py-2">{student.id}</td>
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.grade}</td>
                  <td className="px-4 py-2">{student.attendance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
