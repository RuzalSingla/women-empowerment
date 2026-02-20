// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import NumberCounter from "./components/NumberCounter/NumberCounter";
// import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
// import { Routes, Route } from "react-router-dom";
// import LoginPage from "./components/Login/LoginPage";
// import Dashboard from "./components/Dashboard/Dashboard";
// import RegisterPage from "./components/Login/RegisterPage";
// import LearningPage from "./components/Resources/LearningPage";




// const App=()=>{
//   return <main className="overflow-x-hidden">
//     <Navbar />
//     <Routes>
//       <Route path="/" element={
//         <>
//           <Hero />
//           <NumberCounter />
//           <WhyChooseUs />
//         </>
//       }/>
//       <Route path="/login" element={
//         <LoginPage/>
//       }/>
//       <Route path="/register" element={
//         <RegisterPage/>
//       }/>
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/resource" element={<LearningPage/>}/>
//     </Routes>
//   </main>
// };
// export default App;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import Dashboard from "./components/Dashboard/Dashboard";
import RegisterPage from "./components/Login/RegisterPage";
import LearningPage from "./components/Resources/LearningPage";
import ResourcePage from "./components/Resources/ResourcePage"; // 👈 ADD

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <NumberCounter />
            <WhyChooseUs />
          </>
        }/>
        <Route path="/login"     element={<LoginPage />} />
        <Route path="/register"  element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resource"  element={<LearningPage />} />
        <Route path="/resource/:moduleId" element={<ResourcePage />} /> {/* 👈 ADD */}
      </Routes>
    </main>
  );
};

export default App;
