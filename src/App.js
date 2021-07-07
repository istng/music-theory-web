import React from 'react';
import './App.scss';


class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      american: props.american,
    };
  }
  static getDerivedStateFromProps(props, state) {
    return { 
      name: props.name,
      american: props.american,
    };  
  }

  render() {
    return (
      <div>
        <button onClick={this.props.rotate}> { this.state.american } </button>
      </div>
    );
  }
}


class NotesCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          name: ['do'],
          american: ['C'],
        }, {
          name: ['do#', 'reb'],
          american: ['do#', 'Db'],
        }, {
          name: ['re'],
          american: ['D'],
        }, {
          name: ['re#', 'mib'],
          american: ['D#', 'Eb'],
        }, {
          name: ['mi'],
          american: ['E'],
        }, {
          name: ['fa'],
          american: ['F'],
        }, {
          name: ['fa#', 'solb'],
          american: ['F#', 'Gb'],
        }, {
          name: ['sol'],
          american: ['G'],
        }, {
          name: ['sol#', 'lab'],
          american: ['G#', 'Ab'],
        }, {
          name: ['la'],
          american: ['A'],
        }, {
          name: ['la#', 'sib'],
          american: ['A#', 'Bb'],
        }, {
          name: ['si'],
          american: ['B'],
        }
      ],
    };
  }

  handleClick(noteClicked) {
    if (noteClicked.index === 0) {
      return;
    }
    let firstPart = this.state.notes.slice(noteClicked.index);
    let secondPart = this.state.notes.slice(0, noteClicked.index);
    let newNotes = firstPart.concat(secondPart);
    this.setState({
      notes: newNotes,
    });
  }

  render() {

    return (
      <div>
        <div className="circle-container">
          <ul className="circle-notes">
            { this.state.notes.map((note, index) => {
              return (
                <li key={index}>
                  <Note name={note.name} american={note.american} rotate={() => {this.handleClick({...note, index: index})}}/>
                </li>
              );
            }) }
          </ul>
        </div>
      </div>
    );
  }
}

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
        <div className="circle-container">
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
        <NotesCircle />
      </div>
    );
  }
}
export default App;