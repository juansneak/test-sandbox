import React from 'react';
import axios from 'axios';
import { API_URL } from "../App.js"

class Form extends React.Component {
	state = { title: '', description: '' };
	handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { ...this.state }
    await axios.post(`${API_URL}/api/v1/task/`, payload);
    this.props.onSubmit();
    this.setState({ title: '', description: '' });
  };

	render() {
  	return (
      <div className="card">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input 
              type="text"
              name="title" 
              value={this.state.title}
              onChange={event => this.setState({ title: event.target.value })}
              className="form-control"
              maxLength="50"
              required 
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea 
              row="2"
              name="description"
              value={this.state.description}
              onChange={event => this.setState({ description: event.target.value })}
              className="form-control"
              maxLength="100"
              required
            />
          </div>
          <button className="btn btn-primary">Add Task</button>
        </form>
      </div>
    );
  }
}

export default Form;