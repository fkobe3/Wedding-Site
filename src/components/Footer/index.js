import React from "react";
import paypal from "../../assets/images/paypal logo.png";
import venmo from "../../assets/images/venmo png.png";

const Footer = () => {
    //console.log("Photos: " ,photos)
    return (
        <footer>
            <div id="logos">
                <a href="https://paypal.me/frankkobe01?country.x=US&locale.x=en_US" target="_blank" rel='noreferrer'><img alt="Paypal Logo" src={paypal} /></a>
                <a href="https://account.venmo.com/u/Frank-Kobe" target="_blank" rel='noreferrer'><img alt="Venmo Logo" src={venmo} /></a>
            </div>
        </footer>
    )
}

export default Footer;