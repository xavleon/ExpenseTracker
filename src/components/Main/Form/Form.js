import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import { expenseCategories, incomeCategories } from "../../../data/categories";

import { addExpense } from "../../../redux/expenseSlice";
import { useDispatch } from "react-redux";
const Form = () => {
  const [type, setType] = useState("Income");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: Math.random(),
      type: type,
      category: category,
      amount: amount,
      date: date,
    };

    dispatch(addExpense(obj));
  };

  return (
    <Grid container spacing={3} style={{ paddingTop: "50px" }}>
      {/* Type */}
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Expense </InputLabel>
          <Select
            label="Expense"
            InputLabelProps={{ shrink: false }}
            variant="standard"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* Category */}
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            variant="standard"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {type === "Income"
              ? incomeCategories.map((category) => (
                  <MenuItem key={category.type} value={category.type}>
                    {category.type}
                  </MenuItem>
                ))
              : expenseCategories.map((category) => (
                  <MenuItem key={category.type} value={category.type}>
                    {category.type}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField
          label="Amount"
          variant="standard"
          fullWidth
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          label="Date"
          variant="standard"
          fullWidth
          type="date"
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Grid>

      <Grid item xs={12}>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
