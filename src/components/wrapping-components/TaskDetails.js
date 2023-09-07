import { connect } from "react-redux";
import actions from "../redux-store/ReduxStore";
import { useState, useEffect } from "react";

const TaskDetails = ({ taskId, dispatch }) => {
  const [task, setTask] = useState(null);

  const fetchTask = () => {
    dispatch(actions.fetchTask(taskId));
  };

  useEffect(() => {
    fetchTask();
  }, [taskId]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{task.name}</h1>
      <p>{task.description}</p>
      <p>{task.status}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  task: state.tasks.find((task) => task.id === this.taskId),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTask: (taskId) => dispatch(actions.fetchTask(taskId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);