import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cpu, Shield, Zap, Globe, Smartphone, Brain, CheckCircle,
  ArrowRight, X, Star, Users, TrendingUp, Lock, Code2,
  ChevronRight, Package, Sparkles, BarChart3, Database,
  Eye, Send, Terminal
} from "lucide-react";
import { Button } from "./ui/button";

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: string;
  badge: string;
  icon: React.ElementType;
  accentColor: string;
  glowColor: string;
  features: string[];
  techStack: string[];
  stats: { label: string; value: string }[];
  image: string;
  useCases: string[];
}

const products: Product[] = [
  {
    id: "nexus-ai",
    name: "Nexus AI Engine",
    tagline: "Enterprise-grade AI inference at blockchain speed",
    description: "A modular AI inference platform built for high-throughput enterprise environments. Deploy custom LLM pipelines, computer vision modules, and NLP engines with sub-100ms latency.",
    longDescription: "Nexus AI Engine is mellitron tech's flagship AI infrastructure product. Built on a distributed microservices architecture, it allows organizations to deploy, manage, and scale AI workloads without infrastructure complexity. Supports fine-tuned models, RAG pipelines, and real-time streaming inference.",
    category: "AI / Machine Learning",
    badge: "NEW",
    icon: Brain,
    accentColor: "#9D00FF",
    glowColor: "rgba(157,0,255,0.3)",
    features: [
      "Multi-model orchestration with hot-swap capability",
      "Real-time streaming inference <100ms latency",
      "Built-in RAG pipeline with vector DB integration",
      "HIPAA & SOC 2 compliant data handling",
      "Auto-scaling GPU cluster management",
      "Model versioning and A/B testing dashboard",
    ],
    techStack: ["PyTorch", "FastAPI", "Kubernetes", "Redis", "Pinecone", "Prometheus"],
    stats: [
      { label: "Latency", value: "<100ms" },
      { label: "Models Supported", value: "200+" },
      { label: "Uptime SLA", value: "99.99%" },
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&auto=format",
    useCases: ["Customer support automation", "Document intelligence", "Real-time fraud detection", "Predictive analytics"],
  },
  {
    id: "chainvault",
    name: "ChainVault Protocol",
    tagline: "Institutional-grade blockchain custody & smart contract infrastructure",
    description: "A battle-tested smart contract deployment and custody solution for DeFi protocols, NFT platforms, and enterprise blockchain applications.",
    longDescription: "ChainVault Protocol provides end-to-end blockchain infrastructure for organizations building on EVM-compatible chains. From multi-sig wallet custody to automated smart contract auditing, ChainVault handles the complexity so your team can focus on product.",
    category: "Blockchain",
    badge: "POPULAR",
    icon: Shield,
    accentColor: "#00FF95",
    glowColor: "rgba(0,255,149,0.3)",
    features: [
      "Multi-chain smart contract deployment (EVM + Solana)",
      "Automated security audit pre-deployment",
      "Hardware-backed multi-sig custody",
      "Gas optimization engine saving up to 40%",
      "On-chain analytics and transaction monitoring",
      "Regulatory compliance reporting toolkit",
    ],
    techStack: ["Solidity", "Hardhat", "ethers.js", "The Graph", "IPFS", "Chainlink"],
    stats: [
      { label: "Chains Supported", value: "12+" },
      { label: "TVL Protected", value: "$2.4B" },
      { label: "Gas Saved", value: "Up to 40%" },
    ],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop&auto=format",
    useCases: ["DeFi protocols", "NFT marketplaces", "Token launches", "Cross-chain bridges"],
  },
  {
    id: "velox-mobile",
    name: "Velox Mobile SDK",
    tagline: "Cross-platform mobile development accelerated 3×",
    description: "A production-ready Flutter SDK bundle with pre-built authentication flows, payment integrations, real-time sync, and CI/CD pipelines out of the box.",
    longDescription: "Velox Mobile SDK eliminates 80% of mobile app boilerplate. Ship iOS and Android apps with enterprise-grade features — biometric auth, offline-first data sync, push notifications, and deep analytics — in weeks rather than months.",
    category: "Mobile Development",
    badge: "BESTSELLER",
    icon: Smartphone,
    accentColor: "#00BFFF",
    glowColor: "rgba(0,191,255,0.3)",
    features: [
      "Universal Flutter component library (120+ widgets)",
      "Offline-first architecture with conflict resolution",
      "Biometric & OAuth2 authentication flows",
      "Stripe, Razorpay & Web3 payment integrations",
      "Real-time data sync via WebSocket/CRDT",
      "One-command CI/CD to App Store & Play Store",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Supabase", "Stripe SDK", "Fastlane"],
    stats: [
      { label: "Time to Ship", value: "3× faster" },
      { label: "Components", value: "120+" },
      { label: "App Rating Avg", value: "4.8★" },
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&auto=format",
    useCases: ["FinTech apps", "HealthTech platforms", "E-commerce", "Enterprise tools"],
  },
  {
    id: "datasphere",
    name: "DataSphere Analytics",
    tagline: "Real-time business intelligence for data-driven decisions",
    description: "An embeddable analytics platform with customizable dashboards, predictive modeling, and white-label reporting — designed for SaaS products and enterprise teams.",
    longDescription: "DataSphere Analytics turns raw data into actionable intelligence. Embed rich visualization dashboards into any web app, connect to 50+ data sources, and let AI surface insights automatically. Built for both technical teams and business stakeholders.",
    category: "Data & Analytics",
    badge: "ENTERPRISE",
    icon: BarChart3,
    accentColor: "#FF6B6B",
    glowColor: "rgba(255,107,107,0.3)",
    features: [
      "50+ native data source connectors",
      "Embeddable React dashboard components",
      "AI-generated insight summaries",
      "Role-based access control",
      "Scheduled white-label PDF/CSV reports",
      "Anomaly detection with alert routing",
    ],
    techStack: ["Apache Kafka", "ClickHouse", "React", "D3.js", "dbt", "Airflow"],
    stats: [
      { label: "Data Sources", value: "50+" },
      { label: "Query Speed", value: "<2s" },
      { label: "Charts Available", value: "80+" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
    useCases: ["SaaS dashboards", "Executive reporting", "Operations monitoring", "Customer analytics"],
  },
  {
    id: "securenet",
    name: "SecureNet API Gateway",
    tagline: "Zero-trust API security with developer-first ergonomics",
    description: "A programmable API gateway with built-in rate limiting, DDoS protection, JWT/OAuth orchestration, and end-to-end encryption — deploy in 15 minutes.",
    longDescription: "SecureNet API Gateway sits in front of your microservices and absorbs the entire security surface area. Configure policies as code, get instant traffic visibility, and enforce zero-trust principles without touching your application logic.",
    category: "Security / DevOps",
    badge: "TRUSTED",
    icon: Lock,
    accentColor: "#FFB800",
    glowColor: "rgba(255,184,0,0.3)",
    features: [
      "Zero-trust mutual TLS between all services",
      "Policy-as-code with Rego/OPA",
      "10M+ req/s rate limiting engine",
      "Real-time threat intelligence feed",
      "Automatic certificate rotation",
      "GraphQL & REST schema validation",
    ],
    techStack: ["Nginx", "Lua", "Vault", "OPA", "Envoy Proxy", "Terraform"],
    stats: [
      { label: "Threats Blocked", value: "99.97%" },
      { label: "Req/s Capacity", value: "10M+" },
      { label: "Deploy Time", value: "15 min" },
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop&auto=format",
    useCases: ["API monetization", "Microservices security", "Partner integrations", "Regulatory compliance"],
  },
  {
    id: "webcore",
    name: "WebCore CMS",
    tagline: "Headless CMS with built-in SEO intelligence",
    description: "A developer-first headless CMS with visual editing, multi-tenant architecture, AI-assisted content optimization, and GraphQL/REST APIs out of the box.",
    longDescription: "WebCore CMS bridges the gap between developer flexibility and marketer control. Build your front-end in any framework, let content teams work visually, and let the AI layer handle SEO scoring, content suggestions, and A/B testing — all from one platform.",
    category: "Web / CMS",
    badge: "FLEXIBLE",
    icon: Globe,
    accentColor: "#00FF95",
    glowColor: "rgba(0,255,149,0.2)",
    features: [
      "Visual drag-and-drop editor + raw JSON fallback",
      "AI-powered SEO scoring & keyword suggestions",
      "Multi-tenant with isolated content namespaces",
      "GraphQL & REST content delivery APIs",
      "Built-in image optimization CDN",
      "A/B testing with conversion analytics",
    ],
    techStack: ["Next.js", "Payload CMS", "PostgreSQL", "Cloudflare CDN", "OpenAI", "Vercel"],
    stats: [
      { label: "Time-to-Publish", value: "5× faster" },
      { label: "SEO Score Avg", value: "+38%" },
      { label: "CDN Locations", value: "200+" },
    ],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop&auto=format",
    useCases: ["Corporate websites", "News & media", "E-commerce content", "Developer blogs"],
  },
];

interface DealFormData {
  name: string;
  email: string;
  company: string;
  useCase: string;
  timeline: string;
  teamSize: string;
  message: string;
}

function DealModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<DealFormData>({
    name: "",
    email: "",
    company: "",
    useCase: "",
    timeline: "",
    teamSize: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <motion.div
        className="relative w-full max-w-2xl glass-morphism border border-border/60 rounded-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Header */}
        <div
          className="relative p-6 border-b border-border/40"
          style={{ background: `linear-gradient(135deg, ${product.glowColor}, transparent)` }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${product.accentColor}20`, border: `1px solid ${product.accentColor}50` }}
              >
                <product.icon className="w-5 h-5" style={{ color: product.accentColor }} />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Deal Request</p>
                <h2 className="text-xl font-bold text-foreground">{product.name}</h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!submitted && (
            <div className="flex gap-2 mt-4">
              {[1, 2].map((s) => (
                <div
                  key={s}
                  className="h-1 flex-1 rounded-full transition-all duration-300"
                  style={{ background: step >= s ? product.accentColor : "rgba(255,255,255,0.1)" }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {submitted ? (
            <motion.div
              className="text-center py-8 space-y-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                style={{ background: `${product.accentColor}20` }}
              >
                <CheckCircle className="w-8 h-8" style={{ color: product.accentColor }} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Deal Request Submitted!</h3>
              <p className="text-muted-foreground">
                Our team will review your request for <span className="font-semibold" style={{ color: product.accentColor }}>{product.name}</span> and
                reach out within 24 hours to discuss next steps.
              </p>
              <div
                className="rounded-xl p-4 text-left text-sm font-mono"
                style={{ background: "rgba(0,0,0,0.3)", border: `1px solid ${product.accentColor}30` }}
              >
                <p className="text-muted-foreground">$ deal.submit({"{"})</p>
                <p className="ml-4" style={{ color: product.accentColor }}>product: &quot;{product.id}&quot;,</p>
                <p className="ml-4" style={{ color: product.accentColor }}>status: &quot;pending_review&quot;,</p>
                <p className="ml-4" style={{ color: product.accentColor }}>eta: &quot;24h&quot;</p>
                <p className="text-muted-foreground">{"}"}</p>
              </div>
              <Button
                onClick={onClose}
                className="mt-2"
                style={{ background: product.accentColor, color: "#000" }}
              >
                Close
              </Button>
            </motion.div>
          ) : step === 1 ? (
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <p className="text-muted-foreground text-sm">
                Tell us who you are and your company.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wide">Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Alex Rivera"
                    className="w-full bg-black/30 border border-border/50 rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wide">Work Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-black/30 border border-border/50 rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wide">Company / Organization *</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Acme Corp"
                  className="w-full bg-black/30 border border-border/50 rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wide">Team Size</label>
                <select
                  value={form.teamSize}
                  onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                  className="w-full bg-black/30 border border-border/50 rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                >
                  <option value="">Select team size</option>
                  <option value="1-10">1–10 employees</option>
                  <option value="11-50">11–50 employees</option>
                  <option value="51-200">51–200 employees</option>
                  <option value="200+">200+ employees</option>
                </select>
              </div>
              <Button
                onClick={() => setStep(2)}
                disabled={!form.name || !form.email || !form.company}
                className="w-full mt-2"
                style={{ background: product.accentColor, color: "#000" }}
              >
                Continue <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <p className="text-muted-foreground text-sm">
                Tell us about your use case and timeline.
              </p>
              <div className="space-y-1">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wide">Primary Use Case *</label>
                <select
                  value={form.useCase}
                  onChange={(e) => setForm({ ...form, useCase: e.target.value })}
                  className="w-full bg-black/30 border border-border/50 rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                >
                  <option value="">Select your primary use case</option>
                  {product.useCases.map((uc) => (
                    <option key={uc} value={uc}>{uc}</option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wide">Implementation Timeline</label>
                <select
                  value={form.timeline}
                  onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                  className="w-full bg-black/30 border border-border/50 rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP (within 2 weeks)</option>
                  <option value="1month">Within 1 month</option>
                  <option value="3months">1–3 months</option>
                  <option value="6months">3–6 months</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wide">Additional Context</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your project, technical requirements, or any specific questions..."
                  rows={4}
                  className="w-full bg-black/30 border border-border/50 rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                />
              </div>
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1 border-border/50"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={!form.useCase}
                  className="flex-1"
                  style={{ background: product.accentColor, color: "#000" }}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Deal Request
                </Button>
              </div>
            </motion.form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProductCard({
  product,
  onDealRequest,
  onViewDetails,
  isExpanded,
}: {
  product: Product;
  onDealRequest: (p: Product) => void;
  onViewDetails: (id: string) => void;
  isExpanded: boolean;
}) {
  return (
    <motion.div
      layout
      className="relative rounded-2xl overflow-hidden border border-border/40 glass-morphism group cursor-pointer"
      style={{ boxShadow: isExpanded ? `0 0 40px ${product.glowColor}` : "none" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={() => onViewDetails(product.id)}
    >
      {/* Badge */}
      <div className="absolute top-3 left-3 z-10">
        <span
          className="text-xs font-mono font-bold px-2 py-1 rounded-md tracking-widest"
          style={{ background: `${product.accentColor}20`, color: product.accentColor, border: `1px solid ${product.accentColor}40` }}
        >
          {product.badge}
        </span>
      </div>

      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-[#0A0F1E]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, transparent 40%, #0A0F1E)` }}
        />
        <div
          className="absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: `${product.accentColor}20`, border: `1px solid ${product.accentColor}50` }}
        >
          <product.icon className="w-4 h-4" style={{ color: product.accentColor }} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <p className="text-xs font-mono text-muted-foreground mb-1">{product.category}</p>
          <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
          <p className="text-xs" style={{ color: product.accentColor }}>{product.tagline}</p>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 py-2 border-y border-border/30">
          {product.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-sm font-bold" style={{ color: product.accentColor }}>{stat.value}</p>
              <p className="text-xs text-muted-foreground leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1">
          {product.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-md font-mono"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
            >
              {tech}
            </span>
          ))}
          {product.techStack.length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded-md font-mono text-muted-foreground/50">
              +{product.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-1" onClick={(e) => e.stopPropagation()}>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-border/50 text-xs hover:border-primary/50"
            onClick={() => onViewDetails(product.id)}
          >
            <Eye className="w-3 h-3 mr-1" /> View Details
          </Button>
          <Button
            size="sm"
            className="flex-1 text-xs font-bold"
            style={{ background: product.accentColor, color: "#000" }}
            onClick={() => onDealRequest(product)}
          >
            <Zap className="w-3 h-3 mr-1" /> Get a Deal
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function ProductDetailPanel({ product, onClose, onDealRequest }: { product: Product; onClose: () => void; onDealRequest: (p: Product) => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative ml-auto w-full max-w-2xl h-full glass-morphism border-l border-border/50 overflow-y-auto"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 35 }}
      >
        {/* Hero image */}
        <div className="relative h-56 bg-[#0A0F1E] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover opacity-50"
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to bottom, ${product.glowColor}, #0A0F1E)` }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/30 rounded-full p-1.5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6">
            <span
              className="text-xs font-mono font-bold px-2 py-1 rounded-md tracking-widest mb-2 inline-block"
              style={{ background: `${product.accentColor}20`, color: product.accentColor, border: `1px solid ${product.accentColor}40` }}
            >
              {product.badge}
            </span>
            <h2 className="text-3xl font-bold text-white">{product.name}</h2>
            <p className="text-sm" style={{ color: product.accentColor }}>{product.tagline}</p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {product.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-4 text-center"
                style={{ background: `${product.accentColor}08`, border: `1px solid ${product.accentColor}20` }}
              >
                <p className="text-xl font-bold" style={{ color: product.accentColor }}>{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              <Sparkles className="w-3.5 h-3.5 inline mr-2" style={{ color: product.accentColor }} />
              Core Features
            </h3>
            <ul className="space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: product.accentColor }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              <Code2 className="w-3.5 h-3.5 inline mr-2" style={{ color: product.accentColor }} />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1.5 rounded-lg font-mono"
                  style={{ background: `${product.accentColor}10`, color: product.accentColor, border: `1px solid ${product.accentColor}30` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
              <Database className="w-3.5 h-3.5 inline mr-2" style={{ color: product.accentColor }} />
              Use Cases
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {product.useCases.map((uc) => (
                <div
                  key={uc}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <TrendingUp className="w-3.5 h-3.5" style={{ color: product.accentColor }} />
                  {uc}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="rounded-2xl p-6 text-center space-y-3"
            style={{ background: `linear-gradient(135deg, ${product.glowColor}, rgba(0,0,0,0.3))`, border: `1px solid ${product.accentColor}30` }}
          >
            <h3 className="text-lg font-bold text-foreground">Ready to integrate {product.name}?</h3>
            <p className="text-sm text-muted-foreground">
              Our team will build a custom deal scoped to your organization's needs.
            </p>
            <Button
              className="w-full font-bold text-sm py-3"
              style={{ background: product.accentColor, color: "#000" }}
              onClick={() => onDealRequest(product)}
            >
              <Zap className="w-4 h-4 mr-2" />
              Request a Deal for {product.name}
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProductsPage({ onNavigate }: ProductsPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [dealProduct, setDealProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState("all");

  const categories = ["all", ...Array.from(new Set(products.map((p) => p.category)))];

  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,191,255,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(157,0,255,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Scanline effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,149,0.15) 2px, rgba(0,255,149,0.15) 4px)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 border border-primary/30 bg-primary/5 text-xs font-mono text-primary"
          >
            <Terminal className="w-3.5 h-3.5" />
            mellitron tech / products — v2.0
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Our Products
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Battle-tested software infrastructure built by mellitron tech engineers. Pick a product, explore the specs, and close a deal — all in one place.
          </motion.p>

          {/* Stats bar */}
          <motion.div
            className="inline-flex flex-wrap justify-center gap-8 mt-2 rounded-2xl border border-border/40 px-10 py-5 bg-black/20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            {[
              { icon: Package, label: "Products", value: "6" },
              { icon: Users, label: "Enterprise Clients", value: "120+" },
              { icon: Star, label: "Avg Rating", value: "4.9★" },
              { icon: Globe, label: "Countries", value: "38" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Icon className="w-4 h-4 text-primary" />
                  <p className="text-2xl font-bold text-foreground">{value}</p>
                </div>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 z-30 border-y border-border/40 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wide transition-all duration-200 ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/30"
                }`}
              >
                {cat === "all" ? "All Products" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <ProductCard
                    product={product}
                    onDealRequest={setDealProduct}
                    onViewDetails={(id) => setSelectedProduct(products.find((p) => p.id === id) || null)}
                    isExpanded={selectedProduct?.id === product.id}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA banner */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-3xl p-10 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(0,255,149,0.06) 0%, rgba(0,191,255,0.06) 50%, rgba(157,0,255,0.06) 100%)",
              border: "1px solid rgba(0,255,149,0.2)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,255,149,0.05) 0%, transparent 70%)" }}
            />
            <Cpu className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Need a custom product stack?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Our solutions architects will compose a tailored bundle from our product catalog to match your exact technical and business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => onNavigate("contact")}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 glow-effect"
              >
                Talk to a Solutions Architect <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => onNavigate("services")}
                className="border-border/50 px-8 py-3"
              >
                Browse Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product detail side panel */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailPanel
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onDealRequest={(p) => {
              setSelectedProduct(null);
              setDealProduct(p);
            }}
          />
        )}
      </AnimatePresence>

      {/* Deal modal */}
      <AnimatePresence>
        {dealProduct && (
          <DealModal product={dealProduct} onClose={() => setDealProduct(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
