import styles from "./Restaurants.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants-slice";
import { RestaurantTabContainer } from "./components/Restaurant-tab-container/Restaurant-tab-container";
import { Outlet } from "react-router-dom";

export function RestaurantsPage() {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <div>
      <div className={styles.wrapper}>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer key={id} id={id} />
        ))}
      </div>
      <Outlet />
    </div>
  );
}
