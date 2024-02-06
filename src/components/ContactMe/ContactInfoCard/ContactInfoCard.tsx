import Image from "next/image";
import "./ContactInfoCard.css";

interface ContactInfoCardProps {
  text: string;
  iconUrl: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <Image width={500} height={500} alt="Contact Image" src={iconUrl} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
