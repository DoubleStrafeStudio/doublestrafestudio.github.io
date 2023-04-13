import React from 'react';
import './project-summary.jsx';

export function ProjectSummary(props) {
    /*
        Required data:
            1. Title
            2. URL
            3. Tech stack
            4. Summary blurb
            5. 
    */

    let projectName = props.name;

    let projectDirectory = {
        "youth group gallery": {
            name: "Youth Group gallery", 
            url: "https://www.ygg.gallery/",

        }
    }


    return (
        <div className='project-summary-wrapper'>
            <div className='project-header'>
                <div className='project-name'>
                    {projectName}
                </div>
                <div className='project-url'>
                    {projectName}
                </div>
            </div>
            <div className='project-body'>
                <div className='project-image'>

                </div>
                <div className='project-description'>

                </div>
                
            </div>
        </div>
    );
}