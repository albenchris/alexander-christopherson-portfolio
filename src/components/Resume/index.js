import React from 'react';
import resume from './assets/resume/AlexChristophersonRésumé.pdf'
import icon from './assets/images/resume-icon.svg'
import './assets/css/style.css';

const Resume = () => {

    return (
        <section>
            <h2 id="résumé">
                My Résumé
            </h2>
            <div>
                <h3>Proficiencies</h3>
                <div className="proficiency-container">
                    <div className="bar-container">
                        <div className="bar">
                            <div className="bar-fill ninety">
                                <div className="tag">Javascript</div>
                            </div>
                            <div className="percentage">90%</div>
                        </div>
                        <div className="bar">
                            <div className="bar-fill eighty">
                                <div className="tag">React</div>
                            </div>
                            <div className="percentage">80%</div>
                        </div>
                        <div className="bar">
                            <div className="bar-fill ninety">
                                <div className="tag">HTML</div>
                            </div>
                            <div className="percentage">90%</div>
                        </div>
                        <div className="bar">
                            <div className="bar-fill eighty-five">
                                <div className="tag">CSS</div>
                            </div>
                            <div className="percentage">85%</div>
                        </div>
                        <div className="bar">
                            <div className="bar-fill ninety">
                                <div className="tag">Node.js</div>
                            </div>
                            <div className="percentage">90%</div>
                        </div>
                        <div className="bar">
                            <div className="bar-fill eighty-five">
                                <div className="tag">MongoDB</div>
                            </div>
                            <div className="percentage">85%</div>
                        </div>
                        <div className="bar">
                            <div className="bar-fill eighty">
                                <div className="tag">Sequelize</div>
                            </div>
                            <div className="percentage">80%</div>
                        </div>
                        <div className="bar">
                            <div className="bar-fill seventy">
                                <div className="tag">MySQL</div>
                            </div>
                            <div className="percentage">70%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume-link">
                <div>
                    check out my résumé here
                </div>
                <a href={resume} target="_blank" rel="noreferrer">
                    <img src={icon} className="resume-icon" alt="résumé icon" />
                </a>
            </div>
        </section>
    );
}

export default Resume;
