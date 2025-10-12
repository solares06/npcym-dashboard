import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, icon, color, linkTo }) => {
  const colorVariants = {
    purple: 'bg-purple-100 text-purple-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    red: 'bg-red-100 text-red-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    blue: 'bg-blue-100 text-blue-600',
  };

  return (
    <Link to={linkTo} className="block group">
        <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-400 transition-all duration-300 h-full">
        <div className="flex items-start space-x-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorVariants[color]}`}>
            <span className="text-2xl font-bold">{icon}</span>
            </div>
            <div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
            </div>
        </div>
        </div>
    </Link>
  );
};

export default Card;