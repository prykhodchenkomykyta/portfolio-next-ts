import Image from "next/image";
import "./MyAdvantagesCard.css";

interface MyAdvantagesCardProps {
  title: string;
  iconUrl: string;
  isActive: boolean;
  onClick: () => void;
}

const MyAdvantagesCard: React.FC<MyAdvantagesCardProps> = ({
  title,
  iconUrl,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`my-advantages-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="advantages-icon">
        <Image width={500} height={500} alt={title} src={iconUrl} />
      </div>

      <span>{title}</span>
    </div>
  );
};

export default MyAdvantagesCard;
