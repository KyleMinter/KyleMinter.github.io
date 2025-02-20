import React from 'react';
import './PageFooter.css';
import Icon from '../icons/Icon';


export default function PageFooter({icon = "question", text = "<Placeholder>", link = null})
{
    return (
        <a href={link} className="text-decoration-none">
            <div className="hover-gradient text-light">
                <h2 className="display-6 my-0 pt-3">{text}</h2>
                <div className="display-5 d-flex justify-content-center"><Icon icon={icon}/></div>
            </div>
        </a>
    );
}