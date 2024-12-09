import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { ReviewContainer } from "../Review/Review-container";
import { Text } from "../UI/Text/Text";
import { useParams } from "react-router-dom";
import { useRequest } from "../../redux/hooks/use-request";
import { getReviewsByRestrantId } from "../../redux/entities/reviews/get-reviews-by-id-restaurant";
import { PENDING, REJECTED } from "../../shared/configs/request-status";
import { Loader } from "../UI/Loader/Loader";
import { Error } from "../UI/Error/Error";

export function ReviewPage() {
  const { id } = useParams();
  const { reviews } = useSelector((state) => selectRestaurantById(state, id));

  const requestStatus = useRequest(getReviewsByRestrantId, id);

  if (requestStatus === PENDING) {
    return <Loader />;
  }

  if (requestStatus === REJECTED) {
    return <Error />;
  }
  console.log(reviews, "=reviews");
  return (
    <div>
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
    </div>
  );
}
