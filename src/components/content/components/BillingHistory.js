import React from "react";

import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DownloadIcon from "@mui/icons-material/Download";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BillingHistory = () => {
  const billingData = [
    {
      date: "13 Dec 2021",
      type: "Invoice",
      amount: "8.00",
      balance: "45.00",
      reference: "8993UDEJ",
    },
    {
      date: "13 Dec 2021",
      type: "Invoice",
      amount: "8.00",
      balance: "45.00",
      reference: "8993UDEJ",
    },
    {
      date: "13 Dec 2021",
      type: "Invoice",
      amount: "8.00",
      balance: "45.00",
      reference: "8993UDEJ",
    },
    {
      date: "13 Dec 2021",
      type: "Invoice",
      amount: "8.00",
      balance: "45.00",
      reference: "8993UDEJ",
    },
    {
      date: "13 Dec 2021",
      type: "Invoice",
      amount: "8.00",
      balance: "45.00",
      reference: "8993UDEJ",
    },
    {
      date: "13 Dec 2021",
      type: "Invoice",
      amount: "8.00",
      balance: "45.00",
      reference: "8993UDEJ",
    },
    {
      date: "13 Dec 2021",
      type: "Invoice",
      amount: "8.00",
      balance: "45.00",
      reference: "8993UDEJ",
    },
    {
      date: "13 Dec 2021",
      type: "Invoice",
      amount: "8.00",
      balance: "45.00",
      reference: "8993UDEJ",
    },
  ];
  return (
    <div className="billing-history details-card">
      <div className="billing-history__heading">
        <Typography variant="h5">Billing history</Typography>
        <Typography variant="subtitle2">
          Choose a billing plan to see more details
        </Typography>
      </div>
      <TableContainer sx={{ minWidth: 650, marginTop: "2rem" }}>
        <Table aria-label="simple table">
          <TableHead
            sx={{
              borderTop: "1px solid black",
            }}
          >
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Reference</TableCell>
              <TableCell>Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {billingData.map((data, i) => (
              <TableRow key={i}>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.type}</TableCell>
                <TableCell>{data.amount}</TableCell>
                <TableCell>{data.balance}</TableCell>
                <TableCell>{data.reference}</TableCell>
                <TableCell>
                  <DownloadIcon className="download-icon" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2}>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          sx={{ margin: "2rem auto" }}
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default BillingHistory;
