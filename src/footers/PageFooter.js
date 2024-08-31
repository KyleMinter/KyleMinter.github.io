import React, {useState} from 'react';
import './PageFooter.css';


export default function PageFooter({icon = "bi bi-question-circle-fill", text = "<Placeholder>", link = null})
{
    const [hovered, setHovered] = useState(false);

    const baseClassNames="text-light"

    return (
        <a href={link} className="text-decoration-none">
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className=
                {
                    (hovered && link != null) ? (`gradient_background ${baseClassNames}`) : (baseClassNames)
                }
            >
                <h2 className="display-6 my-0 pt-3">{text}</h2>
                <i class={`display-5 my-0 ${icon}`}/>
            </div>
        </a>
    );
}