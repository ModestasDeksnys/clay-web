import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from "../assets/2.jpg";

function Service () {
    return (
        <div>
            <Navbar />
            <Hero
            cName= "hero-mid"
            heroImg={AboutImg}
            title="Services"
            btnClass="hide"
            />
        </div>
    );
}
export default Service;