import authActions, { signin, signup } from "./slices/authSlice";
import docsActions, { addDoc, removeDoc, fetchDocs } from "./slices/docsSlice";
import uiActions from "./slices/uiSlice";

export {
  authActions,
  docsActions,
  signin,
  signup,
  addDoc,
  removeDoc,
  fetchDocs,
  uiActions
};
