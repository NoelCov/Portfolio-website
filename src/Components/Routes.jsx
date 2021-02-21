import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Success from "./Success";
import Projects from "./Projects";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


function Routes() {
    return (
        <Router>
            <NavBar />
            
            <Switch>
            <Route exact path="/">
                <Header />
                <About />
            </Route>

            <Route exact path="/Contact">
                <Contact />
            </Route>

            <Route exact path="/Success">
                <Success />
            </Route>

            <Route exact path="/Projects">
                <Projects />
            </Route>
            </Switch>
            
            <Footer />
        </Router>
    )
};

export default Routes;