import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from "../assets/2.jpg";
import Footer from '../components/Footer';
import Services from '../components/Service';
// import Shop from '../ShoppingCart/Shop';
// import data from "../ShoppingCart/data";
// import Basket from '../ShoppingCart/Basket';
import { useState } from 'react';

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
            {/* <Shop onAdd={onAdd} products={products} ></Shop>
            <Basket onAdd={onAdd}cartItems={cartItems}></Basket> */}
            <Footer/>
        </div>
    );
}
export default Service;