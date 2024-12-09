import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "../restaurants/restaurants-slice";
import { selectReviewsById } from "./reviews-slice";

export const getReviewsByRestrantId = createAsyncThunk(
  "reviews/getReviewsByRestrantId",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews/?restaurantId=${id}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("reviews/getReviewsByRestrantId - no data");
      return;
    }

    return result;
  },
  {
    condition: (id, { getState }) =>
      !selectRestaurantById(getState(), id)?.reviews.every((reviewId) =>
        selectReviewsById(getState(), reviewId)
      ),
  }
);
