import React from 'react';
import { classicModes } from '../variables/scales.js'


export class ModesTable extends React.Component {
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
    };
  }


  renderModeRow(modeIndex) {

  }

  render() {
    return (
        <div className='modes-table'>
          <table>
            <thead>
              <th> Mode </th>
              { this.state.notes.map((note) => {
                return (
                  <th> { note.american }</th>
                );
              }) }
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
    );
  }
}
export default ModesTable;