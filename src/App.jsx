import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";




const App=()=>{
  return <main className="overflow-x-hidden">
    <Navbar />
    <Hero />
    <NumberCounter />
    <WhyChooseUs />
  </main>
};
export default App;
