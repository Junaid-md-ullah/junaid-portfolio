import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header></Header>
              <Banner></Banner>
              <AboutMe></AboutMe>
              <Projects></Projects>
              <Blogs></Blogs>
              <Footer></Footer>
            </Route>
            <Route path='/AboutMe'>
              <Header></Header>
              <AboutMe></AboutMe>
              <Footer></Footer>
            </Route>
            <Route path="/projects">
              <Header></Header>
              <Projects></Projects>
              <Footer></Footer>
            </Route>
            <Route path="/blogs">
              <Header></Header>
              <Blogs></Blogs>
              <Footer></Footer>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
