import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { doc, getDoc, setDoc, arrayUnion } from "firebase/firestore";

//!
//TODO: HANDLE ERRORS FOR ALL FUNCTIONS
//TODO: IMPLEMENT REALTIME CHANGES FOR docs

const initialState = {
  docs: null,
  currentDoc: null,
  // any action will by done on the docs wheather adding, removing or whatever
  //the loading state will be triggered
  docsActionLoading: false
};

const docsSlice = createSlice({
  name: "docs",
  initialState,
  reducers: {
    updateDocs(state, action) {
      state.docs = action.payload;
    },
    // this fn(setCurrentDoc) will be called whenever we wanto set the active doc in the editor
    setCurrentDoc(state, { payload: id = 0 }) {
      state.currentDoc = state.docs[id] || null;
    }
  }
});

// THUNKS

export function fetchDocs(userID) {
  // responsible for fetching all user's docs
  //TODO: we may need to remove this and implement this logic as a custom hook instead
  return async (dispatch) => {
    let docRef = doc(db, "docs", userID);
    let docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(docSnap.data());
      dispatch(docsSlice.updateDocs(docSnap.data()?.savedDocs ?? null));
    }
  };
}

export function addDoc(userID, docData) {
  return async (dispatch) => {
    let docRef = doc(db, "docs", userID);
    setDoc(
      docRef,
      {
        savedDocs: arrayUnion(docData)
      },
      { merge: true }
    );
  };
}

export function removeDoc(userID, docID) {
  return async (dispatch) => {
    let docRef = doc(db, "docs", userID);
    // fetching the last state of the user's doc to remove the specified one
    let docsSnap = await getDoc(docRef);
    let docsData = await docsSnap.data()?.savedDocs;
    // updated data after deleting the specified doc
    let newDocsData = docsData.filter((doc) => doc.id !== docID);

    // change the savedDocs after deletion
    setDoc(
      docRef,
      {
        savedDocs: newDocsData
      },
      { merge: true }
    );
  };
}

export default docsSlice.actions;
export const docsReducer = docsSlice.reducer;

// next steps:
//[1] finalize store
//[2] begin implemeting the app logic
