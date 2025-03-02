// src/components/ButtonGreen.jsx

import React from 'react';

function ButtonStyle({TextBtn ,backgroundColor,  TextColor , width , heigh }) {
  return (
    <div>
      <button style={{ 
        backgroundColor: `${backgroundColor}`,
        color:`${TextColor}}`,
        width:`${width}` ,
        height:`${heigh}`,
        margin:"5px"
         
        }}>
        {TextBtn}
      </button>
    </div>
  );
}

export default ButtonStyle;
