import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import global from './global';
import user from './user';

// root reducer
// this two type must be required!
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default:
      return combineReducers({ global, user })(state, action);
  }
};

// wrapper
const isProduction = process.env.NODE_ENV === 'production';

const store = configureStore({
  reducer: rootReducer,
  devTools: !isProduction,
});

const makeStore = () => store;

const wrapper = createWrapper(makeStore, { debug: !isProduction });

export default wrapper;
