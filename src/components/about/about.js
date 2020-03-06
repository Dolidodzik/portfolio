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

          <Technology img_src={"fakeicon.png"} />
          <Technology img_src={"fakeicon.png"} />
          <Technology img_src={"fakeicon.png"} />
          <Technology img_src={"fakeicon.png"} />
          <Technology img_src={"fakeicon.png"} />
          <Technology img_src={"fakeicon.png"} />
          <Technology img_src={"fakeicon.png"} />
          <Technology img_src={"fakeicon.png"} />
          <Technology img_src={"fakeicon.png"} />
          <Technology img_src={"fakeicon.png"} />
          <Technology img_src={"fakeicon.png"} />
          <Technology img_src={"fakeicon.png"} />
        </div>
      </div>
    );

  }
}
