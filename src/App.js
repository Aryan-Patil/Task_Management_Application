import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/ForgotPassword';
import Dashboard from './Pages/Dashboard';
import { useState } from 'react';
function App() {
  const [name, setName] = useState('');
  let condition = false;
  if (name.length > 0) {
    condition = true;
  }
  console.log(condition);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn x={name} setX = {setName} />} />
          <Route path="/signup" element={
            <SignUp />
          } />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={
            condition ? <Dashboard name ={name} x={name} setX = {setName}/> : <Navigate to='/' />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
