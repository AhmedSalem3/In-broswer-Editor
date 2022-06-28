import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { docsReducer } from "./slices/docsSlice";
import { uiReducer } from "./slices/uiSlice";

let store = configureStore({
  reducer: {
    auth: authReducer,
    docs: docsReducer,
    ui: uiReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;
