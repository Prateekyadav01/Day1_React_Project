import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomeNotes from "./components/Notes/HomeNotes";



const LazyHome = lazy(() => import("./components/Home"));
const LazyHomeNotes = lazy(()=> import("./components/Notes/HomeNotes"))


const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/homeNotes" element={<LazyHomeNotes />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
