import { React, useState } from 'react';
import {data} from './data.jsx';
import './answer.css';

export function Answer({questionNumber}) {
    
    const [visibility, setVisibility] = useState('none');

    function toggleVisibility() {
        if (visibility === '') {
            setVisibility('none');
        } else {
            setVisibility('')
        }
        console.log(visibility)
    }

    return(
        <div>

            <button onClick={toggleVisibility}>
                {visibility === 'none' ? 'Show' : 'Hide'} Answer
            </button>

            <br />
            <div style={{display: visibility}} >
                {data[questionNumber].answerFull}   

            </div>
        </div>
    );
}