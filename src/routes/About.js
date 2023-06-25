import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from "../assets/1.jpg";

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
        </div>
    );
}
export default About;