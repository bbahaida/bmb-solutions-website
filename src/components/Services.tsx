import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Shield, 
  Workflow, 
  GitBranch, 
  Cpu, 
  Network,
  Cloud,
  Terminal,
  Globe,
  Layers
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Modern, scalable applications built with cutting-edge technologies and best practices.",
    tech: ["React", "Node.js", "TypeScript", "Python"]
  },
  {
    icon: Terminal,
    title: "DevOps Excellence",
    description: "Streamline your development pipeline with automated CI/CD and infrastructure management.",
    tech: ["Jenkins", "GitHub Actions", "ArgoCD", "Terraform"]
  },
  {
    icon: Database,
    title: "Data Architecture",
    description: "Design and implement robust data solutions for modern applications.",
    tech: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Expert guidance on cloud adoption and infrastructure optimization.",
    tech: ["AWS", "Azure", "GCP", "Kubernetes"]
  },
  {
    icon: Shield,
    title: "Security & DevSecOps",
    description: "Integrate security at every stage of your development lifecycle.",
    tech: ["SAST/DAST", "OAuth 2.0", "WAF", "Zero Trust"]
  },
  {
    icon: Layers,
    title: "System Architecture",
    description: "Design scalable, maintainable systems using modern architectural patterns.",
    tech: ["Microservices", "Event-Driven", "DDD", "CQRS"]
  },
  {
    icon: Globe,
    title: "API Development",
    description: "Build robust, scalable APIs that power modern applications.",
    tech: ["REST", "GraphQL", "gRPC", "WebSocket"]
  },
  {
    icon: Workflow,
    title: "Agile Delivery",
    description: "Efficient project delivery with agile methodologies and best practices.",
    tech: ["Scrum", "Kanban", "XP", "DevOps"]
  },
  {
    icon: Network,
    title: "Infrastructure Design",
    description: "Modern infrastructure solutions for optimal performance and reliability.",
    tech: ["IaC", "Docker", "Mesh", "Monitoring"]
  },
  {
    icon: Cpu,
    title: "Performance Engineering",
    description: "Optimize application performance and resource utilization.",
    tech: ["Profiling", "Caching", "Load Testing", "APM"]
  },
  {
    icon: GitBranch,
    title: "Version Control & CI",
    description: "Implement robust version control and continuous integration strategies.",
    tech: ["Git", "Trunk Based", "GitOps", "Monorepo"]
  },
  {
    icon: Server,
    title: "Platform Engineering",
    description: "Build and maintain scalable platforms for development teams.",
    tech: ["K8s", "Service Mesh", "PaaS", "IDP"]
  }
];

export const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#048BA8] mb-4">Technical Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we deliver end-to-end solutions across the entire software development lifecycle
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-gray-50 rounded-xl p-8 hover:bg-gradient-to-br hover:from-[#048BA8]/5 hover:to-[#F18F01]/5 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative">
                <service.icon className="w-12 h-12 text-[#048BA8] mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-2 bg-[#048BA8]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-semibold text-[#048BA8] mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-[#F18F01]/10 text-[#F18F01] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};