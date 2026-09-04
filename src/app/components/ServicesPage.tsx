import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { 
  Smartphone, 
  Network, 
  Bot, 
  Globe,
  Search,
  ShoppingCart,
  Share2,
  Palette,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Target,
  Award,
  Clock,
  Shield,
  Code,
  Database,
  TrendingUp,
  Settings,
  Layers,
  Monitor,
  Sparkles
} from "lucide-react";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const mainServices = [
    {
      icon: Smartphone,
      title: "📱 Mobile App Development",
      description: "Cross-platform mobile applications with native performance using Flutter, React Native, and native development technologies.",
      image: "https://images.unsplash.com/photo-1624298696100-a6aae4884881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1ODkxMDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Optimization"],
      technologies: ["Flutter", "React Native", "Swift", "Kotlin"],
      color: "from-primary to-green-400",
      link: "service-flutter"
    },
    {
      icon: Globe,
      title: "🌐 Website Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTYxNTE3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Responsive Design", "Progressive Web Apps", "E-commerce", "CMS Integration"],
      technologies: ["React", "Next.js", "Vue.js", "Node.js"],
      color: "from-secondary to-primary",
      link: "service-website"
    },
    {
      icon: Network,
      title: "🔗 Blockchain Development",
      description: "Decentralized applications, smart contracts, DeFi solutions, and secure blockchain implementations for Web3.",
      image: "https://images.unsplash.com/photo-1634108941345-3a6a66685563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3VycmVuY3klMjBiaXRjb2luJTIwZXRoZXJldW0lMjBjcnlwdG98ZW58MXx8fHwxNzU1ODE3ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Web3 Integration"],
      technologies: ["Solidity", "Web3.js", "Ethereum", "Polygon"],
      color: "crypto-gradient",
      link: "service-blockchain"
    },
    {
      icon: Bot,
      title: "🤖 AI & Machine Learning",
      description: "Intelligent solutions with machine learning models, chatbots, automation systems, and AI-powered features.",
      image: "https://images.unsplash.com/photo-1689769385637-bba34686d493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIzJTIwbWV0YXZlcnNlJTIwdmlydHVhbCUyMHJlYWxpdHklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NTgxNzg1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Machine Learning", "Chatbots", "Computer Vision", "Natural Language Processing"],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Python"],
      color: "from-purple-400 to-primary",
      link: "service-ai"
    },
    {
      icon: ShoppingCart,
      title: "🛒 Shopify Development",
      description: "Complete Shopify e-commerce solutions from store setup to custom themes and advanced integrations.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZSUyMHN0b3JlfGVufDF8fHx8MTc1NjE1MTU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Store Setup", "Custom Themes", "App Integration", "Payment Setup"],
      technologies: ["Liquid", "Shopify Plus", "React", "GraphQL"],
      color: "from-green-500 to-emerald-400",
      link: "service-shopify"
    },
    {
      icon: Search,
      title: "🔍 SEO Optimization",
      description: "Comprehensive SEO strategies to improve search rankings, drive organic traffic, and boost online visibility.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBzZWFyY2glMjBlbmdpbmUlMjBvcHRpbWl6YXRpb24lMjBkYXRhfGVufDF8fHx8MTc1NjE1MTc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Technical SEO", "Content Optimization", "Link Building", "Analytics"],
      technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Search Console"],
      color: "from-yellow-400 to-orange-500",
      link: "service-seo"
    },
    {
      icon: Share2,
      title: "📱 Social Media Management",
      description: "Strategic social media management to build brand presence, engage audiences, and drive business growth.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMGRpZ2l0YWwlMjBjb250ZW50fGVufDF8fHx8MTc1NjE1MTY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics"],
      technologies: ["Facebook Ads", "Instagram", "LinkedIn", "TikTok"],
      color: "from-pink-400 to-rose-500",
      link: "service-social"
    },
    {
      icon: Palette,
      title: "🎨 UI/UX Design",
      description: "User-centered design solutions that create exceptional digital experiences and drive user engagement.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHVpJTIwZGVzaWduJTIwaW50ZXJmYWNlJTIwdXNlciUyMGV4cGVyaWVuY2V8ZW58MXx8fHwxNzU2MTUxODMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      color: "from-indigo-400 to-cyan-500",
      link: "service-uiux"
    },
    {
      icon: Users,
      title: "👥 Hire Developers",
      description: "Dedicated development teams and individual experts to scale your projects with skilled professionals.",
      image: "https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU2MTI5NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Dedicated Teams", "Staff Augmentation", "Project-based", "Long-term"],
      technologies: ["Full-Stack", "Frontend", "Backend", "DevOps"],
      color: "from-teal-400 to-blue-500",
      link: "service-hire"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden parallax-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="w-fit mx-auto glass-morphism neon-border px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            Comprehensive Technology Services
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight hacker-text">
            🚀 Complete Digital{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From mobile apps to blockchain solutions, AI integration to e-commerce platforms - we deliver comprehensive technology services that transform your business and drive growth across all digital channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate("get-started")}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-8 py-4 glow-effect group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("consultation")}
              className="px-8 py-4 glass-morphism neon-border hover:bg-primary/10"
            >
              Free Consultation
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
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
            <h2 className="text-3xl lg:text-4xl font-bold hacker-text">💼 Our Services Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotate: 0.5 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden glass-morphism neon-border h-full">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <motion.div 
                      className="absolute top-4 left-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className={`w-12 h-12 ${
                        service.color === "crypto-gradient" 
                          ? "crypto-gradient" 
                          : `bg-gradient-to-br ${service.color}`
                      } rounded-xl flex items-center justify-center glow-effect`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4 flex flex-col h-full">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors hacker-text">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature, idx) => (
                          <Badge 
                            key={idx}
                            variant="outline" 
                            className="text-xs bg-primary/10 border-primary/30 text-primary"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs glass-morphism">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => onNavigate(service.link)}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 glass-morphism border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold hacker-text">💡 Why Choose mellitron tech?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading technology excellence with proven expertise across all digital domains
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "🏆 Proven Excellence",
                description: "500+ successful projects delivered with 99% client satisfaction across all technology verticals",
                stats: "500+ Projects"
              },
              {
                icon: Users,
                title: "👥 Expert Teams",
                description: "Specialized teams of developers, designers, and strategists with deep domain expertise",
                stats: "50+ Experts"
              },
              {
                icon: Clock,
                title: "⚡ Fast Delivery",
                description: "Agile development methodology ensures rapid prototyping and on-time project delivery",
                stats: "99% On-Time"
              },
              {
                icon: Shield,
                title: "🛡️ Quality Assurance",
                description: "Rigorous testing, security audits, and quality standards across all our deliverables",
                stats: "Zero Defects"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 glass-morphism neon-border h-full">
                  <CardContent className="space-y-4">
                    <motion.div 
                      className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center glow-effect"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-primary hacker-text">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    <Badge variant="outline" className="text-primary border-primary/50 bg-primary/10">
                      {item.stats}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold hacker-text">🛠️ Our Technology Ecosystem</h2>
            <p className="text-xl text-muted-foreground">
              Cutting-edge technologies and frameworks powering modern digital solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                category: "Frontend Technologies",
                technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
                icon: Monitor,
                color: "from-blue-400 to-cyan-500"
              },
              {
                category: "Backend & Cloud",
                technologies: ["Node.js", "Python", "PHP", "AWS", "Firebase", "Docker"],
                icon: Database,
                color: "from-green-400 to-emerald-500"
              },
              {
                category: "Mobile & Cross-Platform",
                technologies: ["Flutter", "React Native", "iOS", "Android", "PWA", "Ionic"],
                icon: Smartphone,
                color: "from-purple-400 to-pink-500"
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 justify-center">
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center glow-effect`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <tech.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary hacker-text">{tech.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tech.technologies.map((technology, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="text-xs bg-primary/10 border-primary/30 text-primary"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Blockchain", "AI/ML", "Shopify", "SEO Tools", "Social Media", "Analytics",
              "GraphQL", "Redis", "MongoDB", "PostgreSQL", "Kubernetes", "Jenkins"
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="glass-morphism rounded-lg p-4 text-center hover:neon-border transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="font-semibold text-primary text-sm">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
        <div className="absolute inset-0 matrix-bg"></div>
        <motion.div 
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold hacker-text glow-text">
            🚀 Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose from our comprehensive suite of technology services to accelerate your digital transformation and achieve unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => onNavigate("get-started")}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-8 py-4 glow-effect"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("portfolio")}
                className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-4 glass-morphism neon-border"
              >
                View Our Portfolio
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}