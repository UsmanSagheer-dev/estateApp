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
    signinStart: (state) => {
      state.error = null;
    },
    signinSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    signinFailure: (state, action) => {
      state.error = action.payload;
    },

  },
});

export const { signupStart, signupSuccess, signupFailure, signinStart, signinSuccess, signinFailure } = authSlice.actions;
 
export const signin = ({ email, password }) => async (dispatch) => {
  dispatch(signinStart());
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    dispatch(signinSuccess(userCredential.user));
  } catch (error) {
    dispatch(signinFailure(error.message));
  }
};
export const signout = () => async (dispatch) => {
  await auth().signOut();
  dispatch(signoutSuccess());
};
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

    const sanitizedUser = {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      displayName: userCredential.user.displayName || 'Anonymous',
      photoURL: userCredential.user.photoURL || null,
    };

    dispatch(signupSuccess(sanitizedUser)); 
    return sanitizedUser;
  } catch (error) {
    dispatch(signupFailure(error.message)); 
    throw error;
  }
};


export default authSlice.reducer;
