import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../../redux/entities/restaurants/restaurants-slice";
import { Link } from "../../../UI/Link/Link";

export function RestaurantTabContainer({ id }) {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return <Link to={`./${id}/menu`} text={restaurant.name} />;
}
