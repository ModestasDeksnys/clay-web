import "./ServiceStyles.css";
import TripData from "./ServiceData";
import Trip1 from "../assets/1.jpg";
import Trip2 from "../assets/1.jpg";
import Trip3 from "../assets/1.jpg";

function Service() {
    return (
    <div className="trip">
        <h1>Insert Services</h1>
        <p>More info about services
            </p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Clay Picture"
                text="About the clay picture"
                />
                 <TripData
                image={Trip2}
                heading="Clay Picture"
                text="About the clay picture"
                />
                 <TripData
                image={Trip3}
                heading="Clay Picture"
                text="About the clay picture"
                />
            </div>
    </div>
    );
}

export default Service;
