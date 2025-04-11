import React from "react";
import Items from "../components/Items";
import logoImg from "../assets/images/LandingLogo.png";

const HomePage = () => {
  return (
    <div>
      <div>
        <div className="px-4 py-5 my-5 text-center">
          <img
            className="d-block mx-auto mb-4 logo-shadow"
            src={logoImg}
            alt=""
            width="72"
            height="72"
          />
          <h1 className="display-5 fw-bold text-body-emphasis text-color-dark">
            Welcome to SmartBid
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 text-color-dark-no-shadow">
              SmartBid is a web-based auction platform designed to streamline
              the bidding process for buyers and sellers. With a user-friendly
              interface, real-time updates, and secure transactions, SmartBid
              offers a smart, efficient, and transparent way to participate in
              online auctions.
            </p>
          </div>
        </div>
        <Items />
      </div>
    </div>
  );
};

export default HomePage;
