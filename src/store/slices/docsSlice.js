import { createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../firebase";
import {} from "firebase/firestore";

const initialState = {
  docs: [
    {
      name: "doc1",
      id: "23435",
      creationDate: "19th June, 2021",
      content: "- Hello there \n ## I am domy"
    },
    {
      name: "doc2",
      id: "123134",
      creationDate: "10th July, 2022",
      content: "- Hello there \n ## I am ramzy"
    },
    {
      name: "doc3",
      id: "567345",
      creationDate: "19th July, 2023",
      content: "- Hello there \n ## I am samy"
    }
  ],
  currentDoc: {}
};

const { actions, reducer } = createSlice({
  name: "docs",
  initialState,
  reducers: {}
});

// THUNKS

export function fetchDocs(userID) {
  return (dispatch) => {};
}

export function addDoc(userID, docData) {
  return (dispatch) => {};
}

export function removeDoc(userID, docID) {
  return (dispatch) => {};
}

export default actions;
export const authReducer = reducer;

// complete all functions
