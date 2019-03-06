import React, { Component } from 'react';
import '../style/Survey.css';

class Survey extends Component {
  render() {
    return (
      <div className="survey">
        <h2>Label</h2>

        Classify the annotation style of the user:
        <form className="labels">
          <input className="options" type="radio" name="gender" value="male"/> Left to Right <br/>
          <input className="options" type="radio" name="gender" value="female"/> Top to Bottom <br/>
          <input className="options" type="radio" name="gender" value="other"/> Dunno  <br/>
        </form>

        <button className="submit" type="submit">Submit</button>
      </div>
    );
  }
}

export default Survey;