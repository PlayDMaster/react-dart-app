import '../style/game-setup.css';

import React, { Component } from 'react'
import { connect } from 'tls';

export default class GameSetup extends Component {
    constructor(props) {
        super(props);

        this.setGameType = this.setGameType.bind(this);

    }


    render() {
        return (
            <div>
                <form id='game-setup-form' className='game-setup'>
                    <label>
                        Choose game type:
                <select onChange={ev => this.setGameType(ev.target.value)}>
                            <option value='301'>301</option>
                            <option value='501'>501</option>
                            <option value='701'>701</option>
                        </select>
                    </label>
                </form>
            </div>
        )
    }
}

export default connect(null, { setGameType })(GameSetup)