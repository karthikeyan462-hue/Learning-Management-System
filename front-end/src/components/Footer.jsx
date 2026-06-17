import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import zenlearn from "../assets/ZenLearnLogo.png";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6 group">
            <img className="w-10 h-10 object-contain invert brightness-0 " src={zenlearn} alt="ZenLearn" />
            <span className="text-2xl font-black text-white tracking-tighter">ZenLearn</span>
          </Link>
          <p className="text-sm leading-relaxed text-center md:text-left text-slate-500">
            Empowering the next generation of software masters through industry-led learning paths and interactive workspaces.
          </p>
        </div>

        {/* Product Links */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Product</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/courses" className="hover:text-white transition-colors">All Courses</Link></li>
            <li><Link to="/exams" className="hover:text-white transition-colors">Certifications</Link></li>
            <li><Link to="/about-us" className="hover:text-white transition-colors">Success Stories</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Syllabus</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Company</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Stay Connected</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaLinkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all duration-300">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300">
              <FaInstagram size={18} />
            </a>
          </div>
          <div className="mt-8">
            <p className="text-xs text-slate-500">Subscribe to our newsletter for weekly skills.</p>
            <div className="mt-3 flex">
                <input type="text" placeholder="Email" className="bg-slate-800 border-none rounded-l-lg px-4 py-2 text-sm w-full outline-none focus:ring-1 focus:ring-blue-600" />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg text-sm font-bold">Join</button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto text-center md:text-left text-[10px] uppercase font-bold tracking-widest text-slate-600 mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>&copy; {new Date().getFullYear()} ZenLearn Education Inc.</div>
        <div className="flex gap-6 uppercase">
            <span>Built by ZenSol Solutions</span>
            <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
