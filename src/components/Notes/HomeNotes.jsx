import React, { useEffect, useState } from 'react';

import Card from './Card';

const HomeNotes = ({ homeNotes }) => {


  console.log(homeNotes);

  useEffect(() => {
    handleTheLocalStorage();
  }, [])

  const [answer, setAnswer] = useState([]);
  const handleTheLocalStorage = () => {
    let temp = localStorage.getItem('homeNotes') ? JSON.parse(localStorage.getItem('homeNotes')) : [];
    setAnswer(temp);
    console.log(answer)
  };


  return (
    <div className='bg-gray-500 py-8 min-h-[100vh]' >
      <div className='container mx-auto'>
        <h1 className="text-3xl font-bold mb-8 text-center">Home Notes</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {answer && answer.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeNotes;
