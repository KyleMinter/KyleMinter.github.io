import React from 'react';
import './PortfolioTabs.css'
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SkillsContent from './SkillsContent';
import ProjectsContent from './ProjectsContent';

import skillsSoftwareDevelopment from './content/jsons/software/skills_software.json';
import skillsEnvironmentArt from './content/jsons/envart/skills_envart.json';

import projectsSoftwareDevelopment from './content/jsons/software/projects_software.json';
import projectsEnvironmentArt from './content/jsons/envart/projects_envart.json';

const SOFTWARE_ACTIVE_TAB = "Software Development Portfolio";
const LD_ENV_ART_ACTIVE_TAB = "Level Design & Environment Art Portfolio";

export default function PortfolioTabs()
{
    const baseClassNames = "py-3 bg-primary border border-subtle rounded-bottom"

    return (
        <Container fluid>
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