import { useParams } from "react-router-dom";
import { DishContainer } from "../Dish/Dish-container";
import { Text } from "../UI/Text/Text";

export function DishPage() {
  const { id } = useParams();

  return (
    <div>
      <Text>Самое вкусное блюдо</Text>
      <DishContainer id={id} />
    </div>
  );
}
