export function validateForm(submission) {
  const { errors, taskname, description, tags, formIsValid } = submission;
  //   Check if the taskname is present and if it is longer than 0
  if ((taskname && taskname.length < 0) || !taskname) {
    errors["taskname"] = true;
  } else {
    delete errors["taskname"];
  }
  //   Check if there are tags
  if (!Array.isArray(tags) || tags.length == 0) {
    errors["tags"] = true;
  } else {
    delete errors["tags"];
  }
  // if all of that is fine and there are no errors, set the form validity to true
  if (Object.keys(errors).length === 0) {
    const title = taskname;
    const fields = {
      title,
      description,
      tags,
      formIsValid: true
    };
    return fields;
  } else {
    return submission;
  }
}
