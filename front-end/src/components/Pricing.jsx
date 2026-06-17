import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for exploring our platform and starting your learning journey.",
    features: [
      "Access to all Free Courses",
      "Community Support",
      "Public Profile",
      "Course Progress Tracking"
    ],
    cta: "Start Learning",
    popular: false
  },
  {
    name: "Professional",
    price: "$29",
    period: "/mo",
    description: "Best for serious learners who want to master new skills with certification.",
    features: [
      "Everything in Starter",
      "Premium Certificates",
      "Offline Access",
      "Exclusive Learning Materials",
      "Priority Email Support"
    ],
    cta: "Go Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for teams and organizations to upskill at scale.",
    features: [
      "Everything in Professional",
      "Team Management",
      "Advanced Analytics",
      "Custom Learning Paths",
      "Dedicated Account Manager"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the plan that's right for you and start your journey towards mastery today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                plan.popular 
                  ? 'bg-white border-blue-200 shadow-2xl shadow-blue-500/10 scale-105 z-10' 
                  : 'bg-white/50 border-gray-100 shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex gap-3 text-sm text-gray-600">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600">
                      <FaCheck className="text-[10px]" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all ${
                plan.popular 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
