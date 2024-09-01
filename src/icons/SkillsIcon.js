import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';

export default function Icon({icon = "bi bi-question-circle-fill", text = "<Placeholder>", link = null, background = ""})
{
    const [hovered, setHovered] = useState(false);
    
    const baseClassNames = "text-light py-2 px-4 rounded-4 border border-5 border-success";

    return (
        <a href={link} className="text-decoration-none">
            <Container
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className=
                {
                    (hovered && background !== "" && link != null) ? (`${background} ${baseClassNames} bg-gradient`) : (`${background} ${baseClassNames}`)
                }
            >
                <i className={`${icon} display-1`} styles="font-size: 2rem;"/>
                <br/>
                <span className="fw-bold">{text}</span>
            </Container>
        </a>
    );
}