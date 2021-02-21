import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className="footer bg-dark">
            <ul className="footer-list">
            <a className="footer-element" target="_blank" href="https://www.instagram.com/no3lcodes/"><InstagramIcon /></a>
            <a className="footer-element" target="_blank" href="https://github.com/NoelCov"><GitHubIcon /></a>
            <a className="footer-element" target="_blank" href="https://twitter.com/No3l_Codes"><TwitterIcon /></a>
            </ul>
      </div>
    )
};

export default Footer;