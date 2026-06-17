import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourses } from "../redux/courseSlice";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import herobg from "../assets/herobg.jpg";
import CourseCard from "../components/CourseCard";
import html5 from "../assets/html5.svg";
import css3 from "../assets/css3.svg";
import javascript from "../assets/js.svg";
import nodejs from "../assets/node-js.svg";
import python from "../assets/python.svg";
import react from "../assets/react.svg";
import vue from "../assets/vuejs.svg";
import angular from "../assets/angular.svg";
import Testimonial from "../components/Testimonial";
import MousePointer from "../components/MousePointer";
import { motion } from "framer-motion";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Pricing from "../components/Pricing";
import Features from "../components/Features";

const Home = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);
  const [featuredCourse, setFeaturedCourse] = useState(null);
  const [additionalCourses, setAdditionalCourses] = useState([]);

  useEffect(() => {
    dispatch(fetchAllCourses());
  }, [dispatch]);

  useEffect(() => {
    if (courses.length > 0) {
      setFeaturedCourse(courses[0]);
      setAdditionalCourses(courses.slice(0, 6));
    }
  }, [courses]);

  const icons = [
    { src: html5, alt: "HTML5" },
    { src: css3, alt: "CSS3" },
    { src: javascript, alt: "JavaScript", bg: true },
    { src: nodejs, alt: "Node.js" },
    { src: python, alt: "Python" },
    { src: react, alt: "React" },
    { src: vue, alt: "Vue.js" },
    { src: angular, alt: "Angular" },
  ];

  return (
    <div className="font-sans bg-[#F9FAFB] overflow-x-hidden">
      <MousePointer />
      
      {/* Premium Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-50/50 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-8 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              Revolutionizing Digital Learning
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
              Master Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">Future</span> Today.
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              Join 50,000+ students mastering software development through interactive, industry-led learning paths.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link to="/courses" className="btn-primary flex items-center gap-3 !px-8 !py-4 shadow-2xl shadow-blue-600/20 group">
                Explore All Courses 
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
              <Link to="/about-us" className="btn-secondary !px-8 !py-4">
                Watch Demo
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="User" />
                    </div>
                  ))}
               </div>
               <div>
                  <p className="text-sm font-bold text-slate-900">4.9/5 Average Rating</p>
                  <p className="text-xs text-slate-500">From over 2,000+ verified reviews</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Visual element representing a modern learning dashboard */}
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-blue-900/10 border-8 border-white">
              <img
                src={featuredCourse ? featuredCourse.thumbnail : herobg}
                alt="Dashboard Preview"
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block border border-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600">
                  <FaCheckCircle className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Success Rate</p>
                  <p className="text-xl font-black text-slate-900">92.4%</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -bottom-6 -left-10 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block border border-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-600">
                  <FaPlay className="text-xl" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">Total Access</p>
                  <p className="text-xl font-black text-slate-900">24/7/365</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By / Skills Section */}
      <section className="py-20 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Master Industry-Leading technologies</p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-10 opacity-40 hover:opacity-100 transition-opacity duration-500">
          {icons.map((icon, index) => (
            <div key={index} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-125 cursor-pointer" title={icon.alt}>
              <img src={icon.src} alt={icon.alt} className="w-10 h-10 object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Unique SaaS Value Props (Features) */}
      <Features />

      {/* Featured Courses Workspace */}
      <section className="py-24 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Popular Learning Paths</h2>
              <p className="text-slate-500 text-lg">Curated courses designed to take you from a curious soul to a certified professional.</p>
            </div>
            <Link to="/courses" className="text-blue-600 font-bold flex items-center gap-2 group mb-2 hover:translate-x-1 transition-transform">
              View All Courses <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {additionalCourses.map((course, index) => (
              <motion.div
                key={course._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CourseCard
                  image={course.thumbnail}
                  category={course.category}
                  heading={course.title}
                  level={course.level}
                  duration={course.duration}
                  link={`/CourseDetails/${course._id}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Transformation */}
      <Pricing />

      {/* Dynamic Testimonials */}
      <Testimonial />

      <ScrollToTopButton />
    </div>
  );
};

export default Home;
