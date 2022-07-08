import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// initial state

interface State {
  postInfo: any[];
}

const initialState: State = {
  postInfo: [],
};

// create slice
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    updatePostInfo(state, action: PayloadAction<any>) {
      state.postInfo = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

// export reducer & action creators
export default postSlice.reducer;
export const { updatePostInfo } = postSlice.actions;
