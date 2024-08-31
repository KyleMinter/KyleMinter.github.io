import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BioPageContent from './BioPageContent';
import BioPageFooter from './BioPageFooter';

export default function BioPage()
{
    return (
        <Container fluid className="min-vh-100 d-flex flex-column px-0 bg-dark text-light">
            <Row className="flex-grow-1">
                <Col className="align-self-center">
                    <BioPageContent/>
                </Col>
            </Row>

            <BioPageFooter/>
        </Container>
    );
}