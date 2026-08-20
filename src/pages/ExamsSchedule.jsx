import React from 'react';
import styles from './ExamsSchedule.module.css';

const examEvents = [
  {
    id: 1,
    date: '2023-05-01',
    subject: 'Math',
    instructor: 'Dr. Anna Lesli',
    instructorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKyyM81uTWSAWSJRudT_F4-uh2dVYlzLyraq-eIjq0v9Mn7DcrQFClToz5Kx1N5vgTuL6pJETdcvWmHgmUbrJ6eHdc4phpIsrCddBKbUuOjbxDfAsLusztKwmI7vwBC_-zB0drz1RteFsm4nxltXuFSbFIVwG1jSN8gAIoZFsAB24b7D6lBJINhNfmfYeHC4ZlxVBP81_PaG6TXOyYsbeg7IT5ZJKTCbSbpPV4aWf-9Qmyw01nwyCS',
    color: 'subjectYellow'
  },
  {
    id: 2,
    date: '2023-05-07',
    subject: 'Physics',
    instructor: 'Dr. John Smith',
    instructorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKyyM81uTWSAWSJRudT_F4-uh2dVYlzLyraq-eIjq0v9Mn7DcrQFClToz5Kx1N5vgTuL6pJETdcvWmHgmUbrJ6eHdc4phpIsrCddBKbUuOjbxDfAsLusztKwmI7vwBC_-zB0drz1RteFsm4nxltXuFSbFIVwG1jSN8gAIoZFsAB24b7D6lBJINhNfmfYeHC4ZlxVBP81_PaG6TXOyYsbeg7IT5ZJKTCbSbpPV4aWf-9Qmyw01nwyCS',
    color: 'subjectBlue'
  },
  {
    id: 3,
    date: '2023-05-17',
    subject: 'Chemistry',
    instructor: 'Dr. Sarah Johnson',
    instructorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKyyM81uTWSAWSJRudT_F4-uh2dVYlzLyraq-eIjq0v9Mn7DcrQFClToz5Kx1N5vgTuL6pJETdcvWmHgmUbrJ6eHdc4phpIsrCddBKbUuOjbxDfAsLusztKwmI7vwBC_-zB0drz1RteFsm4nxltXuFSbFIVwG1jSN8gAIoZFsAB24b7D6lBJINhNfmfYeHC4ZlxVBP81_PaG6TXOyYsbeg7IT5ZJKTCbSbpPV4aWf-9Qmyw01nwyCS',
    color: 'subjectGreen'
  },
  {
    id: 4,
    date: '2023-05-29',
    subject: 'Biology',
    instructor: 'Dr. Michael Brown',
    instructorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKyyM81uTWSAWSJRudT_F4-uh2dVYlzLyraq-eIjq0v9Mn7DcrQFClToz5Kx1N5vgTuL6pJETdcvWmHgmUbrJ6eHdc4phpIsrCddBKbUuOjbxDfAsLusztKwmI7vwBC_-zB0drz1RteFsm4nxltXuFSbFIVwG1jSN8gAIoZFsAB24b7D6lBJINhNfmfYeHC4ZlxVBP81_PaG6TXOyYsbeg7IT5ZJKTCbSbpPV4aWf-9Qmyw01nwyCS',
    color: 'subjectYellow'
  }
];

const daysInMonth = 31;
const firstDayOfMonth = 3; // Wednesday (0=Sunday, 1=Monday, ..., 6=Saturday)

