import React from "react";
import SignIn from "../../Components/Sign-in/sign-in.component";
import SignUp from "../../Components/Sign-up/sign-up.component";

const LoginPage = () => {
    return(
        <div class = "flex w-full h-full sm:flex-row flex-col justify-center items-center">
            <div class = "sm:w-1/2 w-full sm:h-5/6 h-1/2 border border-black">
                <SignIn/>
            </div>
            <div class = "sm:w-1/2 sm:h-5/6 h-1/2 w-full border border-black">
                <SignUp/>
            </div>
        </div>
    );
}

export default LoginPage;