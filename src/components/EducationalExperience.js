import React, { Component } from 'react';
import styles from '../styles/EducationalExperience.module.scss';
import uniqid from 'uniqid';

class EducationalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: {
        id: uniqid(),
        schoolName: 'Szabó Lőrincz',
        location: 'Balassagyarmat',
        dateFrom: '2001',
        dateTo: '2005',
      },
      schools: [],
    };

    this.handleSchoolNameChange = this.handleSchoolNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleDateFromChange = this.handleDateFromChange.bind(this);
    this.handleDateToChange = this.handleDateToChange.bind(this);
    this.onSubmitSchool = this.onSubmitSchool.bind(this);
  }

  onSubmitSchool(e) {
    e.preventDefault();

    this.setState({
      schools: this.state.schools.concat(this.state.school),
      school: {
        id: uniqid(),
        schoolName: '',
        location: '',
        dateFrom: '',
        dateTo: '',
      },
    });
  }

  handleSchoolNameChange = (event) => {
    this.setState({
      school: {
        id: this.state.school.id,
        schoolName: event.target.value,
        location: this.state.school.location,
        dateFrom: this.state.school.dateFrom,
        dateTo: this.state.school.dateTo,
      },
    });
  };

  handleLocationChange = (event) => {
    this.setState({
      school: {
        id: this.state.school.id,
        schoolName: this.state.school.schoolName,
        location: event.target.value,
        dateFrom: this.state.school.dateFrom,
        dateTo: this.state.school.dateTo,
      },
    });
  };
  handleDateFromChange = (event) => {
    this.setState({
      school: {
        id: this.state.school.id,
        schoolName: this.state.school.schoolName,
        location: this.state.school.location,
        dateFrom: event.target.value,
        dateTo: this.state.school.dateTo,
      },
    });
  };
  handleDateToChange = (event) => {
    this.setState({
      school: {
        id: this.state.school.id,
        schoolName: this.state.school.schoolName,
        location: this.state.school.location,
        dateFrom: this.state.school.dateFrom,
        dateTo: event.target.value,
      },
    });
  };
  handleSave() {
    this.setState({ mode: 'view' });
  }

  removeEducation(id) {
    const filteredArray = this.state.schools.filter(
      (school) => school.id !== id
    );
    this.setState({
      schools: filteredArray,
    });
  }
  handleEducationEdit(school) {
    this.setState({
      school: {
        id: school.id,
        schoolName: school.schoolName,
        location: school.location,
        dateFrom: school.dateFrom,
        dateTo: school.dateTo,
      },
    });
  }
  updateEducation(schools) {
    console.log(schools);
  }
  render() {
    const { school, schools } = this.state;

    const educationList = schools.map((school) => {
      return (
        <div key={school.id}>
          <p>{school.schoolName}</p>
          <p>{school.location}</p>
          <p>{school.dateFrom}</p>
          <p>{school.dateTo}</p>
          <button type="button" onClick={() => this.removeEducation(school.id)}>
            Delete
          </button>
        </div>
      );
    });

    if (this.props.mode === 'edit') {
      return (
        <div className={styles['educational-form__edit']}>
          <form onSubmit={this.onSubmitSchool}>
            <h2>Educational Experience</h2>

            <label htmlFor="schoolName">School Name</label>
            <input
              id="schoolName"
              type="text"
              placeholder="School Name"
              value={school.schoolName}
              onChange={this.handleSchoolNameChange}
            ></input>

            <label htmlFor="location">School location</label>
            <input
              id="location"
              type="text"
              placeholder="School Location"
              value={school.location}
              onChange={this.handleLocationChange}
            ></input>

            <label htmlFor="location">School location</label>
            <input
              id="dateFrom"
              type="text"
              placeholder="Date From"
              value={school.dateFrom}
              onChange={this.handleDateFromChange}
            ></input>

            <label htmlFor="location">School location</label>
            <input
              id="dateTo"
              type="text"
              placeholder="Date to"
              value={school.dateTo}
              onChange={this.handleDateToChange}
            ></input>
            <button type="submit">+ Add Education</button>
          </form>
          {/*<button onClick={() => this.updateEducation(schools)}>
            {' '}
            ÷ Edit Education
      </button>*/}
        </div>
      );
    } else {
      return (
        <div className={styles['general-form__view']}>
          <h2>Education</h2>
          {/*  <button onClick={this.handleEdit}>Edit</button> */}
          {educationList}
        </div>
      );
    }
  }
}

export default EducationalExperience;
