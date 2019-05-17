import React from 'react';
import '../../style/app.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';

// import components
import ZeroOne from '../zero-one/zero-one';
import GameSetup from '../game-setup/game-setup';
import OneTwentyOne from '../121/one-twenty-one';
import Bobs27 from '../bobs27/bobs27';
import Holyoake from '../holyoake/holyoake';
import Birds from '../birds/birds';

const Menu = withRouter(GameSetup);

export class App extends React.Component {

  render() {
    return (
      <div className="app container-fluid">
        <header className="app-header">
          <h1>Dart App</h1>
        </header>
        <div className='container'>
          <BrowserRouter>
            <Route path='/501' component={ZeroOne} />
            <Route path='/121' component={OneTwentyOne} />
            <Route path='/Bobs27' component={Bobs27} />
            <Route path='/Holyoake' component={Holyoake} />
            <Route path='/Birds' component={Birds} />
            <Menu />
          </BrowserRouter>
        </div>
      </div>
    );
  }
};


export default connect()(App);
