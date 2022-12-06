import React from 'react';

const Resume = () => {

    return (
        <section>
            <h1>
                Resume
            </h1>
            <p>Download my <a href="https://docs.google.com/document/d/1YGPEAwS_IDuH1lPLF7MYQmaZY9zWTPFk/edit?usp=sharing&ouid=105182672908869346585&rtpof=true&sd=true">resume</a></p>
            <h3>Front-end Proficiencies</h3>
            <ul className="resumeList">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Bootstrap</li>

            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul className="resumeList">
                <li>Node</li>
                <li>MySQL</li>
                <li>APIs</li>
                <li>Mongo</li>
                
            </ul>
        </section>
    )
}

export default Resume;