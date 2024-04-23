import './App.css';
import {useCookies} from "react-cookie";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LoginComponent from "./Routes/login";
import SignUpComponent from "./Routes/signup";
import Home from "./Routes/Home"

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  return (
    <div className="w-screen h-screen font-poppins"> 
      <BrowserRouter>
        {cookie.token? ( 
          <Routes>
            <Route path="*" element={<Navigate to="/home"/>}/>
            <Route path='/home' element={<Home/>} />
          </Routes>
        ) : (
          <Routes>
            <Route path="*" element={<Navigate to="/home"/>}/>
            <Route path="/login" element={<LoginComponent/> } />
            <Route path="/signup" element={<SignUpComponent/> } />
            <Route path="/home" element={<Home/>} />
          </Routes>
        )};
      </BrowserRouter> 
    </div>
  );
}

export default App;
