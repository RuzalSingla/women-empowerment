import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Testimonials from "./components/Testimonials/Testimonials";
import Mentors from "./components/Mentors/Mentors";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";




const App=()=>{
  return <main className="overflow-x-hidden">
    <Navbar />
    <Hero />
    <NumberCounter />
    <WhyChooseUs />
    <Testimonials />
    <Mentors />
    <FAQ />
    <Footer />
  </main>
};
export default App;
