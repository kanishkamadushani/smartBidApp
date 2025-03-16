import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const signup = async (
    email,
    password,
    re_password,
    first_name,
    last_name,
    contact_number,
    address
  ) => {
    setLoading(true);
    setError(false);

    //api call (set the admin field as false)
    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        re_password,
        admin: false,
        first_name,
        last_name,
        contact_number,
        address,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      //save the user to the local storage
      localStorage.setItem("user", JSON.stringify(json));

      //update the auth context
      dispatch({ type: "LOGIN", payload: json });
      navigate("/login");
      setLoading(false);
    }
  };

  return { signup, error, loading };
};
