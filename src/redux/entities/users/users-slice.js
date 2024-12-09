import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectUsersIds: (state) => state.ids,
    selectUsers: (state) => state.entities,
    selectUserById: (state, id) => state.entities[id],
    selectActiveUser: (state) =>
      Object.values(state.entities).find(({ isActive }) => isActive),
  },
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});

export const { selectUsersIds, selectUserById, selectActiveUser, selectUsers } =
  usersSlice.selectors;
