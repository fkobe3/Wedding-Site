import React from 'react';
import aboutPic from "../../assets/images/profile.jpg";

const About = () => {
    return (
        <section>
            <h1>About me</h1>
            <img src={aboutPic} className="profile-photo" style={{ width: "100%"}} alt="Profile Photo" />
            <p> Hello, my name is Frank. I am 25 years old, living in Raleigh, North Carolina. I have a bachelor's degree of science in Molecular Psychobiology from Albright College.
            </p>
            <p>
            Previously, I lived in Philadelphia, Pennsylvania, where I worked in therapuetic psychology as a behavioral health technician (or BHT). 
          Since the pandemic, I have slowly changed career paths, which is why I have gone into coding.             </p>
            <p>
            In addition to coding though, I ran and edited a podcast, as well as also began streaming on the platform Twitch. I am also contracted to write a young adult fiction book through Webnovel.
         I hope to use coding in combination with my bachelor's degree  in the future to eventually do large amounts of data collection and analysis, such as CDC or other government studies.
          </p>
        </section>
    )
};

export default About;