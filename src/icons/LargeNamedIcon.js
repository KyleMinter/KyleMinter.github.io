import React from 'react';
import Container from 'react-bootstrap/Container';
import IconMap from './IconMap';

export default function LargeNamedIcon({icon = "question", text = "<Placeholder>", link = null})
{
    const iconComponent = IconMap[icon];

    return (
        <a href={link} className="text-decoration-none">
            <Container className="bg-dark hover-gradient text-light py-2 px-4 m-2 rounded-2 shadow-lg">
                <div className="">
                    <div className="display-1" styles="font-size: 2rem">
                        {iconComponent}
                    </div>
                    <br/>
                    <span className="fw-bold">{text}</span>
                </div>
            </Container>
        </a>
    );
}