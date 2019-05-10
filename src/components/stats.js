import '../style/stats.css';

import React, { Component } from 'react'

export class Stats extends Component {
    render() {
        return (
            <div className='stats-box'>
                <div className='stats-row'>
                    <p>100+: </p>
                    <p>140+: </p>
                    <p>170+: </p>
                    <p>180: </p>
                    <p>High Finish: </p>
                    <p>Double %: </p>
                </div>
            </div>
        )
    }
}

export default Stats; 
