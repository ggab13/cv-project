import './App.css';
import React, { Component } from 'react';
import GeneralInformation from './components/GeneralInformation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fasz: 'Odin CV Project',
    };
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.fasz}</p>
        <GeneralInformation />
      </div>
    );
  }
}

export default App;
