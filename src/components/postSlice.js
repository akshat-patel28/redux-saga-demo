import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
  isLoading: false,
  error: {},
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
    getPostFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getPost, getPostSuccess, getPostFail } = postSlice.actions;

export default postSlice.reducer;
