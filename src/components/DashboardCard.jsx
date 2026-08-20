import React from 'react';

const DashboardCard = ({ title, teacher, imageUrl, bgColor, icon }) => {
  return (
    <div className={`rounded-[32px] p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden active:scale-95 transition-transform ${bgColor}`}>
      <div className="flex justify-between items-start">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
          <span className="material-symbols-outlined text-white" data-icon={icon}>{icon}</span>
        </div>
      </div>
      <div>
        <h3 className="text-white font-headline-md text-headline-md font-bold">{title}</h3>
        <p className="text-white/80 font-label-sm text-[12px] mt-1">Teacher: {teacher}</p>
        <div className="mt-4 w-8 h-8 rounded-full border-2 border-white/30 overflow-hidden bg-white/20">
          <img className="w-full h-full object-cover" src={imageUrl} alt={`${teacher}'s profile`} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
