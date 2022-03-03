import React from "react";
import { useGlobalContext } from "../../context";

import { Typography } from "@mui/material";

import "./styles.css";
import UserButton from "./components/UserButton";
import PaymentDetails from "./components/PaymentDetails";
import Products from "./components/Products";
import BillingHistory from "./components/BillingHistory";

const Content = () => {
  const { usersData, activeUser, setActiveFilter } = useGlobalContext();
  return (
    <main>
      <div className="main__title">
        <Typography variant="h4">Billing</Typography>
        <Typography variant="subtitle2">Overview of your accounts</Typography>
      </div>
      <div className="user__selector">
        {usersData.map((user) => (
          <UserButton
            user={user}
            activeUser={activeUser}
            setActiveFilter={setActiveFilter}
          />
        ))}
      </div>
      <div className="account-details flex">
        <PaymentDetails activeUser={activeUser} />
        <Products activeUser={activeUser} />
      </div>
      <BillingHistory />
    </main>
  );
};

export default Content;
