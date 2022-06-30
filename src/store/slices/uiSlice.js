import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  previewIsOn: false,
  drawerIsOpen: false
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleEditorView(state) {
      state.previewIsOn = !state.previewIsOn;
    },
    toggleDrawer(state) {
      state.drawerIsOpen = !state.drawerIsOpen;
    }
  }
});

// THUNKS

export default uiSlice.actions;
export const uiReducer = uiSlice.reducer;

// next steps:
//[1] finalize store
//[2] begin implemeting the app logic
