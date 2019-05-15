import '../style/stats.css';

import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    getMarker100,
    getMarker140,
    getMarker170,
    getMarker180,
    getPlayerAverage
} from '../redux/selectors';

export class Stats extends Component {
    render() {
        const { tonTo139, ton40To169, ton70To179, ton80, average } = this.props.statsInfo;

        // const average = (playerScores.length > 1) ? playerScores.reduce((acc, curr) => acc += curr) / playerScores.length :
        //     (playerScores.length > 0) ? playerScores[0] : 0

        return (
            <div className='stats-box'>
                <div className='row'>
                    <div className='col-sm-6 marker'>
                        <p>3 dart avg:</p>
                    </div>
                    <div className='col-sm-6 stat'>
                        <p>{average.toFixed(2)}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 marker'>
                        <p>100+:</p>
                    </div>
                    <div className='col-sm-6 stat'>
                        <p>{tonTo139}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 marker'>
                        <p>140+:</p>
                    </div>
                    <div className='col-sm-6 stat'>
                        <p>{ton40To169}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 marker'>
                        <p>170+:</p>
                    </div>
                    <div className='col-sm-6 stat'>
                        <p>{ton70To179}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 marker'>
                        <p>180:</p>
                    </div>
                    <div className='col-sm-6 stat'>
                        <p>{ton80}</p>
                    </div>
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
        average: getPlayerAverage(state, activePlayer)
    }
    return { statsInfo };
};

export default connect(mapStateToProps)(Stats); 
