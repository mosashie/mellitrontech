import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { 
  Rocket, 
  Lightbulb, 
  Smartphone, 
  Network, 
  Bot, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Target,
  Users,
  Award,
  Clock,
  Shield,
  Code,
  Palette,
  Database,
  Search,
  Settings,
  TrendingUp,
  Layers,
  Monitor,
  Sparkles
} from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden parallax-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8 fade-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <Badge variant="secondary" className="w-fit glass-morphism neon-border px-4 py-2">
                    <Rocket className="w-4 h-4 mr-2 text-primary" />
                    Welcome to mellitron tech
                  </Badge>
                </motion.div>
                <motion.h1 
                  className="text-4xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  🚀 Transforming Ideas into{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
                    Innovation!
                  </span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  At mellitron tech, we're your dedicated partners in tech excellence, specializing in mobile app development, blockchain solutions, AI integration, and dynamic website development. From startup MVPs to enterprise-scale solutions, we bring your digital vision to life.
                </motion.p>
              </div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 bounce-animation"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
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
                  onClick={() => onNavigate("portfolio")}
                  className="px-8 py-4 glass-morphism neon-border hover:bg-primary/10"
                >
                  View Portfolio
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative float-animation"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1624298696100-a6aae4884881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1ODkxMDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mobile app development and coding"
                  className="relative rounded-2xl shadow-2xl w-full h-auto neon-border"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
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
            <h2 className="text-3xl lg:text-4xl font-bold hacker-text">⚡ What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in cutting-edge technology solutions that drive business growth and digital transformation across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary hacker-text">🎯 Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes with innovative technology solutions that enhance productivity, streamline operations, and accelerate growth. We bridge the gap between complex technology and practical business applications.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-secondary hacker-text">🔮 Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading technology partner that transforms how businesses operate in the digital age, making advanced technology accessible, scalable, and profitable for companies worldwide.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU2MTI5NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Software development team collaboration"
                className="relative rounded-2xl shadow-2xl w-full h-auto neon-border"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Strategic Planning",
                description: "Custom technology roadmaps aligned with your business objectives and growth plans."
              },
              {
                icon: Code,
                title: "Expert Development",
                description: "Full-stack development with modern frameworks and best practices for scalable solutions."
              },
              {
                icon: Shield,
                title: "Security First",
                description: "Enterprise-grade security measures to protect your data and user information."
              },
              {
                icon: TrendingUp,
                title: "Growth Focused",
                description: "Solutions designed to scale with your business and adapt to changing market needs."
              }
            ].map((item, index) => (
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
                      className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center glow-effect"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-primary hacker-text">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Projects Work Section */}
      <section className="py-20 glass-morphism border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold hacker-text">🔄 How Projects Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven development process ensures successful project delivery from concept to launch and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1743385779313-ac03bb0f997b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMHdvcmtmbG93fGVufDF8fHx8MTc1NjEyNDQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Project management workflow"
                className="relative rounded-2xl shadow-2xl w-full h-auto neon-border"
              />
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                {
                  phase: "1. Discovery & Planning",
                  duration: "1-2 weeks",
                  description: "We analyze your requirements, define project scope, and create a detailed roadmap.",
                  icon: Lightbulb
                },
                {
                  phase: "2. Design & Prototyping", 
                  duration: "2-3 weeks",
                  description: "UI/UX design, user flows, and interactive prototypes for validation.",
                  icon: Palette
                },
                {
                  phase: "3. Development & Testing",
                  duration: "4-12 weeks",
                  description: "Agile development with continuous testing and regular progress updates.",
                  icon: Code
                },
                {
                  phase: "4. Launch & Support",
                  duration: "Ongoing",
                  description: "Deployment, monitoring, maintenance, and continuous improvements.",
                  icon: Rocket
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center glow-effect flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-primary hacker-text">{step.phase}</h3>
                      <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              onClick={() => onNavigate("get-started")}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-8 py-4 glow-effect"
            >
              Start Your Project Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold hacker-text">💡 Why Choose mellitron tech</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine innovation, expertise, and reliability to deliver transformative technology solutions that drive real business results
            </p>
          </motion.div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Award,
                title: "🏆 Proven Excellence",
                description: "5+ years of delivering high-quality solutions with 500+ successful projects and 99% client satisfaction rate.",
                stats: "500+ Projects"
              },
              {
                icon: Users,
                title: "👥 Expert Team",
                description: "Skilled developers, designers, and strategists with deep expertise in cutting-edge technologies.",
                stats: "50+ Experts"
              },
              {
                icon: Clock,
                title: "⚡ Fast Delivery",
                description: "Agile development approach with transparent communication and on-time project delivery guaranteed.",
                stats: "99% On-Time"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-morphism neon-border h-full hover:shadow-xl transition-all duration-500 text-center">
                  <CardContent className="p-8 space-y-4">
                    <motion.div 
                      className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center glow-effect"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-primary hacker-text">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    <Badge variant="outline" className="text-primary border-primary/50 bg-primary/10">
                      {value.stats}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Smartphone,
                title: "📱 Mobile App Mastery",
                description: "Cross-platform mobile applications with native performance using Flutter, React Native, and native development.",
                features: ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Ready"],
                color: "from-primary to-green-400",
                link: "service-flutter"
              },
              {
                icon: Network,
                title: "🔗 Blockchain Brilliance", 
                description: "Decentralized applications, smart contracts, DeFi solutions, and secure blockchain implementations.",
                features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Web3 Integration"],
                color: "crypto-gradient",
                link: "service-blockchain"
              },
              {
                icon: Bot,
                title: "🤖 AI Excellence",
                description: "Machine learning models, chatbots, automation systems, and intelligent business solutions.",
                features: ["ML Models", "Chatbots", "Automation", "Predictive Analytics"],
                color: "from-purple-400 to-primary",
                link: "service-ai"
              },
              {
                icon: Globe,
                title: "🌐 Web Development Wizardry",
                description: "Modern websites, e-commerce platforms, progressive web apps, and cloud-based solutions.",
                features: ["Responsive Design", "E-commerce", "PWAs", "Cloud Hosting"],
                color: "from-secondary to-primary",
                link: "service-website"
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 glass-morphism neon-border h-full matrix-bg">
                  <CardContent className="p-6 space-y-4 h-full flex flex-col">
                    <motion.div 
                      className={`w-16 h-16 mx-auto ${
                        service.color === "crypto-gradient" 
                          ? "crypto-gradient" 
                          : `bg-gradient-to-br ${service.color}`
                      } rounded-2xl flex items-center justify-center glow-effect pulse-glow`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors hacker-text text-center">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-center flex-1">{service.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {service.features.map((feature, featureIndex) => (
                          <Badge 
                            key={featureIndex}
                            variant="outline" 
                            className="text-xs bg-primary/10 border-primary/30 text-primary"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors neon-border"
                        onClick={() => onNavigate(service.link)}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise Section */}
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
            <h2 className="text-3xl lg:text-4xl font-bold hacker-text">🛠️ Technology Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with cutting-edge technologies and frameworks to build scalable, secure, and high-performance solutions across all digital platforms
            </p>
          </motion.div>

          {/* First Technology Row - Image and First 3 Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753613648137-602c669cbe07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGNvZGluZ3xlbnwxfHx8fDE3NTYxNTEyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technology innovation and coding"
                className="relative rounded-2xl shadow-2xl w-full h-auto neon-border"
              />
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                {
                  category: "Frontend Technologies",
                  technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
                  icon: Monitor
                },
                {
                  category: "Backend & Cloud",
                  technologies: ["Node.js", "Python", "PHP", "AWS", "Firebase", "Docker"],
                  icon: Database
                },
                {
                  category: "Mobile Development",
                  technologies: ["Flutter", "React Native", "iOS", "Android", "PWA", "Ionic"],
                  icon: Smartphone
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
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow-effect"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <tech.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-primary hacker-text">{tech.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
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
            </motion.div>
          </div>

          {/* Additional Technology Categories - Full Width Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "E-commerce Platforms",
                technologies: ["Shopify", "WooCommerce", "Magento", "BigCommerce"],
                icon: Globe,
                description: "Complete e-commerce solutions from setup to optimization"
              },
              {
                category: "CMS & Website Builders",
                technologies: ["WordPress", "Webflow", "Strapi", "Contentful"],
                icon: Layers,
                description: "Content management and website building platforms"
              },
              {
                category: "SEO & Digital Marketing",
                technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Google Ads"],
                icon: Search,
                description: "Search engine optimization and digital marketing tools"
              },
              {
                category: "Social Media Management",
                technologies: ["Facebook Ads", "Instagram", "LinkedIn", "TikTok"],
                icon: Settings,
                description: "Social media strategy and management services"
              },
              {
                category: "AI & Machine Learning",
                technologies: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"],
                icon: Bot,
                description: "Artificial intelligence and machine learning solutions"
              },
              {
                category: "Blockchain & Web3",
                technologies: ["Ethereum", "Solidity", "Web3.js", "Smart Contracts"],
                icon: Network,
                description: "Decentralized applications and blockchain development"
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-morphism neon-border h-full hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center glow-effect"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <tech.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-bold text-primary hacker-text">{tech.category}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tech.description}</p>
                    <div className="flex flex-wrap gap-2">
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
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
        <div className="absolute inset-0 matrix-bg"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold hacker-text">🚀 Ready to Transform Your Ideas?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join hundreds of satisfied clients who have transformed their businesses with our cutting-edge technology solutions. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => onNavigate("get-started")}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-8 py-4 glow-effect group"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("contact")}
                className="px-8 py-4 glass-morphism neon-border hover:bg-primary/10"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}