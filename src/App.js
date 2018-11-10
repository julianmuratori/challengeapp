import React, { Component } from 'react'
import { render } from 'react-dom'
// import redux from 'redux'
// import react-redux from 'react-redux'
// import redux-thunk from 'redux-thunk'

// import { Router, Link } from "@reach/router"
import Tasks from './Components/Tasks'
import NewTask from './Components/NewTask'

class App extends Component {

    render() {
        return (
            <div>
                <NewTask />
                <Tasks />
            </div>
        );
    }
}

render(<App />, document.getElementById("root"))