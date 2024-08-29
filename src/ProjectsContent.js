import React from 'react';
import './ProjectsContent.css';
import SOFTWARE_ACTIVE_TAB from './PorfolioTabs';
import LD_ENV_ART_ACTIVE_TAB from './PorfolioTabs';

export default function ProjectsContent({activeTab})
{
    let projectsContent = "content";
    switch (activeTab)
    {
        case SOFTWARE_ACTIVE_TAB:
            //stuff
            break;
        case LD_ENV_ART_ACTIVE_TAB:
            //stuff
            break;
        default:
            //stuff
            break;
    }
    
    return (
        <div>
            <div className="container">
                {projectsContent}
            </div>
        </div>
    );
}