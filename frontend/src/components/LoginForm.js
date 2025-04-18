import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const LoginForm = () => {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const { login, error, loading } = useLogin();

  // handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    //call the login function
    await login(email, password);
    setLoader(false);
    setEmail("");
    setPassword("");
  };

  return (
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
          <div className="mb-3 form-check"></div>
          <button type="submit" className="btn btn-primary w-100">
            {loading ? "Loading..." : "Submit"}
          </button>
          {error && <p className="text-danger mt-2">{error}</p>}
        </form>

        {/* Forgot Password Link */}
        <div className="mt-3 text-center">
          <a href="/forgot-password" className="text-decoration-none">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
