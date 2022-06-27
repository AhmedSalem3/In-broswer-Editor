import { useEffect, useState } from "react";
import useUser from "./useUser";
import { useDispatch } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { docsActions } from "../store/actions";

function useRealtimeDocsUpdate() {
  const user = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user?.uid) {
      return;
    }

    const docSnap = doc(db, "docs", user?.uid);
    const unsub = onSnapshot(docSnap, (doc) => {
      if (doc?.exists()) {
        dispatch(docsActions.updateDocs(doc.data()?.savedDocs));
        //TODO: UPDATE THE CURRENT DOC STATE
        // if the docs were decreased, change to the first index, and a doc was added change to it
        console.log(doc.docChanges());
        dispatch(docsActions.setCurrentDoc());
      }
    });

    return unsub;
  }, [user, dispatch]);
}

export default useRealtimeDocsUpdate;
