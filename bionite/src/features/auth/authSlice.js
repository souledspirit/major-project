import { createSlice } from "@reduxjs/toolkit";

// Defines initial state of the auth module
const initialState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set authentication info (token and user details)
    setAuthInfo: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user; // Sets the whole user object
    },
    // Action to update student details within the user object
    updateStudentDetails: (state, action) => {
      if (state.user) {
        // Merges new student details with existing ones
        state.user.studentDetails = {
          ...state.user.studentDetails,
          ...action.payload,
        };
      }
    },
    // Action to clear the auth state, effectively logging out the user
    logout: (state) => {
      state.token = null;
      state.user = null; // Resets user and token to their initial states
    },
  },
});

// Exporting the actions to be used elsewhere in the application
export const { setAuthInfo, updateStudentDetails, logout } = authSlice.actions;

export default authSlice.reducer;
