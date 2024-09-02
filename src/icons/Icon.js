import React from 'react';
import Badge from 'react-bootstrap/Badge';

export default function Icon({icon = "bi bi-question-circle-fill", link = null})
{
    return (
        <a href={link}>
            <div className="hover-gradient bg-primary rounded-2 text-light px-1">
                <i className={icon} />
            </div>
        </a>
    );
}