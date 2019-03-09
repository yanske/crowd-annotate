import React, { Component } from 'react';
import StubApi from './../services/api.js';
import './../style/Browser.css';

class Browser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frags: []
    };

    this.showCurrentFragments = this.showCurrentFragments.bind(this);
  }
  
  componentDidMount() {
    var api = new StubApi();
    api.getBrowse((resp) => this.setState({ frags: resp }));
  }

  showCurrentFragments() {
    console.log(this.state.frags);
    return (
      <div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <header className="browser-header">
          <h1>Current Fragments</h1>
          { this.showCurrentFragments() }
        </header>
      </div>
    );
  }
}

export default Browser;
