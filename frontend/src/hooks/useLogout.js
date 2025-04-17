/*import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //remove from the local storage
    localStorage.removeItem("user");

    //set the payload type
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};*/
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      // Remove user from local storage
      localStorage.removeItem("user");

      // Dispatch logout action
      dispatch({ type: "LOGOUT" });
    }
    // If user cancels, do nothing
  };

  return { logout };
};
