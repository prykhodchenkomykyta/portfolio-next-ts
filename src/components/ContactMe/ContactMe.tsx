import ContactForm from "./ContactForm/ContactForm";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import "./ContactMe.css";

const ContactMe: React.FC = () => {
  return (
    <section id="contact-me" className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="/assets/email-icon.png"
            text="bogdan.oximets@gmail.com"
          />
          <ContactInfoCard
            iconUrl="/assets/instagram-icon.png"
            text="Посилання на соцмережу чи куди"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;