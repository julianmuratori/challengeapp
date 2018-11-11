import React from "react";

const Tag = props => (
  <div>
    <p>{props.tag}</p>
    <button onClick={() => props.removeTag(props.tag)}>Delete Tag</button>
  </div>
);

export default Tag;
