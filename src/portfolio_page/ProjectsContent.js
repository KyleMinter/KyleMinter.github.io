import React from 'react';
import Container from 'react-bootstrap/Container';
import IconBadge from '../icons/IconBadge';
import Icon from '../icons/Icon';
import './ProjectsContent.css';


// Renders the project cards.
const renderCards = (content) => {
    const renderedIcons = content.icons.map((icons) => renderIcons(icons));
    const renderedIconBadges = content.iconBadges.map((iconBadges) => renderIconBadges(iconBadges));
    
    return React.createElement(() => (
        <Container className="project-card m-2 p-0 rounded-2 d-flex flex-column overflow-hidden" style={{height: "16rem", maxWidth: "25rem",}}>
            <Container className="bg-primary p-0 flex-grow-0 flex-shrink-0 d-inline-block overflow-hidden position-relative h-75">
                <img src={require(`${content.thumbnail}`)} alt="" className="object-fit-cover w-100 h-100"/>
            </Container>
            
            <Container className="sliding-tab bg-dark p-2 text-start d-flex align-items-center flex-grow-0 flex-shrink-0 h-25">
                    <h5 className="p-2 flex-grow-1">{content.title}</h5>
                    {renderedIcons}
            </Container>

            <Container className="bg-dark sliding-tab text-start border-top border-bottom border-tertiary p-1 flex-grow-0 flex-shrink-0">
                {renderedIconBadges}
            </Container>

            <Container className="bg-primary sliding-tab text-start px-3 py-2 flex-grow-0 flex-shrink-0 h-100">
                    <p>{content.description}</p>
            </Container>
        </Container>
    ));
};

// Renders the Icons for each of the project cards.
const renderIcons = (icons) => {
    return React.createElement(() => (
        <h4 className="p-1">
            <Icon icon={icons.icon} link={icons.link}/>
        </h4>
    ));
};

// Renders the IconBadges for each of the project cards.
const renderIconBadges = (iconBadges) => {
    return React.createElement(() => (
        <IconBadge icon={iconBadges.icon} text={iconBadges.text} link={iconBadges.text} />
    ));
};

export default function ProjectsContent({jsonContent})
{
    const renderedContent = jsonContent.map((content) => renderCards(content));

    return (
        <Container className="text-light mt-3">
            <h3 className="display-5">Projects</h3>
            
            <hr className="my-1"/>

            <div className="d-flex flex-wrap justify-content-center" style={{}}>
                {renderedContent}
            </div>

            <hr className="my-1"/>
        </Container>
    );
}

//{content.hasOwnProperty("carouselImages") ? "true" : "false"}