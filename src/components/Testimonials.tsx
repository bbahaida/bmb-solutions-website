import { motion } from 'framer-motion';
import { Star, TrendingUp, Clock, Shield, Zap } from 'lucide-react';

const testimonials = [
  {
    quote: "BMB Solutions revolutionized our development process with their expertise in DevOps and microservices. Our deployment time decreased by 80% and system reliability improved significantly.",
    author: "Sarah Chen",
    role: "VP of Engineering, TechScale Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    metrics: {
      "Deployment Time": "-80%",
      "System Uptime": "99.99%",
      "Cost Reduction": "40%",
      "Team Velocity": "+200%"
    }
  },
  {
    quote: "Their software architecture expertise helped us modernize our legacy systems. The new microservices architecture and DevOps practices transformed our development capabilities.",
    author: "Michael Rodriguez",
    role: "CTO, InnovateTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    metrics: {
      "API Response": "-65%",
      "Code Quality": "+85%",
      "Release Cycle": "-70%",
      "Bug Reduction": "90%"
    }
  },
  {
    quote: "The team's full-stack expertise was instrumental in delivering our complex SaaS platform. Their attention to security and performance optimization exceeded our expectations.",
    author: "Emily Watson",
    role: "Product Director, SaaS Global",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    metrics: {
      "User Growth": "+300%",
      "Platform Speed": "+150%",
      "Security Score": "A+",
      "Availability": "99.99%"
    }
  }
];

const MetricIcon = ({ metric }: { metric: string }) => {
  if (metric.includes("Time") || metric.includes("Cycle")) return <Clock className="w-4 h-4" />;
  if (metric.includes("Security") || metric.includes("Bug")) return <Shield className="w-4 h-4" />;
  if (metric.includes("Speed") || metric.includes("Response")) return <Zap className="w-4 h-4" />;
  return <TrendingUp className="w-4 h-4" />;
};

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#048BA8]/5 to-[#F18F01]/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#048BA8] mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped organizations transform their technology landscape
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#048BA8]/5 to-[#F18F01]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full mr-4 ring-2 ring-[#048BA8]/20"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-[#048BA8]">{testimonial.author}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F18F01] fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 text-lg italic mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
                  {Object.entries(testimonial.metrics).map(([key, value], i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="p-2 bg-[#048BA8]/10 rounded-lg text-[#048BA8]">
                        <MetricIcon metric={key} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">{key}</div>
                        <div className="text-lg font-bold text-[#F18F01]">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};