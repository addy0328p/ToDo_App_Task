import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/authSlice";

const AuthButton = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <button onClick={() => dispatch(isAuthenticated ? logout() : login())}>
      {isAuthenticated ? "Logout" : "Login"}
    </button>
  );
};

export default AuthButton;
