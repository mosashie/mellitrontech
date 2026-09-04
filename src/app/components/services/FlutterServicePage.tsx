import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";
import { 
  Smartphone, 
  Star, 
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Code,
  Palette,
  Clock,
  Settings,
  Target,
  Rocket,
  TestTube,
  Upload,
  Monitor,
  GitBranch,
  Database,
  FileCode,
  Layers
} from "lucide-react";

interface FlutterServicePageProps {
  onNavigate: (page: string) => void;
}

export function FlutterServicePage({ onNavigate }: FlutterServicePageProps) {
  const features = [
    {
      icon: Smartphone,
      title: "Cross-Platform Development",
      description: "One codebase for both iOS and Android with native performance"
    },
    {
      icon: Zap,
      title: "Fast Development Cycle",
      description: "Rapid prototyping and deployment with hot reload functionality"
    },
    {
      icon: Palette,
      title: "Custom UI/UX Design",
      description: "Beautiful, responsive interfaces tailored to your brand"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with encryption and secure data handling"
    },
    {
      icon: Globe,
      title: "Cloud Integration",
      description: "Seamless integration with AWS, Firebase, and other cloud services"
    },
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Maintainable, scalable code following best practices"
    }
  ];

  const developmentProcess = [
    {
      phase: "Discovery & Planning",
      duration: "1-2 weeks",
      icon: Target,
      description: "We start by understanding your business requirements, target audience, and technical specifications.",
      activities: [
        "Requirement gathering and analysis",
        "User journey mapping and wireframing",
        "Technical architecture planning",
        "Technology stack selection",
        "Project timeline and milestone definition"
      ]
    },
    {
      phase: "Design & Prototyping",
      duration: "2-3 weeks",
      icon: Palette,
      description: "Creating intuitive user interfaces and interactive prototypes that align with your brand.",
      activities: [
        "UI/UX design system creation",
        "High-fidelity mockups and prototypes",
        "Design review and iteration cycles",
        "Asset preparation and optimization",
        "Accessibility compliance planning"
      ]
    },
    {
      phase: "Development Sprint",
      duration: "6-12 weeks",
      icon: Code,
      description: "Building your app with clean, maintainable code following Flutter best practices.",
      activities: [
        "Flutter app architecture setup",
        "Feature development in iterative sprints",
        "API integration and backend connectivity",
        "State management implementation",
        "Performance optimization and testing"
      ]
    },
    {
      phase: "Testing & Quality Assurance",
      duration: "2-3 weeks",
      icon: TestTube,
      description: "Comprehensive testing to ensure your app works flawlessly across all devices.",
      activities: [
        "Unit testing and widget testing",
        "Integration testing with backend services",
        "Device compatibility testing",
        "Performance and memory leak testing",
        "Security vulnerability assessment"
      ]
    },
    {
      phase: "Deployment & Launch",
      duration: "1-2 weeks",
      icon: Rocket,
      description: "Launching your app to production with proper monitoring and support systems.",
      activities: [
        "App Store and Play Store preparation",
        "Production deployment and monitoring setup",
        "Analytics and crash reporting integration",
        "User documentation and training",
        "Launch support and issue resolution"
      ]
    },
    {
      phase: "Maintenance & Updates",
      duration: "Ongoing",
      icon: Settings,
      description: "Continuous support, updates, and feature enhancements to keep your app competitive.",
      activities: [
        "Regular security updates and patches",
        "Performance monitoring and optimization",
        "New feature development",
        "OS compatibility updates",
        "User feedback integration and improvements"
      ]
    }
  ];

  const technicalStack = [
    {
      category: "Frontend Framework",
      icon: Smartphone,
      technologies: ["Flutter SDK", "Dart Programming Language", "Material Design", "Cupertino Widgets"],
      description: "Cross-platform UI toolkit for building natively compiled applications"
    },
    {
      category: "State Management",
      icon: Layers,
      technologies: ["BLoC Pattern", "Provider", "Riverpod", "GetX"],
      description: "Robust state management solutions for scalable app architecture"
    },
    {
      category: "Backend Integration",
      icon: Database,
      technologies: ["Firebase", "REST APIs", "GraphQL", "WebSocket"],
      description: "Seamless backend connectivity and real-time data synchronization"
    },
    {
      category: "Development Tools",
      icon: GitBranch,
      technologies: ["VS Code", "Android Studio", "Git Version Control", "CI/CD Pipelines"],
      description: "Professional development environment and automated deployment"
    },
    {
      category: "Testing Framework",
      icon: TestTube,
      technologies: ["Flutter Test", "Mockito", "Integration Tests", "Golden Tests"],
      description: "Comprehensive testing suite for reliable app performance"
    },
    {
      category: "Analytics & Monitoring",
      icon: Monitor,
      technologies: ["Firebase Analytics", "Crashlytics", "Performance Monitoring", "Custom Metrics"],
      description: "Real-time app performance and user behavior insights"
    }
  ];

  const deliverables = [
    {
      title: "Complete Source Code",
      description: "Well-documented, clean Flutter codebase with comprehensive comments",
      icon: FileCode
    },
    {
      title: "App Store Ready Builds",
      description: "Signed APK/AAB for Android and IPA for iOS with store metadata",
      icon: Upload
    },
    {
      title: "Technical Documentation",
      description: "Architecture overview, API documentation, and deployment guides",
      icon: GitBranch
    },
    {
      title: "Testing Reports",
      description: "Comprehensive test results including unit, integration, and device testing",
      icon: TestTube
    },
    {
      title: "Analytics Dashboard",
      description: "Pre-configured analytics and monitoring tools for app insights",
      icon: Monitor
    },
    {
      title: "Maintenance Plan",
      description: "Ongoing support strategy with update schedules and SLA agreements",
      icon: Settings
    }
  ];

  const portfolio = [
    {
      title: "FinTech Mobile App",
      category: "Financial Technology",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBmaW50ZWNoJTIwdWklMjBkZXNpZ258ZW58MXx8fHwxNzU1OTc1MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: "500K+ Downloads"
    },
    {
      title: "Healthcare Platform",
      category: "Medical Technology", 
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYXBwJTIwaGVhbHRoY2FyZSUyMG1vYmlsZXxlbnwxfHx8fDE3NTU5NzUzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: "99.9% Uptime"
    },
    {
      title: "E-Commerce App",
      category: "Retail Technology",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBhcHAlMjBzaG9wcGluZyUyMG1vYmlsZXxlbnwxfHx8fDE3NTU5NzUzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: "$2M+ Revenue"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="w-fit glass-morphism neon-border px-4 py-2">
                <Smartphone className="w-4 h-4 mr-2 text-primary" />
                Flutter Development
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                📱 Build Amazing{" "}
                <span className="hacker-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
                  Mobile Apps
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Create stunning cross-platform mobile applications with Flutter. One codebase, two platforms, endless possibilities. From concept to App Store in record time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    onClick={() => onNavigate("service-flutter-request")}
                    className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/80 hover:to-secondary/80 px-8 py-4 glow-effect group"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
                    className="px-8 py-4 glass-morphism neon-border hover:bg-primary/10"
                  >
                    View Portfolio
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative float-animation"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBmaW50ZWNoJTIwdWklMjBkZXNpZ258ZW58MXx8fHwxNzU1OTc1MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mobile app development showcase"
                className="relative rounded-2xl shadow-2xl w-full h-auto neon-border"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 glass-morphism border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Flutter?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features that make Flutter the perfect choice for modern mobile development
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <Card className="glass-morphism neon-border h-full hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-6 text-center space-y-4">
                    <motion.div 
                      className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center glow-effect"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-primary hacker-text">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
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
            <h2 className="text-3xl lg:text-4xl font-bold">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive, step-by-step approach to building your Flutter mobile application
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {developmentProcess.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                <Card className="glass-morphism neon-border overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      <div className="flex items-center gap-4 lg:flex-col lg:text-center lg:min-w-[200px]">
                        <motion.div 
                          className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center glow-effect"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <phase.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-primary hacker-text">{phase.phase}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{phase.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        <p className="text-muted-foreground leading-relaxed text-lg">{phase.description}</p>
                        
                        <div className="space-y-3">
                          <h4 className="font-semibold text-primary">Key Activities:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {phase.activities.map((activity, activityIndex) => (
                              <motion.li 
                                key={activityIndex} 
                                className="flex items-start gap-2 text-sm"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: activityIndex * 0.1 }}
                              >
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{activity}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-20 glass-morphism border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Our Technical Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technologies and tools we use to build robust Flutter applications
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-morphism neon-border h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center glow-effect"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <stack.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-bold text-primary hacker-text">{stack.category}</h3>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">{stack.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {stack.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="text-xs bg-primary/10 border-primary/30 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Deliverables */}
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
            <h2 className="text-3xl lg:text-4xl font-bold">What You'll Receive</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete project deliverables ensuring your app's success and long-term maintenance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <Card className="glass-morphism neon-border h-full hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-6 text-center space-y-4">
                    <motion.div 
                      className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center glow-effect"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <deliverable.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-primary hacker-text">{deliverable.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{deliverable.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 glass-morphism border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Our Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses achieve their mobile app goals
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-morphism neon-border overflow-hidden group">
                  <div className="relative">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-primary/20 text-primary border-primary/50 mb-2">
                        {project.category}
                      </Badge>
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-bold">{project.title}</h3>
                        <div className="flex items-center gap-1 text-primary">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium">{project.stats}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => onNavigate("portfolio")}
              variant="outline"
              className="px-8 py-3 glass-morphism neon-border hover:bg-primary/10"
            >
              View Full Portfolio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
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
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's turn your mobile app idea into reality with Flutter's powerful cross-platform capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => onNavigate("get-started")}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/80 hover:to-secondary/80 px-8 py-4 glow-effect"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("get-started")}
                className="px-8 py-4 glass-morphism neon-border hover:bg-white/10"
              >
                Explore Other Services
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}