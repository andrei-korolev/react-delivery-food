import { useState } from "react";
import { restaurants } from "../../data/mock";
import { Restaurant } from "../Restaurant/Restaurant";

export function Restaurants() {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  return (
    <div>
      <div>
        {restaurants.map((restaurant, index) => (
          <button
            type="button"
            key={restaurant.id}
            onClick={() => setActiveRestaurant(restaurants[index])}
          >
            {restaurant.name}
          </button>
        ))}
      </div>
      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
    </div>
  );
}
