import React from 'react';
import "../App.css";

function CalcDisplay(props){
    return(
        <div className="calc-display">
            {props.text}
        </div>
    );
}
export default CalcDisplay;