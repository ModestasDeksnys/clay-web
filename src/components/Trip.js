import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/1.jpg";
import Trip2 from "../assets/1.jpg";
import Trip3 from "../assets/1.jpg";

function Trip() {
    return (
    <div className="trip">
        <h1>My Trip</h1>
        <p>My trip to the Bahamas was amazing! I had a great time
            </p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip to Bahamas"
                text="Lorem ipsum doloisicing elit."
                />
                 <TripData
                image={Trip2}
                heading="Trip to Bahamas"
                text="Lorem ipsum doloisicing elit."
                />
                 <TripData
                image={Trip3}
                heading="Trip to Bahamas"
                text="Lorem ipsum doloisicing elit."
                />
            </div>
    </div>
    );
}

export default Trip;
