import React from 'react';
import resume from '../../assets/resume/AlexChristophersonRésumé.pdf'

const Resume = () => {

    return (
        <section>
            <h2 id="résumé">
                My Résumé
            </h2>
            <div>
                <h3>Proficiencies</h3>
                <ul>
                    <li>Javascript: <span>90%</span></li>
                    <li>React: <span>80%</span></li>
                    <li>HTML: <span>90%</span></li>
                    <li>CSS: <span>85%</span></li>
                    <li>Node.js: <span>90%</span></li>
                    <li>MongoDB: <span>85%</span></li>
                    <li>Sequelize: <span>80%</span></li>
                    <li>MySQL: <span>70%</span></li>
                </ul>
            </div>
            <a href={resume} target="_blank" rel="noreferrer">check out my résumé here</a>
        </section>
    );
}

export default Resume;
