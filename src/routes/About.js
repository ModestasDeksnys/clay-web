import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from "../assets/1.jpg";
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

function About () {
    return (
        <div>
            <Navbar />
            <Hero
            cName= "hero-mid"
            heroImg={AboutImg}
            title="About us"
            btnClass="hide"
            />
            <AboutUs />
            <Footer/>
        </div>
    );
}
export default About;