import '../style/game-display.css';
import { getPlayerScore, getPlayerName } from '../redux/selectors';
import React, { Component } from 'react'
import { connect } from 'react-redux';

class GameDisplay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { playerScoreLeft, playerName } = this.props.gameInfo;
        const id = this.props.player;
        console.log(this.props);
        return (
            <div className='game-display table-responsive' >
                <table className='table'>
                    <thead className='player-name'>{playerName[id]}</thead>
                    <tbody className='score-display'>
                        <tr className='score-row'>
                            <td className='score-entered' id></td>
                            <td className='score-left' id>{playerScoreLeft[id]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
};

const mapStateToProps = state => {
    const gameInfo = {
        playerScoreLeft: getPlayerScore(state),
        playerName: getPlayerName(state)
    }
    return { gameInfo };
};

export default connect(mapStateToProps)(GameDisplay);