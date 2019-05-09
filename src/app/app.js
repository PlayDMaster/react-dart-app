import React from 'react';
import './app.css';
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends React.Component {

  constructor(props) {
    super(props);
    http.getPlayers();
  }

  render() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Dart App</h1>
      </header>
    </div>
  );
}
}

export default App;
