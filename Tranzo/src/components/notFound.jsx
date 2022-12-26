import React from "react";
import { useNavigate } from "react-router-dom";
const homePage =()=>{
    console.log("first")

    const navigation = useNavigate();
    navigation("/");
}
const NotFound = () => {
    return (
        <>
            <h1>Page Not Found</h1> <br></br>
            <button onClick={homePage}> Go to Home Page</button>
        </>
    )
}
export default NotFound;