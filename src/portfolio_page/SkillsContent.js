import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillsIcon from '../icons/SkillsIcon';

const renderContent = (content) => {
    return React.createElement(() => (
        <Col>
            <SkillsIcon icon={content.icon} text={content.text} link={content.link} background={content.background} />
        </Col>
    ));
};

export default function SkillsContent({jsonContent})
{
    const renderedContent = jsonContent.map((content) => renderContent(content))

    return (
        <Accordion>
            <Accordion.Item>
                <Accordion.Header>Skills</Accordion.Header>
                <Accordion.Body>
                    <Row className="row-cols-auto">
                        {renderedContent}
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
//skillsSoftwareDevelopment.map((content) => renderComponents(content));
//skillsEnvArtContentJson.map((content) => renderComponents(content));