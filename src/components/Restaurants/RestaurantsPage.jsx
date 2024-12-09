import styles from "./Restaurants.module.scss";
import { useSelector } from "react-redux";
import { RestaurantTabContainer } from "./components/Restaurant-tab-container/Restaurant-tab-container";
import { Outlet } from "react-router-dom";

import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import { PENDING, REJECTED } from "../../shared/configs/request-status";
import { Loader } from "../UI/Loader/Loader";
import { Error } from "../UI/Error/Error";
import { useRequest } from "../../redux/hooks/use-request";

export function RestaurantsPage() {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const requestStatus = useRequest(getRestaurants);

  if (requestStatus === PENDING) {
    return <Loader />;
  }

  if (requestStatus === REJECTED) {
    return <Error />;
  }

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
