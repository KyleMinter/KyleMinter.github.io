import React from 'react';
import IconMap from './IconMap';

export default function Icon({icon = "question", link = null})
{
    const iconComponent = IconMap[icon];
    
    const content = <span className="text-light">
        <div className="d-flex flex-column justify-content-center">
            {iconComponent}
        </div>
    </span>

    if (link !== null)
        return (<a href={link} className="hover-darken text-light">{content}</a>);
    else
        return (content);
}