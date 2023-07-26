
import './App.css';
import Expensepage from './Components/Expensepage';
import Incomepage from './Components/Incomepage';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from './Components/Signup';
import Login from './Components/Login';



function App() {
  return (
    <BrowserRouter>

      <div className="App flex">
        <Sidebar />

        <Routes>

          <Route exact path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
          <Route exact path='/expensepage' element={<ProtectedRoutes>< Expensepage /></ProtectedRoutes>}></Route>
          <Route exact path='/incomepage' element={<ProtectedRoutes>< Incomepage /></ProtectedRoutes>}></Route>
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export function ProtectedRoutes(props) {
  if (localStorage.getItem('user')) {
    return props.children
  }
  else {
    return <Navigate to="/login" />;
  }
}

export default App;
