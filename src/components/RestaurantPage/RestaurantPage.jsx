import { useParams } from "react-router-dom";
import { RestaurantContainer } from "../Restaurant/Restaurant-container";

export function RestaurantPage() {
  const { id } = useParams();

  return <RestaurantContainer id={id} />;
}
