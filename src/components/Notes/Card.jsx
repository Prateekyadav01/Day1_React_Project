import React from 'react';

const Card = ({ item }) => {
  return (
    <div className='flex flex-wrap mx-2 my-2 border border-gray-300 rounded p-4 overflow-hidden bg-white text-gray-800 text-base font-medium'>
      <p className="text-sm overflow-y-auto max-h-full break-all">{item}</p>
    </div>
  );
};

export default Card;
