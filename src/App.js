import React from 'react';
import './App.scss';
import { ModesCircle } from './components/modes.js'
import { NotesCircle } from './components/notes.js'
import { classicModes } from './variables/scales.js'


export class App extends React.Component {

  render() {
    return (
      <div>
        <ModesCircle modes={classicModes} />
        <NotesCircle />
      </div>
    );
  }
}
export default App;