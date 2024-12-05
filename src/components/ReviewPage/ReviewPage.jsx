import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants-slice";
import { ReviewContainer } from "../Review/Review-container";
import { Text } from "../UI/Text/Text";
import { useParams } from "react-router-dom";

export function ReviewPage() {
  const { id } = useParams();
  const { reviews } = useSelector((state) => selectRestaurantById(state, id));

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
