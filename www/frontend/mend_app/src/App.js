import React from 'react';
import axios from 'axios';
import logo from './logo.png';
import Form from './components/form';
import List from './components/list';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const API_URL = process.env.REACT_APP_API_URL;

class App extends React.Component {
  
  state = {
    tasks: [],
  };

  showTasks = async () => {
    const resp = await axios.get(`${API_URL}/api/v1/task/`);
    const tasks = resp.data.tasks.map(task => ({
      id: task.id, 
      title: task.title, 
      description: task.description
    }));
    this.setState({tasks});
  };

  componentDidMount() {
    this.showTasks(); 
  }

	render() {
  	return (
    	<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100px"/>
        <Form onSubmit={this.showTasks} />
        <h3>Task List</h3>
        <List tasks={this.state.tasks} onDelete={this.showTasks}/>
      </header>
    </div>
    );
  }	
}

export default App;