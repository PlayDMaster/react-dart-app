import '../style/game-display.css';
import { getPlayerScore, getPlayerName, getPlayerScores } from '../redux/selectors';
import React, { Component } from 'react'
import { connect } from 'react-redux';

class GameDisplay extends Component {
    render() {
        const { playerScoreLeft, playerName, playerScores } = this.props.gameInfo;

        const rowOfScores = (score, scoreLeft, key) => (
            <tr className='score-row' key={`${playerName}-row-${key}`}>
                <td key={`${playerName}-score-${key}`}>{score}</td>
                <td key={`${playerName}-scoreLeft-${key}`}>{scoreLeft}</td>
            </tr>
        )

        return (
            <div className='game-display table-responsive' >
                <table className='table'>
                    <thead className='player-name'>{playerName}</thead>
                    <tbody className='score-display'>
                        <tr className='score-row'>
                            <td className='score-entered'></td>
                            <td className='score-left'>501</td>
                        </tr>
                        {
                            playerScores ?
                                playerScores.map((val, idx) => {
                                    return rowOfScores(val, playerScoreLeft, idx)
                                })
                                : 'no score entered'
                        }
                    </tbody>
                </table>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    const { activePlayer } = ownProps;
    const gameInfo = {
        playerName: getPlayerName(state, activePlayer),
        playerScoreLeft: getPlayerScore(state, activePlayer),
        playerScores: getPlayerScores(state, activePlayer)
    }
    return { gameInfo };
};

export default connect(mapStateToProps)(GameDisplay);