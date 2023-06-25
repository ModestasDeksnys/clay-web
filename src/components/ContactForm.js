import "./ContactFormStyles.css";

function ContactForm() {
    return(
        <div className="form-container">
            <h1> Send a message</h1>
            <form>
                <input placeholder="Name" type="text" />
                <input placeholder="Email" type="email" />
                <input placeholder="Subject" type="text" />
                <textarea placeholder="Message" rows='4' type="text" />
                <button type="submit">Send Message</button>
            </form>
            </div>
    )
}
export default ContactForm;