import React from 'react';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SkillsContent from './SkillsContent';
import ProjectsContent from './ProjectsContent'

const SOFTWARE_ACTIVE_TAB = [1, "Software Development"];
const LD_ENV_ART_ACTIVE_TAB = [2, "Level Design & Environment Art"];

export default function PortfolioTabs()
{
    return (
        <Container>
            <Tabs
                fill
                justify
                defaultActiveKey={SOFTWARE_ACTIVE_TAB}
            >
                <Tab
                    eventKey={SOFTWARE_ACTIVE_TAB}
                    title="Software Development"
                    className="p-5 border border-top-0 border-subtle rounded-bottom"
                >
                    software
                    <SkillsContent />
                    <ProjectsContent />
                </Tab>

                <Tab
                    eventKey={LD_ENV_ART_ACTIVE_TAB}
                    title="Level Design & Environment Art"
                    className="p-5 border border-top-0 border-subtle rounded-bottom"
                >
                    art
                    <SkillsContent />
                    <ProjectsContent />
                </Tab>
            </Tabs>
        </Container>
    );
}