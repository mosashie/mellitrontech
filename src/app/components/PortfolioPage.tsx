import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { 
  ExternalLink, 
  Github, 
  Eye, 
  ArrowRight,
  Terminal,
  Smartphone,
  Globe,
  Network,
  Search,
  Code,
  Zap,
  Database,
  Shield,
  Binary
} from "lucide-react";

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "CryptoVault Mobile",
      description: "Secure cryptocurrency wallet app with biometric authentication and multi-signature support.",
      image: "https://images.unsplash.com/photo-1710993012000-f109972e3b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNjcmVlbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTY1NzQ0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Mobile",
      technologies: ["Flutter", "Dart", "Firebase", "Web3", "Biometric Auth"],
      type: "detail", // Has detail page
      status: "Completed",
      client: "FinTech Startup",
      duration: "4 months",
      year: "2024",
      icon: Smartphone,
      color: "primary"
    },
    {
      id: 2,
      title: "DeFi Exchange Platform",
      description: "Decentralized exchange with automated market making and yield farming features.",
      image: "https://images.unsplash.com/photo-1644925295849-f057b6ee1c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwY3J5cHRvY3VycmVuY3klMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU2NTc0NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Blockchain",
      technologies: ["Solidity", "React", "Web3.js", "Ethereum", "IPFS"],
      type: "live",
      liveUrl: "https://app.uniswap.org",
      githubUrl: "https://github.com",
      status: "Live",
      client: "DeFi Protocol",
      duration: "8 months", 
      year: "2024",
      icon: Network,
      color: "secondary"
    },
    {
      id: 3,
      title: "Neural Analytics Dashboard",
      description: "AI-powered business intelligence dashboard with predictive analytics and real-time insights.",
      image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTY1NzQ0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Web",
      technologies: ["Next.js", "TypeScript", "Python", "TensorFlow", "PostgreSQL"],
      type: "detail",
      status: "In Development",
      client: "Enterprise Corp",
      duration: "6 months",
      year: "2024",
      icon: Database,
      color: "purple"
    },
    {
      id: 4,
      title: "Restaurant Chain SEO",
      description: "Complete SEO overhaul resulting in 500% organic traffic increase and #1 local rankings.",
      image: "https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTU4MTczMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "SEO",
      technologies: ["Google Analytics", "SEMrush", "Schema Markup", "WordPress", "Local SEO"],
      type: "live",
      liveUrl: "https://example-restaurant.com",
      status: "Completed",
      client: "Restaurant Chain",
      duration: "3 months",
      year: "2023",
      icon: Search,
      color: "white"
    },
    {
      id: 5,
      title: "HealthTech Mobile Suite",
      description: "Comprehensive healthcare app with telemedicine, appointment booking, and health tracking.",
      image: "https://images.unsplash.com/photo-1676311522524-fa7c0bffd644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbW9iaWxlJTIwYXBwJTIwdGVsZW1lZGljaW5lfGVufDF8fHx8MTc1NjU3NDQxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Mobile",
      technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "Socket.io"],
      type: "detail",
      status: "Completed",
      client: "Healthcare Provider",
      duration: "10 months",
      year: "2024",
      icon: Shield,
      color: "primary"
    },
    {
      id: 6,
      title: "NFT Marketplace v2",
      description: "Next-generation NFT platform with 3D galleries, AR viewing, and carbon-neutral minting.",
      image: "https://images.unsplash.com/photo-1590285836796-f772deafabfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwY3J5cHRvY3VycmVuY3klMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NTgxNzMzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Blockchain",
      technologies: ["Solidity", "Three.js", "IPFS", "Polygon", "GraphQL"],
      type: "live",
      liveUrl: "https://opensea.io",
      githubUrl: "https://github.com",
      status: "Live",
      client: "NFT Startup",
      duration: "5 months",
      year: "2024",
      icon: Zap,
      color: "secondary"
    },
    {
      id: 7,
      title: "Enterprise Cloud Portal",
      description: "Scalable cloud management portal with microservices architecture and real-time monitoring.",
      image: "https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTU4MTczMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Web",
      technologies: ["React", "Node.js", "Docker", "Kubernetes", "AWS"],
      type: "live",
      liveUrl: "https://aws.amazon.com",
      status: "Live",
      client: "Tech Giant",
      duration: "12 months",
      year: "2023",
      icon: Globe,
      color: "purple"
    },
    {
      id: 8,
      title: "E-commerce SEO Campaign",
      description: "Multi-platform SEO strategy boosting online sales by 350% across 5 countries.",
      image: "https://images.unsplash.com/photo-1632055186471-64814edeaab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBhbmFseXRpY3MlMjBncm93dGglMjBjaGFydHxlbnwxfHx8fDE3NTY1NzQ0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "SEO",
      technologies: ["Shopify SEO", "Google Ads", "Analytics", "Structured Data", "Content Strategy"],
      type: "detail",
      status: "Completed",
      client: "E-commerce Brand",
      duration: "6 months",
      year: "2024",
      icon: Search,
      color: "white"
    },
    {
      id: 9,
      title: "Social Gaming Platform",
      description: "Real-time multiplayer gaming platform with voice chat, tournaments, and NFT rewards.",
      image: "https://images.unsplash.com/photo-1614020661498-fef5b2293108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1ODE3MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Mobile",
      technologies: ["Unity", "C#", "Node.js", "WebRTC", "Blockchain"],
      type: "live",
      liveUrl: "https://discord.com",
      githubUrl: "https://github.com",
      status: "Beta",
      client: "Gaming Studio",
      duration: "14 months",
      year: "2024",
      icon: Code,
      color: "primary"
    }
  ];

  const categories = ["All", "Mobile", "Web", "Blockchain", "SEO"];

  const getColorClasses = (color: string) => {
    switch (color) {
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
      case "white":
        return {
          border: "border-white/60 shadow-[0_0_20px_rgba(255,255,255,0.3)]",
          glow: "shadow-[0_0_30px_rgba(255,255,255,0.6)]",
          text: "text-white",
          bg: "bg-white/10",
          icon: "text-white"
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

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectAction = (project: any) => {
    if (project.type === "live" && project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    } else if (project.type === "detail") {
      onNavigate(`project-${project.id}`);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="absolute inset-0 matrix-bg opacity-30"></div>
        
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="w-fit mx-auto glass-morphism neon-border px-4 py-2">
            <Terminal className="w-4 h-4 mr-2 text-primary" />
            PROJECT.PORTFOLIO()
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight hacker-text">
            Our Digital{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
              Arsenal
            </span>
          </h1>
          
          {/* Enhanced description with cyber background */}
          <motion.div 
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-morphism neon-border p-8 rounded-2xl relative overflow-hidden">
              {/* Cyber grid background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -skew-x-12"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed relative z-10 font-mono">
                {">"} Explore our diverse collection of successful projects spanning{" "}
                <span className="text-primary glow-text">mobile apps</span>,{" "}
                <span className="text-secondary glow-text-blue">web development</span>,{" "}
                <span className="text-[#9d00ff] glow-text-purple">blockchain solutions</span>, and{" "}
                <span className="text-white glow-text">SEO campaigns</span>.
              </p>
              
              {/* Terminal cursor effect */}
              <span className="inline-block w-2 h-5 bg-primary ml-2 animate-pulse"></span>
            </div>
          </motion.div>

          {/* Project Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {[
              { number: "250+", label: "PROJECTS", icon: Code },
              { number: "98%", label: "SUCCESS.RATE", icon: Zap },
              { number: "50+", label: "CLIENTS.SERVED", icon: Shield },
              { number: "24/7", label: "DEPLOY.CYCLE", icon: Binary }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-morphism neon-border p-4 rounded-lg text-center group hover:glow-effect transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-6 h-6 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold text-primary hacker-text">{stat.number}</div>
                <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 font-mono hacker-text transition-all ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-effect neon-border-blue"
                      : "glass-morphism neon-border hover:glow-effect"
                  }`}
                >
                  <Terminal className="w-4 h-4 mr-2" />
                  {category}.filter()
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const colors = getColorClasses(project.color);
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  className="perspective-1000"
                >
                  <Card className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 glass-morphism ${colors.border} overflow-hidden relative h-full`}>
                    {/* Cyber scanning effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className={`${colors.bg} ${colors.border} text-xs font-mono`}>
                        <project.icon className={`w-3 h-3 mr-1 ${colors.icon}`} />
                        {project.status}
                      </Badge>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-black/80 border-white/30 text-white text-xs font-mono">
                        {project.year}
                      </Badge>
                    </div>
                    
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60"></div>
                      
                      {/* Project type indicator */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className={`glass-morphism ${colors.border} p-2 rounded-lg`}>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-white">{project.category}.exe</span>
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-200"></div>
                              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-400"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold ${colors.text} hacker-text group-hover:glow-text transition-all`}>
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mt-2 text-sm">
                          {project.description}
                        </p>
                        
                        {/* Project Meta */}
                        <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-mono">
                          <div>
                            <span className="text-muted-foreground">CLIENT:</span>
                            <div className={colors.text}>{project.client}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">DURATION:</span>
                            <div className={colors.text}>{project.duration}</div>
                          </div>
                        </div>
                        
                        {/* Technologies */}
                        <div className="space-y-2 mt-4">
                          <h4 className="font-semibold text-xs font-mono text-muted-foreground">TECH.STACK:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 3).map((tech, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs font-mono">
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 3 && (
                              <Badge variant="outline" className="text-xs font-mono bg-muted/20">
                                +{project.technologies.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="pt-4 border-t border-border/50">
                        {project.type === "live" ? (
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              className={`flex-1 ${colors.border} glass-morphism ${colors.text} hover:${colors.bg} transition-all font-mono`}
                              onClick={() => handleProjectAction(project)}
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              VIEW.LIVE()
                            </Button>
                            {project.githubUrl && (
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="px-3 glass-morphism neon-border font-mono"
                                onClick={() => window.open(project.githubUrl, '_blank')}
                              >
                                <Github className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ) : (
                          <Button 
                            size="sm" 
                            className={`w-full ${colors.border} glass-morphism ${colors.text} hover:${colors.bg} transition-all font-mono group/btn`}
                            onClick={() => handleProjectAction(project)}
                          >
                            <Terminal className="w-4 h-4 mr-2" />
                            VIEW.DETAILS()
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        )}
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div className="absolute inset-0 matrix-bg"></div>
        
        <motion.div 
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white glow-text hacker-text">
            Ready to Deploy Your Project?
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            {">"} Join our portfolio of successful digital transformations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => onNavigate("contact")}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/80 hover:to-secondary/80 px-8 py-4 glow-effect font-mono hacker-text"
              >
                <Terminal className="w-5 h-5 mr-2" />
                START.PROJECT()
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("services")}
                className="glass-morphism neon-border text-white hover:bg-white/10 px-8 py-4 font-mono hacker-text"
              >
                <Code className="w-5 h-5 mr-2" />
                EXPLORE.SERVICES()
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}