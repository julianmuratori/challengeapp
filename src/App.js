import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Tasks from "./Components/Tasks";
import NewTask from "./Components/NewTask";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <NewTask />
          <Tasks />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
