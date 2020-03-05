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

          <div className="scroll-to-top col-md-12" ref="topka"></div>

          {/* Welcome */}
          <ScrollableAnchor id={'welcome'}>
            <div className="nothing"></div>
          </ScrollableAnchor>

          <div className="top-nav">
              <div className="top-nav-wrap">

                <span className="first-option option"
                  onClick={() => goToAnchor('welcome') }
                >
                  home
                </span>

                <span href="/about" className="second-option option"
                  onClick={() => goToAnchor('about') }
                >
                  about my work
                </span>

                <span href="/projects" className="third-option option"
                  onClick={() => goToAnchor('projects') }
                >
                  my projects
                </span>

                <span href="/contact" className="fourth-option option"
                  onClick={() => goToAnchor('contact') }
                >
                  contact me
                </span>

              </div>
          </div>


          <Welcome/>

          <div className="about-margin scroll_to_welcome"></div>
          
          <ScrollableAnchor id={'about'}>
            <div className="spacer-about"></div>
          </ScrollableAnchor>
          <About/>

          <ScrollableAnchor id={'projects'}>
            <div className="spacer-projects"></div>
          </ScrollableAnchor>
          <Projects/>

          <ScrollableAnchor id={'contact'}>
            <div className="contact-nothing"></div>
          </ScrollableAnchor>
          <Contact/>

        </div>
      );
    }
}

export default App;
