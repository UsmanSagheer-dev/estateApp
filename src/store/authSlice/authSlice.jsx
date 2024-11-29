import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  currentUser: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state, action) => {
      const { email, password, name } = action.payload;
      
      // Check if user already exists
      const userExists = state.users.find(user => user.email === email);
      if (userExists) {
        state.error = 'User already exists';
        return;
      }

      // Create new user
      const newUser = {
        id: Date.now(),
        email,
        password,
        name,
      };

      // Add to users array
      state.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(state.users));

      // Log user in after signup
      state.currentUser = { id: newUser.id, email: newUser.email, name: newUser.name };
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },

    login: (state, action) => {
      const { email, password } = action.payload;
      
      // Find user
      const user = state.users.find(
        user => user.email === email && user.password === password
      );

      if (user) {
        state.currentUser = { id: user.id, email: user.email, name: user.name };
        state.isAuthenticated = true;
        state.error = null;
        localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
      } else {
        state.error = 'Invalid email or password';
      }
    },

    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('currentUser');
    },

    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { signup, login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
