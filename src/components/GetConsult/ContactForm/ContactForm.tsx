import "./ContactForm.css";

const ContactForm: React.FC = () => {
  return (
    <div className="consult-contact-form-content">
      <form
        action="https://getform.io/f/b5cfd524-ae01-423b-949a-b665aafecebf"
        method="POST"
      >
        <input type="text" name="name" placeholder="Прізвище та ім'я"></input>
        <input
          type="text"
          name="text"
          placeholder="Telegram або номер телефону"
        ></input>

        <button type="submit">ВІДПРАВИТИ</button>
      </form>
    </div>
  );
};

export default ContactForm;
