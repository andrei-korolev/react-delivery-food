import { useSelector } from "react-redux";
import { Text } from "../../UI/Text/Text";
import { Counter } from "../../Counter/Counter";
import { selectDishById } from "../../../redux/entities/dishes/dishes-slice";
import { selectAmountById } from "../../../redux/ui/cart-slice";

export function CartItem({ id }) {
  const { name } = useSelector((state) => selectDishById(state, id));
  const amount = useSelector((state) => selectAmountById(state, id));

  if (!name) {
    return null;
  }

  return (
    <div>
      <Text>{name}</Text>
      <Counter value={amount} />
    </div>
  );
}
