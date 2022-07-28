import './App.scss';
import React, { Component } from 'react';
import GeneralInformation from './components/GeneralInformation';
import EducationalExperience from './components/EducationalExperience';
import editIcon from './edit.png';
import previewIcon from './preview.png';
import WorkExperience from './components/WorkExperience';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      odin: 'Odin CV Project',
      mode: 'edit',
    };
    this.handleView = this.handleView.bind(this);
  }
  handleView() {
    if (this.state.mode === 'edit') {
      this.setState({ mode: 'view' });
    } else {
      this.setState({ mode: 'edit' });
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <div className="view-mode">
            <button onClick={this.handleView}>
              {this.state.mode === 'edit' ? 'Edit ' : 'View '}
              <img
                src={this.state.mode === 'edit' ? editIcon : previewIcon}
              ></img>
            </button>
          </div>
          <h1 className="odin">{this.state.odin}</h1>
        </header>
        <div className={this.state.mode === 'edit' ? '' : 'cv-grid'}>
          <div className="cv-grid__left">
            <GeneralInformation mode={this.state.mode} />
          </div>
          <div className="cv-grid__right">
            <EducationalExperience mode={this.state.mode} />
            <WorkExperience mode={this.state.mode} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
