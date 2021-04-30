import React from 'react';
import Project from '../Project';
import repos from './assets/repos.json';
import './assets/css/style.css';

const Portfolio = () => {

    return (
        <section>
            <h2 id="Portfolio">
                Projects
            </h2>
            <div className="project-container">
                {repos.map(repo => (
                    <Project
                        name={repo.name}
                        image={repo.image}
                        repositoryLink={repo.repositoryLink}
                        deployedLink={repo.deployedLink}
                        key={repo.id}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;