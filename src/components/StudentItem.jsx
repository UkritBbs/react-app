import React from "react"
import reactLogo from '../assets/react.svg'

function StudentItem(){
    return (
        <div>
          <h1 style={{paddingRight: "10px"}}>Welcome to React-App

          <img src={reactLogo} style={{height: "50px" , width: "50px" , marginTop: "10px" , padding: "10px"}} />

          </h1>
          
        </div>
      );
}

export default StudentItem;
