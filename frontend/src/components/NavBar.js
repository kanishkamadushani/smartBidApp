import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

import navLogo from "../assets/images/LogoNav.png";

import { motion } from "framer-motion";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex  flex-row">
            <motion.li
              className="nav-item me-4"
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
            <motion.li
              className="nav-item me-4"
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                className="nav-link active nav-link-custom"
                to={"/my_items"}
              >
                My items
              </Link>{" "}
            </motion.li>
            <motion.li
              className="nav-item me-4"
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link className="nav-link active nav-link-custom" to={"/my_bids"}>
                My bids
              </Link>{" "}
            </motion.li>

            <motion.li
              className="nav-item me-4"
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                className="nav-link active nav-link-custom"
                to="/notifications"
              >
                Notifications
              </Link>
            </motion.li>

            <motion.li
              className="nav-item me-4"
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link className="nav-link active nav-link-custom" to="/about_us">
                About Us
              </Link>
            </motion.li>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f1f1f1", // Background color for the search bar
                borderRadius: 2, // Rounded corners
                px: 2, // Padding left and right
                py: 0.5, // Padding top and bottom
                width: "220px", // Fixed width for search bar
              }}
            >
              <SearchIcon sx={{ color: "gray", mr: 1 }} /> {/* Search icon */}
              <InputBase
                placeholder="Search..."
                fullWidth
                sx={{ fontSize: 14 }}
              />
            </Box>
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
