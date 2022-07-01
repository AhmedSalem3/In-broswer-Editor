import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";

function useUpdateProfile() {
  if (!auth?.currentUser) return null;

  return async (updates) => {
    await updateProfile(auth.currentUser, updates);
  };
}

export default useUpdateProfile;
