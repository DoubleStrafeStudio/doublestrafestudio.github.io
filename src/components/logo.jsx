import React from 'react';
import './logo.css';

export function Logo ({colorOne, colorTwo}) {

    return(
        <svg id = 'logoSVG' xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
            <defs>
                <linearGradient id="Gradient1" x1="0" x2="0" y1="1" y2="0">
                    <stop className="stop1" offset="0%" stopColor={colorOne}/>
                    <stop className="stop2" offset="100%" stopColor={colorTwo}/>
                </linearGradient>
                <style>
                    {`.cls-1 {
                        fill: url(#Gradient1);
                        fill-rule: evenodd;
                    }`}
                </style>
            </defs>
            <path id="_8" data-name="8" className="cls-1" d="M150,900L900,0V150L150,1050V900ZM0,900L750,0V150L0,1050V900Z"/>
        </svg>
    )
}