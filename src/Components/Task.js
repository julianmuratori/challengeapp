import React, { Component } from 'react';

class Task extends Component {
    render() {
        const { title, description, tags } = this.props;
        return (
            <div className="task">
                <h1>{title}</h1>
                <p>{description}</p>
                {tags.map(tag => {
                    console.log(tag)
                })}
            </div>
        );
    }
}

export default Task;