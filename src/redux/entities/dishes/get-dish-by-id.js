import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./dishes-slice";

export const getDishById = createAsyncThunk(
  "dishes/getDishById",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${id}`);

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("dishes/getDishById - no data");
      return;
    }

    return result;
  },
  {
    condition: (id, { getState }) => !selectDishById(getState(), id),
  }
);
