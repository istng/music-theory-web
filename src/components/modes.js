import React from 'react';


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
      button = <button className="mode-button" onClick={this.props.rotate}> { this.state.tone } <br /> ({ this.state.name }) </button>;
    } else {
      button = <button className="mode-button" onClick={this.props.rotate}> { this.state.name } </button>;
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
        <li style={{background: mode.color}} key={index} ><div className="li-content" > <Mode name={mode.name} tone={mode.tone} rotate={() => {this.handleClick({...mode, index: index})}}/> </div></li>
      );
    } else {
      return (
        <li style={{background: 'grey', opacity: '25%'}} key={index}><div className="li-content">  </div></li>
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