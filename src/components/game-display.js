import '../style/game-display.css';
import { getPlayerScore, getPlayerName } from '../redux/selectors';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import store from '../redux/store';

class GameDisplay extends Component {
    componentDidMount() {
        console.log(store.getState());
    }
    render() {
        const { playerScoreLeft, playerName } = this.props.gameInfo;
        const id = this.props.playerId;
        console.log(this.props);
        return (
            <div className='game-display table-responsive' >
                <table className='table'>
                    <thead className='player-name'>{playerName[id]}</thead>
                    <tbody className='score-display'>
                        <tr className='score-row'>
                            <td className='score-entered'></td>
                            <td className='score-left'>{playerScoreLeft[id]}</td>
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
        playerName: getPlayerName(state),
    }
    return { gameInfo };
};

export default connect(mapStateToProps)(GameDisplay);