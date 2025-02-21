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
            <Container className="bg-dark py-2 mb-3 rounded-top border-bottom border-tertiary fw-bolder">
                <h3 className="display-5">Skills</h3>
            </Container>

            <Row className="row-cols-auto justify-content-center">
                {renderedContent}
            </Row>

            <hr className="my-1"/>
        </Container>
    );
}