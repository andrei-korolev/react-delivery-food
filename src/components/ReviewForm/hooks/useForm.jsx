import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: 0,
};

const CLEAR_ACTION = "CLEAR";
const SET_NAME = "NAME";
const SET_TEXT = "TEXT";
const SET_RATING = "SET_RATING";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CLEAR_ACTION:
      return { ...DEFAULT_FORM_VALUE };
    case SET_NAME:
      return { ...state, name: payload };
    case SET_TEXT:
      return { ...state, text: payload };
    case SET_RATING:
      return { ...state, rating: payload };
    default:
      return state;
  }
};

export function useForm() {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const clear = () => dispatch({ type: CLEAR_ACTION });
  const setName = (value) => dispatch({ type: SET_NAME, payload: value });
  const setText = (value) => dispatch({ type: SET_TEXT, payload: value });
  const setRating = (value) => dispatch({ type: SET_RATING, payload: value });

  return {
    form,
    clear,
    setName,
    setText,
    setRating,
  };
}
