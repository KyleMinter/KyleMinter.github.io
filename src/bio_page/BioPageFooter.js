import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export default function BioPageFooter()
{
    return (
        <Container
            className="well p-5 mb-4 bg-light rounded-3 position-relative"
        >
            <h2>Portfolio</h2>
            <hr/>
            <Button
                variant="primary"
                size="lg"
                href="#portfolio_tabs"
            >
                View Below
            </Button>
        </Container>
        
    );
}