export default function ExamsSchedule() {
  const renderCalendarDays = () => {
    const days = [];
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="calendar-day text-outline opacity-20 font-label-sm">
          {daysInMonth - firstDayOfMonth + i + 1}
        </div>
      );
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `2023-05-${day.toString().padStart(2, '0')}`;
      const exam = examEvents.find(event => event.date === date);
      const isExamDay = exam !== undefined;

      days.push(
        <div
          key={day}
          className={`calendar-day ${isExamDay ? `${styles[exam.color]} border-2` : ''} font-label-sm`}
        >
          {day}
          {isExamDay && examEvents.filter(event => event.date === date).length > 1 && (
            <span className={styles.badge}>
              +{examEvents.filter(event => event.date === date).length - 1}
            </span>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <>
      {/* Top AppBar */}
      <header className="bg-background fixed docked full-width top-0 z-50 flex justify-between items-center px-margin-mobile py-4 w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container shadow-sm border border-outline-variant">
            <img
              className="w-full h-full object-cover"
              alt="A close-up high-quality portrait of a friendly university student with a warm smile, wearing modern glasses and casual academic attire. The background is a blurred university library with soft, bright natural lighting, consistent with a clean and professional modern UI aesthetic using a soft neutral color palette."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABF0ACRfd7EQ8RAfwzot2kxlnHus37CM2_B6VJYSINF4_pYXbQ4AzMqn_gNVZuH3uXuVwJLvgNbx7fus2Z-tePdWZNOjfMtj1ZfmzB47o_c094Dj48Qp6jnGC4fvJF8WNrh8foorMvRIcAjO-yT4siK8uGQcKjdEQzzIYb4Y5o5DBYFOXM0N_9kA_X20mLQtyhO0ZOJE-mLE69XSDzpNG2IRcjBHUxz0DikzaSPiTq8yFegschR1AU"
            />
          </div>
          <span className="font-headline-md text-headline-md-mobile font-bold text-on-surface">EduFlow</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest hover:opacity-80 transition-opacity active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-primary">notifications</span>
        </button>
      </header>

      <main className="pt-20 pb-32 px-margin-mobile max-w-md mx-auto">
        {/* Month Selector */}
        <section className="flex items-center justify-between mb-6">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-background">May</h1>
          <div className="flex gap-2">
            <button className="p-2 bg-surface rounded-full shadow-sm active:scale-90 transition-transform">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="p-2 bg-surface rounded-full shadow-sm active:scale-90 transition-transform">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="bg-surface rounded-card-padding p-6 shadow-sm mb-8">
          <div className={styles.calendarGrid}>
            {/* Days Header */}
            <div className="text-center text-label-sm font-label-sm text-outline">Mon</div>
            <div className="text-center text-label-sm font-label-sm text-outline">Tue</div>
            <div className="text-center text-label-sm font-label-sm text-outline">Wed</div>
            <div className="text-center text-label-sm font-label-sm text-outline">Thu</div>
            <div className="text-center text-label-sm font-label-sm text-outline">Fri</div>
            <div className="text-center text-label-sm font-label-sm text-outline">Sat</div>
            <div className="text-center text-label-sm font-label-sm text-outline">Sun</div>

            {/* Calendar Days */}
            {renderCalendarDays()}
          </div>
        </section>

        {/* Upcoming Exams */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-headline-md text-headline-md-mobile text-on-background">Upcoming exams</h2>
            <a className="text-primary font-label-sm hover:underline" href="#">See all</a>
          </div>
          <div className="space-y-4">
            {examEvents.map(exam => (
              <div key={exam.id} className="bg-surface rounded-xl p-4 flex items-center gap-4 shadow-sm border border-surface-variant transition-transform active:scale-[0.98]">
                <div className={`w-14 h-14 ${styles[exam.color]} rounded-xl flex flex-col items-center justify-center text-on-background shrink-0`}>
                  <span className="font-bold text-lg">{new Date(exam.date).getDate()}</span>
                  <span className="text-[10px] uppercase font-bold opacity-70">{new Date(exam.date).toLocaleString('default', { month: 'short' })}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-md text-base text-on-surface">{exam.subject} Test</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-5 h-5 rounded-full overflow-hidden bg-surface-container">
                      <img
                        className="w-full h-full object-cover"
                        alt={`Portrait of ${exam.instructor}`}
                        src={exam.instructorImage}
                      />
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
      </main>
    </>
  );
}
