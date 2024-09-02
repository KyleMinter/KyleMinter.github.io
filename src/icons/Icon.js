import React from 'react';

export default function Icon({icon = "bi bi-question-circle-fill", link = null})
{
    return (
        <a href={link} className="hover-darken text-light">
            <i className={icon} />
        </a>
    );
}