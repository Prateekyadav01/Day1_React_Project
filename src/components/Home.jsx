import React, { lazy, useState } from 'react'
import HomeNotes from './Notes/HomeNotes';
import { useNavigate } from 'react-router-dom';




const Navbar = lazy(() => import('./Navbar'));

const Home = () => {
  // const history = useHistory();
  const navigate = useNavigate();
  const [homeNotes , setHomeNotes] = useState("");
  const [classNotes, setClassNotes] = useState([]);
  const [OfficeNotes,setOfficeNotes] = useState([]);

  const handlerHomeNotes = () => {
    navigate('/homeNotes', {
      state: {
        homeNotes: homeNotes
      }
    });
    homeNotes="";
    setHomeNotes(homeNotes);
  }
  
  return (
    <div>
      <Navbar />

      <div className='flex flex-row justify-evenly items-center'>
        <div>
          <h1>Home Notes</h1>
          <textarea onChange={(e)=>{setHomeNotes(e.target.value)}}></textarea>       
          <button onClick={handlerHomeNotes} >Submit</button>
        </div>

        <div>
          <h1>Class Notes</h1>
          <textarea ></textarea>
          <button >Submit</button>
        </div>

        <div>
          <h1>OfficeNotes</h1>
          <textarea ></textarea>
          <button o>Submit</button>

        </div>
      </div>
      </div>
      );
};

export default Home
