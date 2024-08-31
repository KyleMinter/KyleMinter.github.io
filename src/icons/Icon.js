import React, {useState} from 'react';
import Badge from 'react-bootstrap/Badge';

export default function Icon({icon = "bi bi-question-circle-fill", link = null, background = ""})
{
    const [hovered, setHovered] = useState(false);
    
    const baseClassNames = "text-light p-2";

    return (
        <a href={link}>
            <Badge
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className=
                {
                    (hovered && background !== "" && link != null) ? (`${background} ${baseClassNames} bg-gradient`) : (`${background} ${baseClassNames}`)
                }
            >
                <i className={icon} styles="font-size: 2rem;"/>
            </Badge>
        </a>
    );
}