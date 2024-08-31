import React, {useState} from 'react';


export default function BioPageFooter()
{
    const [hovered, setHovered] = useState(false);
    
    return (
        <a href="#portfolio_tabs" className="text-decoration-none">
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className=
                {
                    (hovered) ? "bg-gradient text-light" : "text-light"
                }
            >
                <h2 className="display-6 my-0">View Portfolio Below</h2>
                <i class="display-5 my-0 bi bi-chevron-bar-down"/>
            </div>
        </a>
    );
}