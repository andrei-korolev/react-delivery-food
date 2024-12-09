import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./dishes-slice";

import { selectRestaurantById } from "../restaurants/restaurants-slice";

export const getDishesByIdRestaurant = createAsyncThunk(
  "dishes/getDishes",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${id}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("dishes/getDishes - no data");
      return;
    }

    return result;
  },
  {
    condition: (id, { getState }) =>
      !selectRestaurantById(getState(), id)?.menu.every((dishId) =>
        selectDishById(getState(), dishId)
      ),
  }
);
