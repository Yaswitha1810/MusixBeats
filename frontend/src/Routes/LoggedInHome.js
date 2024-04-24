import {useState, useEffect} from "react";
import {Icon} from "@iconify/react";
import IconText from "../Components/IconText";
import TextWithHover from "../Components/TextWithHover";
import { Howl, Howler } from 'howler';
import LoggedInContainer from '../Containers/LoggedInContainer';
const focusCardsData = [
    {
        title: "Peaceful Piano",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDmnqtYzfGEr69dI-UboEhh3BM_fdZvpX19Ij1D7z-y2FOHGcTAryEZ4WnDHK1CM4m9c&usqp=CAU",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDmnqtYzfGEr69dI-UboEhh3BM_fdZvpX19Ij1D7z-y2FOHGcTAryEZ4WnDHK1CM4m9c&usqp=CAU",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDmnqtYzfGEr69dI-UboEhh3BM_fdZvpX19Ij1D7z-y2FOHGcTAryEZ4WnDHK1CM4m9c&usqp=CAU",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDmnqtYzfGEr69dI-UboEhh3BM_fdZvpX19Ij1D7z-y2FOHGcTAryEZ4WnDHK1CM4m9c&usqp=CAU",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDmnqtYzfGEr69dI-UboEhh3BM_fdZvpX19Ij1D7z-y2FOHGcTAryEZ4WnDHK1CM4m9c&usqp=CAU",
    },
];

const LoggedInHome = ()=>{
    return(
        <LoggedInContainer>
           <PlaylistView titleText={"Focus"} cardsData={focusCardsData}/>
                <PlaylistView titleText={"Focus"} cardsData={focusCardsData}/>
                <PlaylistView titleText={"Focus"} cardsData={focusCardsData}/>
        </LoggedInContainer>
    )
};

// const LoggedInHome = () => {
//     const [soundPlayed,setSoundPlayed]=useState(null);
//     const [isPaused, setIsPaused] =useState(true);
//     const playSound =(songSrc) =>{
//         if(soundPlayed){
//             soundPlayed.stop();
//         }
//         let sound = new Howl({
//             src:[songSrc],
//             html5:true,
//         });
//         setSoundPlayed(sound);
//         sound.play();
//     };
//     const pauseSound =() => {
//         soundPlayed.pause();
//     };
//     const togglePlayPause = () => {
//        if (isPaused){
//         playSound();
//         setIsPaused(false);
//        }
       
//     else{
//         pauseSound();
//         setIsPaused(true);
//        }

//     };

//     return ( 
        
//     <div className="h-full w-full bg-app-black">
//         <div className="h-9/10 w-full flex">
        
//         {/* //background - black */}
//         {/*// SideBar */}
//         <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
//             <div className="logoDiv p-6">
//                 <h1 className="text-white text-xl font-semibold p-3 items-center justify-center">MusixBeats</h1>
//             </div>
//             <div className="py-5">
//                 <IconText 
//                     iconName={"ic:round-home"} 
//                     displayText={"Home"}
                    
//                 />
//                 <IconText 
//                     iconName={"mingcute:search-line"} 
//                     displayText={"Search"}
//                 />
//                 <IconText 
//                     iconName={"lucide:library-big"} 
//                     displayText={"Library"}
//                 />
//                 <IconText 
//                     iconName={"material-symbols:library-music-sharp"} 
//                     displayText={"My Music"}
//                 />
//             </div>
//             <div className="pt-5">
//                 <IconText 
//                     iconName={"material-symbols-light:add-box"} 
//                     displayText={"Create Playlist"}
//                 />
//                 <IconText 
//                     iconName={"iconoir:heart-solid"} 
//                     displayText={"Liked Songs"}
//                 />
//             </div>
//             <div className="px-5">
//                 <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
//                     <Icon icon="fontisto:earth" />
//                     <div className="ml-2 text-sm font-semibold">English</div>
//                 </div>
//             </div>
//             <div className="w-full h-1/10 bg pink-400"></div>
//         </div>

//         {// Main Content }
//         <div className="h-full w-4/5 bg-app-black overflow-auto">
//             <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
//                 <div className="w-1/2 flex h-full">
//                     <div className="w-2/3 flex justify-around items-center">
//                         <TextWithHover displayText={"Support"} />
//                         <TextWithHover displayText={"Download"} />
//                         <div className="h-1/2 border-r border-white"></div>
//                     </div>
//                     <div className="w-1/3 flex justify-around h-full items-center">
//                         <TextWithHover displayText={"Upload Song"} />
//                         <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
//                             ACC
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="content p-8 pt-0 overflow-auto">
//                 <PlaylistView titleText={"Focus"} cardsData={focusCardsData}/>
//                 <PlaylistView titleText={"Focus"} cardsData={focusCardsData}/>
//                 <PlaylistView titleText={"Focus"} cardsData={focusCardsData}/>
//             </div>
//         </div>
//         </div>
//         <div className="w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4">
//         <img
//         src="https://img.freepik.com/free-photo/abstract-watercolor-guitar-exploding-with-colorful-motion-generated-by-ai_188544-19725.jpg"
//         alt="currentSongThumbail"
//         className="h-14 w-14 rounded"
//         />
//         <div className="pl-4">
//             <div className="text-sm hover:underline cursor-pointer">curtains</div>
//             <div className="text-xs text-gray-500 hover:underline cursor-pointer">ed see</div>
//         </div>
//         <div className="w-1/3 flex justify-center  h-full flex-col items-center ">
//             <div className="flex w-1/2 justify between  items-center ">
               
//                 <Icon icon="ph:shuffle-fill"
//                 fontSize={30}
//                 className="cursor-pointer text-gray-500  hover:text-white"/>
//                 <Icon icon="mdi:skip-previous-outline"
//                 fontSize={30}
//                 className="cursor-pointer text-gray-500  hover:text-white"/>
//                 <Icon icon="ic:baseline-pause-circle"
//                 fontSize={50}
//                 className="cursor-pointer text-gray-500  hover:text-white"
//                 onClick={togglePlayPause} 
//                 />
//                 <Icon icon="mdi:skip-next-outline"
//                 fontSize={30}
//                 className="cursor-pointer text-gray-500  hover:text-white"/>
//                 <Icon icon="ic:twotone-repeat"
//                 fontSize={30}
//                 className="cursor-pointer text-gray-500  hover:text-white"/>
//             </div>
//         </div>
//         <div className="w-1/3 flex justify-center"></div>
//         </div >
        
//     </div>
//     )
// };

const PlaylistView = ({titleText, cardsData}) =>{
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">{titleText}</div>
            <div className="w-full flex justify-between space-x-4">
                {
                    cardsData.map((item)=>{
                        return(
                            <Card 
                                title={item.title}
                                description={item.description}
                                imgUrl={item.imgUrl}
                            />
                        ) ;
                    })
                }
            </div>
        </div>
    );
};

const Card = ({title, description, imgUrl}) => {
    return(
        <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg ">
            <div className="pb-4 pt-2">
                <img 
                    className="w-full rounded-md" 
                    src={imgUrl}
                    alt="pic"
                />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};

export default LoggedInHome;