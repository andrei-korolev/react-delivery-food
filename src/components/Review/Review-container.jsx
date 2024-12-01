import { useSelector } from "react-redux";
import { Review } from "./Review";
import { selectReviewsById } from "../../redux/entities/reviews-slice";

export function ReviewContainer({ id }) {
  const review = useSelector((state) => selectReviewsById(state, id));

  if (!review) {
    return null;
  }

  return <Review text={review.text} />;
}
