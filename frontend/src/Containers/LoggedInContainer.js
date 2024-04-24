import {useContext, useState, useEffect} from "react";
import {Icon} from "@iconify/react";
import IconText from "../Components/IconText";
import TextWithHover from "../Components/TextWithHover";
import { Howl, Howler } from 'howler';
import songContext from "../contexts/songContext";



const LoggedInContainer = ({children}) => {
    const [soundPlayed,setSoundPlayed]=useState(null);
    const [isPaused, setIsPaused] =useState(true);

    const {currentSong, setCurrentSong} = useContext(songContext);

    useEffect(()=>{
       if(!currentSong){
          return;
       }
       changeSong(currentSong.track);
    },[currentSong]);

    const playSound = ()=>{
       if(!soundPlayed){
        return;
       }
       soundPlayed.play();
    }
    const changeSong =(songSrc) =>{
        if(soundPlayed){
            soundPlayed.stop();
        }
        let sound = new Howl({
            src:[songSrc],
            html5:true,
        });
        setSoundPlayed(sound);
        sound.play();
        setIsPaused(false);
    };
    const pauseSound =() => {
        soundPlayed.pause();
    };
    const togglePlayPause = () => {
       if (isPaused){
        playSound();
        
        setIsPaused(false);
       }else{
        pauseSound();
        setIsPaused(true);
       }
    };

return (         
<div className="h-full w-full bg-app-black">
    <div className={'${currentSong ? "h-9/10" : "h-full"} w-full flex'}>
        
        {/* //background - black */}
        {/* SideBar */}
        <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
            <div className="logoDiv p-6">
                <h1 className="text-white text-xl font-semibold p-3 items-center justify-center">MusixBeats</h1>
            </div>
            <div className="py-5">
                <IconText 
                    iconName={"ic:round-home"} 
                    displayText={"Home"}
                    active
                    targetLink={"/home"}
                />
                 <IconText
                    iconName={"mingcute:search-line"} 
                    displayText={"Search"}
                />
                <IconText 
                    iconName={"lucide:library-big"} 
                    displayText={"Library"}
                />
                <IconText 
                    iconName={"material-symbols:library-music-sharp"} 
                    displayText={"My Music"}
                    targetLink="/myMusic"
                />
            </div>
            <div className="pt-5">
                <IconText 
                    iconName={"material-symbols-light:add-box"} 
                    displayText={"Create Playlist"}
                />
                <IconText 
                    iconName={"iconoir:heart-solid"} 
                    displayText={"Liked Songs"}
                />
            </div>
            <div className="px-5">
                <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                    <Icon icon="fontisto:earth" />
                    <div className="ml-2 text-sm font-semibold">English</div>
                </div>
            </div>
            <div className="w-full h-1/10 bg pink-400"></div>
        </div>

        {/* Main Content */}
        <div className="h-full w-4/5 bg-app-black overflow-auto">
            <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
                <div className="w-1/2 flex h-full">
                    <div className="w-2/3 flex justify-around items-center">
                        <TextWithHover displayText={"Support"} />
                        <TextWithHover displayText={"Download"} />
                        <div className="h-1/2 border-r border-white"></div>
                    </div>
                    <div className="w-1/3 flex justify-around h-full items-center">
                        <TextWithHover displayText={"Upload Song"} />
                        <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                            ACC
                        </div>
                    </div>
                </div>
            </div>
            <div className="content p-8 pt-0 overflow-auto">
                {/* <PlaylistView titleText={"Focus"} cardsData={focusCardsData}/>
                <PlaylistView titleText={"Focus"} cardsData={focusCardsData}/>
                <PlaylistView titleText={"Focus"} cardsData={focusCardsData}/> */}
                {children}
            </div>
        </div>
    </div>
    
      {  currentSong && (
    
    <div className="w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4">
        <div className="w-1/4 flex items-center">
            <img
                src={currentSong.thumbnail}
                alt="currentSongThumbail"
                className="h-14 w-14 rounded"
            />
            <div className="pl-4">
                <div className="text-sm hover:underline cursor-pointer">
                    {currentSong.name}
                </div>
                <div className="text-xs text-gray-500 hover:underline cursor-pointer">
                    {currentSong.artist.userName}
                </div>
            </div>
        </div>
        <div className="w-1/3 flex justify-center  h-full flex-col items-center ">
            <div className="flex w-1/2 justify-between  items-center ">
                <Icon 
                    icon="ph:shuffle-fill"
                    fontSize={30}
                    className="cursor-pointer text-gray-500  hover:text-white"
                />
                <Icon 
                    icon="mdi:skip-previous-outline"
                    fontSize={30}
                    className="cursor-pointer text-gray-500  hover:text-white"
                />
                <Icon 
                    icon={isPaused ? "ic:baseline-play-circle" : "ic:baseline-pause-circle"}
                    fontSize={50}
                    className="cursor-pointer text-gray-500  hover:text-white"
                    onClick={togglePlayPause} 
                />
                <Icon 
                    icon="mdi:skip-next-outline"
                    fontSize={30}
                    className="cursor-pointer text-gray-500  hover:text-white"
                />
                <Icon 
                    icon="ic:twotone-repeat"
                    fontSize={30}
                    className="cursor-pointer text-gray-500  hover:text-white"
                />
            </div>
        </div>
        <div className="w-1/4 flex justify-end">Time</div>
    </div >    
)}
</div>
)
};



export default LoggedInContainer;