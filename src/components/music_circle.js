import React from 'react';
import '../styles/music_circle_section.scss';
import '../styles/music_circle.scss';
import { ModesCircle } from './modes.js'
import { NotesCircle } from './notes.js'
import { classicModes } from '../variables/scales.js'


export class MusicCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMainMode: classicModes[0],
      currentMainNote: ['C'],
    };
  }

  changeMode(mode) {
    this.setState({
      currentMainMode: mode,
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
          <div className='music-circle-text'>
            <p> The current mode is { this.state.currentMainNote.join('/') } { this.state.currentMainMode.name } </p>
          </div>
          <div className='circle-container'>
            <ModesCircle className='modes-circle-component' modes={classicModes} changeMode={(mode) => {this.changeMode(mode)}}/>
            <div className='inner-circle'>
              <NotesCircle className='notes-circle-component' intervals={this.state.currentMainMode.intervals} changeNote={(note) => {this.changeNote(note)}} />
            </div>
          </div>
        </div>
    );
  }
}
export default MusicCircle;