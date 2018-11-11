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
    e.preventDefault();
    const submission = this.state;
    const response = validateForm(submission);
    if (response.submission === true) {
      console.log("yep");
      this.setState({ formIsValid: response.submission });

      //   this.props.submitNewTask();
    } else {
      this.setState({ errors: response.errors });
    }
  };

  render() {
    return (
      <form>
        <label htmlFor="name">
          Task Name
          <input
            type="text"
            placeholder="title"
            required
            onChange={this.handleChange}
            name="taskname"
          />
        </label>
        <label htmlFor="Description">
          Description
          <input
            type="text"
            placeholder="description"
            onChange={this.handleChange}
            name="description"
          />
        </label>
        <label htmlFor="tags">
          Add Tag
          <input
            type="text"
            placeholder="tags"
            required
            name="tag"
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

export default connect(
  null,
  { submitNewTask }
)(NewTask);
