import React, { useState, useCallback } from "react";

function UseCallbackExample() {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, "Some Task"]);
  }, [setTasks]);

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, i) => (
        <p key={i}>{task}</p>
      ))}
    </div>
  );
}

const Button = React.memo(({ addTask }) => {
  console.log("button rendered");
  return (
    <div>
      <button className="btn btn-primary" onClick={addTask}>
        add task
      </button>
    </div>
  );
});

export default UseCallbackExample;
