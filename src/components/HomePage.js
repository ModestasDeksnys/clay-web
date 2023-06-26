import React from 'react'
import "./HomePageStyles.css"
import HomePageData from './HomePageData'
import Room1 from "../assets/4.jpg"
import Room2 from "../assets/5.jpg"
import Room3 from "../assets/6.jpg"
import Room4 from "../assets/7.jpg"

const HomePage =() => {
  return (
    <div className="destination">
        <h1>Memel Clay Decor</h1>
        <p>Decorate your Home</p>
        <HomePageData
        className="first-des"
         heading="Our Work"
         text="details about our work"
         img1={Room1}
         img2={Room2}

         />
            <HomePageData
            className="first-des-reverse"
         heading="More of our Work"

         text="description"

         img1={Room3}
         img2={Room4}
/>




    </div>
  )
}

export default HomePage