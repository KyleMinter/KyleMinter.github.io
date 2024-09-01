import React from 'react';
import './PortfolioTabs.css'
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SkillsContent from './SkillsContent';
import ProjectsContent from './ProjectsContent'

import skillsSoftwareDevelopment from './content_jsons/skills_software_content.json';
import skillsEnvironmentArt from './content_jsons/skills_envart_content.json';

import projectsSoftwareDevelopment from './content_jsons/projects_software_content.json';
import projectsEnvironmentArt from './content_jsons/projects_envart_content.json';

const SOFTWARE_ACTIVE_TAB = "Software Development";
const LD_ENV_ART_ACTIVE_TAB = "Level Design & Environment Art";

export default function PortfolioTabs()
{
    const baseClassNames = "py-3 bg-secondary border border-subtle rounded-bottom"

    return (
        <Container>
            <Tabs
                fill
                justify
                className="bg-dark rounded-top border-0 tab-color fw-bold"
                defaultActiveKey={SOFTWARE_ACTIVE_TAB}
            >
                <Tab
                    eventKey={SOFTWARE_ACTIVE_TAB}
                    title={SOFTWARE_ACTIVE_TAB}
                    className={baseClassNames}
                >
                    <SkillsContent jsonContent={skillsSoftwareDevelopment}/>
                    <ProjectsContent jsonContent={projectsSoftwareDevelopment}/>
                </Tab>

                <Tab
                    eventKey={LD_ENV_ART_ACTIVE_TAB}
                    title={LD_ENV_ART_ACTIVE_TAB}
                    className={baseClassNames}
                >
                    <SkillsContent jsonContent={skillsEnvironmentArt}/>
                    <ProjectsContent jsonContent={projectsEnvironmentArt}/>
                </Tab>
            </Tabs>
        </Container>
    );
}