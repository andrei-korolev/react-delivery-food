import { createSlice } from "@reduxjs/toolkit";
import {
  FULFILLED,
  PENDING,
  REJECTED,
} from "../../shared/configs/request-status";

export const requiestSlice = createSlice({
  name: "requiest",
  initialState: {},
  selectors: {
    selectRequestStatusById: (state, id) => state[id],
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith(`/${PENDING}`),
        (state, { meta }) => {
          state[meta.requestId] = PENDING;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith(`/${REJECTED}`),
        (state, { meta }) => {
          state[meta.requestId] = REJECTED;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith(`/${FULFILLED}`),
        (state, { meta }) => {
          state[meta.requestId] = FULFILLED;
        }
      ),
});

export const { selectRequestStatusById } = requiestSlice.selectors;
