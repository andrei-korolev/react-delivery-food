import { useSelector } from "react-redux";
import { Restaurant } from "./Restaurant";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { useRequest } from "../../redux/hooks/use-request";
import { getRestaurantById } from "../../redux/entities/restaurants/get-restaurant-by-id";
import { PENDING, REJECTED } from "../../shared/configs/request-status";
import { Error } from "../UI/Error/Error";
import { Loader } from "../UI/Loader/Loader";

export function RestaurantContainer({ id }) {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const requestStatus = useRequest(getRestaurantById, id);

  if (requestStatus === PENDING) {
    return <Loader />;
  }

  if (requestStatus === REJECTED) {
    return <Error />;
  }

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
}
