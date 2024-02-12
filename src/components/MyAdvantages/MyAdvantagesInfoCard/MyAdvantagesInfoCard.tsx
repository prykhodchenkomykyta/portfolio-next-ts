import "./MyAdvantagesInfoCard.css";

// type SkillsProps = {
//   skill: string;
//   percentage: string;
// };
// interface SkillInfoCardProps {
//   heading: string;
//   skills: SkillsProps[];
// }
interface MyAdvantagesInfoCardProps {
  heading: string;
  info: string;
}

const MyAdvantagesInfoCard: React.FC<MyAdvantagesInfoCardProps> = ({
  heading,
  info,
}) => {
  return (
    <div className="my-advantages-info-card">
      <h6>{heading}</h6>
      <div className="my-advantages-info-content">
        {/* {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <p>{item.skill}</p>
              <p className="percentage">{item.percentage}</p>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress"
                style={{ width: item.percentage }}
              ></div>
            </div>
          </React.Fragment>
        ))} */}
        <div className="advantages-info">
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default MyAdvantagesInfoCard;
