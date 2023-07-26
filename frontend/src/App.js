
import './App.css';
import Expensepage from './Components/Expensepage';
import Incomepage from './Components/Incomepage';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Components/Signup';
import Login from './Components/Login';



function App() {
  return (
    <BrowserRouter>

    <div className="App flex">
     <Sidebar/>
     
      <Routes>

        <Route exact path='/' element={<Home/>}   />
        <Route exact path='/expensepage' element={< Expensepage />}></Route>
        <Route exact path='/incomepage' element={< Incomepage/>}></Route>
        <Route exact path = '/signup' element={<Signup/>}/>
        <Route exact path = '/login' element={<Login/>}/>
        
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
