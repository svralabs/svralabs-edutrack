import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ExamEventModal from '../components/ExamEventModal';

const mockExams = [
  { id: 1, date: '2023-05-17', subject: 'Math Test', instructor: 'Dr. Anna Lesli', instructorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKyyM81uTWSAWSJRudT_F4-uh2dVYlzLyraq-eIjq0v9Mn7DcrQFClToz5Kx1N5vgTuL6pJETdcvWmHgmUbrJ6eHdc4phpIsrCddBKbUuOjbxDfAsLusztKwmI7vwBC_-zB0drz1RteFsm4nxltXuFSbFIVwG1jSN8gAIoZFsAB24b7D6lBJINhNfmfYeHC4ZlxVBP81_PaG6TXOyYsbeg7IT5ZJKTCbSbpPV4aWf-9Qmyw01nwyCS' },
  { id: 2, date: '2023-05-29', subject: 'Physics Exam', instructor: 'Prof. John Smith', instructorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKyyM81uTWSAWSJRudT_F4-uh2dVYlzLyraq-eIjq0v9Mn7DcrQFClToz5Kx1N5vgTuL6pJETdcvWmHgmUbrJ6eHdc4phpIsrCddBKbUuOjbxDfAsLusztKwmI7vwBC_-zB0drz1RteFsm4nxltXuFSbFIVwG1jSN8gAIoZFsAB24b7D6lBJINhNfmfYeHC4ZlxVBP81_PaG6TXOyYsbeg7IT5ZJKTCbSbpPV4aWf-9Qmyw01nwyCS' },
];

export default function ExamCalendar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedExam, setSelectedExam] = useState(null);

  useEffect(() => {
    const monthParam = searchParams.get('month');
    const yearParam = searchParams.get('year');

    if (monthParam && yearParam) {
      setCurrentMonth(parseInt(monthParam) - 1);
      setCurrentYear(parseInt(yearParam));
    }
  }, [searchParams]);

  const handleMonthChange = (direction) => {
    let newMonth = currentMonth + direction;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setSearchParams({ month: newMonth + 1, year: newYear });
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 }, (_, i) => i);

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getExamCountForDay = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    const formattedDate = date.toISOString().split('T')[0];
    return mockExams.filter(exam => exam.date === formattedDate).length;
  };

  const handleExamClick = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    const formattedDate = date.toISOString().split('T')[0];
    const exam = mockExams.find(exam => exam.date === formattedDate);
    setSelectedExam(exam);
  };

  return (
    <div className="pt-20 pb-32 px-margin-mobile max-w-md mx-auto">
      <section className="flex items-center justify-between mb-6">
        <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-background">{monthNames[currentMonth]}</h1>
        <div className="flex gap-2">
          <button onClick={() => handleMonthChange(-1)} className="p-2 bg-surface rounded-full shadow-sm active:scale-90 transition-transform">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button onClick={() => handleMonthChange(1)} className="p-2 bg-surface rounded-full shadow-sm active:scale-90 transition-transform">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>

      <section className="bg-surface rounded-card-padding p-6 shadow-sm mb-8">
        <div className="calendar-grid mb-4">
          <div className="text-center text-label-sm font-label-sm text-outline">Mon</div>
          <div className="text-center text-label-sm font-label-sm text-outline">Tue</div>
          <div className="text-center text-label-sm font-label-sm text-outline">Wed</div>
          <div className="text-center text-label-sm font-label-sm text-outline">Thu</div>
          <div className="text-center text-label-sm font-label-sm text-outline">Fri</div>
          <div className="text-center text-label-sm font-label-sm text-outline">Sat</div>
          <div className="text-center text-label-sm font-label-sm text-outline">Sun</div>

          {emptyDays.map((_, index) => (
            <div key={`empty-${index}`} className="calendar-day text-outline opacity-20 font-label-sm">
              {new Date(currentYear, currentMonth, 0).getDate() - emptyDays.length + index + 1}
            </div>
          ))}

          {daysArray.map((day) => {
            const examCount = getExamCountForDay(day);
            const isExamDay = examCount > 0;
            const isToday = new Date().getDate() === day && new Date().getMonth() === currentMonth && new Date().getFullYear() === currentYear;

            return (
              <div
                key={day}
                className={`calendar-day font-label-sm ${isExamDay ? 'bg-primary text-on-primary font-bold' : ''} ${isToday ? 'bg-subject-yellow/20 border-2 border-subject-yellow' : ''}`}
                onClick={() => isExamDay && handleExamClick(day)}
              >
                {day}
                {examCount > 1 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-[10px] text-white w-4 h-4 rounded-full flex items-center justify-center border border-surface">
                    +{examCount - 1}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-headline-md text-headline-md-mobile text-on-background">Upcoming exams</h2>
          <a className="text-primary font-label-sm hover:underline" href="#">See all</a>
        </div>
        <div className="space-y-4">
          {mockExams.map((exam) => (
            <div key={exam.id} className="bg-surface rounded-xl p-4 flex items-center gap-4 shadow-sm border border-surface-variant transition-transform active:scale-[0.98]" onClick={() => setSelectedExam(exam)}>
              <div className="w-14 h-14 bg-subject-yellow rounded-xl flex flex-col items-center justify-center text-on-background shrink-0">
                <span className="font-bold text-lg">{new Date(exam.date).getDate()}</span>
                <span className="text-[10px] uppercase font-bold opacity-70">{monthNames[new Date(exam.date).getMonth()].substring(0, 3)}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-md text-base text-on-surface">{exam.subject}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-5 h-5 rounded-full overflow-hidden bg-surface-container">
                    <img className="w-full h-full object-cover" src={exam.instructorAvatar} alt={exam.instructor} />
                  </div>
                  <span className="text-on-surface-variant text-label-sm font-label-sm">{exam.instructor}</span>
                </div>
              </div>
              <button className="text-outline hover:text-primary">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {selectedExam && (
        <ExamEventModal exam={selectedExam} onClose={() => setSelectedExam(null)} />
      )}
    </div>
  );
}
