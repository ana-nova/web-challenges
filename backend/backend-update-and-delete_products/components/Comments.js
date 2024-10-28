export default function Comments({ reviews }) {
  return (
    <>
      <h3>Comments</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <p> {review.title}</p>{" "}
            <p>
              {review.rating}/5: {review.text}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
