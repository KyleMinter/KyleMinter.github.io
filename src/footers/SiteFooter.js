import React from 'react';
import Icon from '../icons/Icon';

export default function SiteFooter()
{
    return (
        <footer className="d-flex flex-wrap justify-content-evenly align-items-center py-1 bg-dark border-top border-secondary text-light">
            <span className="fs-4">Kyle Minter</span>
            <h2 className="m-0"><Icon icon={"bi bi-github"} link={"https://github.com/KyleMinter/KyleMinter.github.io"} background={"bg-primary"} /></h2>
        </footer>
    );
}