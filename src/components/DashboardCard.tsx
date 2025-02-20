import React from 'react';
import { MoreVertical } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  image: string;
}

const DashboardCard = ({ title, image }: DashboardCardProps) => {
  return (
    <div className="bg-[#001242] rounded-xl p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-medium">{title}</h3>
        <button className="p-1">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
      <div className="flex justify-center">
        <img src={image} alt={title} className="w-40 h-40 object-contain" />
      </div>
    </div>
  );
}

export default DashboardCard;