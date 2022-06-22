import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { authActions } from "../store/actions";

function useUpdateUserState() {
  const dispatch = useDispatch();

  //* realtime chanegs for the user state (signin, signup, logout)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authActions.updateUser(user));
      } else {
        dispatch(authActions.updateUser(null));
      }
    });

    return unsub();
  }, [dispatch]);
}

export default useUpdateUserState;
