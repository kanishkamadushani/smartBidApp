import React, { useState, useRef, useEffect } from "react";
import { useSignup } from "../hooks/useSignUp";

const SignUpForm = () => {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRe_password] = useState("");

  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const { signup, loading, error } = useSignup();

  // handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    //call the sign up function
    await signup(email, password, re_password);
    setLoader(false);
    setEmail("");
    setPassword("");
    setRe_password("");
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="border p-4 rounded">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Re-Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setRe_password(e.target.value)}
                value={re_password}
              />
            </div>
            <div className="mb-3 form-check"></div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            {error && <p> {error} </p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
