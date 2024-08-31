import React, {useState} from 'react';
import './BioPageFooter.css';


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
                    (hovered) ? "gradient_background text-light" : "text-light"
                }
            >
                <h2 className="display-6 my-0 pt-3">View Portfolio Below</h2>
                <i class="display-5 my-0 bi bi-chevron-bar-down"/>
            </div>
        </a>
    );
}