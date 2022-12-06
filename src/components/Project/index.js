import React from 'react';
import disney from "../../assets/images/disney logo.png";

const Project = ({project}) => {
    
    return (
        
        <figure className="projectCard">
            
            <div className="projectText">
            
                <div className="projectLinks">
                
                <a href={project.deploy} target="_blank"><h3>{project.name}</h3></a>
                <a href={project.repo} target="_blank"><img className="projectLogo" alt="Github Logo" src={disney}></img></a>
                
                </div>
                
                <p>{project.desc}</p>
                
            </div>
            <img className="projectBackground" alt={project.name} src={require(`../../assets/images/${project.image}`).default} />
           
        </figure>
    )
}

export default Project;


