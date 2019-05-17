import '../../style/game-setup.css';

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setGameType } from '../../redux/actions';

export class GameSetup extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        const elem = document.getElementById('game-select');
        this.props.setGameType(elem.value);
        this.props.history.push(`/${elem.value}`);
    }

    render() {
        return (
            <div>
                <form id='game-setup-form' className='game-setup form-group'>
                    <label>
                        Choose game type:
                        <select id='game-select'>
                            <option value='501'>501</option>
                            <option value='bobs27'>Bob's 27</option>
                            <option value='121'>121</option>
                            <option value='holyoake'>Holyoake</option>
                            <option value='birds'>Birds</option>
                        </select>
                    </label>
                    <button type='button' onClick={this.handleClick}>Select Game</button>
                </form>
            </div>
        )
    }
}


export default connect(null, { setGameType })(GameSetup)