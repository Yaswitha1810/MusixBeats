import { Icon } from "@iconify/react/dist/iconify.js";
import LoggedInContainer from "../Containers/LoggedInContainer";
import { useState } from "react";
import { makeAuthenticatedGETRequest } from "../Util/serverHelper";
import SingleSongCard from "../Components/SingleSongCard";

const SearchPage = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [previousSearch, SetPreviousSearch] = useState("");
    const [songData, setSongData] = useState([]);

    const searchSong = async() => {
        const response = await makeAuthenticatedGETRequest(
            "/song/get/songname/" + searchText
        );
        setSongData(response.data);
        setSearchText("");
    }

    return(
        <LoggedInContainer curActiveScreen={"search"}>
            <div className="w-full py-6">
                <div 
                    className = {`w-1/3 p-3 text-sm rounded-full bg-gray-800 px-5 flex text-white space-x-3 items-center ${
                        isInputFocused ? "border border-white" : ""
                    }`}
                >
                    <Icon icon="ic:outline-search" className="text-lg"/>
                    <input
                        type="text"
                        placeholder="What do you want to listen to?"
                        className="w-full text-white bg-gray-800 focus:outline-none"
                        onFocus={()=>{
                            setIsInputFocused(true);
                        }}
                        onBlur={()=>{
                            setIsInputFocused(false);
                        }}
                        value={searchText}
                        onChange={(e)=>{
                            setSearchText(e.target.value);
                        }}

                        onKeyDown={(e)=>{
                            if(e.key === "Enter"){
                                SetPreviousSearch(searchText);
                                searchSong();
                            }
                        }}
                    />
                </div>
                {   
                    songData.length > 0 ?
                    <div className="pt-10 space-y-3">
                        <div className="text-white">
                            Search results for key "<span className="font-bold">{previousSearch}</span>" are: 
                        </div>
                        {songData.map((item) => {
                            return(
                                <SingleSongCard
                                    info={item}
                                    key = {JSON.stringify(item)}
                                    playSound={()=>{}}
                                />
                            );
                        })}
                    </div> :
                    <div className="text-white"> 
                        Nothing to show here. Please try modifying search key
                    </div>
                }
            </div>
        </LoggedInContainer>
    )
};

export default SearchPage;