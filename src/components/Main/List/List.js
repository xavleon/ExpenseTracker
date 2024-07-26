import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Slide,
} from "@mui/material";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteExpense } from "../../../redux/expenseSlice";

const List = () => {
  const expenses = useSelector((state) => state.expense.expenses);
  const dispatch = useDispatch();
  console.log(expenses); // Ensure this logs the correct state

  return (
    <div
      style={{
        maxHeight: "150px",
        overflow: "auto",
      }}
    >
      {expenses.map((expense) => (
        <ListItem
          secondaryAction={
            <>
              <IconButton edge="end" aria-label="delete">
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => {
                  dispatch(deleteExpense(expense.id));
                }}
              >
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <ListItemAvatar>
            <Avatar
              style={{
                color: expense.type === "Income" ? "red" : "green",
                backgroundColor: "skyblue",
              }}
            >
              <MoneyOffIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={expense.category}
            secondary={`${expense.amount}$ - ${expense.date}`}
          />
        </ListItem>
      ))}
    </div>
  );
};

export default List;
