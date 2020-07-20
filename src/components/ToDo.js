import React from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../redux/actions";

const Todo = () => {
  const tasks = useSelector((state) => state.tasks);
  const input = useSelector((state) => state.input);
  const dispatch = useDispatch();
  return (
    <div className="main">
      <div className="container">
        <h3 className="header">To Do App</h3>
        <h6 className="sub">by Jericho Aldemo</h6>
        <div>
          <form className="input-container">
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
      </div>
    </div>
  );
};

export default Todo;
