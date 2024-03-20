import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-blue-500 h-16 px-4">
      <div className="flex items-center space-x-4">
        <h1 className="text-white text-xl font-bold">Notes</h1>
        <p className="text-white">This is a simple note app</p>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-white hover:text-gray-200">Home</a>
        <a href="#" className="text-white hover:text-gray-200">About</a>
        <a href="#" className="text-white hover:text-gray-200">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
