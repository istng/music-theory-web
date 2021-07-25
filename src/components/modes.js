import React from 'react';
import { modulo } from '../utils/tools.js';

class Mode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tone: props.tone,
      name: props.name,
      color: props.color,
    };
  }
  static getDerivedStateFromProps(props, state) {
    return { 
      tone: props.tone,
      name: props.name,
      color: props.color,
    };  
  }

  render() {
    let button;
    if (this.state.tone) {
      button = <button style={{background: this.state.color}} className="mode-button" onClick={this.props.rotate}> { this.state.tone } <br /> ({ this.state.name }) </button>;
    } else {
      button = <button style={{background: this.state.color}} className="mode-button" onClick={this.props.rotate}> { this.state.name } </button>;
    }
    return (
      <div>
      { button }
      </div>
    );
  }
}

export class ModesCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modes: props.modes,
      mainModeIndex: 0,
    };
  }

  handleClick(modeClicked, index) {
    this.setState({
      mainModeIndex: index,
    });
    this.props.changeMode(modeClicked);
  }

  getModeBackgroundColor(color, modeIndex) {
    return {
      background: color, 
      opacity: (100-3*(modeIndex+1)).toString()+'%',
    };
  }

  getMainMode() {
    return this.state.modes[this.state.mainModeIndex];
  }

  getCircleRotation() {
    return - (this.state.mainModeIndex / this.state.modes.length) * 360;
  }

  renderMode(mode, index) {
    if (mode.name) {
      return (
        <li
          style={this.getModeBackgroundColor(this.getMainMode().color, modulo(index - this.state.mainModeIndex, this.state.modes.length))}
          key={index}
        >
          <div className="li-content" data-index={(index - this.state.mainModeIndex) % this.state.modes.length}>
            {" "}
            <Mode
              name={mode.name}
              tone={mode.tone}
              color={mode.color}
              rotate={() => {
                this.handleClick(mode, index);
              }}
            />{" "}
          </div>
        </li>
      );
    } else {
      return (
        <li className='empty-mode-slot' key={index}><div className="li-content">  </div></li>
      );
    }
  }

  render() {
    return (
        <div>
          <ul className="modes-circle" style={{ transform: `rotate(${this.getCircleRotation()}deg)` }}>
            { this.state.modes.map((mode, index) => {
              return this.renderMode(mode, index);
            }) }
          </ul>
        </div>
    );
  }
}