import React from 'react'
import "./DestinationStyles.css"
import DestinationData from './DestinationData'
import Room1 from "../assets/4.jpg"
import Room2 from "../assets/5.jpg"
import Room3 from "../assets/6.jpg"
import Room4 from "../assets/7.jpg"

const Destination =() => {
  return (
    <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the...</p>
        <DestinationData
        className="first-des"
         heading="Paris"
         text="description"
         img1={Room1}
         img2={Room2}

         />
            <DestinationData
            className="first-des-reverse"
         heading="New York"

         text="description"

         img1={Room3}
         img2={Room4}
/>




    </div>
  )
}

export default Destination