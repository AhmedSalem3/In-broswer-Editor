import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser(state, actions) {
      state.user = actions.payload;
    },
    logout(state) {
      state.user = null;
    }
  }
});

// THUNKS

function signin(username, password) {
  return (dispatch) => {
    //TODO add firebase request
    const userCred = { username, password };
    if (userCred) {
      dispatch(authSlice.actions.updateUser(userCred));
    }
  };
}

function signup(username, password, displayName) {
  return (dispatch) => {
    //TODO add firebase request
    const userCred = { username, password, displayName };
    if (userCred) {
      dispatch(authSlice.actions.updateUser(userCred));
    }
  };
}

export default authSlice.actions;
export const authReducer = authSlice.reducer;
export { signin, signup };
