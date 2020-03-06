import React, {Component} from 'react';
import './projects.css'

import Card from '../card';


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
                <h4> Hover or click photos to get additional information! </h4>
              </header>

            </div>

            <main className="cards-containter row">
                <Card Title={"Never-Forget"} FrontImageSource={"fakeicon.png"} BackText="Application that allows you to organize research!" Link = "https://github.com/Dolidodzik/foodie" />
                <div className="card-spacer"></div>
                <Card Title={"Typing"} FrontImageSource={"fakeicon.png"} BackText="In this app you can check your typing speed!" Link = "https://github.com/Dolidodzik/typingspeedtest" />
                <div className="card-spacer"></div>
                <Card Title={"Portfolio"} FrontImageSource={"fakeicon.png"} BackText="My portfolio that you are looking on right now!" Link = "https://github.com/Dolidodzik/portfolio" />
                <div className="card-spacer"></div>
                <Card Title={"Foodie"} FrontImageSource={"fakeicon.png"} BackText="Hungry? Here you can find nearby restaurants!" Link = "https://github.com/Dolidodzik/foodie" />
                <div className="card-spacer"></div>
                <Card Title={"Gallery"} FrontImageSource={"fakeicon.png"} BackText="Simple, but functional image gallery!" Link = "https://github.com/Dolidodzik/django_wagtail_image_gallery" />
                <div className="card-spacer"></div>
                <Card Title={"Blog"} FrontImageSource={"fakeicon.png"} BackText="Wagtail blog, with customizable post, pages, and other utilities!" Link = "https://github.com/Dolidodzik/Wagtail-Django-Static-Blog" />
            </main>

          </div>
        </div>
      );
    }
  }
