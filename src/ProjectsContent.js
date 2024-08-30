import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import SOFTWARE_ACTIVE_TAB from './PorfolioTabs';
import LD_ENV_ART_ACTIVE_TAB from './PorfolioTabs';

function ProjectCard()
{
    return (
        <div>
            <p>projectcard</p>
        </div>
    );
}

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
        <Accordion>
            <Accordion.Item>
                <Accordion.Header>Projects</Accordion.Header>
                <Accordion.Body>projectsbody</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}