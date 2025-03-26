import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { items: [] },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload); // ✅ Redux state update ho raha
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((_, i) => i !== action.payload);
    }
  }
});

export const { addTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
