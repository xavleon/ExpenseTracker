import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import Form from "./Form/Form";
import List from "./List/List";
import { useSelector } from "react-redux";

const Main = () => {
  const expenses = useSelector((state) => state.expense.expenses);

  let total = expenses.reduce((acc, currVal) => {
    return acc + Number(currVal.amount);
  }, 0);

  return (
    <Card>
      <CardHeader title="Expense Tracker" />

      <CardContent align="center">
        <Typography variant="h5">Total Balance $({total})</Typography>

        <Form />
      </CardContent>
      <Divider />

      {/* List */}

      <CardContent align="center">
        <List />
      </CardContent>
    </Card>
  );
};

export default Main;
