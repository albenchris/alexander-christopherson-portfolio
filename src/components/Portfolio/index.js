import React from 'react';
import Project from '../Project';
import repos from '../Project/repos.json';

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