import React from 'react';

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Logo = () => (
    <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">
            IDEAS
        </div>
        <div>
            <h1 className="text-lg font-semibold text-gray-700">NPCYF</h1>
            <p className="text-xs text-gray-500">National Platform for Crop Yield Forecasting</p>
        </div>
    </div>
);

const Header = () => {
  return (
    <header className="bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="flex items-center">
            <div className="p-2 bg-gray-100 rounded-full">
              <UserIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;