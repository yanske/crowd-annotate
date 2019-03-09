import React, { Component } from 'react';
import restart from '../images/refresh.svg';
import left from '../images/left.svg';
import '../style/AnnotationPlayer.css';

// Max bounds
const MAX_HEIGHT = 600;
const MAX_WIDTH = 450;

class AnnotationPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { on: 0, annotations: [], image: { url: null, h: MAX_HEIGHT, w: MAX_WIDTH }};
    this.restart = this.restart.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    var height = nextProps.image.h;
    var width = nextProps.image.w;
    // Scale down image height
    if (nextProps.image.w > MAX_WIDTH) {
      var scale = width / MAX_WIDTH;
      width = MAX_WIDTH;
      height = height / scale;

      // If new height is too large, scale again
      if (height > MAX_HEIGHT) {
        scale = height / MAX_HEIGHT;
        height = MAX_HEIGHT;
        width = width / scale;
      }
    }

    this.setState({
      annotations: nextProps.annotations,
      image: {
        url: nextProps.image.url,
        w: width,
        h: height,
        og_w: nextProps.image.w,
        og_h: nextProps.image.h
      },
    });
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
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, this.state.image.w, this.state.image.h);
      ctx.font = "20px Courier"
    }
  }

  componentDidUpdate() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, this.state.image.w, this.state.image.h);
    ctx.fillStyle = "red";
    for (var i = 0; i < this.state.on; i++) {
      var annotationX = this.state.annotations[i].x * (this.state.image.w / this.state.image.og_w);
      var annotationY = this.state.annotations[i].y * (this.state.image.h / this.state.image.og_h);
      ctx.fillText(this.state.annotations[i].label, annotationX, annotationY );
    }
  }

  render() {
    return (
      <div className="annotation-player">
        <canvas ref="canvas" width={this.state.image.w} height={this.state.image.h} />
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
