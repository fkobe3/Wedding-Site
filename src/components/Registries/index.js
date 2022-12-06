import React from 'react';
import Project from '../Project';
import projectList from "../../projectList.json";

const Portfolio = () => {
        
    return (
        <section>
            <h1>Registries</h1>
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