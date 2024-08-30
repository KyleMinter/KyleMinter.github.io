import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

export default function SkillsContent({activeTab})
{
    let skillsContent = "content";
    if (activeTab)
    {
        // display skills content.
    }
    
    return (
        <Accordion>
            <Accordion.Item>
                <Accordion.Header>Skills</Accordion.Header>
                <Accordion.Body>skillsbody</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}