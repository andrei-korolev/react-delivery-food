import { Dish } from "../Dish/Dish";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { Text } from "../UI/Text/Text";

export function Restaurant({ restaurant: { name, menu, reviews } }) {
  return (
    <div>
      <Text type={2}>{name}</Text>
      <Text type={3}>Меню</Text>
      {(menu.length && (
        <ul>
          {menu.map((menu) => (
            <li key={menu.name}>
              <Dish name={menu.name} />
            </li>
          ))}
        </ul>
      )) || <Text>Информация об актуальном меню сейчас отсутствует</Text>}

      <Text type={3}>Отзывы</Text>
      {(reviews.length && (
        <ul>
          {reviews.map((review) => (
            <li key={review.text}>{review.text}</li>
          ))}
        </ul>
      )) || <Text>Отзывов пока нет</Text>}
      <ReviewForm />
    </div>
  );
}
