import React from 'react';
import './App.scss';
import { ModesCircle } from './components/modes.js'
import { NotesCircle } from './components/notes.js'
import { classicModes } from './variables/scales.js'


export class App extends React.Component {

  render() {
    return (
      <div className='outer-circles-container'>
      <div className='circles-container'>
        <ModesCircle className='modes-circle-component' modes={classicModes} />
        <NotesCircle className='notes-circle-component' />
      </div>
      </div>
    );
  }
}
export default App;