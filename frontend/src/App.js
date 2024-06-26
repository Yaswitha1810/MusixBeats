import './App.css';
import {useState} from "react";
import {useCookies} from "react-cookie";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LoginComponent from "./Routes/login";
import SignUpComponent from "./Routes/signup";
import Home from "./Routes/Home"
import LoggedInHome from './Routes/LoggedInHome';
import UploadSongComponent from './Routes/UploadSong';
import SearchPage from "./Routes/SearchPage";
import songContext from './contexts/songContext';
import MyMusicComponent from "./Routes/UserMusic";
import Library from "./Routes/Library";

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [soundPlayed,setSoundPlayed]=useState(null);
  const [isPaused, setIsPaused] =useState(true);
  const [cookie, setCookie] = useCookies(["token"]);
  return (
    <div className="w-screen h-screen font-poppins"> 
      <BrowserRouter>
        {cookie.token? ( 
          <songContext.Provider value={{currentSong,setCurrentSong, soundPlayed, setSoundPlayed, isPaused, setIsPaused}}>
            <Routes>
              <Route path = "/library" element = {<Library/>}/>
              <Route path="*" element={<Navigate to="/home"/>}/>
              <Route path='/home' element={<LoggedInHome/>} />
              <Route path="/login" element={<LoginComponent/> } />
              <Route path="/signup" element={<SignUpComponent/> } />
              <Route path="/uploadSong" element={<UploadSongComponent/>}/>
              <Route path="/myMusic" element={<MyMusicComponent/>}/>
              <Route path="/search" element={<SearchPage/>}/>
            </Routes>
          </songContext.Provider>
        ) : (
          <Routes>
            <Route path="*" element={<Navigate to="/home"/>}/>
            <Route path="/login" element={<LoginComponent/> } />
            <Route path="/signup" element={<SignUpComponent/> } />
            <Route path="/home" element={<Home/>} />
          </Routes>
        )}
      </BrowserRouter> 
    </div>
  );
}

export default App;
