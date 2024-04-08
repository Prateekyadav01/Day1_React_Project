import React, { useEffect, useState } from 'react';
import Card from "./Card";

const HomeNotes = ({ homeNotes }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem('Data') ? JSON.parse(localStorage.getItem('Data')) : [];
    setNotes(storedNotes);
  }, [homeNotes]);

  return (
    <div className='bg-gray-300 py-8 min-h-screen'>
      <div className='container mx-auto px-4'>
        <h1 className="text-3xl font-bold mb-8 text-center">Home Notes</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notes.length > 0 ? (
            notes.map((note, index) => <Card key={index} data={note} />)
          ) : (
            <p className="text-center text-gray-600">No notes found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeNotes;
