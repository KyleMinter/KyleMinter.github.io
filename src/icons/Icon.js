import React from 'react';
import IconMap from './IconMap';

export default function IconNew({icon = "question", link = null})
{
    const iconComponent = IconMap[icon];
    
    return (
        <a href={link} className="hover-darken text-light">
            <div className="d-flex flex-column justify-content-center">
                {iconComponent}
            </div>
        </a>
    );
}