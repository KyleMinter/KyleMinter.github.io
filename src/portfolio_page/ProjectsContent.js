import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import IconBadge from '../icons/IconBadge';
import Icon from '../icons/Icon';


const renderCards = (content) => {
    const renderedIcons = content.icons.map((icons) => renderIcons(icons));
    const renderedIconBadges = content.iconBadges.map((iconBadges) => renderIconBadges(iconBadges));
    
    return React.createElement(() => (
        <Col>
            <Card className="shadow-lg text-start bg-dark text-light my-2 rounded-2 border-0" style={{width: "24rem"}}>
                <Card.Img className="border-5 border-dark" variant="top" src={require(`${content.thumbnail}`)} style={{height: "50%", borderStyle:"solid", borderRadius:" 8px"}}/>
                <Card.Body>
                    <Card.Title>
                        <div className="d-flex">
                            <div className="flex-grow-1">{content.title}</div>
                            {renderedIcons}
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <hr className="p-0 m-1"/>
                        {renderedIconBadges}
                        <hr className="p-0 m-1"/>
                        <p>{content.description}</p>
                        {content.hasOwnProperty("carouselImages") ? "true" : "false"}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    ));
};

const renderIcons = (icons) => {
    return React.createElement(() => (
        <div className="mx-1">
            <Icon icon={icons.icon} link={icons.link}/>
        </div>
    ));
};

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

            <Row className="row-cols-auto justify-content-center">
                {renderedContent}
            </Row>

            <hr className="my-1"/>
        </Container>
    );
}