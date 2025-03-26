import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/todoSlice";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // ✅ Check login state

  const handleAddTask = () => {
    if (!isAuthenticated) return; // ✅ Prevent adding tasks when not logged in
    if (task.trim() === "") return;

    dispatch(addTask({ text: task, priority }));
    setTask("");
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        className="form-control"
        disabled={!isAuthenticated} // ✅ Disable input if not logged in
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="form-select mt-2"
        disabled={!isAuthenticated} // ✅ Disable select if not logged in
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        className="btn btn-primary mt-2"
        onClick={handleAddTask}
        disabled={!isAuthenticated} // ✅ Disable button if not logged in
      >
        Add Task
      </button>
      {!isAuthenticated && <p className="text-danger mt-2">Please log in to add tasks.</p>} {/* ❌ Show warning */}
    </div>
  );
};

export default TaskInput;
