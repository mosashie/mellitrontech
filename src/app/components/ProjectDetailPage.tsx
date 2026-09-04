import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { 
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  User,
  Clock,
  Star,
  Code,
  Terminal,
  Smartphone,
  Database,
  Shield,
  Zap,
  Binary,
  CheckCircle
} from "lucide-react";

interface ProjectDetailPageProps {
  onNavigate: (page: string) => void;
  projectId: string;
}

export function ProjectDetailPage({ onNavigate, projectId }: ProjectDetailPageProps) {
  const [activeTab, setActiveTab] = useState("overview");

  // Project data based on ID
  const getProjectData = (id: string) => {
    const projects: { [key: string]: any } = {
      "project-1": {
        title: "CryptoVault Mobile",
        subtitle: "Secure Cryptocurrency Wallet Application",
        description: "A comprehensive mobile cryptocurrency wallet featuring advanced security protocols, multi-signature support, and seamless DeFi integration. Built with Flutter for cross-platform compatibility and optimized for institutional and retail users.",
        image: "https://images.unsplash.com/photo-1710993012000-f109972e3b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNjcmVlbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTY1NzQ0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Mobile Application",
        status: "Completed",
        client: "FinTech Startup",
        duration: "4 months",
        year: "2024",
        team: "5 developers, 2 designers, 1 security expert",
        technologies: [
          "Flutter", "Dart", "Firebase", "Web3.js", "Biometric Auth",
          "AES-256 Encryption", "Multi-sig Wallets", "REST APIs", "GraphQL", "Blockchain"
        ],
        features: [
          "Multi-currency wallet support (Bitcoin, Ethereum, 50+ altcoins)",
          "Biometric authentication (fingerprint, face recognition)",
          "Multi-signature transaction support",
          "DeFi protocol integration",
          "Real-time price tracking and portfolio analytics",
          "Offline transaction signing",
          "Hardware wallet integration",
          "Advanced security features (2FA, PIN protection)",
          "Cross-platform compatibility (iOS & Android)",
          "Dark/Light theme support"
        ],
        challenges: [
          "Implementing bank-level security in a mobile environment",
          "Optimizing blockchain transactions for mobile networks",
          "Creating intuitive UX for complex crypto operations",
          "Ensuring regulatory compliance across multiple jurisdictions"
        ],
        solutions: [
          "Custom security framework with biometric integration",
          "Intelligent transaction batching and gas optimization",
          "Progressive disclosure UX pattern for complex features",
          "Modular compliance system with region-specific adaptations"
        ],
        results: [
          "99.9% uptime with zero security incidents",
          "4.8/5 app store rating with 50K+ downloads",
          "30% faster transaction processing than competitors",
          "Successfully passed external security audits"
        ],
        gallery: [
          "https://images.unsplash.com/photo-1710993012000-f109972e3b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNjcmVlbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTY1NzQ0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHdhbGxldCUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NTU5NzYyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW9tZXRyaWMlMjBzZWN1cml0eSUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NTU5NzYyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        ],
        githubUrl: "https://github.com/mellitrontech/cryptovault-mobile",
        codeHighlights: [
          {
            title: "Biometric Authentication Integration",
            language: "dart",
            code: `
class BiometricAuth {
  static Future<bool> authenticateUser() async {
    final LocalAuthentication localAuth = LocalAuthentication();
    
    try {
      final bool isAvailable = await localAuth.canCheckBiometrics;
      if (!isAvailable) return false;
      
      final bool isAuthenticated = await localAuth.authenticate(
        localizedFallbackTitle: 'Use PIN instead',
        biometricOnly: true,
      );
      
      return isAuthenticated;
    } catch (e) {
      print('Biometric authentication error: $e');
      return false;
    }
  }
}`
          },
          {
            title: "Multi-Signature Wallet Implementation",
            language: "dart", 
            code: `
class MultiSigWallet {
  final int requiredSignatures;
  final List<String> signers;
  
  Future<Transaction> createTransaction(
    String to, 
    BigInt amount
  ) async {
    final transaction = Transaction(
      to: to,
      amount: amount,
      nonce: await getNonce(),
      signatures: <String>[],
    );
    
    return transaction;
  }
  
  Future<bool> addSignature(
    Transaction tx, 
    String signature
  ) async {
    tx.signatures.add(signature);
    
    if (tx.signatures.length >= requiredSignatures) {
      return await broadcastTransaction(tx);
    }
    
    return false;
  }
}`
          }
        ],
        icon: Smartphone,
        color: "primary"
      },
      "project-3": {
        title: "Neural Analytics Dashboard",
        subtitle: "AI-Powered Business Intelligence Platform",
        description: "Advanced analytics dashboard leveraging machine learning algorithms to provide predictive insights, real-time data visualization, and automated reporting for enterprise decision-making.",
        image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTY1NzQ0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Web Application",
        status: "In Development",
        client: "Enterprise Corp",
        duration: "6 months",
        year: "2024",
        team: "8 developers, 3 data scientists, 2 designers",
        technologies: [
          "Next.js", "TypeScript", "Python", "TensorFlow", "PostgreSQL",
          "Redis", "Docker", "Kubernetes", "Apache Kafka", "D3.js"
        ],
        features: [
          "Real-time data processing and visualization",
          "Predictive analytics using machine learning",
          "Custom dashboard builder with drag-and-drop",
          "Automated report generation and scheduling",
          "Multi-tenant architecture with role-based access",
          "API integration with 100+ data sources",
          "Advanced filtering and data exploration tools",
          "Mobile-responsive design",
          "Export capabilities (PDF, Excel, CSV)",
          "Real-time collaboration features"
        ],
        icon: Database,
        color: "purple"
      },
      "project-5": {
        title: "HealthTech Mobile Suite",
        subtitle: "Comprehensive Healthcare Application",
        description: "End-to-end healthcare platform enabling telemedicine consultations, appointment scheduling, health monitoring, and secure patient data management with HIPAA compliance.",
        image: "https://images.unsplash.com/photo-1676311522524-fa7c0bffd644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbW9iaWxlJTIwYXBwJTIwdGVsZW1lZGljaW5lfGVufDF8fHx8MTc1NjU3NDQxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Mobile Application",
        status: "Completed",
        client: "Healthcare Provider",
        duration: "10 months",
        year: "2024",
        team: "12 developers, 3 healthcare consultants, 2 compliance experts",
        technologies: [
          "Flutter", "Firebase", "Node.js", "MongoDB", "Socket.io",
          "WebRTC", "HIPAA Compliance", "Push Notifications", "Stripe API", "Twilio"
        ],
        features: [
          "Video consultation with screen sharing",
          "Appointment scheduling and management",
          "Electronic health records (EHR) integration",
          "Prescription management and e-prescribing",
          "Health monitoring and vital signs tracking",
          "Secure messaging between patients and providers",
          "Insurance verification and billing integration",
          "Multi-language support",
          "Offline mode for critical features",
          "Emergency contact and alert system"
        ],
        icon: Shield,
        color: "primary"
      },
      "project-8": {
        title: "E-commerce SEO Campaign",
        subtitle: "Multi-Platform SEO Optimization",
        description: "Comprehensive SEO strategy implementation across multiple e-commerce platforms, resulting in significant organic traffic growth and international market expansion.",
        image: "https://images.unsplash.com/photo-1632055186471-64814edeaab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBhbmFseXRpY3MlMjBncm93dGglMjBjaGFydHxlbnwxfHx8fDE3NTY1NzQ0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "SEO Campaign",
        status: "Completed",
        client: "E-commerce Brand",
        duration: "6 months",
        year: "2024",
        team: "4 SEO specialists, 2 content writers, 1 technical SEO expert",
        technologies: [
          "Shopify SEO", "Google Analytics", "SEMrush", "Ahrefs", "Structured Data",
          "Google Search Console", "Screaming Frog", "GTMetrix", "Schema Markup", "Yoast"
        ],
        features: [
          "Technical SEO audit and optimization",
          "International SEO strategy (5 countries)",
          "Content marketing and blog optimization",
          "Local SEO for physical store locations",
          "E-commerce specific optimizations",
          "Core Web Vitals improvements",
          "Schema markup implementation",
          "Competitor analysis and gap identification",
          "Link building and outreach campaigns",
          "Conversion rate optimization"
        ],
        icon: Zap,
        color: "white"
      }
    };

    return projects[id] || null;
  };

  const project = getProjectData(projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-primary hacker-text">PROJECT.NOT_FOUND</h1>
          <Button onClick={() => onNavigate("portfolio")} variant="outline" className="font-mono">
            <ArrowLeft className="w-4 h-4 mr-2" />
            RETURN.TO_PORTFOLIO()
          </Button>
        </div>
      </div>
    );
  }

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

  const colors = getColorClasses(project.color);

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            onClick={() => onNavigate("portfolio")} 
            variant="outline" 
            className="glass-morphism neon-border font-mono hacker-text"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            BACK.TO_PORTFOLIO()
          </Button>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="absolute inset-0 matrix-bg opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <Badge className={`${colors.bg} ${colors.border} w-fit font-mono`}>
                  <project.icon className={`w-4 h-4 mr-2 ${colors.icon}`} />
                  {project.category}
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold hacker-text">
                  <span className={`${colors.text} glow-text`}>{project.title}</span>
                </h1>
                
                <p className="text-xl text-muted-foreground font-mono">
                  {project.subtitle}
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Meta */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: User, label: "CLIENT", value: project.client },
                  { icon: Calendar, label: "YEAR", value: project.year },
                  { icon: Clock, label: "DURATION", value: project.duration },
                  { icon: CheckCircle, label: "STATUS", value: project.status }
                ].map((meta, index) => (
                  <motion.div
                    key={index}
                    className="glass-morphism neon-border p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <meta.icon className={`w-4 h-4 ${colors.icon}`} />
                      <span className="text-xs font-mono text-muted-foreground">{meta.label}</span>
                    </div>
                    <div className={`font-mono ${colors.text}`}>{meta.value}</div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.githubUrl && (
                  <Button 
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className={`${colors.border} glass-morphism ${colors.text} hover:${colors.bg} transition-all font-mono`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    VIEW.CODE()
                  </Button>
                )}
                <Button 
                  variant="outline"
                  onClick={() => onNavigate("contact")}
                  className="glass-morphism neon-border font-mono"
                >
                  <Terminal className="w-4 h-4 mr-2" />
                  DISCUSS.PROJECT()
                </Button>
              </div>
            </motion.div>

            {/* Project Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={`glass-morphism ${colors.border} p-4 rounded-2xl relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -skew-x-12"></div>
                </div>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute top-8 right-8">
                  <Badge className="bg-black/80 border-primary/50 text-primary font-mono">
                    <Binary className="w-3 h-3 mr-1" />
                    CLASSIFIED
                  </Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: "overview", label: "OVERVIEW.md" },
              { id: "features", label: "FEATURES.json" },
              { id: "tech", label: "TECH_STACK.yml" },
              ...(project.codeHighlights ? [{ id: "code", label: "SOURCE.code" }] : []),
              ...(project.gallery ? [{ id: "gallery", label: "GALLERY.img" }] : [])
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={`font-mono hacker-text ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r from-primary to-secondary text-primary-foreground ${colors.glow}`
                    : "glass-morphism neon-border"
                }`}
              >
                <Terminal className="w-4 h-4 mr-2" />
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {/* Features Overview */}
              <Card className="glass-morphism neon-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                    <Zap className="w-5 h-5" />
                    PROJECT.OVERVIEW()
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {project.features && (
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-primary font-mono">KEY.FEATURES:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.slice(0, 6).map((feature: string, index: number) => (
                          <div key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.results && (
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-secondary font-mono">RESULTS.ACHIEVED:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.results.map((result: string, index: number) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Star className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "features" && project.features && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass-morphism neon-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                    <Code className="w-5 h-5" />
                    FEATURES.IMPLEMENTATION()
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {project.features.map((feature: string, index: number) => (
                      <motion.div
                        key={index}
                        className="glass-morphism neon-border p-4 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-mono text-primary">{index + 1}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "tech" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass-morphism neon-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                    <Database className="w-5 h-5" />
                    TECH_STACK.ANALYSIS()
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {project.technologies.map((tech: string, index: number) => (
                      <motion.div
                        key={index}
                        className="glass-morphism neon-border p-3 rounded-lg text-center group hover:glow-effect transition-all"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-sm font-mono text-primary group-hover:glow-text transition-all">
                          {tech}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {project.team && (
                    <div className="mt-8 p-4 glass-morphism neon-border rounded-lg">
                      <h3 className="text-lg font-bold mb-2 text-secondary font-mono">TEAM.COMPOSITION:</h3>
                      <p className="text-muted-foreground font-mono">{project.team}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "code" && project.codeHighlights && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {project.codeHighlights.map((highlight: any, index: number) => (
                <Card key={index} className="glass-morphism neon-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                      <Code className="w-5 h-5" />
                      {highlight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black/50 rounded-lg p-4 border border-primary/20">
                      <pre className="text-primary font-mono text-sm overflow-x-auto">
                        <code>{highlight.code}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}

          {activeTab === "gallery" && project.gallery && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((image: string, index: number) => (
                  <motion.div
                    key={index}
                    className="glass-morphism neon-border p-2 rounded-lg group hover:glow-effect transition-all"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}