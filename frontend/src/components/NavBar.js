import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNotification } from "../hooks/useNotifications"; // Add this import
import navLogo from "../assets/images/LogoNav.png";
import { motion } from "framer-motion";
import { Box, InputBase, Badge } from "@mui/material"; // Add Badge to the imports
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications"; // Add this import
import { useNotificationsContext } from "../hooks/useNotificationsContext";

const NavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  // const { storedNotifications } = useNotification(); // Get notifications
  const { notifications, notifications_dispatch } = useNotificationsContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  const signUp = () => {
    navigate("/signup");
  };

  const login = () => {
    navigate("login");
  };

  useEffect(() => {
    if (user) {
      //API to get all notifications
      const getALLNotifications = async () => {
        try {
          const response = await fetch(`/api/notification/${user.email}`);
          const json = await response.json();

          if (response.ok) {
            notifications_dispatch({
              type: "SET NOTIFICATIONS",
              payload: json,
            });
          }
        } catch (error) {
          console.error("Error fetching notifications:", error);
        }
      };
      getALLNotifications();
    }
  }, [user]);

  useEffect(() => {
    console.log("notifications updated:", notifications);
  }, [notifications]);

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"} className="me-5">
            <img src={navLogo} alt="SmartBid Logo" style={{ height: "40px" }} />{" "}
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
              <Link className="nav-link active nav-link-custom" to="/about_us">
                About Us
              </Link>
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
                <Badge
                  badgeContent={notifications.length}
                  color="error"
                  invisible={notifications.length === 0}
                >
                  <NotificationsIcon />
                </Badge>
              </Link>
            </motion.li>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f1f1f1",
                borderRadius: 2,
                px: 2,
                py: 0.5,
                width: "220px",
              }}
            >
              <SearchIcon sx={{ color: "gray", mr: 1 }} />
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
