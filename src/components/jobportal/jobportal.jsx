import React from "react";
import { 
  FaChalkboardTeacher, 
  FaUtensils, 
  FaHandsHelping, 
  FaBirthdayCake, 
  FaBoxes, 
  FaMotorcycle, 
  FaPaintBrush, 
  FaLaptopCode 
} from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";


const JobPortal = () => {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold text-center mb-6 ">Work hub</h1>
     <h1 className="text-3xl font-bold text-center mb-6 ">
           Explore job opportunities and apply easily.</h1>


      {/* First row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tutor */}

         
        <motion.div 
            variants={SlideLeft(0.3)}   // adjust 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }} 
         className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white"
        >
          <div className="flex items-center gap-4 mb-4 !text-secondary">
            <FaChalkboardTeacher className=" w-10 h-10 text-orange-300" />
            <h2 className="font-bold text-xl">Tutor</h2>
          </div>
          <p className="text-gray-600 mb-3">
            Help children or adults learn subjects you are good at. Flexible hours, can work from home.
          </p>
          <p className="text-sm text-gray-400 mb-4">Part-time | Local | ₹200/hr</p>
          <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
            Apply Now
          </button>
        </motion.div>

        {/* Home Cook */}
        <motion.div 
         variants={SlideLeft(0.6)}   // adjust 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }} 
         
         className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
          <div className="flex items-center gap-4 mb-4 !text-secondary">
            <FaUtensils className="w-10 h-10 text-blue-700" />
            <h2 className="font-bold text-xl">Home Cook</h2>
          </div>
          <p className="text-gray-600 mb-3">
            Cook delicious meals for your community or online orders. Earn while working flexible hours.
          </p>
          <p className="text-sm text-gray-400 mb-4">Flexible Hours | Local | ₹250/day</p>
          <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
            Apply Now
          </button>
        </motion.div>

        {/* House Helper */}
        <motion.div 
         variants={SlideLeft(0.9)}   // adjust 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }} 

        
         className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
          <div className="flex items-center gap-4 mb-4 !text-secondary">
            <FaHandsHelping className="w-10 h-10 text-purple-600" />
            <h2 className="font-bold text-xl">House Helper</h2>
          </div>
          <p className="text-gray-600 mb-3">
            Assist households with cleaning, organizing, and daily chores. Good earning with flexible timing.
          </p>
          <p className="text-sm text-gray-400 mb-4">Part-time | Local | ₹150/day</p>
          <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
            Apply Now
          </button>
        </motion.div>
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Baking Helper */}
        <motion.div 
          variants={SlideLeft(0.4)}   // adjust 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }} 
        className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
          <div className="flex items-center gap-4 mb-4 !text-secondary">
            <FaBirthdayCake className="w-10 h-10 text-green-500" />
            <h2 className="font-bold text-xl">Baking Helper</h2>
          </div>
          <p className="text-gray-600 mb-3">
            Assist bakers in preparing dough, decorating cakes, and managing kitchen tasks. Flexible part-time work.
          </p>
          <p className="text-sm text-gray-400 mb-4">Part-time | Local | ₹200/day</p>
          <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
            Apply Now
          </button>
        </motion.div>

        {/* Packing Assistant */}
        <motion.div 
         variants={SlideLeft(0.5)}   // adjust 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }} 
        className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
          <div className="flex items-center gap-4 mb-4 !text-secondary">
            <FaBoxes className="w-10 h-10 text-red-600" />
            <h2 className="font-bold text-xl">Packing Assistant</h2>
          </div>
          <p className="text-gray-600 mb-3">
            Help businesses pack products for shipping or events. Simple tasks with flexible timing and decent pay.
          </p>
          <p className="text-sm text-gray-400 mb-4">Part-time | Local | ₹150/day</p>
          <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
            Apply Now
          </button>
        </motion.div>

        {/* Delivery Person */}
        <motion.div 
         variants={SlideLeft(0.6)}   // adjust 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }} 
        className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
          <div className="flex items-center gap-4 mb-4 !text-secondary">
            <FaMotorcycle className="w-10 h-10 text-red-900" />
            <h2 className="font-bold text-xl">Delivery Person</h2>
          </div>
          <p className="text-gray-600 mb-3">
            Deliver packages or food locally. Flexible hours and a great way to earn extra income.
          </p>
          <p className="text-sm text-gray-400 mb-4">Part-time | Local | ₹250/day</p>
          <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
            Apply Now
          </button>
        </motion.div>
      </div>
             {/* Second row - Unique micro jobs */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                   {/* Freelance Designer */}
                 <motion.div
                  variants={SlideLeft(0.1)}   // adjust 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}  className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
                  <div className="flex items-center gap-4 mb-4 !text-secondary">
                    <FaPaintBrush className="w-10 h-10 text-yellow-700" />
                     <h2 className="font-bold text-xl">Freelance Designer</h2>
                     </div>
                       <p className="text-gray-600 mb-3">
                         Create graphics, posters, or social media content for local businesses or online clients. Work from home with flexible hours.
                      </p>
                      <p className="text-sm text-gray-400 mb-4">Part-time | Remote | ₹250/day</p>
                  <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
                 Apply Now
                  </button>
               </motion.div>
 
             {/* Social Media Assistant */}
               <motion.div
                variants={SlideLeft(0.2)}   // adjust 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
               
               className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
               <div className="flex items-center gap-4 mb-4 !text-secondary">
                <FaLaptopCode className="w-10 h-10 text-orange-500" />
                <h2 className="font-bold text-xl">Social Media Assistant</h2>
              </div>
                <p className="text-gray-600 mb-3">
                   Help businesses manage their social media accounts, create posts, and engage with followers. Flexible online work.
               </p>
               <p className="text-sm text-gray-400 mb-4">Part-time | Remote | ₹200/day</p>
              <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
              Apply Now
              </button>
            </motion.div>

             {/* Event Organizer */}
             <motion.div
               variants={SlideLeft(0.3)}   // adjust 
                initial="hidden"
                whileInView="visible"
             viewport={{ once: true }} 
                className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 bg-white">
               <div className="flex items-center gap-4 mb-4 !text-secondary">
                  <FaHandsHelping className="w-10 h-10 text-blue-300" />
                 <h2 className="font-bold text-xl">Event Organizer</h2>
               </div>
              <p className="text-gray-600 mb-3">
                Assist in planning and organizing local events, parties, or community programs. Flexible part-time work with good exposure.
               </p>
              <p className="text-sm text-gray-400 mb-4">Part-time | Local | ₹300/day</p>
             <button className="w-full !bg-secondary text-white font-semibold rounded-full py-2 hover:bg-pink-700 transition">
              Apply Now
             </button>
           </motion.div>
        </div>

    </div>
  );
};

export default JobPortal;
