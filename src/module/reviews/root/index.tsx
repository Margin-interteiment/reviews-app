import { Route, Routes } from "react-router-dom";
import { ReviewsPage } from "../pages/reviewsPage/reviews-page";

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<ReviewsPage />} />
    </Routes>
  );
};
