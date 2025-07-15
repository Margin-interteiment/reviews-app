import { ReviewsSlider } from "../../components/reviews-slider";
import style from "./style.module.css";

export const ReviewsPage = () => {
  return (
    <div className={style.reviewsPage}>
      <ReviewsSlider />
    </div>
  );
};
