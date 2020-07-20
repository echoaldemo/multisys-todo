import React from "react";

const Todo = () => {
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