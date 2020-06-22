import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/about/about";
import Resume from "./components/Resume/resume";
import Contact from "./components/Contact/contact";
import Portfolio from "./components/Portfolio/portfolio";
import Blog from "./components/Blog/blog";
import Footer from "./components/Footer/footer";

export default function Routes() {
  return (
    <>
    <Router>
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
    </Router>
    <Footer/>
    </>
  );
}
