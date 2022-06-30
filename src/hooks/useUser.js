import { useSelector } from "react-redux";

function useUser() {
  const user = useSelector((state) => state.auth.user);
  return user || null;
}

export default useUser;
