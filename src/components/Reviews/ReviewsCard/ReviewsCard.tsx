import "./ReviewsCard.css";

interface ReviewsDetails {
  title: string;
  date: string;
  responsibilities: string[];
}
const ReviewsCard: React.FC<{ details: ReviewsDetails }> = ({ details }) => {
  return (
    <div className="reviews-card">
      <h6>{details.title}</h6>
      <div className="work-duration">{details.date}</div>

      <ul>
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsCard;
