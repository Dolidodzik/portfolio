import React, {Component} from 'react';
import './projects.css'

import Card from '../card';
import { BrowserView, MobileView } from "react-device-detect";

export default class projects extends Component {

    constructor() {
      super();
      setTimeout(
        function() {
          this.setState({isFlipped: true});
        }
        .bind(this),
        1625
      );
    }

    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {

      return (
        <div className="component-projects">
          <div className="container">

            <div className="row">

              <header className="col-12 projects-header">
                <h1> Here you can view my projects! </h1>
                <BrowserView> <h4> Hover or click photos to get additional information! </h4> </BrowserView>
                <MobileView> <h4> Click photos to get additional information, doubleclick them to get redirected to project page! </h4> </MobileView>
              </header>

            </div>

            <main className="cards-containter row">
              <Card Title={"Foodie"} FrontImageSource={"/projectImages/foodie.png"} BackText="Hungry? Here you can search for nearby restaurants!" Link = "https://github.com/Dolidodzik/foodie" />
              <div className="card-spacer"></div>
              <Card Title={"Bulbapedia"} FrontImageSource={"/projectImages/bulbapedia.png"} BackText="Backend, for wikipedia like page that I created as freelancer for one of redditors!" Link = "https://github.com/Dolidodzik/bulbapedia" />
              <div className="card-spacer"></div>
              <Card Title={"Typing"} FrontImageSource={"/projectImages/typingspeedtest.png"} BackText="In this app you can check your typing speed!" Link = "https://github.com/Dolidodzik/typingspeedtest" />
              <div className="card-spacer"></div>
              <Card Title={"Portfolio"} FrontImageSource={"/projectImages/portfolio.png"} BackText="My portfolio that you are looking on right now!" Link = "https://github.com/Dolidodzik/portfolio" />
              <div className="card-spacer"></div>
              <Card Title={"Gallery"} FrontImageSource={"/projectImages/gallery.png"} BackText="Simple image gallery!" Link = "https://github.com/Dolidodzik/django_wagtail_image_gallery" />
              <div className="card-spacer"></div>
              <Card Title={"Blog"} FrontImageSource={"/projectImages/blog.png"} BackText="Wagtail blog, with customizable post, pages, and other utilities!" Link = "https://github.com/Dolidodzik/Wagtail-Django-Static-Blog" />
            </main>

          </div>
        </div>
      );
    }
  }
