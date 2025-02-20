import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import IconMap from './IconMap';

export default function IconBadge({icon = "question", text = "<Placeholder>", link = null})
{
    const iconComponent = IconMap[icon];

    const content = <Badge className="bg-primary hover-gradient m-1 p-0">
        <Stack direction="horizontal">
            <div className="bg-gradient rounded-start-2 p-2 d-flex flex-column justify-content-center">
                {iconComponent}
            </div>
            <div className="vr"/>
            <div className="p-2">{text}</div>
        </Stack>
    </Badge>;
    
    if (link !== null)
        return (<a href={link}>{content}</a>);
    else
        return (content);
}