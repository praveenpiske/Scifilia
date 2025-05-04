import BmwCanvas from "./bmw/BmwCanvas";
import Mercedes_G_ClassCanvas from "./mercedes/Mercedes_G_ClassCanvas";

const bmw = { title: 'BMW i8', canvas: BmwCanvas, description: `The BMW i8 is a plug-in hybrid sports car that combines futuristic design with advanced engineering. First introduced in 2014, it features a turbocharged 1.5L 3-cylinder engine paired with an electric motor, delivering impressive performance and fuel efficiency. With a lightweight carbon fiber body and all-wheel drive, the i8 can go from 0 to 100 km/h in just 4.4 seconds. Its sleek, aerodynamic design, scissor doors, and eco-conscious tech make it a standout in the world of modern performance cars.` };
const mercedes ={
    title: 'Mercedes G Class',
    canvas: Mercedes_G_ClassCanvas,
description:"The 2025 Mercedes-Benz G-Class blends iconic design with modern luxury and off-road power. It features updated styling, advanced tech with MBUX dual screens, and strong performance, including mild-hybrid options. With its rugged build and premium interior, it’s the perfect mix of toughness and elegance."}

export {
    bmw,
    mercedes
}