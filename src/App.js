import React from 'react';
import './App.scss';
import { ModesCircle } from './components/modes.js'
import { NotesCircle } from './components/notes.js'
import { classicModes } from './variables/scales.js'


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMode: 'mayor (ionian)',
      currentNote: ['C'],
    };
  }

  changeMode(modeName) {
    this.setState({
      currentMode: modeName,
    });
  }

  changeNote(note) {
    this.setState({
      currentNote: note,
    });
  }

  render() {
    return (
        <div className='music-circle-section'>
          <div className='circle-container'>
            <ModesCircle className='modes-circle-component' modes={classicModes} changeMode={(modeName) => {this.changeMode(modeName)}}/>
            <div className='inner-circle'>
              <NotesCircle className='notes-circle-component' changeNote={(note) => {this.changeNote(note)}} />
            </div>
          </div>
          <div className='music-circle-text'>
            <p> { this.state.currentMode } { this.state.currentNote.join('/') }</p>
          </div>
        </div>
    );
  }
}
export default App;