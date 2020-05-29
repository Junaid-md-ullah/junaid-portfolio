import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab, faGithub, faLinkedin, faMedium} from '@fortawesome/free-brands-svg-icons'
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="container-fluid justify-content-center align-items-center"  style={{backgroundColor:"#7510F7", height:"300px"}}>
            <div className="row justify-content-center">
                <div className="col-md-4 mt-5 mb-3" style={{textAlign:"center",color:"#C9B7FD"}}>
                    <h2 style={{color:"white"}}>JU</h2>
                    <p>Living, learning, & learning up one day at a time.</p>                    
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                <div className="col-md-8 d-flex justify-content-center ">
                    <div className="eachicon d-flex justify-content-center align-items-center mx-3"><a href="https://github.com/Junaid-md-ullah" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></div>
                    <div className="eachicon d-flex justify-content-center align-items-center mx-3"><a href="www.linkedin.com/in/junaid-ullah-8886b0ab" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a></div>
                   <div className="eachicon d-flex justify-content-center align-items-center mx-3"><a href="https://medium.com/@Junaid_Ullah" target="_blank"><FontAwesomeIcon icon={faMedium}/></a></div> 
                </div>
            </div>

            <div className="row d-flex justify-content-center align-items-end mt-5">
                <div className="col-md-8 justify-content-center" style={{textAlign:"center",fontSize:"12px",color:"#C9B7FD"}}>
                    <p>Handcrafted by me &copy; JUNAID</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;