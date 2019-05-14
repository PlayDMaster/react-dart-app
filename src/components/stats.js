import '../style/stats.css';

import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    getMarker100,
    getMarker140,
    getMarker170,
    getMarker180,
    getPlayerScores
} from '../redux/selectors';

export class Stats extends Component {
    render() {
        const { tonTo139, ton40To169, ton70To179, ton80, playerScores } = this.props.statsInfo;

        const average = (playerScores.length > 1) ? playerScores.reduce((acc, curr) => acc += curr) / playerScores.length :
            (playerScores.length > 0) ? playerScores[0] : 0

        return (
            <div className='stats-box'>
                <div className='stats-row'>
                    <p>3 dart avg: {average.toFixed(2)}</p>
                    <p>100+: {tonTo139}</p>
                    <p>140+: {ton40To169}</p>
                    <p>170+: {ton70To179}</p>
                    <p>180: {ton80}</p>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    const { activePlayer } = ownProps;
    const statsInfo = {
        tonTo139: getMarker100(state, activePlayer),
        ton40To169: getMarker140(state, activePlayer),
        ton70To179: getMarker170(state, activePlayer),
        ton80: getMarker180(state, activePlayer),
        playerScores: getPlayerScores(state, activePlayer)
    }
    return { statsInfo };
};

export default connect(mapStateToProps)(Stats); 
