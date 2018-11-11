export function validateForm(submission) {
  const { errors, taskname, description, tags } = submission;
  //   Check if the taskname is present and if it is longer than 0
  if ((taskname && taskname.length < 0) || !taskname) {
    errors["taskname"] = true;
  }
  //   Check if the description is present and if it is longer than 0
  if (description.length <= 0 || !description) {
    errors["description"] = true;
  }
  //   Check if there are tags
  if (!Array.isArray(tags) || tags.length == 0) {
    errors["tags"] = true;
  }
  // if all of that is fine and there are no errors, set the form validity to true
  if (Object.keys(errors).length === 0) {
    submission.formIsValid = true;
  }
  return submission;
}
