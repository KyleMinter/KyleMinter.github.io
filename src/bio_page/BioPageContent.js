import React from 'react';
import Container from 'react-bootstrap/Container';
import IconBadge from '../icons/IconBadge';

export default function BioPageContent()
{
    return (
        <Container>
            <h1 className="display-1" styles="font-size: 2vw;">Kyle Minter</h1>
            
            <Container>
                <IconBadge icon={"bi bi-envelope-at"} text={"Email"} link="mailto:kyle.minter.1@gmail.com"/>
                <IconBadge icon={"bi bi-linkedin"} text={"LinkedIn"} link={"https://www.linkedin.com/in/minter-kyle/"}/>
                <IconBadge icon={"bi bi-github"} text={"GitHub"} link={"https://github.com/KyleMinter"}/>
                <IconBadge icon={"bi bi-linkedin"} text={"ArtStation"} link={"https://kyleminter.artstation.com/"}/>
            </Container>

            <Container className="">
                <p>
                    uhhhhhhhhhhhhhhh
                </p>
            </Container>

        </Container>
    );
}