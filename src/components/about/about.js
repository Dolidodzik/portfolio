import React, {Component} from 'react';
import './about.css'

export default class about extends Component {

  constructor(props) {
      super(props);
      this.scroll_to_first_feature = React.createRef();
      this.scroll_to_top = React.createRef();
    }

  render() {

    function Technology(props){
      return(
        <div className="technology col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
          <img src={props.img_src} className="img-fluid" alt="" />
        </div>
      );
    }

    return (
      <div className="component-about container">
        <div className="row">

          <h1 className="col-12 about-header"> Technologies that I am familiar with: </h1>

          <Technology img_src={"technologies/html+css.png"} />
          <Technology img_src={"technologies/es6.png"} />
          <Technology img_src={"technologies/sass.png"} />
          <Technology img_src={"technologies/bootstrap.png"} />
          <Technology img_src={"technologies/react.png"} />
          <Technology img_src={"technologies/vue.png"} />
          <Technology img_src={"technologies/angular.png"} />
          <Technology img_src={"technologies/django.png"} />
          <Technology img_src={"technologies/drf.png"} />
          <Technology img_src={"technologies/wagtail.png"} />
          <Technology img_src={"technologies/linux.png"} />
          <Technology img_src={"technologies/git.png"} />
        </div>
      </div>
    );

  }
}
