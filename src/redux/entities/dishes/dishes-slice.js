import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesByIdRestaurant } from "./get-dishes-by-id-restaurant";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectDishById: (state, id) => state.entities[id],
    selectDishes: (state) => state.entities,
    selectDishesIds: (state) => state.ids,
  },
  extraReducers: (builder) =>
    builder.addCase(getDishesByIdRestaurant.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});

export const { selectDishes, selectDishById, selectDishesIds } =
  dishesSlice.selectors;
