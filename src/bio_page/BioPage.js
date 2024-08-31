import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BioPageContent from './BioPageContent';
import BioPageFooter from './BioPageFooter';

export default function BioPage()
{
    return (
        <Container fluid className="vh-100 d-flex flex-column bg-primary">
            <Row className="flex-grow-1">
                <Col className="align-self-center">
                    <BioPageContent/>
                </Col>
            </Row>

                <BioPageFooter/>
        </Container>
    );
}

/*<Row
            fluid
            className="vh-100 bg-primary d-flex"
        >*/