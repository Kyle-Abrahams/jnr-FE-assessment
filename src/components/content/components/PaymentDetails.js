import React from "react";

import { Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const PaymentDetails = ({ activeUser }) => {
  const date = new Date(activeUser.next_invoice_date);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  return (
    <div className="details-card payment-details">
      <div className="payment-details__heading">
        <Typography variant="h5">Payment Details</Typography>
        <Typography variant="subtitle2">
          View details of your next invoice and payment method
        </Typography>
        <Typography variant="h6" className="invoice">
          Next invoice: {`${day} ${month} ${year}`}
        </Typography>
      </div>
      <div className="payment-details__body">
        <div className="balance card">
          <Typography variant="subtitle1" sx={{ color: "black" }}>
            Current balance
          </Typography>
          <Typography variant="h3" gutterBottom className="balance">
            &pound;{activeUser.balance}
          </Typography>
          <div className="balance__subtitle flex">
            <LockIcon />
            <p>This is a secure 256-bit SSL encrypted payment. You're safe. </p>
          </div>
          <div className="payment-btn">Pay Now</div>
        </div>
        <div className="payment-method card">
          <div className="payment-method__heading flex">
            <Typography sx={{ color: "black" }}>Payment method</Typography>
            <div className="tag">{activeUser.payment_method}</div>
          </div>

          <div className="payment-method__subtitle">
            <div className="flex">
              <LightbulbIcon className="subtitle-icon" />
              <p>
                <span>Guide: </span>To manage your payments more easily,we
                recommend switching to Direct Debit
              </p>
            </div>
            <div className="payment-btn">Switch to Direct Debit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
