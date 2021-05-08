import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container"> 
                <img 
                className="home__image"
                src="./bg2.jpg"
                alt=""
                />

            <div className="home__row">
                <Product
                title="Logitech G502 Lightspeed Wireless Gaming Mouse, Hero 16K Sensor, 16,000 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, Long Battery Life, On-Board Memory, PC/Mac - Black"
                price={11990}
                image="./mouse.jpg"
                rating={4}
                />
                <Product
                title="Razer BlackWidow Elite: Esports Gaming Keyboard - Multi-Function Digital Dial with Dedicated Media Controls - Ergonomic Wrist Rest - Razer Green Mechanical Switches (Tactile and Clicky)"
                price={18957}
                image="./keyboard.jpg"
                rating={5}
                />
            </div>

            <div className="home__row">
            <Product 
            title="Xbox Wireless Controller - Phantom Magenta Special Edition"
            price={6442}
            image="./controller.jpg"
            rating={4}
            />
            <Product
            title="Intel® Core™ i9 10850K Processor 20M Cache, up to 5.20 GHz 10 Cores, 20 Threads Avenger's Edition"
            price={43544}
            image="./intel.jpg"
            rating={5}
            />
            <Product
            title="HyperX Cloud Stinger Gaming Headset (Black)"
            price={4690}
            image="./headphone.jpg"
            rating={4}
            />
            </div>

            <div className="home__row">
            <Product 
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor - Super Ultra Wide Dual WQHd 5120 x 1440(Black)"
            price={175000}
            image="./odyssey.jpg"
            rating={4}
            />
            </div>

            </div>
            
        </div>
    )
}

export default Home
