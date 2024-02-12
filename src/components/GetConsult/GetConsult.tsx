import ContactForm from "./ContactForm/ContactForm";
import "./GetConsult.css";

const GetConsult: React.FC = () => {
  return (
    <section id="get-consult" className="consult-contact-container">
      <h5>Отримайте безкоштовну консультацію</h5>
      <div className="consult-contact-content">
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default GetConsult;
