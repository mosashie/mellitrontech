import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { 
  Brain, 
  Cpu, 
  Network, 
  Shield, 
  Zap, 
  Code,
  Globe,
  Database,
  ArrowRight,
  Terminal,
  UserPlus,
  Binary
} from "lucide-react";

interface TeamPageProps {
  onNavigate: (page: string) => void;
}

export function TeamPage({ onNavigate }: TeamPageProps) {
  const teamMembers = [
    {
      name: "Dr. Elena Vasquez",
      position: "Chief AI Architect",
      specialty: "Machine Learning & Neural Networks",
      image: "https://images.unsplash.com/photo-1724654814378-108c93f5fa54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNoJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU1OTc1MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Leading AI research with 15+ years in deep learning, computer vision, and autonomous systems. Former Google AI researcher.",
      skills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "Reinforcement Learning"],
      colorTheme: "white",
      icon: Brain,
    },
    {
      name: "Marcus Chen",
      position: "Blockchain Architect",
      specialty: "DeFi & Smart Contract Security",
      image: "https://images.unsplash.com/photo-1585335559291-f94d268f8b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwZGV2ZWxvcGVyJTIwZmVtYWxlJTIwdGVjaCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NTk3NTAzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Blockchain pioneer specializing in Layer 2 solutions, cross-chain protocols, and zero-knowledge proofs. Built multiple DeFi protocols.",
      skills: ["Solidity", "Rust", "Web3.js", "Layer 2", "zk-SNARKs"],
      colorTheme: "primary",
      icon: Network,
    },
    {
      name: "Sarah Mitchell",
      position: "Lead Flutter Developer",
      specialty: "Cross-Platform Mobile Apps",
      image: "https://images.unsplash.com/photo-1627776880991-808c5996527b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGVuZ2luZWVyJTIwdGVjaCUyMHNwZWNpYWxpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fHwxNzU1OTc1MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Flutter expert with 8+ years in mobile development. Built scalable apps for startups to Fortune 500 companies with millions of users.",
      skills: ["Flutter", "Dart", "Firebase", "iOS/Android", "State Management"],
      colorTheme: "secondary",
      icon: Code,
    },
    {
      name: "James Rodriguez",
      position: "Full-Stack Web Developer",
      specialty: "Modern Web Applications",
      image: "https://images.unsplash.com/photo-1695668543977-8dd5ad3b0694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGFyY2hpdGVjdCUyMHRlY2glMjBsZWFkZXIlMjBwb3J0cmFpdHxlbnwxfHx8fHwxNzU1OTc1MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Full-stack specialist creating responsive, high-performance web applications using cutting-edge technologies and best practices.",
      skills: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB"],
      colorTheme: "purple",
      icon: Globe,
    },
    {
      name: "Priya Patel",
      position: "Lead UI/UX Designer",
      specialty: "User Experience & Design Systems",
      image: "https://images.unsplash.com/photo-1724654814378-108c93f5fa54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNoJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU1OTc1MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Creative design leader crafting intuitive user experiences and scalable design systems. Expert in user research and interaction design.",
      skills: ["Figma", "Design Systems", "User Research", "Prototyping", "Accessibility"],
      colorTheme: "primary",
      icon: Zap,
    },
    {
      name: "Alex Thompson",
      position: "SEO & Digital Marketing Strategist",
      specialty: "Growth & Performance Marketing",
      image: "https://images.unsplash.com/photo-1585335559291-f94d268f8b17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwZGV2ZWxvcGVyJTIwZmVtYWxlJTIwdGVjaCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NTk3NTAzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Digital marketing expert specializing in technical SEO, content strategy, and data-driven growth optimization for tech companies.",
      skills: ["Technical SEO", "Google Analytics", "Content Strategy", "PPC", "Conversion Optimization"],
      colorTheme: "secondary", 
      icon: Database,
    },
    {
      name: "Maria Santos",
      position: "DevOps & Cloud Architect",
      specialty: "Infrastructure & Automation",
      image: "https://images.unsplash.com/photo-1627776880991-808c5996527b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGVuZ2luZWVyJTIwdGVjaCUyMHNwZWNpYWxpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fHwxNzU1OTc1MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Cloud infrastructure expert building scalable, secure, and automated deployment pipelines for enterprise applications.",
      skills: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
      colorTheme: "purple",
      icon: Shield,
    },
    {
      name: "David Kim",
      position: "Quality Assurance Lead",
      specialty: "Test Automation & Performance",
      image: "https://images.unsplash.com/photo-1695668543977-8dd5ad3b0694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGFyY2hpdGVjdCUyMHRlY2glMjBsZWFkZXIlMjBwb3J0cmFpdHxlbnwxfHx8fHwxNzU1OTc1MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "QA specialist ensuring quality and reliability through comprehensive testing strategies, automation, and performance optimization.",
      skills: ["Selenium", "Jest", "Load Testing", "API Testing", "Test Strategy"],
      colorTheme: "white",
      icon: Cpu,
    }
  ];

  const stats = [
    { number: "25+", label: "Technical Experts", icon: Brain },
    { number: "100+", label: "Projects Delivered", icon: Code },
    { number: "15", label: "Countries", icon: Globe },
    { number: "24/7", label: "Development Cycle", icon: Zap },
  ];

  const getColorClasses = (theme: string) => {
    switch (theme) {
      case "white":
        return {
          border: "border-white/60 shadow-[0_0_20px_rgba(255,255,255,0.3)]",
          glow: "shadow-[0_0_30px_rgba(255,255,255,0.6)]",
          text: "text-white",
          bg: "bg-white/10",
          icon: "text-white"
        };
      case "primary":
        return {
          border: "neon-border",
          glow: "glow-effect",
          text: "text-primary",
          bg: "bg-primary/10",
          icon: "text-primary"
        };
      case "secondary":
        return {
          border: "neon-border-blue",
          glow: "glow-effect-blue",
          text: "text-secondary",
          bg: "bg-secondary/10", 
          icon: "text-secondary"
        };
      case "purple":
        return {
          border: "neon-border-purple",
          glow: "glow-effect-purple",
          text: "text-[#9d00ff]",
          bg: "bg-[#9d00ff]/10",
          icon: "text-[#9d00ff]"
        };
      default:
        return {
          border: "neon-border",
          glow: "glow-effect",
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
              <Brain className="w-4 h-4 mr-2 text-primary" />
              Next-Gen Tech Team
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Meet the{" "}
              <span className="hacker-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
                Tech Innovators
              </span>
              <br />Building Tomorrow
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our diverse team of expert developers, designers, architects, and strategists are crafting the future of technology across AI, Blockchain, Mobile, Web, and beyond.
            </p>
          </motion.div>
          
          {/* Team Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center glow-effect">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary glow-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
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
            <h2 className="text-3xl lg:text-4xl font-bold">Our Elite Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialists across all technology domains - from AI and blockchain to mobile apps, web development, and digital strategy
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const colors = getColorClasses(member.colorTheme);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  className="perspective-1000"
                >
                  <Card className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 glass-morphism ${colors.border} overflow-hidden relative`}>
                    {/* Cyber Grid Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>
                    
                    {/* Terminal border effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 left-0 w-8 h-0.5 bg-primary"></div>
                      <div className="absolute top-0 right-0 w-8 h-0.5 bg-secondary"></div>
                      <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-0.5 bg-secondary"></div>
                    </div>
                    
                    {/* Terminal Status Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className={`${colors.bg} ${colors.border} text-xs hacker-text font-mono`}>
                        <Terminal className={`w-3 h-3 mr-1 ${colors.icon}`} />
                        ONLINE
                      </Badge>
                    </div>

                    {/* Hacker ID */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-black/80 border-primary/50 text-primary text-xs font-mono">
                        <Binary className="w-3 h-3 mr-1" />
                        #{String(index + 1).padStart(3, '0')}
                      </Badge>
                    </div>
                    
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Hacker matrix overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                      <div className="absolute inset-0 matrix-bg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                      
                      {/* Scanning effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse delay-500"></div>
                        <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse delay-1000"></div>
                        <div className="absolute right-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-secondary to-transparent animate-pulse delay-1500"></div>
                      </div>

                      {/* Specialty overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className={`glass-morphism ${colors.border} p-2 rounded-lg`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <member.icon className={`w-4 h-4 ${colors.icon}`} />
                              <span className="text-xs font-mono text-white">{member.specialty}</span>
                            </div>
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-200"></div>
                              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-400"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6 space-y-4">
                      <div className="text-center">
                        <h3 className={`text-2xl font-bold ${colors.text} hacker-text group-hover:glow-text transition-all`}>
                          {member.name}
                        </h3>
                        <p className={`${colors.text} font-medium opacity-80`}>
                          {member.position}
                        </p>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.bio}
                      </p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {member.skills.slice(0, 3).map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="outline" 
                            className={`text-xs ${colors.bg} border-border/50 hover:${colors.border} transition-colors`}
                          >
                            {skill}
                          </Badge>
                        ))}
                        {member.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs bg-muted/20">
                            +{member.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      {/* Recruit Button */}
                      <motion.button 
                        className={`w-full py-3 px-4 ${colors.border} glass-morphism rounded-lg ${colors.text} hover:${colors.bg} transition-all group/button relative overflow-hidden hacker-text font-mono`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onNavigate("recruitment")}
                      >
                        {/* Cyber effect background */}
                        <div className="absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover/button:translate-x-[200%] transition-transform duration-700"></div>
                        </div>
                        <div className="flex items-center justify-center space-x-2 relative z-10">
                          <UserPlus className="w-4 h-4" />
                          <span>RECRUIT</span>
                          <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                        </div>
                      </motion.button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation Lab Section */}
      <section className="py-20 glass-morphism border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Innovation Lab</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Where breakthrough technologies are born and the impossible becomes possible
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "🧠 AI Research Hub",
                description: "Advanced machine learning research, neural architecture exploration, and AI safety protocols.",
                icon: Brain,
                color: "primary"
              },
              {
                title: "⛓️ Blockchain Lab", 
                description: "Next-generation consensus mechanisms, layer 2 scaling solutions, and cross-chain interoperability.",
                icon: Network,
                color: "secondary"
              },
              {
                title: "🔮 Quantum Computing",
                description: "Quantum algorithms, post-quantum cryptography, and quantum-classical hybrid systems.",
                icon: Cpu,
                color: "purple"
              },
            ].map((lab, index) => {
              const colors = getColorClasses(lab.color);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateX: 5 }}
                >
                  <Card className={`glass-morphism ${colors.border} text-center p-8 h-full hover:${colors.glow} transition-all duration-500`}>
                    <CardContent className="space-y-6">
                      <motion.div 
                        className={`w-16 h-16 mx-auto ${colors.bg} rounded-2xl flex items-center justify-center ${colors.glow}`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <lab.icon className={`w-8 h-8 ${colors.icon}`} />
                      </motion.div>
                      <h3 className={`text-2xl font-bold ${colors.text} hacker-text`}>
                        {lab.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {lab.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
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
            Join the Future of Technology
          </h2>
          <p className="text-xl text-muted-foreground">
            We're seeking brilliant minds to help us build tomorrow's <span className="text-primary font-semibold">AI</span> and <span className="text-secondary font-semibold">Blockchain</span> solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/80 hover:to-secondary/80 px-8 py-4 rounded-lg font-medium glow-effect transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate("open-positions")}
            >
              View Open Positions
            </motion.button>
            <motion.button 
              className="glass-morphism neon-border text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate("submit-research")}
            >
              Submit Your Research
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}