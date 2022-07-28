import React, { Component } from 'react';
import styles from '../styles/WorkExperience.module.scss';
import uniqid from 'uniqid';

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: {
        id: uniqid(),
        title: 'Penny Market',
        dateFrom: '2014',
        dateTo: '2014',
      },
      jobs: [],
    };

    this.handleJobTitleChange = this.handleJobTitleChange.bind(this);
    this.handleDateFromChange = this.handleDateFromChange.bind(this);
    this.handleDateToChange = this.handleDateToChange.bind(this);
    this.onSubmitJob = this.onSubmitJob.bind(this);
  }

  onSubmitJob(e) {
    e.preventDefault();

    this.setState({
      jobs: this.state.jobs.concat(this.state.job),
      job: {
        id: uniqid(),
        title: '',
        dateFrom: '',
        dateTo: '',
      },
    });
  }

  handleJobTitleChange = (event) => {
    this.setState({
      job: {
        id: this.state.job.id,
        title: event.target.value,
        dateFrom: this.state.job.dateFrom,
        dateTo: this.state.job.dateTo,
      },
    });
  };

  handleDateFromChange = (event) => {
    this.setState({
      job: {
        id: this.state.job.id,
        title: this.state.job.title,
        dateFrom: event.target.value,
        dateTo: this.state.job.dateTo,
      },
    });
  };
  handleDateToChange = (event) => {
    this.setState({
      job: {
        id: this.state.job.id,
        title: this.state.job.title,
        dateFrom: this.state.job.dateFrom,
        dateTo: event.target.value,
      },
    });
  };

  removeJob(id) {
    const filteredArray = this.state.jobs.filter((job) => job.id !== id);
    this.setState({
      jobs: filteredArray,
    });
  }

  render() {
    const { job, jobs } = this.state;

    const jobList = jobs.map((job) => {
      return (
        <div key={job.id}>
          <p>{job.title}</p>
          <p>{job.dateFrom}</p>
          <p>{job.dateTo}</p>
          <button type="button" onClick={() => this.removeJob(job.id)}>
            Delete
          </button>
        </div>
      );
    });

    if (this.props.mode === 'edit') {
      return (
        <div className={styles['work-form__edit']}>
          <form onSubmit={this.onSubmitJob}>
            <h2>Work Experience</h2>

            <label htmlFor="schoolName">Job Title</label>
            <input
              id="schoolName"
              type="text"
              placeholder="Job Title"
              value={job.title}
              onChange={this.handleJobTitleChange}
            ></input>

            <label htmlFor="dateFrom">Date from</label>
            <input
              id="dateFrom"
              type="text"
              placeholder="Date From"
              value={job.dateFrom}
              onChange={this.handleDateFromChange}
            ></input>

            <label htmlFor="dateTo">Date to</label>
            <input
              id="dateTo"
              type="text"
              placeholder="Date to"
              value={job.dateTo}
              onChange={this.handleDateToChange}
            ></input>
            <button type="submit">+ Add Work</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className={styles['work-form__view']}>
          <h2>Work Experience</h2>
          {/*  <button onClick={this.handleEdit}>Edit</button> */}
          {jobList}
        </div>
      );
    }
  }
}

export default WorkExperience;
