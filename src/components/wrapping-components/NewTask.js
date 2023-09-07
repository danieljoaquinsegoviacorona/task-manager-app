import { connect } from "react-redux";
import actions from "../redux-store/ReduxStore";
import store from "../redux-store/ReduxStore";
import { useState } from "react";

const AddTask = ({ dispatch }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("new");
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const state = store.getState();
    const tasks = state.tasks;
    for (const task of tasks) {
      if (task.name === name) {
        setNameError = "The task already exists";
      }
    }
    if (name === "" || description === "") {
      if (name === "") {
        setNameError = "Please enter a name";
      }
      if (description === "") {
        setDescriptionError = "Please enter a description";
      }
      return;
    }

    const task = {
      name,
      description,
      status,
    };

    dispatch(actions.addTask(task));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        isInvalid={nameError !== ""}
      />
      {nameError && <span style={{ color: "red" }}>{nameError}</span>}
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        isInvalid={descriptionError !== ""}
      />
      {descriptionError && <span style={{ color: "red" }}>{descriptionError}</span>}
      <select
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="new">New</option>
        <option value="in progress">In Progress</option>
        <option value="pending">Pending</option>
        <option value="done">Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(actions.addTask(task)),
});

export default connect(null, mapDispatchToProps)(AddTask);