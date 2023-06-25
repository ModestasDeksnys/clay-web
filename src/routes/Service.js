import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from "../assets/2.jpg";
import Footer from '../components/Footer';
import Trip from '../components/Trip';

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
            <Trip />
            <Footer/>
        </div>
    );
}
export default Service;