import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { 
  Smartphone, 
  Globe, 
  Palette, 
  Brain, 
  Network, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Zap,
  Star
} from "lucide-react";

interface GetStartedPageProps {
  onNavigate: (page: string) => void;
}

export function GetStartedPage({ onNavigate }: GetStartedPageProps) {
  const services = [
    {
      id: "flutter",
      title: "📱 Flutter Mobile Apps",
      description: "Cross-platform mobile applications with native performance and stunning UI",
      icon: Smartphone,
      color: "primary",
      features: ["iOS & Android", "Native Performance", "Custom UI/UX", "App Store Ready"],
      estimatedTime: "4-12 weeks",
      startingPrice: "$5,000"
    },
    {
      id: "website",
      title: "🌐 Website Development", 
      description: "Modern, responsive websites built with cutting-edge technologies",
      icon: Globe,
      color: "secondary",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"],
      estimatedTime: "2-8 weeks",
      startingPrice: "$2,500"
    },
    {
      id: "uiux",
      title: "🎨 UI/UX Product Design",
      description: "User-centered design that converts visitors into customers",
      icon: Palette,
      color: "purple",
      features: ["User Research", "Wireframing", "Prototyping", "Design System"],
      estimatedTime: "3-6 weeks", 
      startingPrice: "$3,500"
    },
    {
      id: "ai",
      title: "🤖 AI Project Development",
      description: "Intelligent solutions powered by machine learning and AI",
      icon: Brain,
      color: "white",
      features: ["Machine Learning", "NLP Processing", "Computer Vision", "AI Integration"],
      estimatedTime: "6-16 weeks",
      startingPrice: "$10,000"
    },
    {
      id: "blockchain",
      title: "⛓️ Blockchain Solutions",
      description: "Decentralized applications and smart contract development",
      icon: Network,
      color: "primary",
      features: ["Smart Contracts", "DeFi Protocols", "NFT Platforms", "Web3 Integration"],
      estimatedTime: "8-20 weeks",
      startingPrice: "$15,000"
    },
    {
      id: "seo",
      title: "📈 SEO & Digital Marketing",
      description: "Boost your online presence with data-driven marketing strategies",
      icon: TrendingUp,
      color: "secondary",
      features: ["Keyword Research", "Content Strategy", "Link Building", "Analytics"],
      estimatedTime: "Ongoing",
      startingPrice: "$1,500/mo"
    },
    {
      id: "hire",
      title: "👥 Hire Remote Developers",
      description: "Dedicated development teams for your long-term projects",
      icon: Users,
      color: "purple",
      features: ["Vetted Developers", "Full-Time & Part-Time", "Multiple Tech Stacks", "Project Management"],
      estimatedTime: "1-2 weeks setup",
      startingPrice: "$3,000/mo"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "white":
        return {
          border: "border-white/60 shadow-[0_0_20px_rgba(255,255,255,0.3)]",
          text: "text-white",
          bg: "bg-white/10",
          icon: "text-white",
          button: "bg-white text-black hover:bg-gray-200"
        };
      case "primary":
        return {
          border: "neon-border",
          text: "text-primary", 
          bg: "bg-primary/10",
          icon: "text-primary",
          button: "bg-primary text-primary-foreground hover:bg-primary/80"
        };
      case "secondary":
        return {
          border: "neon-border-blue",
          text: "text-secondary",
          bg: "bg-secondary/10",
          icon: "text-secondary", 
          button: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        };
      case "purple":
        return {
          border: "neon-border-purple",
          text: "text-[#9d00ff]",
          bg: "bg-[#9d00ff]/10",
          icon: "text-[#9d00ff]",
          button: "bg-[#9d00ff] text-white hover:bg-[#9d00ff]/80"
        };
      default:
        return {
          border: "neon-border",
          text: "text-primary",
          bg: "bg-primary/10", 
          icon: "text-primary",
          button: "bg-primary text-primary-foreground hover:bg-primary/80"
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
              <Zap className="w-4 h-4 mr-2 text-primary" />
              Let's Build Something Amazing
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Choose Your{" "}
              <span className="hacker-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
                Tech Journey
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From AI-powered applications to blockchain solutions, select the perfect service to bring your vision to life with mellitron tech's cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Selection Grid */}
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
            <h2 className="text-3xl lg:text-4xl font-bold">Select Your Project Type</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of services to start your digital transformation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  className="perspective-1000"
                >
                  <Card className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 glass-morphism ${colors.border} overflow-hidden relative h-full`}>
                    {/* Holographic Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>
                    
                    <CardContent className="p-6 space-y-6 h-full flex flex-col">
                      {/* Service Icon & Title */}
                      <div className="text-center space-y-4">
                        <motion.div 
                          className={`w-16 h-16 mx-auto ${colors.bg} rounded-2xl flex items-center justify-center glow-effect`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <service.icon className={`w-8 h-8 ${colors.icon}`} />
                        </motion.div>
                        <h3 className={`text-xl font-bold ${colors.text} hacker-text group-hover:glow-text transition-all`}>
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Features List */}
                      <div className="space-y-2 flex-1">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Star className={`w-3 h-3 ${colors.icon}`} />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Project Details */}
                      <div className={`${colors.bg} rounded-lg p-4 space-y-2`}>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Timeline:</span>
                          <span className={`text-sm font-medium ${colors.text}`}>{service.estimatedTime}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Starting from:</span>
                          <span className={`font-bold ${colors.text}`}>{service.startingPrice}</span>
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <motion.button
                        className={`w-full py-3 px-4 ${colors.button} rounded-lg font-medium transition-all group/button relative overflow-hidden`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onNavigate(`service-${service.id}`)}
                      >
                        <div className="flex items-center justify-center space-x-2 relative z-10">
                          <span>Get Started</span>
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

      {/* Process Overview */}
      <section className="py-20 glass-morphism border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to turning your ideas into reality
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We analyze your requirements and create a detailed project roadmap"
              },
              {
                step: "02", 
                title: "Design & Architecture",
                description: "Our team designs the technical architecture and user experience"
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Agile development with continuous testing and quality assurance"
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deployment, monitoring, and ongoing support for your success"
              }
            ].map((process, index) => (
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
                      <span className="font-bold text-white hacker-text">{process.step}</span>
                    </div>
                    <h3 className="font-bold text-primary">{process.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            Still Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-muted-foreground">
            Our experts are here to help you choose the perfect solution for your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => onNavigate("contact")}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/80 hover:to-secondary/80 px-8 py-4 glow-effect"
              >
                Schedule Free Consultation
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("portfolio")}
                className="px-8 py-4 glass-morphism neon-border hover:bg-white/10"
              >
                View Our Work
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}