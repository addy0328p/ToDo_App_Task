import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/todoSlice";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Import Framer Motion

const TaskList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <p className="text-danger text-center">Please log in to see your tasks.</p>;
  }

  return (
    <div className="container mt-3">
      <h3 className="text-center">Task List</h3>
      <ul className="list-group">
        <AnimatePresence> {/* ✅ Smooth Animations for Add/Delete */}
          {todos.length === 0 ? (
            <li className="list-group-item text-center">No tasks added yet!</li>
          ) : (
            todos.map((task, index) => (
              <motion.li
                key={task.id} // ✅ Ensure unique key (use task.id instead of index if available)
                className="list-group-item d-flex justify-content-between"
                initial={{ opacity: 0, x: -50 }} // ✅ Slide-in effect
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }} // ✅ Slide-out effect on delete
                transition={{ duration: 0.3 }}
              >
                <span>
                  <strong className={`text-${task.priority === "High" ? "danger" : task.priority === "Medium" ? "warning" : "success"}`}>
                    [{task.priority}]
                  </strong>{" "}
                  {task.text}
                </span>

                {/* ✅ Shaking Delete Button */}
                <motion.button
                  className="btn btn-danger btn-sm"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => dispatch(deleteTask(index))}
                >
                  Delete
                </motion.button>
              </motion.li>
            ))
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default TaskList;
