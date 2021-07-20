import React from 'react';
import { rotateArrayFromIndex } from '../utils/tools.js';


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
      mainMode: props.modes[0],
    };
  }

  handleClick(modeClicked) {
    if (modeClicked.index === 0) {
      return;
    }
    const newModes = rotateArrayFromIndex(this.state.modes, modeClicked.index);
    this.setState({
      modes: newModes,
      mainMode: newModes[0],
    });
    this.props.changeMode(newModes[0].name);
  }

  getModeBackgroundColor(color, modeIndex) {
    return {
      background: color, 
      opacity: (100-3*(modeIndex+1)).toString()+'%',
    };
  }

  renderMode(mode, index) {
    if (mode.name) {
      return (
        <li style={this.getModeBackgroundColor(this.state.mainMode.color, index)} key={index} ><div className="li-content" > <Mode name={mode.name} tone={mode.tone} color={mode.color} rotate={() => {this.handleClick({...mode, index: index})}}/> </div></li>
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
          <ul className="modes-circle">
            { this.state.modes.map((mode, index) => {
              return this.renderMode(mode, index);
            }) }
          </ul>
        </div>
    );
  }
}