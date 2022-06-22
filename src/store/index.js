import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { docsReducer } from "./slices/docsSlice";

let store = configureStore({
  reducer: {
    auth: authReducer,
    docs: docsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;
