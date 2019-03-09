import React, { Component } from 'react';
import AnnotationPlayer from './../components/AnnotationPlayer.js';
import Survey from './../components/Survey.js';
import './../style/Labeller.css';

class Labeller extends Component {
  render() {
    return (
      <div>
        <header className="labeller-header">
          <AnnotationPlayer/>
          <div className="task-bar">
            <h2>Task ID: 01234</h2>

            Short task description ... Macaroon dragée dragée caramels cheesecake sweet chocolate cake tiramisu. Lollipop sweet cookie.
            Halvah cotton candy gummies dragée oat cake.
            
            Liquorice candy danish gummi bears pastry. Wafer liquorice tootsie roll topping soufflé cheesecake dragée.
            Lemon drops bonbon jelly-o. Gummi bears candy candy canes sugar plum icing cake topping gummies jujubes.
            <br/>
            <br/>
            <hr/>
            <Survey/>
          </div>
        </header>
      </div>
    );
  }
}

export default Labeller;
