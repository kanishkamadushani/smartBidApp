import React from "react";
import { Link } from "react-router-dom";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const NavBar = () => {
  //user logout
  const { logout } = useLogout();
  const { user } = useAuthContext();

  //logout function
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"}> SmartBid</Link>
          <div className="d-flex" role="search">
            {!user && (
              <>
                <button type="button" className="btn btn-primary me-1">
                  <Link
                    to={"/login"}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Login
                  </Link>
                </button>
                <button type="button" className="btn btn-outline-primary">
                  <Link
                    to={"/signup"}
                    style={{ color: "blue", textDecoration: "none" }}
                  >
                    Sign Up
                  </Link>
                </button>
              </>
            )}
            {user && (
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
