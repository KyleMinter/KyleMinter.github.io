import React from 'react';
import Badge from 'react-bootstrap/Badge';

export default function Icon({icon = "bi bi-question-circle-fill", link = null})
{
    return (
        <a href={link}>
            <Badge className="hover-gradient text-light p-2">
                <i className={icon} styles="font-size: 2rem;"/>
            </Badge>
        </a>
    );
}