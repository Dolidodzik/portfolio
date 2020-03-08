import React, {Component} from 'react';
import './card.css'

import Flipcard from '@kennethormandy/react-flipcard'
import '@kennethormandy/react-flipcard/dist/Flipcard.css'
import { isBrowser } from "react-device-detect";

export default class Card extends Component {
    constructor(props) {
     super(props);
     this.state = {
        flipped: false,
        link: "https://google.com"
      }
      /* Simulating flip, to avoid animation bug */
      setTimeout(
        function() {
          this.setState({flipped: true});
        }
        .bind(this),
        0
      );
      setTimeout(
        function() {
          this.setState({flipped: false});
        }
        .bind(this),
        300
      );

    }

    handleClicks = () => {
      console.log(this.clickedAtLeastOnce)
      if (this.clickTimeout !== null && this.clickedAtLeastOnce) {
        this.clickTimeout = null
        // Redirecting after double click
        window.open(this.state.link)

      } else {
        if(isBrowser){
          window.open(this.state.link, "_blank")
        }
        this.clickedAtLeastOnce = true;
        this.clickTimeout = setTimeout(()=>{
        // Redirecting after first click (only for non-touchable screens)
        clearTimeout(this.clickTimeout)
          this.clickTimeout = null
        }, 700)
      }
    }

    render() {
      return (
        <span className="card-wrap ButtonLink"
          onMouseEnter={e => this.setState({ flipped: !this.state.flipped })}
          onMouseLeave={e => this.setState({ flipped: !this.state.flipped })}
          onClick={e => this.handleClicks()}
        >

          <Flipcard flipped={this.state.flipped}>
              <div className="content front square-box" >
                <img src={this.props.FrontImageSource} alt={this.props.Title} />
              </div>

              <div className="content back square-box">
                <div className='square-content'>
                  <div className="back-wrapper">
                    <h2 className="BackHeader"> {this.props.Title} </h2>
                    <div className="BackText"> {this.props.BackText} </div>
                    <h5 className="BackSpacer"> Click to learn more! </h5>
                  </div>
                </div>
              </div>
          </Flipcard>
        </span>
      );
    }
  }
