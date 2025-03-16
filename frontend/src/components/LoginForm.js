import React from "react";

const LoginForm = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="border p-4 rounded">
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="mb-3 form-check"></div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
