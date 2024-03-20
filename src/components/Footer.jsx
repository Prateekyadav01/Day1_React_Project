import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-sm">© 2024 Notes App. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-200">Privacy Policy</a>
          <a href="#" className="hover:text-gray-200">Terms of Service</a>
          <a href="#" className="hover:text-gray-200">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
