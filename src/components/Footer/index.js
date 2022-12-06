import React from "react";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import facebook from "../../assets/images/facebook.png";

const Footer = () => {
    //console.log("Photos: " ,photos)
    return (
        <footer>
            <div id="logos">
                <a href="https://github.com/fkobe3" target="_blank" rel='noreferrer'><img alt="Github Logo" src={github} /></a>
                <a href="https://www.linkedin.com/in/frankkobe/" target="_blank" rel='noreferrer'><img alt="Linked In Logo" src={linkedin} /></a>
                <a href="https://www.facebook.com/frank.kobe.1" target="_blank" rel='noreferrer'><img alt="Facebook Logo" src={facebook} /></a>
            </div>
        </footer>
    )
}

export default Footer;