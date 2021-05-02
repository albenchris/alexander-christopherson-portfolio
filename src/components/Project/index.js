import React from 'react';
import './assets/css/style.css';

const Project = (props) => {

    const { name, image, repositoryLink, deployedLink } = props;

    return (
        <div className="flip-card">
            <div className="flip-card-inner">

                <div className="image-container flip-card-front">
                    <img alt={name} src={image} />
                </div>

                <div className="content flip-card-back">
                    <h3 className="project-name">{name}</h3>
                    <div className="link-container">
                        <div className="project-link">
                            <a href={deployedLink} target="_blank" rel="noreferrer">
                                deployed
                            </a>
                        </div>
                        <div className="project-link">
                            <a href={repositoryLink} target="_blank" rel="noreferrer">
                                repository
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Project;
