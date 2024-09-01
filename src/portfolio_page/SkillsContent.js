import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillsIcon from '../icons/SkillsIcon';

const renderContent = (content) => {
    return React.createElement(() => (
        <Col>
            <SkillsIcon icon={content.icon} text={content.text} link={content.link} />
        </Col>
    ));
};

export default function SkillsContent({jsonContent})
{
    const renderedContent = jsonContent.map((content) => renderContent(content))

    return (
        <Container className="text-light">
            <h3 className="display-5 my-0">Skills</h3>
            
            <hr className="my-1"/>

            <Row className="row-cols-auto justify-content-center">
                {renderedContent}
            </Row>

            <hr className="my-1"/>
        </Container>
    );
}