import {Icon} from "@iconify/react";
import IconText from "../Components/IconText";
import TextWithHover from "../Components/TextWithHover";
import PlaylistView from "../Components/PlaylistView";

const Home = () => {
    return ( 
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
        <div className="h-full w-4/5 bg-app-black ">
            <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
                <div className="w-1/2 flex h-full">
                    <div className="w-3/5 flex justify-around items-center">
                        <TextWithHover displayText={"Support"} />
                        <TextWithHover displayText={"Download"} />
                        <div className="h-1/2 border-r border-white"></div>
                    </div>
                    <div className="w-2/5 flex justify-around h-full items-center">
                        <TextWithHover displayText={"Sign up"} />
                        <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                            Log in
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <PlaylistView />
            </div>
        </div>

    </div>
    )
};

export default Home;