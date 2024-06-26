import React, { lazy, useState } from 'react'
import HomeNotes from './Notes/HomeNotes';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';




const Navbar = lazy(() => import('./Navbar'));

const Home = ({homeNotes , setHomeNotes}) => {
  // const history = useHistory();
  const navigate = useNavigate();
  const [notesData , setNotesData] = useState("");

  const handlerHomeNotes = () => {
  // setNotesData(homeNotes);
  // console.log(notesData);
  //  res.push(notesData);
  //  localStorage.setItem('Data', JSON.stringify(res));
  if (homeNotes) {
    setNotesData(homeNotes);
    const newData = JSON.parse(localStorage.getItem('Data')) ? JSON.parse(localStorage.getItem('Data')) : [];
    newData.push(homeNotes);
    localStorage.setItem('Data', JSON.stringify(newData));
    navigate('/homeNotes');
  }
    
  }

  return (
    <div className='fle'>
      <Navbar />
      <div className='flex flex-row justify-evenly items-center'>
        <div className="w-1/3 mx-2">
          <h1 className="text-lg font-bold mb-2">Home Notes</h1>
          <textarea className="w-full h-[40vh] border border-gray-300 rounded-md p-2" onChange={(e) => { setHomeNotes(e.target.value) }}></textarea>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handlerHomeNotes} >Submit</button>
        </div>

        <div className="w-1/3 mx-2">
          <h1 className="text-lg font-bold mb-2">Class Notes</h1>
          <textarea className="w-full  h-[40vh] border border-gray-300 rounded-md p-2"></textarea>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
        </div>

        <div className="w-1/3 mx-2">
          <h1 className="text-lg font-bold mb-2">OfficeNotes</h1>
          <textarea className="w-full h-[40vh] border border-gray-300 rounded-md p-2"></textarea>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
        </div>
      </div>
     
    </div>
  );
};

export default Home
