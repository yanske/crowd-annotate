import React, { Component } from 'react';
import StubApi from './../services/api.js';
import FragCard from './../components/FragCard.js';
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
    if (this.state.frags.length === 0) {
      return "No fragments exists!";
    }

    var fragments = [];
    var id = 0;
    this.state.frags.forEach((f) => {
      fragments.push(
        <FragCard key={id} frag_id={f.id} users={f.users}/>
      );
      id += 1;
    });
    return fragments;
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
