import React, { useState } from 'react';
import './PorfolioTabs.css';
import SkillsContent from './SkillsContent';
import ProjectsContent from './ProjectsContent'

const SOFTWARE_ACTIVE_TAB = 1;
const LD_ENV_ART_ACTIVE_TAB = 2;

export default function PorfolioTabs()
{
    const [activeTabState, setActiveTabState] = useState(1);
    const toggleTab = (index) =>
    {
        setActiveTabState(index);
    }

    return (
        <div>
            <div className="container">
                <div className="bloc-tabs">
                    <button className= {activeTabState === SOFTWARE_ACTIVE_TAB? "tabs active-tabs" : "tabs"} onClick = {()=> toggleTab(SOFTWARE_ACTIVE_TAB)}>Software Development</button>
                    <button className= {activeTabState === LD_ENV_ART_ACTIVE_TAB? "tabs active-tabs" : "tabs"} onClick = {()=> toggleTab(LD_ENV_ART_ACTIVE_TAB)}>Level Design & Environment Art</button>
                </div>

                <div className="content">
                    
                    <div>
                        <h2>Skills</h2>
                        <SkillsContent activeTab={activeTabState}/>
                    </div>

                    <div>
                        <h2>Projects</h2>
                        <ProjectsContent activeTab={activeTabState}/>
                    </div>

                </div>
            </div>
        </div>
    );
}