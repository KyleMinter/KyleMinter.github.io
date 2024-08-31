import React from 'react';
import './BioPageContent.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IconBadge from '../icons/IconBadge';

export default function BioPageContent()
{
    return (
        <Container className="container-custom d-flex flex-column align-items-center">
            <Container>
                <h1 className="name display-1 my-0">Kyle Minter</h1>
                
                <hr className="mb-1"/>

                <Row className="row-cols-auto justify-content-center">
                    <Col className="p-0"><IconBadge icon={"bi bi-envelope-at"} text={"Email"} link="mailto:kyle.minter.1@gmail.com"/></Col>
                    <Col className="p-0"><IconBadge icon={"bi bi-linkedin"} text={"LinkedIn"} link={"https://www.linkedin.com/in/minter-kyle/"}/></Col>
                    <Col className="p-0"><IconBadge icon={"bi bi-github"} text={"GitHub"} link={"https://github.com/KyleMinter"}/></Col>
                    <Col className="p-0"><IconBadge icon={"bi bi-linkedin"} text={"ArtStation"} link={"https://kyleminter.artstation.com/"}/></Col>
                </Row>

                <hr className="mt-1"/>
            </Container>

            <div>
                <p>I’m a Software Developer with full-stack development experience in various environments. In May 2025, I graduated with a Bachelor's of Computer Science from the University of North Texas.</p>
                <br/>
                <p>I'm also a Level Designer and Environment Artist with a majority of my experience in making maps for Counter-Strike. Most of my work is done as hobby and out of love for the process, but I am also open to related positions and/or commissions</p>
                <br/>
                <p>You can view both my Software Development & Level Design/Environment Art portfolios below.</p>
            </div>

        </Container>
    );
}