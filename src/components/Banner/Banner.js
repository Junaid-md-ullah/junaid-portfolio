import React from 'react';
import avatar from '../../image/mf-avatar.svg';
import hero from '../../image/hero.svg';

const Banner = () => {
    return (
        <div>
            <div className="container justify-content-center mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 justify-content-center">
                        <h1 style={{textAlign:"center"}}>Designer, Front-end Developer</h1>
                        <p style={{textAlign:"center"}}>I design and code beautifully simple things, and I love what I do</p>
                            <div className="d-flex justify-content-center" style={{marginBottom:"80px"}}>
                                <img src={avatar} alt=""/>
                            </div>
                            <div className="d-flex justify-content-center">
                                <img src={hero} alt=""/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;