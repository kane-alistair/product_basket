import { useContext } from "react";
import "../../app.css";
import { useReviews } from "../../hooks/useReviews";
import { ColumnBox } from "../ColumnBox/ColumnBox";
import { SelectedProductContext } from "../../contexts/SelectedProductContext";
import { Row } from "../Row/Row";
import styles from "./Reviews.module.css";

/**
 *
 * @param {reviews} reviews Array of reviews
 * @param {string} reviews.comment comment of the review
 * @param {string} reviews.rating rating of the review
 * @param {string} reviews.username username of the reviewer
 * @param {string} reviews.date date of the review
 *
 * @returns
 */
export const Reviews = () => {
  const [selectedProduct] = useContext(SelectedProductContext);
  const { reviews, loading, err } = useReviews();

  if (!selectedProduct) {
    return null;
  }

  if (err) {
    return <div>Something went wrong</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${styles.reviews}`}>
      {reviews?.map((review) => (
        <div className={styles.review} key={review.id}>
          <div className={styles.reviewHeader}>
            <Row space="between">
              <span className={styles.username}>{review.username}</span>
              <span className={styles.date}>{review.date}</span>
            </Row>
          </div>
          <div className={styles.reviewBody}>
            <span className={styles.rating}>{review.rating} / 5</span>
            <ColumnBox>
              <span className={styles.comment}>{review.comment}</span>
            </ColumnBox>
          </div>
        </div>
      ))}
    </div>
  );
};
