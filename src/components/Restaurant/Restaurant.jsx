import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { Text } from "../UI/Text/Text";
import { Outlet } from "react-router-dom";
import { Link } from "../UI/Link/Link";
import { useAddReviewMutation } from "../../redux/services/api";
import { Loader } from "../UI/Loader/Loader";

export function Restaurant({ restaurant: { id, name } }) {
  const { user } = useContext(UserContext);
  const [addReview, { isLoading }] = useAddReviewMutation(id);

  return (
    <div>
      <Text type={2}>{name}</Text>
      <div>
        <Link to="./menu" text="Menu" />
        <Link to="./reviews" text="Reviews" />
      </div>
      <Outlet />

      {user &&
        (isLoading ? (
          <Loader />
        ) : (
          <ReviewForm onSubmit={(body) => addReview({ id, body })} />
        ))}
    </div>
  );
}
