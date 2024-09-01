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
                    title="Software Development"
                    className={baseClassNames}
                >
                    software
                    <SkillsContent />
                    <ProjectsContent />
                </Tab>

                <Tab
                    eventKey={LD_ENV_ART_ACTIVE_TAB}
                    title="Level Design & Environment Art"
                    className={baseClassNames}
                >
                    art
                    <SkillsContent />
                    <ProjectsContent />
                </Tab>
            </Tabs>
        </Container>
    );
}