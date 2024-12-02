import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { Text } from "../UI/Text/Text";
import { DishContainer } from "../Dish/Dish-container";
import { ReviewContainer } from "../Review/Review-container";

export function Restaurant({ restaurant: { name, menu, reviews } }) {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Text type={2}>{name}</Text>
      <Text type={3}>Меню</Text>
      {(menu.length && (
        <ul>
          {menu.map((id) => (
            <li key={id}>
              <DishContainer id={id} />
            </li>
          ))}
        </ul>
      )) || <Text>Информация об актуальном меню сейчас отсутствует</Text>}

      <Text type={3}>Отзывы</Text>
      {(reviews.length && (
        <ul>
          {reviews.map((id) => (
            <li key={id}>
              <ReviewContainer id={id} />
            </li>
          ))}
        </ul>
      )) || <Text>Отзывов пока нет</Text>}

      {user && <ReviewForm />}
    </div>
  );
}
