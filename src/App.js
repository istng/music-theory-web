import React from 'react';
import './App.scss';


class Mode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tone: props.tone,
      name: props.name,
    };
  }
  static getDerivedStateFromProps(props, state) {
    return { 
      tone: props.tone,
      name: props.name,
    };  
  }

  render() {
    let button;
    if (this.state.tone) {
      button = <button onClick={this.props.rotate}> { this.state.tone } ({ this.state.name }) </button>;
    } else {
      button = <button onClick={this.props.rotate}> { this.state.name } </button>;
    }
    return (
      <div>
      { button }
      </div>
    );
  }
}

class ModesCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modes: [
        {
          tone: 'mayor',
          name: 'ionian',
        }, {
        }, {
          tone: null,
          name: 'dorian',
        }, {
        }, {
          tone: null,
          name: 'phrygian',
        }, {
          tone: null,
          name: 'lydian',
        }, {
        }, {
          tone: null,
          name: 'mixolydian',
        }, {
        }, {
          tone: 'natural minor',
          name: 'aeolian',
        }, {
        }, {
          tone: null,
          name: 'locrian',
        }
      ],
    };
  }

  handleClick(modeClicked) {
    if (modeClicked.index === 0) {
      return;
    }
    let firstPart = this.state.modes.slice(modeClicked.index);
    let secondPart = this.state.modes.slice(0, modeClicked.index);
    let newModes = firstPart.concat(secondPart);
    this.setState({
      modes: newModes,
    });
  }

  renderMode(mode, index) {
    if (mode.name) {
      return (
        <li key={index}> <Mode tone={mode.tone} name={mode.name} rotate={() => {this.handleClick({...mode, index: index})}} /> </li>
      );
    } else {
      return (
        <li key={index}> nada </li>
      );
    }
  }

  render() {

    return (
      <div>
        <div className="circleContainer">
          <ul className="circle">
            { this.state.modes.map((mode, index) => {
              return this.renderMode(mode, index);
            }) }
          </ul>
        </div>
      </div>
    );
  }
}


export class App extends React.Component {

  render() {
    return (
      <div>
        <ModesCircle />
      </div>
    );
  }
}
export default App;