import { createSlice } from "@reduxjs/toolkit";

const gagSlice = createSlice({
  name: "gags",
  initialState: {
    data: [],
  },
});

export const gagsReducer = gagSlice.reducer;
