import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Homepage from './Components/Homepage';
import Projects from './Components/Projects';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
function App() {
  Swal.fire("The Website is in development mode");
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div> 
  );
}

export default App;
