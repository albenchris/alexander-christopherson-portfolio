import React from 'react';

const Project = (props) => {

    const { name, image, repositoryLink, deployedLink } = props;

    console.log(image);

    return (
        <div>
            <div>
                <img alt={name} src={image} />
            </div>
            <div>
                <h3>{name}</h3>
                <ul>
                    <li>
                        <a href={deployedLink} target="_blank" rel="noreferrer">
                            deployed
                        </a>
                    </li>
                    <li>
                        <a href={repositoryLink} target="_blank" rel="noreferrer">
                            repository
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Project;
