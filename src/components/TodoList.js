import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class TodoList extends Component {

    state = {
        tasks: [],
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4IiwiZW1haWwiOiJ0ZXN0QHVzZXIuY29tIiwibmFtZSI6IlRlc3QgVXNlciIsImlhdCI6MTU3NjA3ODkwMiwiZXhwIjoxNTc2NjgzNzAyfQ.xQCy27AfW8_vCtNmFy_WeWP0_Q48lh1xXAaCGvbqlRg'
    }

    componentDidMount = async (e) => {
        this.getAllTask();
    }

    getAllTask = async () => {
        const res = await axios.get("http://apitest.smbssolutions.com/public/api/v1/tasks", { headers: { "Authorization": `Bearer ${this.state.token}` } })
        this.setState({ tasks: res.data.message })
    }

    deleteTask = async (noteId) => {
        await axios.delete('http://apitest.smbssolutions.com/public/api/v1/tasks/' + noteId, { headers: { "Authorization": `Bearer ${this.state.token}` } });
        this.getAllTask();
    }

    render() {
        return (
            <div className="row">
                <h2 className="container bg bg-primary">TodoList</h2>
                {
                    this.state.tasks.map(task => (
                        <div className="col-md-12 p-2" key={task.id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{task.name}</h5>
                                    <button className="btn btn-danger" onClick={() => this.deleteTask(task.id)}>
                                        Delete
                                    </button>
                                </div>
                                <div className="card-body">
                                    <p>
                                        {task.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="container">
                    <Link to="/createTask" className="btn btn-primary">
                        New Task
                    </Link>
                </div>
            </div>
        )
    }
}
