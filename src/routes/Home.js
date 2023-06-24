import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function Home () {
    return (
        <div>
            <Navbar />
            <Hero
            cName= "hero"
            heroImg="https://images.unsplash.com/photo-1475965894430-b05c9d13568a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
            title="Create a decorative wall yourself!"
            text="We have prepared wall decoration sets for your convience."
            buttonText="Read more"
            url="/"
            btnClass="show"
            />
            <h1>veikia</h1>
        </div>
    );
}
export default Home;