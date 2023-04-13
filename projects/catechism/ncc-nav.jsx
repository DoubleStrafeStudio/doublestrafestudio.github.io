import React from 'react';
import './ncc-nav.css';

export function Nav () {
    return (
        <div className='nav-bar-wrapper'>
            <ul className='nav-item-list'>
                <li className='nav-item'><a className='nav-link' href='./index.html'>New City Catechism Practice</a></li>
                <li className='nav-item'><a className='nav-link' href='./index.html' title='Home'>Home</a></li>
                <li className='nav-item'><a className='nav-link' href='./about.html' title='About'>About</a></li>
                <li className='nav-item'><a className='nav-link external-link' href='https://www.newcitycatechism.com/' title='Official Site'>Official Site</a></li>
            </ul>
        </div>
    )
}

