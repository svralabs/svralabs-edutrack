import { createContext, useContext, useState, useEffect } from 'react';

const EduTrackContext = createContext();

export const EduTrackProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [grades, setGrades] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadData = () => {
      const storedStudents = localStorage.getItem('students');
      const storedCourses = localStorage.getItem('courses');
      const storedAttendance = localStorage.getItem('attendance');
      const storedGrades = localStorage.getItem('grades');
      const storedNotifications = localStorage.getItem('notifications');

      if (!storedStudents || !storedCourses || !storedAttendance || !storedGrades || !storedNotifications) {
        seedInitialData();
      } else {
        setStudents(JSON.parse(storedStudents));
        setCourses(JSON.parse(storedCourses));
        setAttendance(JSON.parse(storedAttendance));
        setGrades(JSON.parse(storedGrades));
        setNotifications(JSON.parse(storedNotifications));
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
    localStorage.setItem('courses', JSON.stringify(courses));
    localStorage.setItem('attendance', JSON.stringify(attendance));
    localStorage.setItem('grades', JSON.stringify(grades));
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [students, courses, attendance, grades, notifications]);

  const seedInitialData = () => {
    const initialStudents = [
      { id: 1, name: 'Nguyen Van A', email: 'a.nguyen@example.com', enrollmentDate: '2022-09-01' },
      { id: 2, name: 'Tran Thi B', email: 'b.tran@example.com', enrollmentDate: '2022-09-01' },
      { id: 3, name: 'Le Van C', email: 'c.le@example.com', enrollmentDate: '2022-09-01' },
    ];

    const initialCourses = [
      { id: 1, name: 'Mathematics', code: 'MATH101', description: 'Basic mathematics course' },
      { id: 2, name: 'Physics', code: 'PHYS101', description: 'Basic physics course' },
      { id: 3, name: 'Chemistry', code: 'CHEM101', description: 'Basic chemistry course' },
    ];

    const initialAttendance = [
      { id: 1, studentId: 1, courseId: 1, date: '2023-01-01', status: 'Present' },
      { id: 2, studentId: 2, courseId: 1, date: '2023-01-01', status: 'Absent' },
      { id: 3, studentId: 3, courseId: 1, date: '2023-01-01', status: 'Present' },
    ];

    const initialGrades = [
      { id: 1, studentId: 1, courseId: 1, grade: 85, date: '2023-01-15' },
      { id: 2, studentId: 2, courseId: 1, grade: 75, date: '2023-01-15' },
      { id: 3, studentId: 3, courseId: 1, grade: 90, date: '2023-01-15' },
    ];

    const initialNotifications = [
      { id: 1, title: 'Exam Schedule', message: 'Final exams will be held on June 15th', date: '2023-05-01', isRead: false },
      { id: 2, title: 'Holiday Notice', message: 'University will be closed from May 29th to June 4th', date: '2023-05-15', isRead: false },
    ];

    setStudents(initialStudents);
    setCourses(initialCourses);
    setAttendance(initialAttendance);
    setGrades(initialGrades);
    setNotifications(initialNotifications);
  };

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: students.length + 1 }]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map(student =>
      student.id === updatedStudent.id ? updatedStudent : student
    ));
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const addGrade = (grade) => {
    setGrades([...grades, { ...grade, id: grades.length + 1 }]);
  };

  const updateGrade = (updatedGrade) => {
    setGrades(grades.map(grade =>
      grade.id === updatedGrade.id ? updatedGrade : grade
    ));
  };

  const deleteGrade = (id) => {
    setGrades(grades.filter(grade => grade.id !== id));
  };

  return (
    <EduTrackContext.Provider
      value={{
        students,
        courses,
        attendance,
        grades,
        notifications,
        addStudent,
        updateStudent,
        deleteStudent,
        addGrade,
        updateGrade,
        deleteGrade
      }}
    >
      {children}
    </EduTrackContext.Provider>
  );
};

export const useEduTrack = () => {
  return useContext(EduTrackContext);
};
