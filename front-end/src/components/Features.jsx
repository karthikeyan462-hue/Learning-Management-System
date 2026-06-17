import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaCertificate, FaUsers, FaChartLine, FaRocket, FaLock } from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode className="text-2xl" />,
    title: "Interactive Learning",
    description: "Learn by doing with our built-in playgrounds and interactive coding environments."
  },
  {
    icon: <FaCertificate className="text-2xl" />,
    title: "Global Certification",
    description: "Earn industry-recognized certificates that you can share on LinkedIn and beyond."
  },
  {
    icon: <FaUsers className="text-2xl" />,
    title: "Vibrant Community",
    description: "Connect with fellow learners, share knowledge, and solve problems together."
  },
  {
    icon: <FaChartLine className="text-2xl" />,
    title: "Progress Analytics",
    description: "Track your learning journey with detailed insights and performance metrics."
  },
  {
    icon: <FaRocket className="text-2xl" />,
    title: "Career Growth",
    description: "Boost your professional prospects with skill-building paths tailored for the job market."
  },
  {
    icon: <FaLock className="text-2xl" />,
    title: "Lifetime Access",
    description: "One-time enrollment gives you forever access to course materials and updates."
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Why Choose Us</h2>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Advanced Features for Modern Learning
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Everything you need to master any skill and accelerate your career in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl hover:bg-slate-50 transition-all duration-500 border border-transparent hover:border-slate-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
