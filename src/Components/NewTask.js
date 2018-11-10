import React, { Component } from 'react';

class NewTask extends Component {
    state = {
        title: '',
        description: '',
        tags: []
    }
    render() {
        return (
            <div>
                <h1>Create a new task below</h1>
                {/* input title, description, tags */}
                <input type="text" placeholder="title" required />
                <input type="text" placeholder="description" />
                <input type="text" placeholder="tags" required />
                <button>Add Tag</button>
                <button type='submit'>Submit</button>
            </div>
        );
    }
}

export default NewTask;