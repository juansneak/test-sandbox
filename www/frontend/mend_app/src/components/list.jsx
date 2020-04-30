import React from 'react';
import Task from './task';

class List extends React.Component {
	render() {
  	return (
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tasks.map(task => <Task key={task.id} id={task.id} onDelete={this.props.onDelete} {...task}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;