import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import AuthButton from "./components/AuthButton";
import LoadingScreen from "./components/Loadingscreen";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // ✅ Check current theme on mount
    const currentTheme = document.documentElement.getAttribute("data-bs-theme");
    setIsDarkMode(currentTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return loading ? (
    <LoadingScreen onComplete={() => setLoading(false)} />
  ) : (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 w-50">
        <h1 className="text-center text-primary mb-4">📋 Todo App</h1>

        <div className="d-flex justify-content-between mb-3">
          <button
            className={`btn btn-${isDarkMode ? "light" : "dark"}`}
            onClick={toggleTheme}
          >
            {isDarkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
          <AuthButton />
        </div>

        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
