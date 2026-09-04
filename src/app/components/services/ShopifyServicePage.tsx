import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";
import { 
  ShoppingCart, 
  Palette, 
  Zap, 
  Settings, 
  TrendingUp, 
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Smartphone,
  BarChart3,
  Search,
  CreditCard,
  Package,
  Truck
} from "lucide-react";

interface ShopifyServicePageProps {
  onNavigate: (page: string) => void;
}

export function ShopifyServicePage({ onNavigate }: ShopifyServicePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden parallax-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit glass-morphism neon-border px-4 py-2">
                  <ShoppingCart className="w-4 h-4 mr-2 text-primary" />
                  Shopify Development
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight hacker-text">
                  🛒 Shopify E-commerce{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
                    Excellence
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transform your business with custom Shopify stores that drive sales, enhance user experience, and scale with your growth. From store setup to advanced customizations and integrations.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => onNavigate("service-shopify-request")}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-8 py-4 glow-effect group"
                >
                  Start Your Store
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
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG9ubGluZSUyMHN0b3JlfGVufDF8fHx8MTc1NjE1MTU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="E-commerce online shopping store"
                className="relative rounded-2xl shadow-2xl w-full h-auto neon-border"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
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
            <h2 className="text-3xl lg:text-4xl font-bold hacker-text">🛍️ Shopify Services We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive Shopify solutions from store setup to advanced customizations and ongoing optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingCart,
                title: "Store Setup & Configuration",
                description: "Complete Shopify store setup with theme customization, product catalog, and payment integration.",
                features: ["Theme Selection", "Product Import", "Payment Gateway", "Domain Setup"],
                color: "from-green-400 to-emerald-500"
              },
              {
                icon: Palette,
                title: "Custom Theme Development",
                description: "Bespoke Shopify themes tailored to your brand with responsive design and conversion optimization.",
                features: ["Custom Design", "Mobile Responsive", "Speed Optimization", "SEO Ready"],
                color: "from-purple-400 to-pink-500"
              },
              {
                icon: Settings,
                title: "App Development & Integration",
                description: "Custom Shopify apps and third-party integrations to extend your store's functionality.",
                features: ["Custom Apps", "API Integration", "Automation", "Analytics"],
                color: "from-blue-400 to-cyan-500"
              },
              {
                icon: TrendingUp,
                title: "Store Optimization",
                description: "Performance optimization, SEO enhancement, and conversion rate optimization for better sales.",
                features: ["Speed Optimization", "SEO Setup", "Conversion Tracking", "A/B Testing"],
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: CreditCard,
                title: "Payment & Checkout",
                description: "Advanced payment solutions and checkout optimization for better customer experience.",
                features: ["Multi-Payment Options", "Checkout Optimization", "Subscription Setup", "Tax Configuration"],
                color: "from-indigo-400 to-purple-500"
              },
              {
                icon: Truck,
                title: "Shipping & Fulfillment",
                description: "Comprehensive shipping solutions and fulfillment integrations for efficient order management.",
                features: ["Shipping Zones", "Rate Calculation", "Fulfillment Apps", "Inventory Management"],
                color: "from-rose-400 to-red-500"
              }
            ].map((service, index) => (
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
                    <motion.div 
                      className={`w-16 h-16 mx-auto bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center glow-effect`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-primary hacker-text text-center">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-center">{service.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
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
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 glass-morphism border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold hacker-text">⚙️ Our Shopify Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Systematic approach to building high-performing Shopify stores that drive results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                {
                  phase: "1. Discovery & Strategy",
                  duration: "1-2 weeks",
                  description: "Understanding your business goals, target audience, and competitive landscape to create the perfect strategy.",
                  icon: Search
                },
                {
                  phase: "2. Design & Development",
                  duration: "2-4 weeks",
                  description: "Custom theme development with brand-aligned design and mobile-first responsive approach.",
                  icon: Palette
                },
                {
                  phase: "3. Configuration & Integration",
                  duration: "1-2 weeks",
                  description: "Store setup, payment gateway integration, shipping configuration, and third-party app connections.",
                  icon: Settings
                },
                {
                  phase: "4. Testing & Launch",
                  duration: "1 week",
                  description: "Comprehensive testing, performance optimization, and smooth launch with ongoing support.",
                  icon: Zap
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

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGVjb21tZXJjZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc1NjE1MTYyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Online shopping ecommerce business"
                className="relative rounded-2xl shadow-2xl w-full h-auto neon-border"
              />
            </motion.div>
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
            <h2 className="text-3xl lg:text-4xl font-bold hacker-text">🔧 Shopify Technology Stack</h2>
            <p className="text-xl text-muted-foreground">
              Advanced tools and technologies we use for Shopify development
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Shopify Platforms",
                technologies: ["Shopify Plus", "Shopify", "Shopify Lite", "Shopify POS"],
                icon: ShoppingCart
              },
              {
                category: "Development Tools",
                technologies: ["Liquid", "React", "GraphQL", "Shopify CLI"],
                icon: Settings
              },
              {
                category: "Integrations",
                technologies: ["Payment Gateways", "Shipping APIs", "Analytics", "Marketing Tools"],
                icon: Globe
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
                    className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center glow-effect"
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
            🚀 Ready to Launch Your Shopify Store?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transform your business with a high-converting Shopify store that drives sales and grows with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate("service-shopify-request")}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-8 py-4 glow-effect group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 glass-morphism neon-border hover:bg-primary/10"
            >
              Get Free Consultation
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}