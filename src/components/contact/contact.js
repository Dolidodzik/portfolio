import React, {Component} from 'react';
import './contact.css'


export default class contact extends Component {
    render() {

      return (
        <div className="component-contact">
          <div className="container">

            <div className="row">
              <div className="spacer col-md-4"></div>
              <header className="col-md-4 contact-header">
                <h1 className="font-weight-600"> CONTACT </h1>
              </header>
              <div className="spacer col-md-4"></div>
              <div className="spacer col-xl-5 col-md-4 col-3"></div>
              <div className="border col-xl-2 col-md-4 col-6 "></div>
              <div className="spacer col-xl-5 col-md-4 col-3"></div>
            </div>

            <main className="row">

              {/* Serverless submit, done with formsubmit.co */}
              <form className="col-md-12" action="https://formsubmit.co/dominiclech787@gmail.com" target="_blank" method="POST">
                <header>
                  <h3 className="font-weight-600 form-header"> Write a message to me: </h3>

                  <input
                    type="email"
                    name="email"
                    className="input col-md-7"
                    placeholder="Your email"
                  />

                  <textarea
                    cols="50"
                    rows="6"
                    className="input text col-md-7"
                    placeholder="Your message"
                    name="text"
                  ></textarea>

                  <div className="col-md-5"></div>

                  <input type="submit" className="input submit col-6 col-md-2" />
                </header>
              </form>

              <h3 className="font-weight-600 col-md-12 email-header"> Or send an email: <span className="email"> dominiclech787@gmail.com </span> </h3>
              <a href="https://github.com/Dolidodzik" target="_blank" className="font-weight-600 col-md-12 email-header github-header"> Github account: <span className="email"> Dolidodzik </span> </a>

            </main>

          </div>
        </div>
      );

    }
  }
