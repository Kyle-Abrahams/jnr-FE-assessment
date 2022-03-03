import React from "react";

import { BellOutlined } from "@ant-design/icons/lib/icons";
import { Badge, Avatar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import "./style.css";
import { useGlobalContext } from "../../../context";

const Header = () => {
  const { toggleIsClicked } = useGlobalContext();
  return (
    <header className="header flex">
      <div className="header--left flex">
        <div className="logo-container pointer">
          <img
            src="https://go.bonline.com/hs-fs/hubfs/bOnline-Partner-2.png?width=469&name=bOnline-Partner-2.png"
            alt=""
          />
        </div>
        <MenuIcon className="mobile-menu" onClick={toggleIsClicked} />
        <Badge variant="dot" color="primary">
          <BellOutlined className="bell-icon pointer" />
        </Badge>
      </div>
      <div className="header--right flex">
        <Avatar
          src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          sx={{ width: 40, height: 40 }}
        />
        <div className="header--right__names pointer">
          <Typography variant="h6">First Lastname</Typography>
          <Typography variant="subtitle1" color="primary">
            firstlastname@gmail.com
          </Typography>
        </div>
      </div>
    </header>
  );
};

export default Header;
