import { useState } from "react";
import { restaurants } from "../../data/mock";
import { Restaurant } from "../Restaurant/Restaurant";
import { Button } from "../UI/Button/Button";
import styles from "./Restaurants.module.scss";

export function Restaurants() {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  return (
    <div>
      <div className={styles.wrapper}>
        {restaurants.map((restaurant, index) => (
          <Button
            key={restaurant.id}
            size="large"
            onClick={() => setActiveRestaurant(restaurants[index])}
          >
            {restaurant.name}
          </Button>
        ))}
      </div>
      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
    </div>
  );
}
