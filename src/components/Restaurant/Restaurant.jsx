import { Dish } from "../Dish/Dish";

export function Restaurant({ restaurant: { name, menu, reviews } }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>Меню</h3>
      {(menu.length && (
        <ul>
          {menu.map((menu) => (
            <li key={menu.name}>
              <Dish name={menu.name} />
            </li>
          ))}
        </ul>
      )) || <div>Информация об актуальном меню сейчас отсутствует</div>}

      <h3>Отзывы</h3>
      {(reviews.length && (
        <ul>
          {reviews.map((review) => (
            <li key={review.text}>{review.text}</li>
          ))}
        </ul>
      )) || <div>Отзывов пока нет</div>}
    </div>
  );
}
