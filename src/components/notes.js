import React from 'react';
import { rotateArrayFromIndex } from '../utils/tools.js';


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
    let button;
    if (this.state.american.length === 2) {
      button = <button className={ this.state.buttonClassName } onClick={this.props.rotate}> { this.state.american[0] } <br /> { this.state.american[1] } </button>
    } else {
      button = <button className={ this.state.buttonClassName } onClick={this.props.rotate}> { this.state.american } </button>
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
      intervals: [true, false, true, false, true, true, false, true, false, true, false, true],
    };
  }

  handleClick(noteClicked) {
    if (noteClicked.index === 0) {
      return;
    }
    const newNotes = rotateArrayFromIndex(this.state.notes, noteClicked.index);
    this.setState({
      notes: newNotes,
    });
    this.props.changeNote(newNotes[0].american);
  }

  render() {
    return (
        <div>
          <ul className="notes-circle">
            { this.state.notes.map((note, index) => {
              let buttonClassName = 'note-button';
              if (this.props.intervals[index]) {
                buttonClassName += ' colored-note-button';
              }
              return (
                <li key={index}>
                  <div className="li-content">
                    <Note 
                      name={note.name}
                      american={note.american}
                      buttonClassName={buttonClassName}
                      rotate={() => {this.handleClick({...note, index: index})}}/>
                  </div>
                </li>
              );
            }) }
          </ul>
        </div>
    );
  }
}
