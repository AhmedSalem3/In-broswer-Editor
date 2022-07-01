import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD

const initialState = {
  //TODO: set the initial dtate to null
  //* wwas testing before implementing auth
  user: { uid: "234242345" }
=======
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { formatAuthError } from "../../utils/authErrors";

const initialState = {
  user: null,
  loginError: null,
  signupError: null
>>>>>>> inbrowser/master
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
<<<<<<< HEAD
=======
    },
    addLoginError(state, action) {
      state.loginError = formatAuthError(action.payload);
    },
    addSignupError(state, action) {
      state.signupError = formatAuthError(action.payload);
>>>>>>> inbrowser/master
    }
  }
});

// THUNKS

<<<<<<< HEAD
function signin(username, password) {
  return (dispatch) => {
    //TODO add firebase request
    const userCred = { username, password };
    if (userCred) {
      dispatch(authSlice.actions.updateUser(userCred));
=======
function signin(email, password) {
  return async (dispatch) => {
    // resetting the login error state
    dispatch(authSlice.actions.addLoginError(null));

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      if (userCred?.user) {
        dispatch(authSlice.actions.updateUser(userCred?.user));
      }
    } catch (error) {
      dispatch(authSlice.actions.addLoginError(error?.message));
>>>>>>> inbrowser/master
    }
  };
}

<<<<<<< HEAD
function signup(username, password, displayName) {
  return (dispatch) => {
    //TODO add firebase request
    const userCred = { username, password, displayName };
    if (userCred) {
      dispatch(authSlice.actions.updateUser(userCred));
=======
function signup({ email, password, ...signupInfo }) {
  return async (dispatch) => {
    // resetting the signup error state
    dispatch(authSlice.actions.addSignupError(null));

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // adding all user info including display name, and more
      if (auth?.currentUser) {
        await updateProfile(auth.currentUser, signupInfo);
      }
    } catch (error) {
      dispatch(authSlice.actions.addSignupError(error?.message));
>>>>>>> inbrowser/master
    }
  };
}

export default authSlice.actions;
export const authReducer = authSlice.reducer;
export { signin, signup };
