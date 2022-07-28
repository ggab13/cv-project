import React, { Component } from 'react';
import styles from '../styles/GeneralInformation.module.scss';
import profile from '../profile.png';
class GeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Gabor',
      lastName: 'Guban',
      phoneNumber: '06201234567',
      email: 'example@gmail.com',
    };

    //this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  // While i change the value of the input, i should also change the value of this state

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
    console.log(event.target.name);
    console.log(this.state);
    this.setState({
      lastName: event.target.value,
    });
  };
  handlePhoneNumberChange = (event) => {
    console.log(this.state);
    this.setState({
      phoneNumber: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    console.log(this.state);
    this.setState({
      email: event.target.value,
    });
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSave() {
    console.log(this.state.mode);
    this.setState({ mode: 'view' });
  }

  handleEdit() {
    console.log(this.state.mode);
    this.setState({ mode: 'edit' });
  }

  render() {
    if (this.props.mode === 'edit') {
      return (
        <div className={styles['general-form__edit']}>
          <form onSubmit={this.handleSubmit}>
            <h2>General Information</h2>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
            ></input>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
            ></input>
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              id="phoneNumber"
              type="text"
              placeholder="Phone Number"
              value={this.state.phoneNumber}
              onChange={this.handlePhoneNumberChange}
            ></input>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            ></input>
            {/* <button type="submit" onClick={this.props.onButtonClicked}>
              Click Me!
            </button> */}
            {/*  <button onClick={this.handleSave}>Save</button>*/}
          </form>
        </div>
      );
    } else {
      return (
        <div className={styles['general-form__view']}>
          <img alt="Profile" src={profile}></img>
          <div className={styles['general-form__view__basics']}>
            <div className={styles['general-form__view__name']}>
              <h3>
                {this.state.firstName} {this.state.lastName}
              </h3>
              <h4>
                <span>W</span>eb <span>D</span>eveloper
              </h4>
            </div>
            <h2>Contact Me</h2>
            <p>{this.state.phoneNumber}</p>
            <p>{this.state.email}</p>
          </div>
          <div className={styles['general-form__view__skills']}>
            <h2>Skills</h2>
            <p>Creative</p>
            <p>Teamwork</p>
            <p>Cooking</p>
            <p>Music</p>
          </div>
          <div className={styles['general-form__view__reference']}>
            <h2>Reference</h2>
            <p>LOREM IPSUM</p>
            <p>+123 4567 8910</p>
            <p>Budapest</p>
            <p>reference@email@com</p>
          </div>
          {/*  <button onClick={this.handleEdit}>Edit</button> */}
        </div>
      );
    }
  }
}

export default GeneralInformation;
