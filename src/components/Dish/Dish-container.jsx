import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice";
import { Dish } from "./Dish";
import { useRequest } from "../../redux/hooks/use-request";
import { getDishById } from "../../redux/entities/dishes/get-dish-by-id";
import { PENDING, REJECTED } from "../../shared/configs/request-status";
import { Loader } from "../UI/Loader/Loader";
import { Error } from "../UI/Error/Error";

export function DishContainer({ id }) {
  const dish = useSelector((state) => selectDishById(state, id));

  const requestStatus = useRequest(getDishById, id);

  if (requestStatus === PENDING) {
    return <Loader />;
  }

  if (requestStatus === REJECTED) {
    return <Error />;
  }

  if (!dish) {
    return null;
  }

  return <Dish name={dish.name} id={dish.id} />;
}
