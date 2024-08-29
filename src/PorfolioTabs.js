import React, { useState } from 'react';
import './PorfolioTabs.css';

export default function PorfolioTabs()
{

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>
    {
        setToggleState(index);
    }

    let skillsContent;
    let projectsContent;

    if (toggleState === 1)
    {
        skillsContent = "software skills";
        projectsContent = "software projects"
    }
    else
    {
        skillsContent = "art skills";
        projectsContent = "art projects";
    }

    return (
        <div>
            <div className="container">
                <div className="bloc-tabs">
                    <button className= {toggleState === 1? "tabs active-tabs" : "tabs"} onClick = {()=> toggleTab(1)}>Software Development</button>
                    <button className= {toggleState === 2? "tabs active-tabs" : "tabs"} onClick = {()=> toggleTab(2)}>Level Design & Environment Art</button>
                </div>

                <div className="content">
                    <div>
                        <h2>Skills</h2>
                        {skillsContent}
                    </div>

                    <div>
                        <h2>Projects</h2>
                        {projectsContent}
                    </div>

                </div>
            </div>
        </div>
    );
}