import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Phone,
  Code,
  GitBranch,
  Database,
  Cloud,
} from "lucide-react";

// Reusable input field component
const InputField = ({ label, type = "text", ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      type={type}
      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-[#F18F01]/40 focus:border-[#F18F01] focus:ring focus:ring-[#F18F01]/20 focus:ring-opacity-50"
      {...props}
    />
  </div>
);

// Reusable textarea component
const TextAreaField = ({ label, rows = 4, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <textarea
      rows={rows}
      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-[#F18F01]/40 focus:border-[#F18F01] focus:ring focus:ring-[#F18F01]/20 focus:ring-opacity-50"
      {...props}
    />
  </div>
);

// Custom select component with inline style support
const CustomSelect = ({ label, children, className = "", ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <select
      {...props}
      className={`custom-select w-full px-4 py-2 rounded-lg bg-white/5 border border-[#F18F01]/40 text-white focus:border-[#F18F01] focus:ring focus:ring-[#F18F01]/20 focus:ring-opacity-50 ${className}`}
    >
      {children}
    </select>
  </div>
);

// Left side: Contact form
const ContactForm = () => (
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
    <form className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <InputField label="First Name" />
        <InputField label="Last Name" />
      </div>
      <InputField label="Email" type="email" />
      <InputField label="Company" />
      <CustomSelect label="Project Type">
        <option value="">Select a project type</option>
        <option value="software">Custom Software Development</option>
        <option value="devops">DevOps Implementation</option>
        <option value="cloud">Cloud Migration</option>
        <option value="architecture">System Architecture</option>
        <option value="security">Security &amp; DevSecOps</option>
      </CustomSelect>
      <TextAreaField
        label="Project Details"
        placeholder="Tell us about your project goals and challenges..."
      />
      <button className="w-full bg-[#F18F01] hover:bg-[#F18F01]/90 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors relative group">
        <span className="relative z-10">Schedule Technical Consultation</span>
        <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-r from-[#F18F01] to-[#048BA8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      </button>
    </form>
  </div>
);

// Right side: Expertise panel
const ExpertiseInfo = () => {
  const expertiseItems = [
    { icon: Code, text: "Full-stack Development" },
    { icon: GitBranch, text: "DevOps & CI/CD" },
    { icon: Database, text: "Data Architecture" },
    { icon: Cloud, text: "Cloud Solutions" },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
      <h3 className="text-2xl font-semibold mb-6">Our Expertise</h3>
      <div className="space-y-4">
        {expertiseItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <item.icon className="w-6 h-6 text-[#F18F01]" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Right side: Contact information panel
const ContactInfo = () => (
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Phone className="w-6 h-6 text-[#F18F01]" />
        <div>
          <p className="font-medium">Technical Support</p>
          <p className="text-[#F18F01]">+222 362-003-04</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Mail className="w-6 h-6 text-[#F18F01]" />
        <div>
          <p className="font-medium">Email Us</p>
          <p className="text-[#F18F01]">b.bahaida@neurostack.fr</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <MessageSquare className="w-6 h-6 text-[#F18F01]" />
        <div>
          <p className="font-medium">Developer Chat</p>
          <p className="text-[#F18F01]">24/7 Technical Support</p>
        </div>
      </div>
    </div>
  </div>
);

// Main Contact component
export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#048BA8] via-[#048BA8]/90 to-[#048BA8]/80 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Start Your Digital Transformation
            </motion.h2>
            <motion.p
              className="text-xl text-[#F18F01]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's discuss how we can accelerate your technology initiatives
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ExpertiseInfo />
              <ContactInfo />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
