import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full bg-blue-600 py-6">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r text-white bg-clip-text font-Kanit">
          BookIt
        </h1>
        <nav className="space-x-4 flex items-center">
          <button className="text-white hover:bg-gray-800 py-2 px-4 rounded">
            Check PNR Status
          </button>
          <button className="text-white hover:bg-gray-800 py-2 px-4 rounded">
            Live Train Status
          </button>
          <div className="flex items-center space-x-2 text-white hover:bg-gray-800 py-2 px-4 rounded cursor-pointer">
            <img src="../../assets/icons/accountIcon.svg" alt="Account Icon" className="w-6 h-6" />
            <span>My Account</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
