import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes-slice";
import { Dish } from "./Dish";

export function DishContainer({ id }) {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  return <Dish name={dish.name} id={dish.id} />;
}
