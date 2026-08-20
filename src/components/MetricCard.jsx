import React from 'react';
import { Users, GraduationCap, DollarSign, BookOpen } from 'lucide-react';

const MetricCard = ({ title, value, icon, color }) => {
  const Icon = { Users, GraduationCap, DollarSign, BookOpen }[icon];
  return (
    <div className={`p-4 rounded-lg shadow-md bg-white ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <Icon className="w-8 h-8 text-gray-500" />
      </div>
    </div>
  );
};

export default MetricCard;
