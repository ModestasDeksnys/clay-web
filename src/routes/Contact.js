import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from "../assets/3.jpg";

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
        </div>
    );
}
export default Contact;