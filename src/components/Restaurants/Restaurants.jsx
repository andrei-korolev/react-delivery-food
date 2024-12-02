import { useState } from "react";
import styles from "./Restaurants.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants-slice";
import { RestaurantContainer } from "../Restaurant/Restaurant-container";
import { RestaurantTabContainer } from "./components/Restaurant-tab-container/Restaurant-tab-container";

export function Restaurants() {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0]
  );

  return (
    <div>
      <div className={styles.wrapper}>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer
            key={id}
            id={id}
            onClick={() => setActiveRestaurantId(id)}
          />
        ))}
      </div>
      {activeRestaurantId && <RestaurantContainer id={activeRestaurantId} />}
    </div>
  );
}
