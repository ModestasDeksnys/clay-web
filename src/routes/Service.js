import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from "../assets/2.jpg";
import Footer from '../components/Footer';
import Services from '../components/Service';
import Search from '../SearchPage/Search';

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
            <Services />
            <Search />
            
            <Footer/>
        </div>
    );
}
export default Service;