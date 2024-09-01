import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const renderContent = (content) => {
    return React.createElement(() => (
        <Col>
            
        </Col>
    ));
};

export default function ProjectsContent({jsonContent})
{
    const renderedContent = jsonContent.map((content) => renderContent(content))

    return (
        <Container className="text-light mt-3">
            <h3 className="display-5">Projects</h3>
            
            <hr className="my-1"/>

            <Row className="row-cols-auto justify-content-center">
                {renderedContent}
            </Row>

            <hr className="my-1"/>
        </Container>
    );
}