import React from 'react';
import './Header.css';
import { Link, Router } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-light">
                <Link to="/" className="navbar-brand"><h1 style={{color:"#7510F7"}}>JUNAID</h1></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                    <form class="form-inline">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>

                    <li class="nav-item">
                        <Link className="nav-link" to="/AboutMe">About Me</Link>
                    </li>

                    <li class="nav-item">
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>

                    <li class="nav-item">
                        <Link className="nav-link mr-sm-2" to="/blogs">Blogs</Link>
                    </li>

                    <li className="nav-item">
                        <button className="btn sayhello btn-outline-success my-2 my-sm-0" type="submit">Say hello</button>
                    </li>
                </ul>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;