import React from 'react';
import { ModesCircle } from './modes.js'
import { NotesCircle } from './notes.js'
import { classicModes } from '../variables/scales.js'


export class MusicCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMainMode: 'mayor (ionian)',
      currentMainNote: ['C'],
    };
  }

  changeMode(modeName) {
    this.setState({
      currentMainMode: modeName,
    });
  }

  changeNote(note) {
    this.setState({
      currentMainNote: note,
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
            <p> { this.state.currentMainMode } { this.state.currentMainNote.join('/') }</p>
          </div>
        </div>
    );
  }
}
export default MusicCircle;