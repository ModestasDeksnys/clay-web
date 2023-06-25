import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from "../assets/3.jpg";
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact () {
    return (
        <div>
            <Navbar />
            <Hero
            cName= "hero-mid"
            heroImg={AboutImg}
            title="Contacts"
            btnClass="hide"
            />
            <ContactForm />
            <Footer/>
        </div>
    );
}
export default Contact;