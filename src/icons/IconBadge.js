import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

export default function IconBadge({icon = "bi bi-question-circle-fill", text = "<Placeholder>", link = null})
{
    return (
        <a href={link}>
            <Badge className="bg-primary hover-gradient m-1 p-0">
                    <Stack direction="horizontal">
                        <div className="bg-gradient rounded-start-2 p-2">
                            <i className={icon}/>
                        </div>
                        <div className="vr"/>
                        <div className="p-2">{text}</div>
                    </Stack>
            </Badge>
        </a>
    );
}