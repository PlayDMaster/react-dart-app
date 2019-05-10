import './game-display.css';

import React, { Component } from 'react'

export class GameDisplay extends Component {
    render() {
        return (
            <div className='game-display table-responsive'>
                <table className='table'>
                    <thead className='player-name'>Scott Lee</thead>
                    <tbody className='score-display'>
                        <tr className='score-row'>
                            <td className='score-entered' id>12</td>
                            <td className='score-left' id>323</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default GameDisplay;