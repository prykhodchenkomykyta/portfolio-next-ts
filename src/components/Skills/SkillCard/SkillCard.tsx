import Image from "next/image";
import "./SkillCard.css";

interface SkillCardProps {
  title: string;
  iconUrl: string;
  isActive: boolean;
  onClick: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  iconUrl,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="skill-icon">
        <Image width={500} height={500} alt={title} src={iconUrl} />
      </div>

      <span>{title}</span>
    </div>
  );
};

export default SkillCard;
