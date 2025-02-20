import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LargeNamedIcon from '../icons/LargeNamedIcon';

const renderContent = (content) => {
    return React.createElement(() => (
        <Col>
            <LargeNamedIcon icon={content.icon} text={content.text} link={content.link} />
        </Col>
    ));
};

export default function SkillsContent({jsonContent})
{
    const renderedContent = jsonContent.map((content) => renderContent(content))

    return (
        <Container fluid className="text-light">
            <h3 className="display-5 my-0">Skills</h3>
            
            <hr className="my-1 mx-5"/>

            <Row className="row-cols-auto justify-content-center">
                {renderedContent}
            </Row>

            <hr className="my-1 mx-5"/>
        </Container>
    );
}