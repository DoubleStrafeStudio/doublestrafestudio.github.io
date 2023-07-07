import { React, useState } from 'react';
import './question.css';
import { data } from './data.jsx'

export function Question ({questionNumber}) {

    //console.log(questionNumber)
    //console.log(data[questionNumber]);

    // const [partColor, setPartColor] = useState(1);
    let partColor;

    if (data[questionNumber].part == 1 ) {
        partColor = getComputedStyle(document.documentElement).getPropertyValue('--orange');
    } else if (data[questionNumber].part == 2 ) {
        partColor = getComputedStyle(document.documentElement).getPropertyValue('--blue');
    } else if (data[questionNumber].part == 3 ) {
        partColor = getComputedStyle(document.documentElement).getPropertyValue('--green');
    }

    // console.log(`the correct color for this part is ${partColor}`);


    return(
        <div>
            <h1 style={{color:partColor}}>Question {data[questionNumber].questionNumber}</h1>
            <h1 style={{color:partColor}}>{data[questionNumber].question}</h1>
        </div>
    )
}

