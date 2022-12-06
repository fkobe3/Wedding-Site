import React from 'react';
import Project from '../Project';
//import image from "../../assets/images/adventure_series.jpg"
import projectList from "../../projectList.json";

const Portfolio = () => {
        
    return (
        // Single project component goes here
        <section>
            <h1>Portfolio</h1>
            <div id="projectCards">
                {projectList.map(project => (
                    <Project project={project}
                    />
                ))}
            </div>
        </section>
    )
};

export default Portfolio;