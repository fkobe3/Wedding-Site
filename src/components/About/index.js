import React from 'react';
import aboutPic from "../../assets/images/Pankratz Photo With Chase 2018.jpg";

const About = () => {
    return (
        <section>
            <h1>About Us</h1>
            <img src={aboutPic} className="profile" style={{ width: "100%"}} alt="Profile" />

            <p> We met in 2015 in our freshman and sophomore year at Albright College.
             During that time we both joined Greek life, got through countless finals, sleepless nights, 
             and the Albright Plague (if you know, you know). Finally in 2018, she said yes.
            </p>
            <p>
            Since then, we have been through a pandemic, changes in career paths, and two different states. 
            We always discussed the idea of marriage, but it was always a "we'll do it later" thing. Finally, this 
            year we decided that it was no longer a "we'll do it later" thing and time to actually set a date. 
            </p>
            <p>
            <strong>So we are getting married!</strong> Next year, November 20, 2023. We will be eloping instead of holding an 
            official ceremony. If you want to help us with either gifts for the house, honeymoon, or any other way,
            There is a page with links to registries, as well as a link to a page of pictures of us, and a venmo/paypal 
            at the bottom. Nothing is required, but anything is appreciated. Thank you all for being a part of our 
            journey so far, and we hope you have a wonderful day!
            </p>
            <p>
              P.S. If you find yourself in Florida near Disney around that time next year, come say hi, whether it be
              Disney itself or around the area, as there won't be any type of organized ceremony or reception at this time.
            </p>
        </section>
    )
};

export default About;