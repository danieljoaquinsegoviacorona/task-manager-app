import { connect } from "react-redux";
import actions from "../redux-store/ReduxStore";
import { Table } from "react-table";


// The idea here is to bind the table component with the redux store
const TaskTable = ({ tasks }) => {
  if (tasks.length === 0) {
    return <tr><td colSpan="4">No Data found</td></tr>;
  }
  return (
    <Table
      data={tasks}
      columns={[
        {
          name: "Name",
          field: "name",
        },
        {
          name: "Description",
          field: "description",
        },
        {
          name: "Status",
          field: "status",
        },
        {
          name: "Actions",
          cell: (row) => (
            <div>
              <button onClick={() => window.open(`/my-component?id={row.id}`, "_blank")}>Show</button>
              <button onClick={() => mapDispatchToProps.deleteTask(tasks.id)}>Delete</button>
            </div>
          ),
        },
      ]}
    />
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (id) => dispatch(actions.deleteTask(id)), //Needs to import actions or else is not detected and throws an exception.
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskTable);