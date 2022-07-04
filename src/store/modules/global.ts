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
interface State {
  globalLoading: boolean;
  message: string;
}

const initialState: State = {
  globalLoading: false,
  message: '',
};

// create slice
const usersSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleGlobalLoading(state, action: PayloadAction<boolean>) {
      state.globalLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTest.fulfilled, (state, action) => {
      state.message = action.payload.name;
    });
  },
});

// export reducer & action creators
export default usersSlice.reducer;
export const { toggleGlobalLoading } = usersSlice.actions;
