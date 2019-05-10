import '../style/scores.css';

import React, { Component } from 'react'

export default class Scores extends Component {
    render() {
        return (
            <div className='score-display'>
                <h1>Scores for {this.props.player}</h1>
                <p>{this.props.scores}</p>
                <p>Scores shot on {this.props.date}</p>
                <p>Playing a game of {this.props.game}</p>
            </div>
        )
    }
}
