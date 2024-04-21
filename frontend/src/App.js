import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "./Routes/login";
import SignUpComponent from './Routes/signup';

function App() {
  return (
    <div className="w-screen h-screen font-poppins"> 
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginComponent/> } />
          <Route path="/register" element={<SignUpComponent/> } />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
