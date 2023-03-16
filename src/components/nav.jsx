import React from 'react';
import './nav.css';
import '../App.css';
import { Logo } from './logo';
import { ThemePicker } from './theme-picker';

export function Nav () {
    // Logo positioning calculations
    let logoHeight = 100;
    let colorOne = getComputedStyle(document.documentElement).getPropertyValue('--color-1');
    let colorTwo = getComputedStyle(document.documentElement).getPropertyValue('--color-2');

    // console.log(primaryColor, secondaryColor);
    // let primaryColor = `#24E6A8`;
    // let secondaryColor = `#08AEEA`;

    let linearGradientStyle = 
        `.cls-1 {
            fill: url(#Gradient1);
            fill-rule: evenodd;
        }`;

    const handleContactClick = () => {
        
        alert("you just clicked the contact button");
        
    }

    return (
        <div className='nav-bar-wrapper'>
            <ul className='nav-item-list'>
                <li className='logo nav-item'>
                    <div id='logo'>
                        <Logo colorOne={colorOne} colorTwo={colorTwo}/>
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
                {/* <div className='color-scheme'>
                    <div id='color-one'></div>
                    <div id='color-two'></div>
                </div> */}
                <ThemePicker />
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