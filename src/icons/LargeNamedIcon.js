import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';

export default function LargeNamedIcon({icon = "bi bi-question-circle-fill", text = "<Placeholder>", link = null})
{
    const [hovered, setHovered] = useState(false);
    
    const baseClassNames = "bg-dark text-light py-2 px-4 m-2 rounded-2 shadow-lg";

    return (
        <a href={link} className="text-decoration-none">
            <Container
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className=
                {
                    (hovered && link != null) ? (`${baseClassNames} bg-gradient`) : (`${baseClassNames}`)
                }
            >
                <i className={`${icon} display-1`} styles="font-size: 2rem;"/>
                <br/>
                <span className="fw-bold">{text}</span>
            </Container>
        </a>
    );
}