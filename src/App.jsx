import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomeNotes from "./components/Notes/HomeNotes";
import { useState } from "react";



const LazyHome = lazy(() => import("./components/Home"));
const LazyHomeNotes = lazy(()=> import("./components/Notes/HomeNotes"))


const App = () => {

  const [homeNotes, setHomeNotes] = useState("");
  const [classNotes, setClassNotes] = useState([]);
  const [OfficeNotes, setOfficeNotes] = useState([]);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LazyHome homeNotes={homeNotes} setHomeNotes={setHomeNotes} />} />
          <Route path="/homeNotes" element={<LazyHomeNotes  homeNotes={homeNotes} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
