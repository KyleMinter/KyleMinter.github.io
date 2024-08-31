import React from 'react';
import Container from 'react-bootstrap/Container';
import BioPageFooter from './BioPageFooter';
import IconBadge from '../iconbadges/IconBadge';

export default function BioPage()
{
    return (
        <Container
            fluid
            className="vh-100 bg-primary d-flex flex-column"
        >

            
            <Container className="flex-grow-1">
                <h1 className="display-1" style={{fontSize: 150}}>Kyle Minter</h1>
                
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


            <BioPageFooter/>
        </Container>
    );
}