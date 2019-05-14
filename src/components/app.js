import React from 'react';
import '../style/app.css';
import { connect } from 'react-redux';

// import components
import Keypad from '../components/keypad';
import GameDisplay from '../components/game-display';
import Stats from '../components/stats';

// import http service
import HttpService from '../services/http-service';
const http = new HttpService();


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { scores: [] }

    this.loadPlayerData = this.loadPlayerData.bind(this);
    this.loadScoresData = this.loadScoresData.bind(this);
    this.loadGamesPlayedData = this.loadGamesPlayedData.bind(this);

    // this.scoresList = this.scoresList.bind(this);

    this.loadPlayerData();
    this.loadGamesPlayedData();
    this.loadScoresData();


  }

  loadPlayerData = () => {
    let self = this;
    http.getPlayers().then(player => {
      console.log(player)
    }, err => {
      console.log('Player not found')
    })
  }

  loadScoresData = () => {
    let self = this;
    http.getScores().then(data => {
      self.setState({ scores: data })
    }, err => {
      console.log('Scores not found')
    })
  }

  loadGamesPlayedData = () => {
    let self = this;
    http.getGamesPlayed().then(gamesPlayed => {
      console.log(gamesPlayed)
    }, err => {
      console.log('Games not found');
    })
  }

  // scoresList = () => {
  //   const list = this.state.scores.map(scores =>
  //     <div key={scores._id}>
  //       <Scores scores={scores.scores}
  //         player={scores.player.name}
  //         date={scores.game.datePlayed}
  //         game={scores.game.gameType} />
  //     </div>
  //   )
  //   return (list);
  // }
  render() {
    return (
      <div className="app container-fluid">
        <header className="app-header">
          <h1>Dart App</h1>
        </header>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 game-display'>
              <GameDisplay playerId={0} />
            </div>
            <div className='col-sm-6 game-display'>
              <GameDisplay playerId={1} />
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-4 stats'>
              <Stats />
            </div>
            <div className='col-sm-4 key-pad'>
              <Keypad />
            </div>
            <div className='col-sm-4 stats'>
              <Stats />
            </div>
          </div>
        </div>
      </div>
    );
  }
};


export default connect()(App);
