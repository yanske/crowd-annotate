import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../style/FragCard.css';

class FragCard extends Component {
  constructor(props) {
    super(props)
    this.showUserLinks = this.showUserLinks.bind(this);
  }

  showUserLinks() {
    var userLinks = [];
    var key = 0;
    this.props.users.forEach((u) => {
      var link = '/labeller/' + this.props.frag_id + '/user/' + u;
      userLinks.push(
        <Link to={link} key={key}>{u}</Link>
      );

      key += 1;
    });

    return userLinks;
  }

  render() {
    return (
      <div className="fragcard">
        <h4>Fragment ID: {this.props.frag_id}</h4>
        <div className="user-container">
          { this.showUserLinks() }
        </div>
      </div>
    );
  }
}

export default FragCard;
