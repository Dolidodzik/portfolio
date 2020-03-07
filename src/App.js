import React from 'react';
import './App.css';
import {Component} from 'react';

/* Importing bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Importing my components from /src/components */
import Welcome from './components/welcome';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';

import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'
import { slide as Menu } from 'react-burger-menu'



class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        text_shown: false,
        fetures_header_shown: false,
        arrow_shown: false
      };
    }


    render() {
      return (
        <div className="App">

          <div className="scroll-to-top col-md-12"></div>

          {/* Welcome */}
          <ScrollableAnchor id={'welcome'}>
            <div className="nothing"></div>
          </ScrollableAnchor>


          <div id="outer-container">
            <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
              <span className="first-option option"
                onClick={() => goToAnchor('welcome') }>
                Welcome!
              </span>

              <span href="/about" className="option"
                onClick={() => goToAnchor('about') }>
                Tech details!
              </span>

              <span href="/projects" className="option"
                onClick={() => goToAnchor('projects') }>
                My projects!
              </span>

              <span href="/contact" className="option"
                onClick={() => goToAnchor('contact') }>
                Contact me!
              </span>
            </Menu>
            <main id="page-wrap">
              <div>
                <Welcome/>
                <div className="scroll_to_welcome"></div>
                <ScrollableAnchor id={'about'}>
                  <div className="spacer-about"></div>
                </ScrollableAnchor>
                <About/>

                <div className="projects-about-spacer"></div>

                <ScrollableAnchor id={'projects'}>
                  <div className="spacer-projects"></div>
                </ScrollableAnchor>
                <Projects/>

                <ScrollableAnchor id={'contact'}>
                  <div className="spacer-contact"></div>
                </ScrollableAnchor>
                <Contact/>
              </div>
            </main>
          </div>



        </div>
      );
    }
}

export default App;
