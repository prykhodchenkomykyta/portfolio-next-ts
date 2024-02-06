import "./ContactForm.css";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form-content">
      <form
        action="https://getform.io/f/b5cfd524-ae01-423b-949a-b665aafecebf"
        method="POST"
      >
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name"></input>
          <input type="text" name="lastname" placeholder="Last Name"></input>
        </div>
        <input type="text" name="email" placeholder="Email"></input>
        <textarea name="message" placeholder="Message" rows={3}></textarea>

        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
