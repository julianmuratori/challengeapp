import React, { Component } from 'react';
import axios from 'axios'
import Task from './Task'

class Tasks extends Component {
    state = {
        loading: true,
        tasks: []
    }
    componentDidMount() {
        axios.get(process.env.API_URL)
            .then(res => {
                const tasks = res.data;
                const loading = false;
                this.setState({ loading, tasks })
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        const { tasks } = this.state;
        if (this.state.loading) {
            return <h1>Loading...</h1>
        }
        return (
            <div>
                <h1>Your current tasks</h1>
                {tasks.map(task => {
                    return <Task title={task.title} description={task.description} tags={task.tags} key={task.id} />
                })}
            </div>
        );
    }
}

export default Tasks;