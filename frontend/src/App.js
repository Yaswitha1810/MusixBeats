import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "./Routes/login";
import SignUpComponent from "./Routes/signup";
import Home from "./Routes/Home"

function App() {
  return (
    <div className="w-screen h-screen font-poppins"> 
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginComponent/> } />
          <Route path="/signup" element={<SignUpComponent/> } />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
