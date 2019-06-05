import '../../style/keypad.css';
import React, { Component } from 'react'
import { subtractScore, doubleHit, newGame, shotAtDouble } from '../../redux/actions';
import { connect } from 'react-redux';
import { getGameType, getScoreLeft, getGameId } from '../../redux/selectors';
import Modal from 'react-bootstrap/Modal';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import Button from 'react-bootstrap/Button';

export class Keypad extends Component {

    constructor(props) {
        super(props);

        this.state = {
            keypadDefinedScores: [26, 45, 60, 81, 85, 100, 140, 180],
            lastScore: 0,
            gameIdChecker: 0,
            show: false,
            shotsAtDouble: 0
        }
        this.checkScore = this.checkScore.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.addNumKey = this.addNumKey.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        this.addDouble = this.addDouble.bind(this);

        // modal methods
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.checkForEndOfGame = this.checkForEndOfGame.bind(this);
    };

    //check to make sure score is valid
    checkScore = (score) => {
        let scoreNumber = parseInt(score)
        if (typeof scoreNumber != 'number') {
            return false
        } else if (scoreNumber > 180) {
            return false
        } else {
            return true;
        }
    }

    handleClick = (ev) => {
        console.log(ev)
        ev.preventDefault();

        // check if game is over... if true, create new game
        if (this.state.gameIdChecker !== this.props.gameId) {
            this.props.newGame(this.props.gameType, this.props.gameId);
            this.setState({ gameIdChecker: this.state.gameIdChecker + 1 })
        }

        // grab value from input box
        let elem = document.getElementById('kpInput');
        let scoreCheck = this.checkScore(elem.value)

        //subtract score and reset input values
        if (scoreCheck) {
            this.props.subtractScore(elem.value, this.props.gameType, this.props.gameId);
            this.setState({ lastScore: elem.value })
            this.checkForEndOfGame(this.props.scoreLeft);
        } else {
            alert("Enter a number!");
        }

        elem.value = '';
        elem.focus();
    };

    // increment shots at double
    addDouble = (val) => {
        this.setState({ shotsAtDouble: this.state.shotsAtDouble + val })
    }

    //add values from keypad buttons
    addNum = ev => {
        const elem = document.getElementById('kpInput');
        elem.value += ev.target.value;
    }

    //add values from keyboard
    addNumKey = ev => {
        ev.preventDefault();
        const elem = document.getElementById('kpInput');
        elem.value += ev.key;
    }

    //add event listener for keypress
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    //release event listener for keypress
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    //check if score left is 0, if so request for shots at double and register double hit
    componentDidUpdate() {
        this.checkForEndOfGame();
    }

    checkForEndOfGame = (scoreLeft) => {
        if (scoreLeft <= 50) {
            this.handleShow();
            if (scoreLeft === 0) {
                this.props.doubleHit(this.state.lastScore, this.props.gameType, this.props.gameId)
            }
        }
    }

    //hide modal
    handleClose() {
        this.props.shotAtDouble(this.state.shotsAtDouble, this.props.gameType);
        this.setState({ show: false });
    }

    //show modal
    handleShow() {
        this.setState({ show: true });
    }

    //listener for keypress
    handleKeyPress(ev) {
        switch (ev.key) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                this.addNumKey(ev);
                break;
            case 'Enter':
                this.handleClick(ev);
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className='key-pad-box'>
                <form className='key-pad-form' id='keypad' method='POST'>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpds0' onClick={this.addNum} value={this.state.keypadDefinedScores[0]}>{this.state.keypadDefinedScores[0]}</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp7' value={7} onClick={this.addNum}>7</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp8' value={8} onClick={this.addNum}>8</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp9' value={9} onClick={this.addNum}>9</button>
                        </div>

                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpds4' onClick={this.addNum} value={this.state.keypadDefinedScores[4]}>{this.state.keypadDefinedScores[4]}</button>
                        </div>
                        <div className='col-sm-1'></div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpds1' onClick={this.addNum} value={this.state.keypadDefinedScores[1]}>{this.state.keypadDefinedScores[1]}</button>
                        </div>

                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp7' value='4' onClick={this.addNum}>4</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp8' value={5} onClick={this.addNum}>5</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp9' value={6} onClick={this.addNum}>6</button>
                        </div>

                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpds5' onClick={this.addNum} value={this.state.keypadDefinedScores[5]}>{this.state.keypadDefinedScores[5]}</button>
                        </div>
                        <div className='col-sm-1'></div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpds2' onClick={this.addNum} value={this.state.keypadDefinedScores[2]}>{this.state.keypadDefinedScores[2]}</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp7' value='1' onClick={this.addNum}>1</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp8' value={2} onClick={this.addNum}>2</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp9' value={3} onClick={this.addNum}>3</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpds6' onClick={this.addNum} value={this.state.keypadDefinedScores[6]}>{this.state.keypadDefinedScores[6]}</button>
                        </div>
                        <div className='col-sm-1'></div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpds3' onClick={this.addNum} value={this.state.keypadDefinedScores[3]}>{this.state.keypadDefinedScores[3]}</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kp0' value={0} onClick={this.addNum}>0</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <input type='number' id='kpInput' autoFocus />
                        </div>
                        <div className='col-sm-2 button-div enter-button'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpEnter' onClick={this.handleClick}>Enter</button>
                        </div>
                        <div className='col-sm-2 button-div'>
                            <button type="button" className="btn btn-outline-light btn-lg" id='kpds7' onClick={this.addNum} value={this.state.keypadDefinedScores[7]}>{this.state.keypadDefinedScores[7]}</button>
                        </div>
                        <div className='col-sm-1'></div>
                    </div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>How many darts at a double?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ToggleButtonGroup type='radio' value={this.state.shotsAtDouble} name='shotsAtDouble' onChange={this.addDouble}>
                                <ToggleButton value={0} name='shotsAtDouble' variant='success'>0</ToggleButton>
                                <ToggleButton value={1} name='shotsAtDouble' variant='success'>1</ToggleButton>
                                <ToggleButton value={2} name='shotsAtDouble' variant='success'>2</ToggleButton>
                                <ToggleButton value={3} name='shotsAtDouble' variant='success'>3</ToggleButton>
                            </ToggleButtonGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.handleClose}>
                                Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </form>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    gameType: getGameType(state),
    scoreLeft: getScoreLeft(state, getGameType(state)),
    gameId: getGameId(state, getGameType(state))
})

export default connect(mapStateToProps, { subtractScore, doubleHit, newGame, shotAtDouble })(Keypad);
