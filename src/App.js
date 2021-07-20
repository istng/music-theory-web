import React from 'react';
import MusicCircle from './components/music_circle.js'
import ModesTable from './components/modes_table.js'


export class App extends React.Component {

  render() {
    return (
      <div>
        <MusicCircle />
        <ModesTable />
      </div>
    );
  }
}
export default App;