import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants-slice";
import { Restaurant } from "./Restaurant";

export function RestaurantContainer({ id }) {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
}
