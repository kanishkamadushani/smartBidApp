import React, { useState, useRef, useEffect } from "react";
import { useSignup } from "../hooks/useSignUp";

const SignUpForm = () => {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRe_password] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [contact_number, setContactNUmber] = useState("");
  const [address, setAddress] = useState("");

  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const { signup, loading, error } = useSignup();

  // handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    //call the sign up function
    await signup(
      email,
      password,
      re_password,
      first_name,
      last_name,
      contact_number,
      address
    );
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

            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setFirstName(e.target.value)}
                value={first_name}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setLastName(e.target.value)}
                value={last_name}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Contact Number</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setContactNUmber(e.target.value)}
                value={contact_number}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
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
