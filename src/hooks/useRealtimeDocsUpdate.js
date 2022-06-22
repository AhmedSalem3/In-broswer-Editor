import { useEffect, useState } from "react";
import useUser from "./useUser";
import { useDispatch } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { docsActions } from "../store/actions";

function useRealtimeDocsUpdate() {
  const user = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user?.uid) {
      return;
    }

    const docSnap = doc(db, "docs", user?.id);
    const unsub = onSnapshot(docSnap, (doc) => {
      if (doc?.exists()) {
        dispatch(docsActions.updateDocs(doc.data()));
      }
    });

    return unsub;
  }, [user, dispatch]);
}

export default useRealtimeDocsUpdate;
