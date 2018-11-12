import React from "react";
import Tag from "./Tag";
// import { NEW_TASK } from "../Actions/types";
import { validateForm } from "../Helper Functions/ValidateForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { submitNewTask } from "../actions/taskActions";

class NewTask extends React.Component {
  state = {
    taskname: "",
    description: "",
    tag: "",
    tags: [],
    formIsValid: false,
    errors: {}
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTag = e => {
    e.preventDefault();
    const { tag, tags } = this.state;
    tags.push(tag);
    this.setState({ tags });
  };

  removeTag = e => {
    let { tags } = this.state;
    tags = tags.filter(tag => {
      return tag !== e;
    });
    this.setState({ tags });
  };

  submitForm = e => {
    // Prevent form submission
    e.preventDefault();
    // Take a copy of state
    const submission = this.state;
    // Pass the new task through the validation function
    const response = validateForm(submission);
    // If it's valid, submit it to the server
    // If it's not, trigger error messages on each field
    if (response.formIsValid === true) {
      this.setState({ formIsValid: response.formIsValid });
      delete response.formIsValid;
      this.props.submitNewTask(response);
    } else {
      this.setState({ errors: response.errors });
    }

    // Clear the form inputs
    this.setState({
      taskname: "",
      description: "",
      tag: "",
      tags: [],
      formIsValid: false,
      errors: {}
    });
  };

  clearInputs = e => {
    e.preventDefault();
    console.log(e.target);
  };

  render() {
    const { taskname, description, tag } = this.state;
    return (
      <form onSubmit={this.clearInputs}>
        <label htmlFor="name">
          Task Name
          <input
            type="text"
            placeholder="title"
            required
            onChange={this.handleChange}
            name="taskname"
            value={taskname}
          />
        </label>
        <label htmlFor="Description">
          Description
          <input
            type="text"
            placeholder="description"
            onChange={this.handleChange}
            name="description"
            value={description}
          />
        </label>
        <label htmlFor="tags">
          Add Tag
          <input
            type="text"
            placeholder="tags"
            required
            name="tag"
            value={tag}
            onChange={this.handleChange}
          />
          <button onClick={this.addTag}>Add Tag</button>
          {this.state.tags.map(tag => {
            if (!tag) {
              return;
            } else {
              return <Tag tag={tag} key={tag} removeTag={this.removeTag} />;
            }
          })}
        </label>
        <button type="submit" onClick={this.submitForm}>
          Submit
        </button>
      </form>
    );
  }
}

NewTask.PropTypes = {
  submitNewTask: PropTypes.func.isRequired
};

export default connect(
  null,
  { submitNewTask }
)(NewTask);
