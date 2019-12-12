import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import TodoList from './components/TodoList';
import CreateTask from './components/CreateTask';

function App() {
  return (
    <div className="App">
      <Router>

      <div className="container p-4">
        <Route path="/" exact component={TodoList} />
        <Route path="/editTask/:id" component={CreateTask} />
        <Route path="/createTask" component={CreateTask} />
      </div>
      </Router>
    </div>
  );
}

export default App;
