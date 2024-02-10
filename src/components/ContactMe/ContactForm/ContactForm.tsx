import "./ContactForm.css";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form-content">
      <form
        action="https://getform.io/f/b5cfd524-ae01-423b-949a-b665aafecebf"
        method="POST"
      >
        <div className="name-container">
          <input type="text" name="firstname" placeholder="Ім'я"></input>
          <input type="text" name="lastname" placeholder="Прізвище"></input>
        </div>
        <input type="text" name="email" placeholder="Електронна пошта"></input>
        <input type="text" name="phone" placeholder="Номер телефону"></input>
        <input type="text" name="sphere" placeholder="Сфера"></input>
        <textarea
          name="message"
          placeholder="Інформація про бізнес"
          rows={3}
        ></textarea>

        <button type="submit">ВІДПРАВИТИ</button>
      </form>
    </div>
  );
};

export default ContactForm;
