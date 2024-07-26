import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import Typography from "@mui/material/Typography";

import { Doughnut } from "react-chartjs-2";

import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

import { useSelector } from "react-redux";
import { expenseCategories, incomeCategories } from "../../data/categories";

Chart.register(ArcElement, Tooltip, Legend);

const Detail = ({ title }) => {
  let categories = useSelector((state) => state.expense.expenses);

  categories = categories.filter((category) => category.type === title);

  const data = {
    labels: categories.map((category) => category.category),
    datasets: [
      {
        data: categories.map((category) => category.amount),
        backgroundColor: categories.map((category) => {
          if (category.type === "Income") {
            return incomeCategories.find(
              (item) => item.type === category.category
            ).color;
          } else {
            return expenseCategories.find(
              (item) => item.type === category.category
            ).color;
          }
        }),
        hoverOffset: 4,
      },
    ],
  };

  let total = categories.reduce((acc, currVal) => {
    return acc + Number(currVal.amount);
  }, 0);

  return (
    <div
      style={{
        borderBottom: `10px solid ${title === "Expense" ? "red" : "blue"}`,
        width: "100%",
      }}
    >
      <Card>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h5">Total Balance ${total}</Typography>

          {/* Chart */}
          <Doughnut data={data} width="100%" height="50px" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Detail;
