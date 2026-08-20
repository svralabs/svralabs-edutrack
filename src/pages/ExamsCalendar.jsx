import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { exams } from '../mocks/exams';
import Modal from '../components/Modal';
import { ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';

const localizer = momentLocalizer(moment);

const ExamsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: event.subjectColor,
      borderRadius: '8px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block',
    };
    return {
      style,
    };
  };

  const events = exams.map((exam) => ({
    id: exam.id,
    title: exam.subject,
    start: new Date(exam.date),
    end: new Date(exam.date),
    subjectColor: exam.subjectColor,
  }));

  const dayPropGetter = (date) => {
    const examCount = exams.filter((exam) => moment(exam.date).isSame(date, 'day')).length;
    if (examCount > 0) {
      return {
        className: 'bg-subject-yellow/20 border-2 border-subject-yellow',
      };
    }
    return {};
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pt-20 pb-32 px-margin-mobile max-w-md mx-auto">
      <section className="flex items-center justify-between mb-6">
        <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-background">May</h1>
        <div className="flex gap-2">
          <button className="p-2 bg-surface rounded-full shadow-sm active:scale-90 transition-transform">
            <ChevronLeft className="text-primary" />
          </button>
          <button className="p-2 bg-surface rounded-full shadow-sm active:scale-90 transition-transform">
            <ChevronRight className="text-primary" />
          </button>
        </div>
      </section>

      <section className="bg-surface rounded-card-padding p-6 shadow-sm mb-8">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          views={['month']}
          onSelectEvent={(event) => handleDayClick(event.start)}
          eventPropGetter={eventStyleGetter}
          dayPropGetter={dayPropGetter}
        />
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-headline-md text-headline-md-mobile text-on-background">Upcoming exams</h2>
          <a className="text-primary font-label-sm hover:underline" href="#">
            See all
          </a>
        </div>
        <div className="space-y-4">
          {exams.map((exam) => (
            <div key={exam.id} className="bg-surface rounded-xl p-4 flex items-center gap-4 shadow-sm border border-surface-variant transition-transform active:scale-[0.98]">
              <div className={`w-14 h-14 ${exam.subjectColor} rounded-xl flex flex-col items-center justify-center text-on-background shrink-0`}>
                <span className="font-bold text-lg">{moment(exam.date).format('D')}</span>
                <span className="text-[10px] uppercase font-bold opacity-70">{moment(exam.date).format('MMM')}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-md text-base text-on-surface">{exam.subject} Test</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-5 h-5 rounded-full overflow-hidden bg-surface-container">
                    <img className="w-full h-full object-cover" src={exam.instructorAvatar} alt={exam.instructor} />
                  </div>
                  <span className="text-on-surface-variant text-label-sm font-label-sm">{exam.instructor}</span>
                </div>
              </div>
              <button className="text-outline hover:text-primary">
                <MoreVertical />
              </button>
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="p-4">
            <h2 className="font-headline-md text-headline-md-mobile text-on-background mb-4">Exams on {moment(selectedDate).format('MMMM D, YYYY')}</h2>
            <div className="space-y-4">
              {exams
                .filter((exam) => moment(exam.date).isSame(selectedDate, 'day'))
                .map((exam) => (
                  <div key={exam.id} className="bg-surface rounded-xl p-4 flex items-center gap-4 shadow-sm border border-surface-variant">
                    <div className={`w-14 h-14 ${exam.subjectColor} rounded-xl flex flex-col items-center justify-center text-on-background shrink-0`}>
                      <span className="font-bold text-lg">{moment(exam.date).format('D')}</span>
                      <span className="text-[10px] uppercase font-bold opacity-70">{moment(exam.date).format('MMM')}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-headline-md text-base text-on-surface">{exam.subject} Test</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-5 h-5 rounded-full overflow-hidden bg-surface-container">
                          <img className="w-full h-full object-cover" src={exam.instructorAvatar} alt={exam.instructor} />
                        </div>
                        <span className="text-on-surface-variant text-label-sm font-label-sm">{exam.instructor}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ExamsCalendar;
