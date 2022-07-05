import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// thunk
export const fetchTest = createAsyncThunk(
  'global/fetchTest',
  async (thunkAPI) => {
    await new Promise((res, rej) => {
      setTimeout(() => {
        res('hello');
      }, 3000);
    });

    const { data } = await axios.get('/api/hello');
    // data.reduxRequestId = thunkAPI.requestId;
    return data;
  }
);

// initial state

const initialState = {
  userInfo: {},
};

// create slice
const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInfo(state, action: PayloadAction<any>) {
      state.userInfo = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTest.fulfilled, (state, action) => {});
  },
});

// export reducer & action creators
export default usersSlice.reducer;
export const { updateUserInfo } = usersSlice.actions;
