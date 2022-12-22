import React from "react";
import { useState } from "react";
import FormInput from "../Form-input/form-input.component";

const SignIn = () => {

    const [user, setUser] = useState({
        email : "",
        password : "",
    })

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setUser(prev => {
            return {...prev, [name] : value}
        })
    }

    const handleSubmit = (e) => {

    }

    return(
        <div class = "flex w-full h-full flex-col justify-center items-center">
            <h1 class = "font-bold text-4xl">Have an Account?</h1>
            <form action="" onSubmit={handleSubmit} class = "w-2/5">
                <FormInput name = "email" label = "Email" type = "text" value = {user.email} handleChange={handleChange} />
                <FormInput name = "password" label = "Password" type = "password" value = {user.password} handleChange={handleChange} />
                <button type="submit" class = "bg-purple-300 w-36 h-10 rounded-full hover:bg-purple-400" >SUBMIT</button>
            </form>
        </div>
    );
}

export default SignIn;