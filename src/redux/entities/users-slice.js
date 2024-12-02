import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../data/normalized-mock";

const initialState = {
  entities: normalizedUsers.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  selectors: {
    selectUsersIds: (state) => state.ids,
    selectUserById: (state, id) => state.entities[id],
    selectActiveUser: (state) =>
      Object.values(state.entities).find(({ isActive }) => isActive),
  },
});

export const { selectUsersIds, selectUserById, selectActiveUser } =
  usersSlice.selectors;
