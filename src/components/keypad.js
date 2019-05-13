import '../style/keypad.css';
import React, { Component } from 'react'
import { subtractScore } from '../redux/actions';
import { connect } from 'react-redux';

export class Keypad extends Component {

    constructor(props) {
        super(props);

        this.state = {
            keypadDefinedScores: [26, 45, 60, 81, 85, 100, 140, 180],
            input: '',
            player: 0
        }
    };

    updateInput = input => {
        this.setState({ input });
    };

    handleClick = ev => {
        ev.preventDefault();
        if (this.state.player) {
            this.props.subtractScore(this.state.player, this.state.input);
            this.setState({ player: - 1 });
        } else {
            this.props.subtractScore(this.state.player, this.state.input);
            this.setState({ player: + 1 });
        }
        this.setState({ input: '' });
    };

    render() {
        return (
            <div className='key-pad-box'>
                <form className='key-pad-form' id='keypad' method='POST'>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpds0'>{this.state.keypadDefinedScores[0]}</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp7' value={7}>7</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp8' value={8}>8</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp9' value={9}>9</button>
                        </div>

                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpds4'>{this.state.keypadDefinedScores[4]}</button>
                        </div>
                        <div className='col-sm-1'></div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpds1'>{this.state.keypadDefinedScores[1]}</button>
                        </div>

                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp7' value={4}>4</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp8' value={5}>5</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp9' value={6}>6</button>
                        </div>

                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpds5'>{this.state.keypadDefinedScores[5]}</button>
                        </div>
                        <div className='col-sm-1'></div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpds2'>{this.state.keypadDefinedScores[2]}</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp7' value={1}>1</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp8' value={2}>2</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp9' value={3}>3</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpds6'>{this.state.keypadDefinedScores[6]}</button>
                        </div>
                        <div className='col-sm-1'></div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpds3'>{this.state.keypadDefinedScores[3]}</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp0' value={1}>0</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <input type='number' min='0' max='180' id='kpInput' onChange={ev => this.updateInput(ev.target.value)} value={this.state.input} />
                        </div>
                        <div className='col-sm-2 button-div enter-button'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpEnter' onClick={this.handleClick}>Enter</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpds7'>{this.state.keypadDefinedScores[7]}</button>
                        </div>
                        <div className='col-sm-1'></div>
                    </div>
                </form>
            </div>

        )
    }
}

export default connect(null, { subtractScore })(Keypad);
