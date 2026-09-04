import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users,
  Brain,
  Network,
  Code,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Briefcase,
  Star
} from "lucide-react";

interface OpenPositionsPageProps {
  onNavigate: (page: string) => void;
}

export function OpenPositionsPage({ onNavigate }: OpenPositionsPageProps) {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Research Engineer",
      department: "AI Research",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$150K - $220K",
      icon: Brain,
      color: "white",
      description: "Lead cutting-edge AI research projects and develop next-generation machine learning algorithms.",
      requirements: [
        "PhD in Computer Science, AI, or related field",
        "5+ years experience in deep learning",
        "Published research in top-tier conferences",
        "Expertise in TensorFlow, PyTorch",
        "Strong mathematical background"
      ],
      benefits: ["Equity Package", "Research Budget", "Conference Travel", "Flexible Schedule"]
    },
    {
      id: 2,
      title: "Blockchain Protocol Developer", 
      department: "Blockchain",
      location: "Remote / Global",
      type: "Full-time",
      salary: "$130K - $200K",
      icon: Network,
      color: "primary",
      description: "Design and implement blockchain protocols, smart contracts, and DeFi solutions.",
      requirements: [
        "Strong experience with Solidity, Rust, or Go", 
        "Deep understanding of blockchain consensus mechanisms",
        "Experience with Layer 2 scaling solutions",
        "Knowledge of cryptographic protocols",
        "3+ years in blockchain development"
      ],
      benefits: ["Crypto Compensation", "Remote Work", "Tech Allowance", "Learning Budget"]
    },
    {
      id: 3,
      title: "Quantum Computing Researcher",
      department: "Quantum Lab", 
      location: "Hybrid / Boston",
      type: "Full-time",
      salary: "$140K - $210K",
      icon: Zap,
      color: "secondary",
      description: "Develop quantum algorithms and explore quantum-classical hybrid systems.",
      requirements: [
        "PhD in Quantum Physics or Computer Science",
        "Experience with Qiskit, Cirq, or similar frameworks", 
        "Knowledge of quantum error correction",
        "Strong linear algebra and mathematical skills",
        "Research experience in quantum computing"
      ],
      benefits: ["Research Sabbaticals", "Lab Access", "Publication Support", "Innovation Time"]
    },
    {
      id: 4,
      title: "Cybersecurity Architect",
      department: "Security",
      location: "Remote / Austin", 
      type: "Full-time",
      salary: "$120K - $180K",
      icon: Shield,
      color: "purple", 
      description: "Design secure systems and lead security audits for blockchain and AI projects.",
      requirements: [
        "5+ years in cybersecurity",
        "Experience with penetration testing",
        "Knowledge of smart contract security",
        "Security certifications (CISSP, CEH, etc.)",
        "Zero-trust architecture experience"
      ],
      benefits: ["Security Training", "Certification Support", "Bug Bounty Rewards", "Remote Setup"]
    },
    {
      id: 5,
      title: "Full-Stack AI Engineer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time", 
      salary: "$110K - $160K",
      icon: Code,
      color: "primary",
      description: "Build scalable AI applications and MLOps infrastructure for enterprise clients.",
      requirements: [
        "4+ years full-stack development experience",
        "Strong Python, JavaScript/TypeScript skills", 
        "Experience with ML frameworks and MLOps",
        "Knowledge of cloud platforms (AWS, GCP, Azure)",
        "Container orchestration (Docker, Kubernetes)"
      ],
      benefits: ["Stock Options", "Health Insurance", "Unlimited PTO", "Home Office Setup"]
    },
    {
      id: 6,
      title: "Web3 Frontend Developer",
      department: "Web3",
      location: "Remote / Global",
      type: "Contract",
      salary: "$80 - $120/hour",
      icon: Globe,
      color: "secondary",
      description: "Create intuitive Web3 user interfaces and integrate with blockchain protocols.",
      requirements: [
        "3+ years React/Next.js experience",
        "Strong Web3.js or Ethers.js knowledge",
        "Experience with wallet integrations", 
        "Understanding of DeFi protocols",
        "Modern frontend development practices"
      ],
      benefits: ["Flexible Hours", "Crypto Payments", "Project Bonuses", "Global Team"]
    }
  ];

  const companyPerks = [
    {
      icon: Brain,
      title: "Cutting-Edge Research",
      description: "Work on breakthrough AI and blockchain technologies"
    },
    {
      icon: Globe,
      title: "Remote-First Culture", 
      description: "Work from anywhere with flexible schedules"
    },
    {
      icon: Zap,
      title: "Innovation Time",
      description: "20% time for personal research and side projects"
    },
    {
      icon: Users,
      title: "World-Class Team",
      description: "Collaborate with experts from top tech companies"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "white":
        return {
          border: "border-white/60 shadow-[0_0_20px_rgba(255,255,255,0.3)]",
          text: "text-white",
          bg: "bg-white/10",
          icon: "text-white"
        };
      case "primary":
        return {
          border: "neon-border",
          text: "text-primary",
          bg: "bg-primary/10", 
          icon: "text-primary"
        };
      case "secondary":
        return {
          border: "neon-border-blue",
          text: "text-secondary",
          bg: "bg-secondary/10",
          icon: "text-secondary"
        };
      case "purple":
        return {
          border: "neon-border-purple", 
          text: "text-[#9d00ff]",
          bg: "bg-[#9d00ff]/10",
          icon: "text-[#9d00ff]"
        };
      default:
        return {
          border: "neon-border",
          text: "text-primary", 
          bg: "bg-primary/10",
          icon: "text-primary"
        };
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="w-fit mx-auto glass-morphism neon-border px-4 py-2">
              <Briefcase className="w-4 h-4 mr-2 text-primary" />
              Join Our Mission
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Shape the Future of{" "}
              <span className="hacker-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
                Technology
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join mellitron tech's elite team of AI researchers, blockchain architects, and quantum computing pioneers. Build tomorrow's technology today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Perks */}
      <section className="py-20 glass-morphism border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Why Work at mellitron tech?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exceptional benefits and opportunities for the world's brightest minds
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyPerks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-morphism neon-border text-center p-6 h-full">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center glow-effect">
                      <perk.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-primary">{perk.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {perk.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 matrix-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore career opportunities at the forefront of AI and blockchain innovation
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {jobOpenings.map((job, index) => {
              const colors = getColorClasses(job.color);
              
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                >
                  <Card className={`glass-morphism ${colors.border} overflow-hidden`}>
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        {/* Job Info */}
                        <div className="flex-1 space-y-4">
                          <div className="flex items-start gap-4">
                            <motion.div 
                              className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center glow-effect flex-shrink-0`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <job.icon className={`w-6 h-6 ${colors.icon}`} />
                            </motion.div>
                            <div className="space-y-2 flex-1">
                              <h3 className={`text-2xl font-bold ${colors.text} hacker-text`}>
                                {job.title}
                              </h3>
                              <div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground">
                                <Badge className={`${colors.bg} ${colors.border}`}>
                                  {job.department}
                                </Badge>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{job.type}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <DollarSign className="w-4 h-4" />
                                  <span className={`font-medium ${colors.text}`}>{job.salary}</span>
                                </div>
                              </div>
                              <p className="text-muted-foreground leading-relaxed">
                                {job.description}
                              </p>
                            </div>
                          </div>
                          
                          {/* Requirements & Benefits */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <h4 className={`font-semibold ${colors.text}`}>Requirements:</h4>
                              <ul className="space-y-1">
                                {job.requirements.map((req, reqIndex) => (
                                  <li key={reqIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <Star className={`w-3 h-3 mt-0.5 ${colors.icon} flex-shrink-0`} />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="space-y-3">
                              <h4 className={`font-semibold ${colors.text}`}>Benefits:</h4>
                              <div className="flex flex-wrap gap-2">
                                {job.benefits.map((benefit, benefitIndex) => (
                                  <Badge 
                                    key={benefitIndex}
                                    variant="outline"
                                    className={`text-xs ${colors.bg} border-border/50`}
                                  >
                                    {benefit}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Apply Button */}
                        <div className="flex flex-col gap-3 lg:flex-shrink-0">
                          <motion.button
                            className={`px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-medium glow-effect transition-all group`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => onNavigate("job-application")}
                          >
                            <div className="flex items-center space-x-2">
                              <span>Apply Now</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </motion.button>
                          <motion.button
                            className="px-8 py-3 glass-morphism neon-border text-white hover:bg-white/10 rounded-lg font-medium transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Save Position
                          </motion.button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden parallax-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <motion.div 
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white glow-text hacker-text">
            Don't See the Perfect Role?
          </h2>
          <p className="text-xl text-muted-foreground">
            We're always looking for exceptional talent. Send us your resume and let's discuss how you can contribute to the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => onNavigate("submit-research")}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/80 hover:to-secondary/80 px-8 py-4 glow-effect"
              >
                Submit Your Profile
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg" 
                variant="outline"
                onClick={() => onNavigate("contact")}
                className="px-8 py-4 glass-morphism neon-border hover:bg-white/10"
              >
                Contact HR Team
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}