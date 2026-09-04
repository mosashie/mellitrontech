import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { motion } from "motion/react";
import { 
  FileText, 
  Upload, 
  Brain, 
  Network, 
  Cpu, 
  Shield, 
  Zap, 
  Award,
  Users,
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";

interface SubmitResearchPageProps {
  onNavigate: (page: string) => void;
}

export function SubmitResearchPage({ onNavigate }: SubmitResearchPageProps) {
  const researchAreas = [
    {
      id: "ai",
      title: "🧠 Artificial Intelligence",
      description: "Machine Learning, Deep Learning, Neural Networks, Computer Vision, NLP",
      icon: Brain,
      color: "white"
    },
    {
      id: "blockchain",
      title: "⛓️ Blockchain & Crypto",
      description: "Consensus Algorithms, Smart Contracts, DeFi, Layer 2 Solutions, Zero-Knowledge Proofs",
      icon: Network, 
      color: "primary"
    },
    {
      id: "quantum",
      title: "🔮 Quantum Computing",
      description: "Quantum Algorithms, Quantum Cryptography, Quantum Machine Learning, Error Correction",
      icon: Cpu,
      color: "secondary"
    },
    {
      id: "security",
      title: "🛡️ Cybersecurity",
      description: "Cryptography, Zero-Trust Architecture, Penetration Testing, Blockchain Security",
      icon: Shield,
      color: "purple"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Research Grants",
      description: "Funding opportunities for promising research projects"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Work with our world-class research team"
    },
    {
      icon: Globe,
      title: "Publication Support",
      description: "Help with peer review and conference submissions"
    },
    {
      icon: Zap,
      title: "Innovation Lab Access",
      description: "Access to cutting-edge research infrastructure"
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
              <FileText className="w-4 h-4 mr-2 text-primary" />
              Research Collaboration
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Submit Your{" "}
              <span className="hacker-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
                Research
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join mellitron tech's research network. Share your groundbreaking work in AI, blockchain, quantum computing, or cybersecurity and collaborate with our elite team of researchers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 glass-morphism border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Research Areas We Support</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We welcome innovative research across multiple cutting-edge domains
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => {
              const colors = getColorClasses(area.color);
              
              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className={`glass-morphism ${colors.border} p-6 h-full`}>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center glow-effect`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <area.icon className={`w-6 h-6 ${colors.icon}`} />
                        </motion.div>
                        <h3 className={`text-xl font-bold ${colors.text} hacker-text`}>
                          {area.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 matrix-bg"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Submit Your Research</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your research and let's explore collaboration opportunities
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-morphism neon-border">
              <CardContent className="p-8">
                <form className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName"
                          placeholder="Enter your first name"
                          className="glass-morphism border-border/50 focus:neon-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName"
                          placeholder="Enter your last name"
                          className="glass-morphism border-border/50 focus:neon-border"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email"
                          type="email"
                          placeholder="researcher@university.edu"
                          className="glass-morphism border-border/50 focus:neon-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="affiliation">Institution/Affiliation</Label>
                        <Input 
                          id="affiliation"
                          placeholder="University or Company"
                          className="glass-morphism border-border/50 focus:neon-border"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Research Information */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">Research Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="researchArea">Primary Research Area</Label>
                        <Select>
                          <SelectTrigger className="glass-morphism border-border/50 focus:neon-border">
                            <SelectValue placeholder="Select research area" />
                          </SelectTrigger>
                          <SelectContent className="glass-morphism border-border bg-card">
                            <SelectItem value="ai">Artificial Intelligence</SelectItem>
                            <SelectItem value="blockchain">Blockchain & Crypto</SelectItem>
                            <SelectItem value="quantum">Quantum Computing</SelectItem>
                            <SelectItem value="security">Cybersecurity</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Select>
                          <SelectTrigger className="glass-morphism border-border/50 focus:neon-border">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent className="glass-morphism border-border bg-card">
                            <SelectItem value="1-2">1-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="researchTitle">Research Title</Label>
                      <Input 
                        id="researchTitle"
                        placeholder="Title of your research project or paper"
                        className="glass-morphism border-border/50 focus:neon-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="abstract">Research Abstract/Summary</Label>
                      <Textarea 
                        id="abstract"
                        placeholder="Provide a detailed summary of your research, methodology, and key findings..."
                        rows={6}
                        className="glass-morphism border-border/50 focus:neon-border resize-none"
                      />
                    </div>
                  </div>

                  {/* File Uploads */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">Research Materials</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div 
                        className="border-2 border-dashed border-border/50 rounded-lg p-8 text-center glass-morphism hover:border-primary/50 transition-colors cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Upload className="w-12 h-12 mx-auto mb-4 text-primary" />
                        <p className="font-medium mb-2">Upload Research Paper</p>
                        <p className="text-sm text-muted-foreground">PDF, DOC up to 10MB</p>
                      </motion.div>
                      <motion.div 
                        className="border-2 border-dashed border-border/50 rounded-lg p-8 text-center glass-morphism hover:border-primary/50 transition-colors cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Upload className="w-12 h-12 mx-auto mb-4 text-secondary" />
                        <p className="font-medium mb-2">Upload Code/Data</p>
                        <p className="text-sm text-muted-foreground">ZIP, TAR up to 50MB</p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">Collaboration Interests</h3>
                    <div className="space-y-2">
                      <Label htmlFor="collaboration">How would you like to collaborate with mellitron tech?</Label>
                      <Textarea 
                        id="collaboration"
                        placeholder="Describe your collaboration goals, research interests, and how mellitron tech can support your work..."
                        rows={4}
                        className="glass-morphism border-border/50 focus:neon-border resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/80 hover:to-secondary/80 py-4 glow-effect group"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <span>Submit Research Proposal</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Button>
                    </motion.div>
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      We'll review your submission within 5-7 business days and get back to you with feedback.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 glass-morphism border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Research Partnership Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What you can expect from collaborating with our research team
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-primary">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 matrix-bg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold">Research Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  metric: "50+",
                  label: "Research Papers Published"
                },
                {
                  metric: "$2M+",
                  label: "Research Grants Secured"
                },
                {
                  metric: "25+", 
                  label: "Academic Partnerships"
                }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="glass-morphism neon-border text-center p-8">
                    <CardContent className="space-y-2">
                      <div className="text-4xl font-bold text-primary glow-text">{stat.metric}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join our research network and help shape the future of technology with cutting-edge innovations.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              onClick={() => onNavigate("contact")}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/80 hover:to-secondary/80 px-8 py-4 glow-effect"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}