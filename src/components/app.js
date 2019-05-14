import React from 'react';
import '../style/app.css';
import { connect } from 'react-redux';

// import components
import Keypad from '../components/keypad';
import GameDisplay from '../components/game-display';
import Stats from '../components/stats';


class App extends React.Component {

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
