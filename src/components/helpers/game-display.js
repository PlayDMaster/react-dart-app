import '../../style/game-display.css';
import { getPlayerName, getPlayerScores, getGameType, getGameId } from '../../redux/selectors';
import React, { Component } from 'react'
import { connect } from 'react-redux';

export class GameDisplay extends Component {
    render() {

        const { playerName, playerScores, gameType, gameId } = this.props.gameInfo;

        let gameScore = parseInt(gameType);

        const subtractScore = (score) => {
            return gameScore -= score;
        }
        const rowOfScores = (score, key) => (
            <tr className='score-row' key={`${playerName}-row-${key}`} id='score-left-row'>
                <td key={`${playerName}-score-${key}`}>{score}</td>
                <td key={`${playerName}-scoreLeft-${key}`}>{subtractScore(score)}</td>
            </tr>
        )

        return (
            <div className='game-display' >
                <table className='table'>
                    <thead className='player-name'>
                        <tr>
                            <th>{playerName}</th>
                            <th>{gameType}</th>
                        </tr>
                    </thead>
                    <tbody className='score-display'>
                        {
                            playerScores[gameId] ?
                                playerScores[gameId].map((val, idx) => {
                                    return rowOfScores(val, idx)
                                })
                                : ''
                        }
                    </tbody>
                </table>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    const gameInfo = {
        gameType: getGameType(state),
        playerName: getPlayerName(state),
        playerScores: getPlayerScores(state, getGameType(state)),
        gameId: getGameId(state, getGameType(state))
    }
    return { gameInfo };
};

export default connect(mapStateToProps)(GameDisplay);