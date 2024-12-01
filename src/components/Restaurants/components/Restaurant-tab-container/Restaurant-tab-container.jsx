import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../../redux/entities/restaurants-slice";
import { Button } from "../../../UI/Button/Button";

export function RestaurantTabContainer({ id, onClick }) {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return (
    <Button size="large" onClick={onClick}>
      {restaurant.name}
    </Button>
  );
}
