import {useState, useEffect} from "react";
import {Icon} from "@iconify/react";
import IconText from "../Components/IconText";
import TextWithHover from "../Components/TextWithHover";
import {makeAuthenticatedGETRequest} from "../Util/serverHelper"
import SingleSongCard from "../Components/SingleSongCard";


const MyMusicComponent = () => {
    const [songData, setSongData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/song/get/mysongs"
            );
            setSongData(response.data);
        };
        getData();
    }, []);
    
    
   

    
       
          
       
    return(
    <div className="h-full w-full flex">
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
                    active
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
           
                    {songData.map((item) => {
                        return <SingleSongCard info={item} playSound={() => {}} />;
                    })}
            </div>
        </div>

    </div>
    )
};

export default MyMusicComponent;