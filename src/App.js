import React, { Component } from 'react';
import Nav from './components/Nav.js';
import AnnotationPlayer from './components/AnnotationPlayer.js';
import Survey from './components/Survey.js';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <header className="App-header">
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

export default App;
