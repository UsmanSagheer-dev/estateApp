import { createSlice } from '@reduxjs/toolkit';
import { firestore } from 'firebase/firestore';

const initialState = {
  userProfile: null,
  loading: false,
  error: null,
};

const getUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    getUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUserSuccess: (state, action) => {
      state.loading = false;
      state.userProfile = action.payload;
    },
    getUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearUserProfile: (state) => {
      state.userProfile = null;
    },
    updateUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { getUserStart, getUserSuccess, getUserFailure, clearUserProfile, updateUserProfile } = getUserSlice.actions;
export const fetchUserProfile = (userId) => async (dispatch) => {
  dispatch(getUserStart());
  try {
    const userDoc = await firestore().collection('users').doc(userId).get();
    if (userDoc.exists) {
      dispatch(getUserSuccess(userDoc.data()));
    } else {
      throw new Error('User profile not found');
    }
  } catch (error) {
    dispatch(getUserFailure(error.message));
  }
};

export default getUserSlice.reducer;


