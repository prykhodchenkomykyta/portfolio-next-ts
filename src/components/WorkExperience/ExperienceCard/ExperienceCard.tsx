import "./ExperienceCard.css";

interface ExperienceDetails {
  title: string;
  date: string;
  responsibilities: string[];
}
const ExperienceCard: React.FC<{ details: ExperienceDetails }> = ({
  details,
}) => {
  return (
    <div className="work-experience-card">
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

export default ExperienceCard;
