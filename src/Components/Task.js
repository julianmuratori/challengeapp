import React, { Component } from "react";
import PropTypes from "prop-types";

class Task extends Component {
  render() {
    const { title, description, tags } = this.props;
    return (
      <div className="task">
        <h1>{title}</h1>
        <p>{description}</p>
        {tags.map(tag => {
          if (!tag) {
            return;
          }
          <p>{tag}</p>;
        })}
      </div>
    );
  }
}

Task.propTypes = {
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default Task;
