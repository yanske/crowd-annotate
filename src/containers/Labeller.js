import React, { Component } from 'react';
import AnnotationPlayer from './../components/AnnotationPlayer.js';
import Survey from './../components/Survey.js';
import StubApi from './../services/api.js';
import './../style/Labeller.css';

class Labeller extends Component {
  constructor(props) {
    super(props);
    var params = this.props.location.pathname.split('/');
    var frag_id = params[2];
    var user_id = params[4];

    this.state = { fragment: frag_id, user: user_id, annotations: [], image: null }
  }

  componentDidMount() {
    var api = new StubApi();
    api.getLabel(this.state.fragment, this.state.user, (resp) => {
      this.setState({annotations: resp.annotations, image: { url: resp.image, h: resp.height, w: resp.width }});
    });
  }

  render() {
    return (
      <div>
        <header className="labeller-header">
          <AnnotationPlayer annotations={this.state.annotations} image={this.state.image}/>
          <div className="task-bar">
            <h2>Task ID: {this.state.fragment}</h2>

            Short task description ... Macaroon dragée dragée caramels cheesecake sweet chocolate cake tiramisu. Lollipop sweet cookie.
            Halvah cotton candy gummies dragée oat cake.
            
            Liquorice candy danish gummi bears pastry. Wafer liquorice tootsie roll topping soufflé cheesecake dragée.
            Lemon drops bonbon jelly-o. Gummi bears candy candy canes sugar plum icing cake topping gummies jujubes.
            <br/>
            <br/>
            <hr/>
            <Survey fragment={this.state.fragment}/>
          </div>
        </header>
      </div>
    );
  }
}

export default Labeller;
