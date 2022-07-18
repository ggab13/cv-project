import React, { Component } from 'react';
import styles from '../styles/GeneralInformation.module.scss';
class GeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Gabor',
      lastName: 'Guban',
      phoneNumber: '00',
      email: 'example@gmail.com',
      mode: 'edit',
    };

    //this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  // While i change the value of the input, i should also change the value of this state
  handleChange() {}
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  handleFirstNameChange = (event) => {
    console.log(this.state);
    this.setState({
      firstName: event.target.value,
    });
  };
  handleLastNameChange = (event) => {
    console.log(this.state);
    this.setState({
      firstName: event.target.value,
    });
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSave() {
    console.log(this);
    this.setState({ text: this.state.inputText, mode: 'view' });
  }

  handleEdit() {
    this.setState({ mode: 'edit' });
  }
  // Some logic we haven't yet talked about.
  render() {
    if (this.state.mode === 'edit') {
      return (
        <div className={styles['general-form']}>
          <form onSubmit={this.handleSubmit}>
            {/* Some logic we haven't yet talked about. */}
            <input
              type="text"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
            ></input>
            <input
              type="text"
              placeholder="First Name"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
            ></input>
            <input type="text" placeholder="Phone Number"></input>
            <input type="text" placeholder="Email"></input>
            {/* <button type="submit" onClick={this.props.onButtonClicked}>
              Click Me!
            </button> */}
            <button onClick={this.handleSave}>Save</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className={styles['general-form__body']}>
          <p>{this.state.firstName}</p>
          <p>{this.state.lastName}</p>
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      );
    }
  }
}

export default GeneralInformation;
