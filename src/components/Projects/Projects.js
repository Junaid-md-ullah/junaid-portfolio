import React from 'react';
import './Projects.css';
import redonion from '../../image/redonion.png';
import ema from '../../image/emajohn.png';
import doctors from '../../image/doctors.png';

const Projects = () => {
    return (
        <div className="all-projects justify-content-start">
            <div className="row project-title justify-content-center">
                <div className="col-md-8 justify-content-center" style={{textAlign:"center"}}>
                    <h1>My Recent Work</h1>
                    <p>Here are a few design projects I've worked on recently.</p>
                </div>
            </div>

            <div className="row projects-each d-flex justify-content-center">
                <div className="col-md-4">
                    <div class="container">
                        <img src={redonion} alt="Avatar" class="image"/>
                        <div class="overlay">
                            <div class="text"><a href="" class="btn btn-outline-primary"><h5>Visit Website ></h5></a></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="container">
                        <img src={ema} alt="Avatar" class="image"/>
                        <div class="overlay">
                        <div class="text"><a href="https://angry-villani-5ef266.netlify.app/" target="_blank" class="btn btn-outline-primary"><h5>Visit Website ></h5></a></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="container">
                        <img src={doctors} alt="Avatar" class="image"/>
                        <div class="overlay">
                        <div class="text"><a href="https://doctors-portal-68900.web.app/" target="_blank" class="btn btn-outline-primary"><h5>Visit Website ></h5></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;