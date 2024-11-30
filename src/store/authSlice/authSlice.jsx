import { createSlice } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const initialState = {
  currentUser: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupStart: (state) => {
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    signupFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { signupStart, signupSuccess, signupFailure } = authSlice.actions;

export const signup = ({ email, password, name }) => async (dispatch) => {
  dispatch(signupStart());
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    if (name) {
      await userCredential.user.updateProfile({ displayName: name });
    }

    const userDoc = {
      id: userCredential.user.uid,
      name: name || 'Anonymous',
      email,
      createdAt: firestore.Timestamp.now(),
    };

    await firestore().collection('users').doc(userCredential.user.uid).set(userDoc);

    dispatch(signupSuccess(userCredential.user));
    return userCredential.user;
  } catch (error) {
    dispatch(signupFailure(error.message));
    throw error;
  }
};

export default authSlice.reducer;
