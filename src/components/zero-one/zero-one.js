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
                        <div className='col-sm-12 game-display'>
                            <GameDisplay />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6 stats'>
                            <Stats />
                        </div>
                        <div className='col-sm-6 key-pad'>
                            <Keypad />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(ZeroOne)
