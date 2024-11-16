import { useState } from "react";
import { restaurants } from "../../data/mock";
import { Dish } from "../Dish/Dish";

export function Restaurants() {
  const [activeRestaurant, setActiveRestaurant] = useState(0);

  return (
    <div>
      <div>
        {restaurants.map((restaurant, index) => (
          <button
            type="button"
            key={restaurant.id}
            onClick={() => setActiveRestaurant(index)}
          >
            {restaurant.name}
          </button>
        ))}
      </div>
      {restaurants.map((restaurant, index) => (
        <div key={restaurant.id} hidden={activeRestaurant !== index}>
          <h2>{restaurant.name}</h2>
          <h3>Меню</h3>
          {(restaurant.menu.length && (
            <ul>
              {restaurant.menu.map((menu) => (
                <li key={menu.name}>
                  <Dish name={menu.name} />
                </li>
              ))}
            </ul>
          )) || <div>Информация об актуальном меню сейчас отсутствует</div>}

          <h3>Отзывы</h3>
          {(restaurant.reviews.length && (
            <ul>
              {restaurant.reviews.map((review) => (
                <li key={review.text}>{review.text}</li>
              ))}
            </ul>
          )) || <div>Отзывов пока нет</div>}
        </div>
      ))}
    </div>
  );
}
