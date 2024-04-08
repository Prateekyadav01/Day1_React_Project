import React, { useEffect, useState } from 'react';
import Card from "./Card"

const HomeNotes = ({ homeNotes }) => {

  const [notes , setNodes] = useState([]);

  return (
    <div className='bg-gray-500 py-8 min-h-[100vh]'>
      <div className='container mx-auto'>
        <h1 className="text-3xl font-bold mb-8 text-center">Home Notes</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">


          <p>{notes}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeNotes;
