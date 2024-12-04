import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { Text } from "../UI/Text/Text";
import { Outlet } from "react-router-dom";
import { Link } from "../UI/Link/Link";

export function Restaurant({ restaurant: { name } }) {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Text type={2}>{name}</Text>

      <div>
        <Link to="./menu" text="Menu" />
        <Link to="./reviews" text="Reviews" />
      </div>

      <Outlet />

      {user && <ReviewForm />}
    </div>
  );
}
