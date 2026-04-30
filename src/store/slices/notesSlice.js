import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const serialized = localStorage.getItem("digitalBrain_notes");
    if (serialized === null) return [];
    return JSON.parse(serialized);
  } catch (e) {
    return [];
  }
};

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("digitalBrain_notes", JSON.stringify(state));
  } catch (e) {}
};

const initialState = loadFromLocalStorage();

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
      saveToLocalStorage(state);
    },
    updateNote: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.findIndex((note) => note.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedData };
        saveToLocalStorage(state);
      }
    },
    deleteNote: (state, action) => {
      const newState = state.filter((note) => note.id !== action.payload);
      saveToLocalStorage(newState);
      return newState;
    },
  },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
