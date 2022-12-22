import React from "react";
import SignIn from "../../Components/Sign-in/sign-in.component";
import SignUp from "../../Components/Sign-up/sign-up.component";

const LoginPage = () => {
    return(
        <div class = "flex w-full h-full flex-row justify-center items-center">
            <div class = "w-1/2 h-5/6 border border-black">
                <SignIn/>
            </div>
            <div class = "w-1/2 h-5/6 border border-black">
                <SignUp/>
            </div>
        </div>
    );
}

export default LoginPage;