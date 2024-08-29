import React from 'react';
import './SkillsContent.css';

export default function SkillsContent({activeTab})
{
    let skillsContent = "content";
    if (activeTab)
    {
        // display skills content.
    }
    
    return (
        <div>
            <div className="container">
                {skillsContent}
            </div>
        </div>
    );
}