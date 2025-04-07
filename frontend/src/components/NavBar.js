import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

import navLogo from "../assets/images/LogoNav.png";

import { motion } from "framer-motion";

const NavBar = () => {
  //user logout
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  //logout function
  const handleLogout = () => {
    logout();
  };

  const signUp = () => {
    navigate("/signup");
  };

  const login = () => {
    navigate("login");
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"} className="me-5">
            {" "}
            {/* Display the logo as an image */}
            <img
              src={navLogo}
              alt="SmartBid Logo"
              style={{ height: "40px" }}
            />{" "}
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <motion.li
              className="nav-item"
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                className="nav-link active nav-link-custom"
                to={"/create_item"}
              >
                Create Item{" "}
              </Link>{" "}
            </motion.li>
          </ul>
          <div className="d-flex" role="search">
            {!user && (
              <>
                <button
                  type="button"
                  className="btn btn-primary me-1"
                  onClick={login}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={signUp}
                >
                  Sign up
                </button>
              </>
            )}
            {user && (
              <button
                type="button"
                className="btn btn-outline-primary "
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
