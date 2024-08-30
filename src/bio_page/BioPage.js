import React from 'react';
import Container from 'react-bootstrap/Container';
import BioPageHeader from './BioPageHeader';
import BioPageFooter from './BioPageFooter';

export default function BioPage()
{
    return (
        <div
            styles="height: 1000px; min-height: 1000px;"
            className="bg-primary"
        >
            <BioPageHeader />
            <h1>Kyle Minter</h1>
            This is a header
            <BioPageFooter />
        </div>
    );
}