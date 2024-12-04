import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart-slice";
import { Text } from "../UI/Text/Text";
import { CartItem } from "./CartItem/CartItem";

export function Cart() {
  const list = useSelector(selectCartItems);

  if (!list.length) {
    return null;
  }

  return (
    <div>
      <Text>Cart</Text>
      <ul>
        {list.map(({ id }) => (
          <li key={id}>
            <CartItem id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
