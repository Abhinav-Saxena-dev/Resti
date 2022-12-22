import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FormInput from "../Form-input/form-input.component";

const SignUp = () => {

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (res) => {
                const lat = res.coords.latitude
                const long = res.coords.longitude
                    setUser(prev => {
                        return {...prev, isLocationAllowed : true, locationLat : lat, locationLong : long}
                    })
            }, 
        
            (err) => {
                alert(`Failed to fetch location with error : ${err}`)
                setUser({isLocationAllowed : false})
            })
    }, [])

    const [user, setUser] = useState({
        name : "",
        isLocationAllowed : false,
        locationLong : 0,
        locationLat : 0,
        email : "",
        password : "",
        // isDisabled : false,
        // Disability : null,
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
                <FormInput name = "name" label = "Name" type = "text" value = {user.name} handleChange={handleChange} />
                <FormInput name = "email" label = "Email" type = "text" value = {user.email} handleChange={handleChange} />
                <FormInput name = "password" label = "Password" type = "password" value = {user.password} handleChange={handleChange} />
                {/* <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value={user.isDisabled} /> */}
                {/* <label class="form-check-label inline-block text-gray-800">Are you Disabled?</label><br/><br/> */}
                {/* The are you disabled function is not working yet. */}
                <button type="submit" class = "bg-purple-300 w-36 h-10 rounded-full hover:bg-purple-400" >SUBMIT</button>
            </form>
        </div>
    );
}

export default SignUp;