import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SkillsContent from './SkillsContent';
import ProjectsContent from './ProjectsContent'

import skillsSoftwareDevelopment from './skills_software_content.json';
import skillsEnvironmentArt from './skills_envart_content.json';

const SOFTWARE_ACTIVE_TAB = "Software Development";
const LD_ENV_ART_ACTIVE_TAB = "Level Design & Environment Art";

export default function PortfolioTabs()
{
    const baseClassNames = "p-5 bg-secondary border border-top-0 border-subtle rounded-bottom"

    return (
        <Container>
            <Tabs
                fill
                justify
                className="bg-secondary rounded"
                defaultActiveKey={SOFTWARE_ACTIVE_TAB}
            >
                <Tab
                    eventKey={SOFTWARE_ACTIVE_TAB}
                    title={SOFTWARE_ACTIVE_TAB}
                    className={baseClassNames}
                >
                    software
                    <SkillsContent jsonContent={skillsSoftwareDevelopment}/>
                    <ProjectsContent />
                </Tab>

                <Tab
                    eventKey={LD_ENV_ART_ACTIVE_TAB}
                    title={LD_ENV_ART_ACTIVE_TAB}
                    className={baseClassNames}
                >
                    art
                    <SkillsContent jsonContent={skillsEnvironmentArt}/>
                    <ProjectsContent />
                </Tab>
            </Tabs>
        </Container>
    );
}