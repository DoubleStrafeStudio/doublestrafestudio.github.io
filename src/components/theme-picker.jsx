import React from 'react';
import './theme-picker.css'

export function ThemePicker() {


    const themes = [
        {   name: 'default',
            colorOne: '#24E6A8',
            colorTwo: '#08AEEA'},
        {   name: 'orange-red',
            colorOne: '#f15353',
            colorTwo: '#b92d63'}, 
        {   name: 'purple', 
            colorOne: '#b53be6',
            colorTwo: '#6b53f1'},
        {   name: 'pale-blue', 
            colorOne: '#2d9af3',
            colorTwo: '#33438d'}
    ];

    return(
        <div className='theme-picker-wrapper'>
            <div className='current-theme'>
                <div className='color-one'></div>
                <div className='color-two'></div>
            </div>

            <div className='palette-wrapper'>
                <div className='pointer'>''</div>
                <div className='palette'>
                    {themes.map((colorScheme) => {
                        return(
                            <div className='theme-option' key={colorScheme.name} >
                                <div className='color-one' style={{backgroundColor: colorScheme.colorOne}}></div>
                                <div className='color-two' style={{backgroundColor: colorScheme.colorTwo}}></div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>

        </div>
    );
}