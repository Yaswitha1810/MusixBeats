import React from "react";
import "./login.css";
import "./logo.jpg";
import TextInput from "../Components/TextInput";
import PasswordInput from "../Components/PasswordInput";

// export function EmojioneMusicalScore(props) {
// 	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 64 64" {...props}><path fill="#bacad3" d="M64 21.3v-1.9C45.5 11.6 27 24.1 8.5 23v-7.4C27 14.7 43.9-.5 64 5.4c-.1-.6.1-1.3 0-1.9c-20.2-6.6-37.1 9.9-55.5 10.9c-6.1.6-5.6.5-8.5.9v33l8.5.9C25.8 55 48.2 46.9 64 59.8c.1-.6-.1-1.3 0-1.9c-15.8-13.7-38.2-3.9-55.5-10v-5.7c18.5 3.3 37-8 55.4 2v-1.9C45.5 31.4 27 44.3 8.5 41v-7.3c18.5 3.1 37-13.2 55.4-.9v-1.9c-18.5-12.1-37 4.3-55.4 1.4v-7.6c18.5 1.5 37-12.3 55.5-3.4"></path><path fill="#333" d="M40.7 41.9c5.4-2.4 9-8.6 7-14.2c-1.4-5.2-8.5-7.4-13.2-4.7c-.3-1.1-.7-2.3-1-3.4c0-.2-.1-.3-.1-.5c-.1-.2.9-1.1 1.1-1.3c1-1.2 2-2.4 2.8-3.6c1.5-2.2 3-4.8 2.5-7.5c-.4-2.5-2.4-4.6-5.2-4.7c-2.4-.1-4.7 1.3-5.9 3.2c-1.4 2.2-1.1 4.5-.4 6.9c.5 1.4.9 2.9 1.3 4.4c.2.5.3 1.1.5 1.6c0 .1.1.5.2.5c-.3.5-1 1.1-1.4 1.5c-1.7 1.7-3.6 3.4-4.7 5.5c-1.1 2-1.6 4.3-1.4 6.6c.4 4.5 3.6 8.6 8.1 10.2c2.1.8 4.4.9 6.6.6c.8 2.5 1.4 5 2.2 7.5c.7 2.1 2.2 4.7 1.5 7c-.6 2-2.9 3.3-5.1 3c2.6-.8 3.8-3.6 2.3-5.8c-1.3-1.8-4.1-2.3-5.9-1c-3.8 2.8-.2 7.6 3.5 8.3c2.4.4 4.9-.6 6.4-2.4c1.6-2.1 1.4-4.3.8-6.7c-.7-2.6-1.5-5.2-2.2-7.8c-.2-.6-.3-1.1-.5-1.7l-.3-.9c-.1-.5.1-.4.5-.6M45 28.7c1.3 4.4-1.3 9.2-5.7 11L36 28.6c-.3-.9-.5-1.8-.8-2.7c-.2-.7-.5-.9.2-1.3c4-1.8 8.5.3 9.6 4.1m-13.2-23c.9-.8 2.5-1.4 3.7-.9c1.2.6 1.7 2 1.6 3.2c-.1 3.1-2.7 5.8-4.7 8.1c-.4-1.5-.9-3-1.3-4.6c-.6-2-1.2-4.2.7-5.8m.4 19.1c.2.4-.6 1.2-.8 1.6c-.3.6-.5 1.2-.7 1.9c-.3 1.3-.2 2.7.2 4c.1.4.7.5 1 .1c.2-.4-.1-1.3-.1-1.8c0-1.3.3-2.5 1.1-3.6c1.3 4.5 2.6 8.9 3.9 13.4c-4.3.6-8.6-1.8-10.4-5.5c-1.1-2.3-1.2-5-.1-7.3c1.1-2.4 3.2-4.2 5-6c.2 1 .4 2.1.9 3.2"></path></svg>);
// }

const LoginComponent = () =>{
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center"> 
                {/* <Icon icon="emojione:musical-score" /> */}
                <p>MusixBeats</p>
            </div>
            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                
                <div className="font-bold mb-4">
                    To continue, log in to Spotify.
                </div>
                
                <TextInput
                    label="Email address or username"
                    placeholder="Email address or username"
                    className="my-6"
                    // value={email}
                    // setValue={setEmail}
                />
                
                <PasswordInput
                    label="Password"
                    placeholder="Password"
                    // value={password}
                    // setValue={setPassword}
                />
                <div className=" w-full flex items-center justify-end my-8">
                    <button
                        className="bg-green-400 font-semibold p-3 px-10 rounded-full"
                        // onClick={(e) => {
                        //     e.preventDefault();
                        //     login();
                        // }}
                    >
                        LOG IN
                    </button>
                </div>

                <div className="w-full border border-solid border-gray-300"></div>
                <div className="my-6 font-semibold text-lg">
                    Don't have an account?
                </div>
                <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
                    SIGN UP FOR MUSIXBEATS
                    {/* <Link to="/signup">SIGN UP FOR SPOTIFY</Link> */}
                </div>
            </div>
        </div>
        
    )
};

export default LoginComponent;