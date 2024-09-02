import React from 'react';
import './PageFooter.css';


export default function PageFooter({icon = "bi bi-question-circle-fill", text = "<Placeholder>", link = null})
{
    return (
        <a href={link} className="text-decoration-none">
            <div className="hover-gradient text-light">
                <h2 className="display-6 my-0 pt-3">{text}</h2>
                <i className={`display-5 my-0 ${icon}`}/>
            </div>
        </a>
    );
}