import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "./Routes/login";

function App() {
  return (
    <div className="w-screen h-screen font-poppins"> 
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginComponent/> } />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
