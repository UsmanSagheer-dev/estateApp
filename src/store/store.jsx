import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice/authSlice';
import getUserReducer from './getuserSlice/getUserSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: getUserReducer,
  },
});

export default store;
