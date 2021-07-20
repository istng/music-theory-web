import React from 'react';
import '../styles/modes_table.scss';
import { rotateArrayFromIndex, exclusiveAndArray } from '../utils/tools.js';
import { classicModes } from '../variables/scales.js';


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
      modesNames: ['ionian', 'lydian', 'mixolydian', 'dorian', 'aeolian', 'phrygian', 'locrian'],
      currentMainNote: 'C',
      currentMainMode: 'ionian',
      currentMainIntervals: classicModes.find(mode => mode.name === 'ionian').intervals,
    };
  }

  changeMainMode(modeName) {
    this.setState({
      currentMainMode: modeName,
      currentMainIntervals: classicModes.find(mode => mode.name === modeName).intervals,
    });
  }

  changeMainNote(note, index) {
    if (index === 0) {
      return;
    }
    const newNotes = rotateArrayFromIndex(this.state.notes, index);
    this.setState({
      notes: newNotes,
      currentMainNote: note,
    });
  }

  getModeTableCell(currentCell, mainCurrentCell) {
    if (currentCell && mainCurrentCell) {
      return (
        <td className='colored-equal-cell'>
          O
        </td>
      );
    } else if(currentCell) {
      return (
        <td className='colored-different-cell'>
          E
        </td>
      );
    } else {
      return (
        <td className='uncolored-cell'>
        </td>
      );
    }
  }

  renderModeRow(modeName) {
    let intervals = classicModes.find(mode => mode.name === modeName).intervals;
    let equalIntervals = exclusiveAndArray(intervals, this.state.currentMainIntervals);
    return (
      <tr>
        <td>
          <button className='modes-table-mode-button' onClick={() => this.changeMainMode(modeName)}>
            <div className='desktop-name'>
              { modeName }
            </div>
            <div className='mobile-name'>
              { modeName[0] }
            </div>
          </button>
        </td>
        { intervals.map((value, index) => {
          return this.getModeTableCell(value, equalIntervals[index])
        }) }
      </tr>
    );
  }

  renderNote(american) {
    if(american.length === 2) {
      return (
        <div>
          { american[0] }
          <br />
          { american[1] }
        </div>
      );
    } else {
      return (
        <div>
          { american[0] }
        </div>
      );
    }
  }

  render() {
    return (
        <div className='modes-table-container'>
          <table className='modes-table'>
            <thead className='notes-header'>
              <tr>
                <th>  </th>
                { this.state.notes.map((note, index) => {
                  return (
                    <th>
                      <button className='modes-table-note-button' onClick={() => this.changeMainNote(note, index)}>
                        { this.renderNote(note.american) }
                      </button>
                    </th>
                  );
                }) }
              </tr>
            </thead>
            <tbody className='modes-body'>
              { this.state.modesNames.map((name) => {
                return (
                  this.renderModeRow(name)
                );
              }) }
            </tbody>
          </table>
        </div>
    );
  }
}
export default ModesTable;