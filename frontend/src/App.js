
import './App.css';
import Expensepage from './Components/Expensepage';
import Incomepage from './Components/Incomepage';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

    <div className="App">
     <Sidebar/>
     
      <Routes>

        <Route exact path='/home' element={<Home/>}   />
        <Route exact path='/expensepage' element={< Expensepage />}></Route>
        <Route exact path='/incomepage' element={< Incomepage/>}></Route>
        
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
