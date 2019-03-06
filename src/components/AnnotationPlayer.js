import React, { Component } from 'react';
import restart from '../images/refresh.svg';
import left from '../images/left.svg';
import '../style/AnnotationPlayer.css';

// Stub API data
// - Annotation image
// - Annotations: array of annotation data, with their x, y coordinate as a percent of the parent's width & height, plus a label
const STUB_IMAGE_URL = "https://panoptes-uploads.zooniverse.org/production/subject_location/3eec9328-e2e8-48b8-86e6-2f0ac3ce4461.jpeg";
const HEIGHT = 500;
const WIDTH = 351;
const STUB_ANNOTATION_DATA = [{
  x: 3,
  y: 4,
  label: "hello"
},
{
  x: 25,
  y: 64,
  label: "wow label"
}];

class AnnotationPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { on: 0, annotations: STUB_ANNOTATION_DATA };

    this.restart = this.restart.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
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
        <img className="hidden" ref="image" src={STUB_IMAGE_URL} alt="Annotated"/>
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
