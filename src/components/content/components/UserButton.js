import React from "react";

import { Typography } from "@mui/material";

const UserButton = ({ user, activeUser, setActiveFilter }) => {
  return (
    <div
      className={`user__btn  ${
        user.account_status === activeUser.account_status ? "active-user" : ""
      }`}
      key={user.account_id}
      onClick={() => setActiveFilter(user.account_id)}
    >
      <div className="user__btn-names">
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold" }}
        >{`${user.first_name} ${user.last_name}`}</Typography>
        <Typography
          variant="subtitle2"
          className={`tag ${user.account_status}`}
        >
          {user.account_status}
        </Typography>
      </div>
      <Typography variant="subtitle2" className="account-id">
        Account ID: {user.account_id}
      </Typography>
    </div>
  );
};

export default UserButton;
