import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Typography } from "@mui/material";

import "./styles.css";
import { useGlobalContext } from "../../context";

const Navbar = () => {
  const { toggleIsClicked, isClicked } = useGlobalContext();
  return (
    <div className={`nav ${isClicked ? "show" : ""}`}>
      <div className="nav__item">
        <HomeIcon className="home-icon" />
        <Typography variant="subtitle2" color="gray">
          Home
        </Typography>
      </div>
      <div className="nav__item active">
        <CreditCardIcon className="card-icon" />
        <Typography variant="subtitle2">Billing</Typography>
      </div>
    </div>
  );
};

export default Navbar;
