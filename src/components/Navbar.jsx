import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav className="navbar">
      <h2>Task Manager</h2>
      <div>
        {isAuthenticated ? (
          <button onClick={() => dispatch(logout())}>Logout</button>
        ) : (
          <button onClick={() => dispatch(login())}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
