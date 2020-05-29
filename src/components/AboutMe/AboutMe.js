import React from 'react';
import frontend from  '../../image/frontend.svg';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div classNam="container" style={{marginBottom:"150px"}}>
            
                <div className="row About justify-content-center align-items-center">
                    <div className="col-md-6" style={{textAlign:"center", color:"white"}}>
                        <div style={{marginTop:"40px"}}>
                        <h1>Hi, I'm Junaid. Nice to meet you.</h1>
                    <p>Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
                    <a href="https://drive.google.com/file/d/1q9reoO64MAOJ_961fdKm87VhIA9g4HdK/view?usp=sharing" target="_blank"><strong>Download My Resume</strong></a>
                        </div>


                        <div className="myself justify-content-center">
                            <img src={frontend} alt=""/>
                            <h3>Front-end Developer</h3>
                            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                            <p style={{color:"#7510F7"}}>Languages I speak:</p>
                            <p>HTML, CSS, NodeJS, React, Express, Mongodb</p>
                        </div>
                    </div>
                </div>
            </div>     
        
    );
};

export default AboutMe;