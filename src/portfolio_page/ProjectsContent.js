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
        <Container className="shadow-lg m-2 p-0 rounded-2 d-flex flex-column overflow-hidden text-start" style={{height: "20rem", maxWidth: "30rem",}}>
            <Container className="bg-primary p-0 flex-grow-0 flex-shrink-0 d-inline-block overflow-hidden position-relative" style={{height: "80%"}}>
                <img src={require(`${content.thumbnail}`)} alt="" className="object-fit-cover w-100 h-100"/>
            </Container>

            <span className="sliding-tab flex-grow-0 flex-shrink-0" style={{height: "120%"}}>
                <Container className="bg-dark px-2 d-flex align-items-center" style={{height: "17%"}}>
                    <h4 className="px-2 m-0 flex-grow-1">{content.title}</h4>
                    <span className="fs-2 pb-1 px-3"><Icon icon={"arrowup"} /></span>
                </Container>

                <Container className=" bg-dark border-top border-bottom border-tertiary p-1 d-flex">
                    <div className="flex-grow-1">{renderedIconBadges}</div>
                    <div className="d-flex flex-nowrap pt-1">{renderedIcons}</div>
                </Container>

                <Container className="sliding-gradient bg-primary px-3 py-2 h-100">
                    <p>
                        {content.description.split('\n').map((paragraph) => (
                            <span>{paragraph}<br /></span>
                        ))}
                    </p>
                </Container>
            </span>
        </Container>
    ));
};

// Renders the Icons for each of the project cards.
const renderIcons = (icons) => {

    return React.createElement(() => (
        <h4 className="px-1">
            <Icon icon={icons.icon} link={icons.link}/>
        </h4>
    ));
};

// Renders the IconBadges for each of the project cards.
const renderIconBadges = (iconBadges) => {
    return React.createElement(() => (
        <IconBadge icon={iconBadges.icon} text={iconBadges.text} />
    ));
};

export default function ProjectsContent({jsonContent})
{
    const renderedContent = jsonContent.map((content) => renderCards(content));

    return (
        <Container fluid className="text-light mt-3">
            <h3 className="display-5">Projects</h3>
            
            <hr className="my-1  mx-5"/>

            <div className="d-flex flex-wrap justify-content-center" style={{}}>
                {renderedContent}
            </div>

            <hr className="my-1  mx-5"/>
        </Container>
    );
}

//{content.hasOwnProperty("carouselImages") ? "true" : "false"}