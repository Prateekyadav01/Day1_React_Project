// HomeNotes.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';


const HomeNotes = () => {
  const location = useLocation();
  
  const homeNotes = location.state ? location.state.homeNotes : "";
  
  let answer = localStorage.getItem('homeNotes') ? JSON.parse(localStorage.getItem('homeNotes')) : [];
  answer.push(homeNotes);
  console.log(answer);
  localStorage.setItem('homeNotes', JSON.stringify(answer));

  return (
    <div className='flex flex-col'>
     <h1>Home Notes</h1>
     <div>
       {
        answer.map((item, index) => (
          <Card item={item} key={index}/>
        ))
      }
     </div>
    </div>
  );
};

export default HomeNotes;
