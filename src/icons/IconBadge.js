import React, {useState} from 'react';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

export default function IconBadge({icon = "bi bi-question-circle-fill", text = "<Placeholder>", link = null})
{
    const [hovered, setHovered] = useState(false);

    const baseClassNames = "bg-primary m-1 p-0"

    return (
        <a href={link}>
            <Badge
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className=
                {
                    (hovered && link != null) ? (`${baseClassNames} bg-gradient`) : (baseClassNames)
                }
            >
                    <Stack direction="horizontal">
                        <div className="bg-gradient rounded-start-2 p-2">
                            <i className={icon} styles="font-size: 2rem;"/>
                        </div>
                        <div className="vr"/>
                        <div className="p-2">{text}</div>
                    </Stack>
            </Badge>
        </a>
    );
}