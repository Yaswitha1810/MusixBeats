import React from "react";
import TextInput from "../Components/TextInput";
import PasswordInput from "../Components/PasswordInput";

const SignUpComponent = () =>{
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center"> 
                {/* <Icon icon="emojione:musical-score" /> */}
                <p>MusixBeats</p>
            </div>
            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                
                <div className="font-bold mb-4 text-2xl">
                    Sign up for free to start listening.
                </div>
                
                <TextInput
                    label="Email address"
                    placeholder="Enter your email"
                    className="my-6"
                    // value={email}
                    // setValue={setEmail}
                />
                <TextInput
                    label="Confirm Email Address"
                    placeholder=" Enter your email again"
                    className="mb-6"
                />              
                <PasswordInput
                    label="Create Password"
                    placeholder="Enter strong password here"
                    // value={password}
                    // setValue={setPassword}
                />
                <TextInput
                    label="What should we call you?"
                    placeholder=" Enter a profile name"
                    className="mb-6"
                />
                <div className=" w-full flex items-center justify-center my-8">
                    <button
                        className="bg-green-400 font-semibold p-3 px-10 rounded-full"
                        // onClick={(e) => {
                        //     e.preventDefault();
                        //     login();
                        // }}
                    >
                        Sign Up
                    </button>
                </div>

                <div className="w-full border border-solid border-gray-300"></div>
                <div className="my-6 font-semibold text-lg">
                    Already have an account?
                </div>
                <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
                    Login
                    {/* <Link to="/login">Log In FOR SPOTIFY</Link> */}
                </div>
            </div>
        </div>
        
    )
};

export default SignUpComponent;