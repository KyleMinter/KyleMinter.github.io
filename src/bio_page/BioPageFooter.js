import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export default function BioPageFooter()
{
    return (
        <Container className="bg-light rounded-2">
            <Button
                variant="secondary"
                size="lg"
                href="portfolio_tabs"
            >
                View Portfolio Below
            </Button>
        </Container>
        
    );
}