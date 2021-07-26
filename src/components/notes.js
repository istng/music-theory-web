import React from 'react';
import { modulo } from '../utils/tools.js';


class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      american: props.american,
      buttonClassName: props.buttonClassName,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { 
      name: props.name,
      american: props.american,
      buttonClassName: props.buttonClassName,
    };  
  }

  render() {
    console.log(`rotate(${-1*this.props.buttonRotation}deg)`);
    let button;
    if (this.state.american.length === 2) {
      button = <button style={{ transform: `rotate(${-1*this.props.buttonRotation}deg)` }} className={ this.state.buttonClassName } onClick={this.props.rotate}> { this.state.american[0] } <br /> { this.state.american[1] } </button>
    } else {
      button = <button style={{ transform: `rotate(${-1*this.props.buttonRotation}deg)` }} className={ this.state.buttonClassName } onClick={this.props.rotate}> { this.state.american } </button>
    }
    return (
      <div>
        { button }
      </div>
    );
  }
}

export class NotesCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          name: ['do'],
          american: ['C'],
        }, {
          name: ['do#', 'reb'],
          american: ['C#', 'Db'],
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
      mainNoteIndex: 0,
    };
  }

  handleClick(noteClicked, index) {
    this.setState({
      mainNoteIndex: index,
    });
    this.props.changeNote(this.state.notes[index].american);
  }

  getCircleRotation() {
    return - (this.state.mainNoteIndex / this.state.notes.length) * 360;
  }

  render() {
    return (
        <div>
          <ul className="notes-circle" style={{ transform: `rotate(${this.getCircleRotation()}deg)` }}>
            { this.state.notes.map((note, index) => {
              let buttonClassName = 'note-button';
              if (this.props.intervals[modulo(index - this.state.mainNoteIndex, this.state.notes.length)]) {
                buttonClassName += ' colored-note-button';
              }
              return (
                <li key={index} >
                  <div className="li-content">
                    <Note 
                      name={note.name}
                      american={note.american}
                      buttonClassName={buttonClassName}
                      rotate={() => {this.handleClick(note, index)}}
                      buttonRotation={this.getCircleRotation()} />
                  </div>
                </li>
              );
            }) }
          </ul>
        </div>
    );
  }
}
