import '../../style/zero-one.css';

// import components
import GameDisplay from '../helpers/game-display';
import Keypad from '../helpers/keypad';
import Stats from '../helpers/stats';

import React, { Component } from 'react'
import { connect } from 'react-redux';

export class ZeroOne extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 game-display'>
                            <GameDisplay activePlayer={'player1'} />
                        </div>
                        <div className='col-sm-6 game-display'>
                            <GameDisplay activePlayer={'player2'} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-4 stats'>
                            <Stats activePlayer={'player1'} />
                        </div>
                        <div className='col-sm-4 key-pad'>
                            <Keypad />
                        </div>
                        <div className='col-sm-4 stats'>
                            <Stats activePlayer={'player2'} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(ZeroOne)
