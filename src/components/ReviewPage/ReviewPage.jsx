import { Text } from "../UI/Text/Text";
import { useParams } from "react-router-dom";
import { Loader } from "../UI/Loader/Loader";
import { Error } from "../UI/Error/Error";
import { useGetReviewsByRestrantIdQuery } from "../../redux/services/api";
import { Review } from "../Review/Review";

export function ReviewPage() {
  const { id } = useParams();
  const { data, isFetching, isError } = useGetReviewsByRestrantIdQuery(id);

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div>
      <Text type={3}>Отзывы</Text>
      {(data.length && (
        <ul>
          {data.map(({ id, text }) => (
            <li key={id}>
              <Review text={text} />
            </li>
          ))}
        </ul>
      )) || <Text>Отзывов пока нет</Text>}
    </div>
  );
}
