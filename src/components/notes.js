import React from 'react';


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
          <ul className="notes-circle">
            { this.state.notes.map((note, index) => {
              return (
                <li key={index}>
                  <Note name={note.name} american={note.american} rotate={() => {this.handleClick({...note, index: index})}}/>
                </li>
              );
            }) }
          </ul>
        </div>
    );
  }
}
