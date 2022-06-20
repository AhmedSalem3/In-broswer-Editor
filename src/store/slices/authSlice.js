import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null
};

const { actions, reducer } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser(state, actions) {
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
      dispatch(actions.addUser(userCred));
    }
  };
}

function signup(username, password, displayName) {
  return (dispatch) => {
    //TODO add firebase request
    const userCred = { username, password, displayName };
    if (userCred) {
      dispatch(actions.addUser(userCred));
    }
  };
}

export default actions;
export const authReducer = reducer;
export { signin, signup };