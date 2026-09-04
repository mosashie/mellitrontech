import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";
import { 
  Share2, 
  Target, 
  BarChart3, 
  MessageCircle, 
  TrendingUp, 
  Users,
  ArrowRight,
  CheckCircle,
  Camera,
  Calendar,
  Heart,
  Zap,
  Globe,
  Megaphone,
  Hash,
  Eye
} from "lucide-react";

interface SocialMediaServicePageProps {
  onNavigate: (page: string) => void;
}

export function SocialMediaServicePage({ onNavigate }: SocialMediaServicePageProps) {
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
                  <Share2 className="w-4 h-4 mr-2 text-primary" />
                  Social Media Management
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight hacker-text">
                  📱 Social Media{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
                    Mastery
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Amplify your brand presence across all social platforms with strategic content creation, community management, and data-driven growth strategies that convert followers into customers.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => onNavigate("service-social-request")}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-8 py-4 glow-effect group"
                >
                  Boost Your Presence
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate("portfolio")}
                  className="px-8 py-4 glass-morphism neon-border hover:bg-primary/10"
                >
                  View Case Studies
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
                src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMGRpZ2l0YWwlMjBjb250ZW50fGVufDF8fHx8MTc1NjE1MTY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Social media marketing digital content"
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
            <h2 className="text-3xl lg:text-4xl font-bold hacker-text">📈 Social Media Services We Provide</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive social media solutions to build your brand, engage your audience, and drive business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Strategy & Planning",
                description: "Data-driven social media strategies tailored to your brand goals and target audience behavior.",
                features: ["Audience Research", "Content Strategy", "Platform Selection", "Goal Setting"],
                color: "from-blue-400 to-cyan-500"
              },
              {
                icon: Camera,
                title: "Content Creation",
                description: "High-quality visual content, compelling copy, and engaging multimedia that resonates with your audience.",
                features: ["Graphic Design", "Video Content", "Copywriting", "Photography"],
                color: "from-purple-400 to-pink-500"
              },
              {
                icon: Calendar,
                title: "Content Scheduling",
                description: "Strategic content publishing across platforms with optimal timing for maximum engagement and reach.",
                features: ["Publishing Schedule", "Multi-Platform", "Peak Time Posting", "Content Calendar"],
                color: "from-green-400 to-emerald-500"
              },
              {
                icon: MessageCircle,
                title: "Community Management",
                description: "Active community engagement, customer support, and relationship building to foster brand loyalty.",
                features: ["Comment Management", "Direct Messages", "Community Building", "Crisis Management"],
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                description: "Comprehensive performance tracking with actionable insights to optimize your social media ROI.",
                features: ["Performance Metrics", "ROI Analysis", "Growth Tracking", "Custom Reports"],
                color: "from-indigo-400 to-purple-500"
              },
              {
                icon: Megaphone,
                title: "Paid Advertising",
                description: "Strategic paid social campaigns that drive conversions and maximize your advertising budget.",
                features: ["Ad Campaign Management", "Audience Targeting", "A/B Testing", "Budget Optimization"],
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

      {/* Platform Expertise */}
      <section className="py-20 glass-morphism border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold hacker-text">🌐 Platform Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We master all major social media platforms to maximize your brand's reach and engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                platform: "Facebook",
                description: "Community building, targeted advertising, and business page optimization for maximum reach.",
                features: ["Business Pages", "Facebook Ads", "Groups Management", "Live Streaming"],
                color: "from-blue-600 to-blue-400"
              },
              {
                platform: "Instagram",
                description: "Visual storytelling, influencer partnerships, and Instagram Shopping for e-commerce growth.",
                features: ["Stories & Reels", "IGTV Content", "Shopping Tags", "Influencer Campaigns"],
                color: "from-pink-500 to-purple-500"
              },
              {
                platform: "LinkedIn",
                description: "Professional networking, B2B marketing, and thought leadership content strategies.",
                features: ["Company Pages", "LinkedIn Ads", "Content Marketing", "Lead Generation"],
                color: "from-blue-700 to-blue-500"
              },
              {
                platform: "TikTok",
                description: "Viral content creation, trend monitoring, and engaging with younger demographics.",
                features: ["Trend Analysis", "Viral Content", "Hashtag Strategy", "TikTok Ads"],
                color: "from-black to-red-500"
              },
              {
                platform: "Twitter/X",
                description: "Real-time engagement, brand monitoring, and customer service through social listening.",
                features: ["Real-time Updates", "Hashtag Campaigns", "Customer Support", "Twitter Ads"],
                color: "from-gray-700 to-black"
              },
              {
                platform: "YouTube",
                description: "Video content strategy, channel optimization, and YouTube advertising for brand growth.",
                features: ["Channel Setup", "Video SEO", "YouTube Ads", "Analytics"],
                color: "from-red-600 to-red-400"
              },
              {
                platform: "Pinterest",
                description: "Visual discovery marketing, Pinterest SEO, and driving traffic to your website.",
                features: ["Pin Design", "Board Strategy", "Rich Pins", "Pinterest Ads"],
                color: "from-red-500 to-pink-400"
              },
              {
                platform: "Snapchat",
                description: "AR filters, Snapchat ads, and engaging younger audiences with creative content.",
                features: ["Snap Ads", "AR Filters", "Stories", "Discover Content"],
                color: "from-yellow-400 to-yellow-300"
              }
            ].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-morphism neon-border h-full hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-full h-4 bg-gradient-to-r ${platform.color} rounded-lg mb-4`}></div>
                    <h3 className="text-xl font-bold text-primary hacker-text text-center">{platform.platform}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed text-center">{platform.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {platform.features.map((feature, featureIndex) => (
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

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold hacker-text">🔄 Our Social Media Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Systematic approach to building and growing your social media presence
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
                  phase: "1. Strategy Development",
                  duration: "1 week",
                  description: "Brand analysis, audience research, competitor analysis, and comprehensive strategy planning.",
                  icon: Target
                },
                {
                  phase: "2. Content Planning",
                  duration: "Ongoing",
                  description: "Content calendar creation, visual design, copywriting, and approval workflows.",
                  icon: Calendar
                },
                {
                  phase: "3. Community Building",
                  duration: "Ongoing",
                  description: "Active engagement, community management, customer service, and relationship building.",
                  icon: Users
                },
                {
                  phase: "4. Analytics & Optimization",
                  duration: "Monthly",
                  description: "Performance analysis, strategy refinement, and continuous optimization for better results.",
                  icon: BarChart3
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTYxNTE3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Social media analytics dashboard"
                className="relative rounded-2xl shadow-2xl w-full h-auto neon-border"
              />
            </motion.div>
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
            🚀 Ready to Dominate Social Media?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transform your social media presence into a powerful business growth engine with our expert management services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate("service-social-request")}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-8 py-4 glow-effect group"
            >
              Start Growing Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 glass-morphism neon-border hover:bg-primary/10"
            >
              Get Free Strategy Call
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}