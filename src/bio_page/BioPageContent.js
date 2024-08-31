import React from 'react';
import Container from 'react-bootstrap/Container';
import IconBadge from '../icons/IconBadge';

export default function BioPageContent()
{
    return (
        <div className="d-flex flex-column align-items-center">
            <Container className="w-25">
                <h1 className="display-1 my-0">Kyle Minter</h1>
                
                <hr className="mb-1"/>

                <IconBadge icon={"bi bi-envelope-at"} text={"Email"} link="mailto:kyle.minter.1@gmail.com"/>
                <IconBadge icon={"bi bi-linkedin"} text={"LinkedIn"} link={"https://www.linkedin.com/in/minter-kyle/"}/>
                <IconBadge icon={"bi bi-github"} text={"GitHub"} link={"https://github.com/KyleMinter"}/>
                <IconBadge icon={"bi bi-linkedin"} text={"ArtStation"} link={"https://kyleminter.artstation.com/"}/>

                <hr className="mt-1"/>
            </Container>

            <Container className="w-50">
                <p>I’m a Software Developer with full-stack development experience in various environments. In May 2025, I graduated with a Bachelor's of Computer Science from the University of North Texas.</p>
                <br/>
                <p>I'm also a Level Designer and Environment Artist with a majority of my experience in making maps for Counter-Strike. Most of my work is done as hobby and out of love of the process, but I am also open to related positions and/or commissions</p>
                <br/>
                <p>You can view both my Software Development & Level Design/Environment Art portfolios below.</p>
            </Container>

        </div>
    );
}