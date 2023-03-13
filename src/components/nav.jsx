import React from 'react';
import './nav.css';
import '../App.css';
import logo from '../assets/8-fullsize.svg';

export function Nav () {
    // Logo positioning calculations
    let logoHeight = 100;
    let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--gradient-1');
    let secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--gradient-2');

    console.log(primaryColor, secondaryColor);
    // let primaryColor = `#24E6A8`;
    // let secondaryColor = `#08AEEA`;

    let linearGradientStyle = 
        `.cls-1 {
            fill: url(#Gradient1);
            fill-rule: evenodd;
        }`;

    const handleContactClick = () => {
        primaryColor = '#FFFFFF';
        alert("you just clicked the contact button");
        
    }

    return (
        <div className='nav-bar-wrapper'>
            <ul className='nav-item-list'>
                <li className='logo nav-item'>
                    <div id='logo'>
                        <svg id = 'logoSVG' xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
                            <defs>
                                <linearGradient id="Gradient1" x1="0" x2="0" y1="1" y2="0">
                                    <stop className="stop1" offset="0%" stopColor={primaryColor}/>
                                    <stop className="stop2" offset="100%" stopColor={secondaryColor}/>
                                </linearGradient>
                                <style>
                                        {linearGradientStyle}
                                </style>
                            </defs>
                            <path id="_8" data-name="8" className="cls-1" d="M150,900L900,0V150L150,1050V900ZM0,900L750,0V150L0,1050V900Z"/>
                        </svg>
                    </div>
                    <div id='logoName'><a href='./index.html'>DoubleStrafe Studio</a></div>
                </li>
                        {/* <img src='./src/assets/Fullsize-1-row.png' height='96px' />   */}
                <li className='nav-item'><a href='./index.html' title='Home'>Home</a></li>
                <li className='nav-item'><a href='./projects.html' title='Projects'>Projects</a></li>
                <li className='nav-item'><a href='./about.html' title='About'>About</a></li>
                <li className='nav-item'><a href='./blog.html' title='Blog'>Blog</a></li>
            </ul>
            <div className='nav-bar-right'>
                <div className='color-scheme'>
                    <div id='color-one'></div>
                    <div id='color-two'></div>
                </div>

                <div className='contact-button-wrapper'>
                    <div className='contact-button' onClick={handleContactClick}>
                        {/* <a href='./contact'>Contact Me</a> */}
                        Contact Me
                    </div>
                </div>
            </div>
        </div>
    )
}