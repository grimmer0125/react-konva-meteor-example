import React from 'react';
import ReactDOM from 'react-dom';
import {Layer, Rect, Stage, Group} from 'react-konva';



class MyRect extends React.Component {
  state = { color: 'green' };

  handleClick = () => {
    // window.Konva is a global variable for Konva framework namespace
    this.setState({
      color: window.Konva.Util.getRandomColor()
    });
  }

  render() {
    return (
      <Rect
        x={10}
        y={10}
        width={50}
        height={50}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Stage width={700} height={700}>
        <Layer>
          <MyRect />
        </Layer>
      </Stage>
    );
  }
}
