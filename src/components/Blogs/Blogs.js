import React from 'react';
import hooks from '../../image/index.png';
import router from '../../image/router.png';
import algo from '../../image/algo.png';

const Blogs = () => {
    return (
        <div className="container justify-content-center mt-5">
            <div className="row project-title justify-content-center">
                <div className="col-md-8 justify-content-center" style={{textAlign:"center"}}>
                    <h1>My Recent Blogs</h1>
                    <p>Here are a few of my blogs I've posted on Medium recently.</p>
                </div>
            </div>

            <div className="row justify-content-around" style={{width:"auto"}}>
                <div className="col-md-3">
                    <div class="card" style={{width: "18rem"}}>
                        <img src={hooks} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">React Hook: useState()</h5>
                                <p class="card-text">React hooks are functions that let us hook into React state & other exciting features without...</p>
                                <a href="https://medium.com/@Junaid_Ullah/react-hook-usestate-7f1a7912656c" target="_blank" class="btn btn-primary">Read more</a>
                            </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card" style={{width: "18rem"}}>
                        <img src={router} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Getting Started With React Router</h5>
                                <p class="card-text"><span style={{fontWeight:"bold", display:"block"}}>Why use React Router?</span> React Router allows us to build...</p>
                                <a href="https://medium.com/@Junaid_Ullah/getting-started-with-react-router-8c46e28826fe" target="_blank" class="btn btn-primary">Read more</a>
                            </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div class="card" style={{width: "18rem"}}>
                        <img src={algo} class="card-img-top" style={{height:"8.99rem"}} alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Learn Most Common Algorithms</h5>
                                <p class="card-text">Iteration: Iteration is the process of going through a set of...</p>
                                <a href="https://medium.com/@Junaid_Ullah/learn-most-common-algorithms-21939ea86519" target="_blank" class="btn btn-primary">Read more</a>
                            </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Blogs;