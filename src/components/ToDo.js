import React from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../redux/actions";

const Todo = () => {
  const tasks = useSelector((state) => state.tasks);
  const input = useSelector((state) => state.input);
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(allActions.taskActions.add(input.task));
    dispatch(allActions.inputActions.clear());
  };

  return (
    <div className="main">
      <div className="container">
        <h3 className="header">To Do App</h3>
        <h6 className="sub">by Jericho Aldemo</h6>
        {/* INPUT START */}
        <div>
          <form className="input-container" onSubmit={submit}>
            <input
              width="485px"
              className="form-control"
              placeholder="Enter a task for today"
              onChange={(e) =>
                dispatch(allActions.inputActions.setTask(e.target.value))
              }
              value={input.task}
            />
            <button className="btn btn-primary" type="submit">
              Add Task
            </button>
          </form>
        </div>
        {/* INPUT END */}
        {/* TODO LIST START */}
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col" className="white">
                Description
              </th>
              <th scope="col" className="center white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 &&
              tasks.map((task) => (
                <tr key={task.id} className="table-secondary">
                  <th scope="row">
                    <input
                      type="checkbox"
                      checked={task.status}
                      onChange={() =>
                        dispatch(
                          allActions.taskActions.update({
                            id: task.id,
                            prop: "status",
                            value: !task.status,
                          })
                        )
                      }
                    />
                  </th>
                  <td className={task.status ? "strike" : "basic"}>
                    {task.desc}
                  </td>
                  <td className="center">
                    <div className="btn-grid">
                      <button className="btn btn-warning wdth">Edit</button>
                      <button className="btn btn-danger wdth">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* TODO LIST END */}
      </div>
    </div>
  );
};

export default Todo;
