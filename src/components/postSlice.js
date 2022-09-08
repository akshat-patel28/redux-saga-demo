import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
  isLoading: false,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPost: (state) => {
      state.isLoading = true;
    },
    getPostSuccess: (state, action) => {
      state.post = action.payload;
      state.isLoading = true;
    },
  },
});

export const { getPost, getPostSuccess } = postSlice.actions;

export default postSlice.reducer;
