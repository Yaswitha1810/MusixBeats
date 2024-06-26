import {Icon} from "@iconify/react";
import IconText from "../Components/IconText";
import TextWithHover from "../Components/TextWithHover";

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
                    active
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
            <div className="content p-8 pt-0 overflow-auto">
                <PlaylistView titleText={"Focus"} cardsData={focusCardsData}/>
                <PlaylistView titleText={"Focus"} cardsData={focusCardsData}/>
                <PlaylistView titleText={"Focus"} cardsData={focusCardsData}/>
            </div>
        </div>

    </div>
    )
};

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

export default Home;