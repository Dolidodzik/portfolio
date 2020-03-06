import React, {Component} from 'react';
import './card.css'

import Flipcard from '@kennethormandy/react-flipcard'
import '@kennethormandy/react-flipcard/dist/Flipcard.css'


export default class Card extends Component {
    constructor(props) {
     super(props);
     this.state = {
        flipped: false,
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
    render() {
      return (
        <a className="card-wrap"
          onMouseEnter={e => this.setState({ flipped: !this.state.flipped })}
          onMouseLeave={e => this.setState({ flipped: !this.state.flipped })}
          href = {this.state.Link}
          target = "_blank"
        >

          <Flipcard flipped={this.state.flipped}>
              <div className="content front square-box" >
                <img src={this.props.FrontImageSource} />
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
        </a>
      );
    }
  }
