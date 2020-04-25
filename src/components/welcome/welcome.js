import React, {Component} from 'react';
import './welcome.css'
import { goToAnchor } from 'react-scrollable-anchor'



export default class welcome extends Component {

    render() {
      return (
        <div className="component-welcome row">
          <div className="col-md-1"></div>
            <header className="welcome-header col-md-10">
              <h1 className="welcome-h1"> Hello, my name is Dominik Lech, I am full stack developer! </h1>
            </header>
            <div className="col-md-1"></div>

            <div className="col-md-3"></div>
            <nav className="more-about col-md-6">
              <span onClick={() => goToAnchor('about') }>
                <header className="more-about-header">
                  <h3> Learn more about my work! </h3>
                </header>

                <div className="bounce">
                  <img alt="" src="arrow.png" className="img-fluid bounce-arrow" />
                </div>

              </span>
            </nav>
          <div className="col-md-3"></div>
        </div>
      );
    }
  }
