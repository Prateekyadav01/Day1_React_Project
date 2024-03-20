import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';

const HomeNotes = () => {
  const location = useLocation();
  const homeNotes = location.state ? location.state.homeNotes : "";

    let answer = localStorage.getItem('homeNotes') ? JSON.parse(localStorage.getItem('homeNotes')) : [];
    answer.push(homeNotes);
    localStorage.setItem('homeNotes', JSON.stringify(answer));

 
 

  return (
    <div className='bg-gray-500 py-8 min-h-[100vh]' >
      <div className='container mx-auto'>
        <h1 className="text-3xl font-bold mb-8 text-center">Home Notes</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {answer.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeNotes;
