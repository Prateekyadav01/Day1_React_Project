import React, { useEffect, useState } from 'react';

const Card = ({ data }) => {
  const [storedData, setStoredData] = useState(JSON.parse(localStorage.getItem('Data')) || []);

 

  const handleEditData = () => {
    const newData = storedData.filter(item => item !== data);
    console.log(newData);
    setStoredData([...newData]);
    localStorage.setItem('Data', JSON.stringify(newData));
  };
  
  return (
    <div className='rounded-lg overflow-hidden shadow-md bg-white border border-gray-200'>
      <div className='p-4'>
        <p className="text-gray-800 text-lg">{storedData}</p>
      </div>
      <div className="flex justify-end px-4 pb-4">
        <button onClick={handleEditData} className="mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Edit
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
