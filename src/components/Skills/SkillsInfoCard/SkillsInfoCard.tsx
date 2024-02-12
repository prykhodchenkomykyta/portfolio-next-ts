import "./SkillsInfoCard.css";
import React from "react";

// type SkillsProps = {
//   skill: string;
//   percentage: string;
// };
// interface SkillInfoCardProps {
//   heading: string;
//   skills: SkillsProps[];
// }
interface SkillInfoCardProps {
  heading: string;
  info: string;
}

const SkillsInfoCard: React.FC<SkillInfoCardProps> = ({ heading, info }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>
      <div className="skills-info-content">
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
        <div className="skill-info">
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsInfoCard;
