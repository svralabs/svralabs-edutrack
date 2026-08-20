import { useState } from 'react';
import { Edit2, Save } from 'lucide-react';

const Assessments = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Nguyen Van A', score: 85 },
    { id: 2, name: 'Tran Thi B', score: 92 },
    { id: 3, name: 'Le Van C', score: 78 },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editScore, setEditScore] = useState('');

  const calculateLetterGrade = (score) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  const handleEdit = (id, score) => {
    setEditingId(id);
    setEditScore(score.toString());
  };

  const handleSave = (id) => {
    const updatedStudents = students.map(student =>
      student.id === id ? { ...student, score: parseInt(editScore) } : student
    );
    setStudents(updatedStudents);
    setEditingId(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gradebook</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Student Name</th>
              <th className="py-2 px-4 border-b">Score</th>
              <th className="py-2 px-4 border-b">Letter Grade</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td className="py-2 px-4 border-b">{student.name}</td>
                <td className="py-2 px-4 border-b">
                  {editingId === student.id ? (
                    <input
                      type="number"
                      value={editScore}
                      onChange={(e) => setEditScore(e.target.value)}
                      className="border rounded px-2 py-1 w-16"
                    />
                  ) : (
                    student.score
                  )}
                </td>
                <td className="py-2 px-4 border-b">{calculateLetterGrade(student.score)}</td>
                <td className="py-2 px-4 border-b">
                  {editingId === student.id ? (
                    <button
                      onClick={() => handleSave(student.id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Save size={18} />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(student.id, student.score)}
                      className="text-green-500 hover:text-green-700"
                    >
                      <Edit2 size={18} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assessments;
