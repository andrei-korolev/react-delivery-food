import { createSlice } from "@reduxjs/toolkit";
import { USER_LIST } from "../../data/user";

const initialState = {
  entities: USER_LIST.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: USER_LIST.map(({ id }) => id),
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
