import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"; // ✅ Ensure this file exists
import authReducer from "./authSlice"; // ✅ Ensure this file exists

const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: authReducer,
  },
});

export default store; // ✅ Default export hona chahiye!
