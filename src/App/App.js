import React from 'react';
import './App.scss';

import GoatCorral from '../components/GoatCorral/GoatCorral';

import goatData from '../helpers/data/goatData';

class App extends React.Component {
  state = {
    goats: [],
  }

  // runs before first render
  // when app component gets put onto the dom
  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    const { goats } = this.state;
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <GoatCorral goats={goats}/>
      </div>
    );
  }
}

export default App;
