export default function ExamEventModal({ exam, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-surface rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-headline-md text-headline-md-mobile text-on-background">{exam.subject}</h2>
          <button onClick={onClose} className="text-outline hover:text-primary">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-subject-yellow rounded-xl flex flex-col items-center justify-center text-on-background shrink-0">
              <span className="font-bold text-lg">{new Date(exam.date).getDate()}</span>
              <span className="text-[10px] uppercase font-bold opacity-70">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][new Date(exam.date).getMonth()]}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-headline-md text-base text-on-surface">Exam Details</h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-5 h-5 rounded-full overflow-hidden bg-surface-container">
                  <img className="w-full h-full object-cover" src={exam.instructorAvatar} alt={exam.instructor} />
                </div>
                <span className="text-on-surface-variant text-label-sm font-label-sm">{exam.instructor}</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-on-surface-variant text-label-sm font-label-sm">Date</span>
              <span className="text-on-surface text-label-sm font-label-sm">{new Date(exam.date).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant text-label-sm font-label-sm">Time</span>
              <span className="text-on-surface text-label-sm font-label-sm">09:00 AM - 11:00 AM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-on-surface-variant text-label-sm font-label-sm">Location</span>
              <span className="text-on-surface text-label-sm font-label-sm">Room 205</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-3 bg-primary text-on-primary rounded-lg font-label-sm font-bold hover:opacity-90 transition-opacity active:scale-[0.98] transition-transform">
              <span className="material-symbols-outlined mr-2">notifications</span>
              Remind me
            </button>
            <button className="flex-1 py-3 bg-surface text-on-surface rounded-lg font-label-sm font-bold hover:opacity-90 transition-opacity active:scale-[0.98] transition-transform border border-outline-variant">
              <span className="material-symbols-outlined mr-2">calendar_month</span>
              Add to calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
