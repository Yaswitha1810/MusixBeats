import {useState, useEffect} from "react";
import {Icon} from "@iconify/react";
import IconText from "../Components/IconText";
import TextWithHover from "../Components/TextWithHover";
import {makeAuthenticatedGETRequest} from "../Util/serverHelper"
import SingleSongCard from "../Components/SingleSongCard";
import { Howl, Howler } from 'howler';
import LoggedInContainer from '../Containers/LoggedInContainer';

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

    return (
        <LoggedInContainer curActiveScreen="myMusic">
            <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">
                My Songs
            </div>
            <div className="space-y-3 overflow-auto">
                {songData.map((item) => {
                    return <SingleSongCard info={item} playSound={() => {}} />;
                })}
            </div>
        </LoggedInContainer>
    );
};


export default MyMusicComponent;