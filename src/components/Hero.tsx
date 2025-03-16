import React from "react";
import { motion } from "framer-motion";
import { Cloud, Code, Terminal, Server, Github as Git } from "lucide-react";

const floatingIcons = [
  { Icon: Cloud, x: "10%", y: "20%", delay: 0 },
  { Icon: Code, x: "85%", y: "15%", delay: 0.2 },
  { Icon: Git, x: "75%", y: "75%", delay: 0.4 },
  { Icon: Terminal, x: "15%", y: "85%", delay: 0.6 },
  { Icon: Server, x: "90%", y: "60%", delay: 0.8 },
];

const FloatingIcon = ({ Icon, x, y, delay }) => (
  <motion.div
    className="absolute text-[#F18F01]/30"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: 0.7,
      scale: 1,
      y: ["0%", "-20%", "0%"],
    }}
    transition={{
      delay,
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <Icon size={48} />
  </motion.div>
);

const BackgroundGrid = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
        animation: "grid-move 20s linear infinite",
      }}
    ></div>
  </div>
);

const HeroHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto text-center"
  >
    <motion.div
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-block mb-0 p-2 bg-white/50 rounded-xl drop-shadow-xl shadow-gray-950"
    >
      <img
        src="/assets/bmb.png"
        alt="BMB Logo"
        className="w-24 mx-auto px-4 py-1"
      />
    </motion.div>
    <motion.h1
      className="text-5xl md:text-7xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F18F01]/60"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      Engineering Excellence from Code to Cloud
    </motion.h1>
    <motion.p
      className="text-xl md:text-2xl text-white mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      Transform your ideas into scalable solutions with our expertise in
      software development, DevOps, and cloud architecture
    </motion.p>
    <HeroCTA />
    <HeroStats />
  </motion.div>
);

const HeroCTA = () => (
  <motion.div
    className="flex flex-wrap justify-center gap-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.8 }}
  >
    <button className="group relative bg-[#F18F01] hover:bg-[#F18F01]/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(241,143,1,0.5)]">
      <span className="relative z-10">Start Your Project</span>
      <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-r from-[#F18F01] to-[#048BA8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
    </button>
    <button className="relative overflow-hidden border-2 border-[#F18F01] hover:border-[#F18F01]/80 text-white hover:text-[#F18F01]/80 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
      <span className="relative z-10">Explore Solutions</span>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#F18F01]/0 via-[#F18F01]/10 to-[#F18F01]/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
    </button>
  </motion.div>
);

const HeroStats = () => {
  const stats = [
    { label: "Projects Delivered", value: "500+" },
    { label: "Code Commits", value: "1M+" },
    { label: "CI/CD Pipelines", value: "1000+" },
    { label: "Client Satisfaction", value: "99.9%" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-4 rounded-lg bg-white/10 backdrop-blur-md"
        >
          <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
          <div className="text-sm text-white">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#048BA8] via-[#048BA8]/80 to-[#048BA8]/60 text-white min-h-screen">
      <BackgroundGrid />

      {/* Floating Icons */}
      {floatingIcons.map((iconProps, index) => (
        <FloatingIcon key={index} {...iconProps} />
      ))}

      <div className="relative container mx-auto px-4 py-10">
        <HeroHeader />
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="fill-[#F18F01] border-1 border-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          transform="matrix(-1,0,0,-1,0,0)"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Inline keyframes for the background grid animation */}
      <style>{`
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
      `}</style>
    </div>
  );
};
