import React, { Component } from 'react';
import restart from '../images/refresh.svg';
import left from '../images/left.svg';
import '../style/AnnotationPlayer.css';

// Default dimensions
const HEIGHT = 500;
const WIDTH = 351;

class AnnotationPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { on: 0, annotations: [], image: { url: null, h: HEIGHT, w: WIDTH }};
    this.restart = this.restart.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ annotations: nextProps.annotations, image: nextProps.image });
  }

  restart() {
    this.setState({ on: 0 });
  }

  prev() {
    if (this.state.on > 0) {
      this.setState({ on: this.state.on - 1 });
    }
  }

  next() {
    if (this.state.on < this.state.annotations.length) {
      this.setState({ on: this.state.on + 1 });
    }
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;

    img.onload = () => {
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, WIDTH, HEIGHT);
      ctx.font = "20px Courier"
    }
  }

  componentDidUpdate() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "red";
    for (var i = 0; i < this.state.on; i++) {
      ctx.fillText(this.state.annotations[i].label, WIDTH * this.state.annotations[i].x / 100.0, HEIGHT * this.state.annotations[i].y / 100.0 );
    }
  }

  render() {
    return (
      <div className="annotation-player">
        <canvas ref="canvas" width={WIDTH} height={HEIGHT} />
        <img className="hidden" ref="image" src={this.state.image.url} alt="Annotated"/>
        <div className="player-bar">
          <input type="image" className="button" src={restart} alt="restart" onClick={this.restart}/>
          <input type="image" className="button" src={left} alt="left" onClick={this.prev}/>
          <input type="image" className="button-right" src={left} alt="right" onClick={this.next}/>
        </div>
      </div>
    );
  }
}

export default AnnotationPlayer;
