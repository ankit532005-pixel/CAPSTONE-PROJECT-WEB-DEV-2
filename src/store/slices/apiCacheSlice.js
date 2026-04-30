import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const apiCacheSlice = createSlice({
  name: "apiCache",
  initialState,
  reducers: {
    cacheWikipedia: (state, action) => {
      const { title, data } = action.payload;
      state[title.toLowerCase()] = data;
    },
  },
});

export const { cacheWikipedia } = apiCacheSlice.actions;
export default apiCacheSlice.reducer;