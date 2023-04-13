import { React, useState } from 'react';
import './question.css';
import { data } from './data.jsx'

export function Verse ({questionNumber}) {


    return (
        <div>
            <b>{data[questionNumber].verseReference}</b>
            <br />
            {data[questionNumber].verseText}
        </div>
    )
}