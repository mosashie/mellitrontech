import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { 
  Target,
  Eye,
  Smartphone,
  Globe,
  Network,
  Bot,
  Search,
  Code,
  Linkedin,
  Github
} from "lucide-react";

interface AboutPageProps {
  // If you need navigation props, add them here
}

export function AboutPage({}: AboutPageProps) {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b3cd?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Emily Davis",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
    },
  ];

  const expertise = [
    { icon: Smartphone, name: "Flutter Apps", color: "from-primary to-green-400" },
    { icon: Globe, name: "Websites", color: "from-secondary to-blue-500" },
    { icon: Code, name: "Node.js", color: "from-purple-400 to-pink-500" },
    { icon: Network, name: "Blockchain", color: "crypto-gradient" },
    { icon: Bot, name: "AI", color: "from-purple-400 to-primary" },
    { icon: Search, name: "SEO", color: "from-primary to-secondary" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold">About mellitron tech</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in tech excellence, turning ideas into reality with cutting-edge digital solutions and innovative technology.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                mellitron tech was founded with a mission to deliver cutting-edge digital solutions that transform businesses and drive innovation. We believe that technology should be accessible, efficient, and transformative.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of passionate developers, designers, and strategists work together to help businesses leverage technology to innovate and scale globally. From startups to enterprises, we provide the technical expertise and creative vision needed to succeed in today's digital landscape.
              </p>
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
                src="https://images.unsplash.com/photo-1564707944519-7a116ef3841c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTU4OTEwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Artificial intelligence and technology"
                className="relative rounded-2xl shadow-2xl w-full h-auto neon-border"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 glass-morphism border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="glass-morphism neon-border h-full">
                <CardContent className="p-8 text-center space-y-6">
                  <motion.div 
                    className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-green-400 rounded-2xl flex items-center justify-center glow-effect"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Target className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deliver innovative, efficient, and future-ready tech solutions that empower businesses to thrive in the digital age. We are committed to excellence, creativity, and transforming ideas into impactful reality.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="glass-morphism neon-border h-full">
                <CardContent className="p-8 text-center space-y-6">
                  <motion.div 
                    className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary to-purple-500 rounded-2xl flex items-center justify-center glow-effect"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Eye className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-secondary">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become a global leader in digital transformation and emerging technologies, inspiring innovation and creating lasting impact through cutting-edge solutions that shape the future of business.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Our Expertise</h2>
            <p className="text-xl text-muted-foreground">
              We specialize in cutting-edge technologies that drive business growth and innovation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <Card className="glass-morphism neon-border text-center p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="space-y-3">
                    <motion.div 
                      className={`w-12 h-12 mx-auto ${
                        item.color === "crypto-gradient" 
                          ? "crypto-gradient" 
                          : `bg-gradient-to-br ${item.color}`
                      } rounded-xl flex items-center justify-center glow-effect`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="font-semibold text-primary">{item.name}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 glass-morphism border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              The brilliant minds behind mellitron tech's innovative solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-morphism neon-border overflow-hidden group">
                  <div className="relative">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6 text-center space-y-4">
                    <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                    <div className="flex justify-center space-x-4">
                      <motion.a
                        href={member.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do at mellitron tech
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards in everything we do, from code quality to client service.",
              },
              {
                title: "Partnership",
                description: "We work closely with our clients as trusted partners, understanding their unique needs and goals.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-morphism neon-border text-center p-8 h-full">
                  <CardContent className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}