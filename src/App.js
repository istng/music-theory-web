import React from 'react';
import './styles/app.scss';
import MusicCircle from './components/music_circle.js'
import ModesTable from './components/modes_table.js'


export class App extends React.Component {

  render() {
    return (
      <div className="app-music-tools">
        <MusicCircle />
        <ModesTable />
      </div>
    );
  }
}
export default App;