import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';


export default class CreateTask extends Component {

    state = {
        title: '',
        description: '',
        id: 0,
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4IiwiZW1haWwiOiJ0ZXN0QHVzZXIuY29tIiwibmFtZSI6IlRlc3QgVXNlciIsImlhdCI6MTU3NjA3ODkwMiwiZXhwIjoxNTc2NjgzNzAyfQ.xQCy27AfW8_vCtNmFy_WeWP0_Q48lh1xXAaCGvbqlRg'
    }

    onSubmit = async (e) => {
        
            const newTask = {
                name: this.state.title,
                description: this.state.description,
            };
            let res = axios.post('http://apitest.smbssolutions.com/public/api/v1/tasks', newTask ,{ headers: { "Authorization": `Bearer ${this.state.token}` } });
            console.log(res);
            e.preventDefault();
            this.props.history.push('/');

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date => {
        this.setState({ date });
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>New Task</h4>
                    <form onSubmit={this.onSubmit}>
                        {/* Task Title */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                onChange={this.onInputChange}
                                name="title"
                                value={this.state.title}
                                required />
                        </div>
                        {/* Note Content */}
                        <div className="form-group">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                name="description"
                                onChange={this.onInputChange}
                                value={this.state.description}
                                required>
                            </textarea>
                        </div>
                        <button className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
