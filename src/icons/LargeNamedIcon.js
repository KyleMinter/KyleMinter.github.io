import React from 'react';
import Container from 'react-bootstrap/Container';

export default function LargeNamedIcon({icon = "bi bi-question-circle-fill", text = "<Placeholder>", link = null})
{
    return (
        <a href={link} className="text-decoration-none">
            <Container className="bg-dark hover-gradient text-light py-2 px-4 m-2 rounded-2 shadow-lg">
                <div className="">
                    <i className={`${icon} display-1`} styles="font-size: 2rem;"/>
                    <br/>
                    <span className="fw-bold">{text}</span>
                </div>
            </Container>
        </a>
    );
}