import React, {Component} from 'react';
import './about.css'

export default class about extends Component {

  constructor(props) {
      super(props);
      this.scroll_to_first_feature = React.createRef();
      this.scroll_to_top = React.createRef();
    }
  HeaderClickEvent() {
      this.scroll_to_first_feature.current.scrollIntoView({behavior: 'smooth'});
    }

  render() {

    function Feature(props){
      return(
        <div className="Feature">
          <img src={props.img_src} className="img-fluid feature-image col-6 col-md-3 " alt="" />
        </div>
      );
    }

    return (
      <div className="component-about">
        <Feature img_src={"fakeicon.png"} />
        <Feature img_src={"fakeicon.png"} />
        <Feature img_src={"fakeicon.png"} />
        <Feature img_src={"fakeicon.png"} />
        <Feature img_src={"fakeicon.png"} />
      </div>
    );

  }
}
