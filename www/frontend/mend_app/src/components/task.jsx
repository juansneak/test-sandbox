import React from 'react';
import axios from 'axios';
import { Button } from "react-bootstrap";
import { API_URL } from "../App.js"

class Task extends React.Component {
  
  handleSubmit = async () => {
    await axios.delete(`${API_URL}/api/v1/task/${this.props.id}`);
    this.props.onDelete();
  };

  render() {
  	return (
      <tr>
        <th scope="row">{this.props.id}</th>
        <td>{this.props.title}</td>
        <td>{this.props.description}</td>
        <td>
          <Button variant="danger" type="submit" onClick={this.handleSubmit}>
            Delete
          </Button>
        </td>
    </tr>
    );
  }
}

export default Task;