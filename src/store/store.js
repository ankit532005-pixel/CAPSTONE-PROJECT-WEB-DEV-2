import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./slices/notesSlice.js";
import settingsReducer from "./slices/settingsSlice.js";
import apiCacheReducer from "./slices/apiCacheSlice.js";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    settings: settingsReducer,
    apiCache: apiCacheReducer,
  },
});