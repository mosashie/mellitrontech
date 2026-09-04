import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Separator } from "../ui/separator";
import { motion } from "motion/react";
import { 
  Smartphone, 
  Upload, 
  CheckCircle, 
  ArrowRight, 
  Calendar,
  DollarSign,
  Users,
  Settings,
  Shield,
  Zap,
  Globe,
  FileText,
  Clock,
  Target
} from "lucide-react";

interface FlutterServiceRequestPageProps {
  onNavigate: (page: string) => void;
}

export function FlutterServiceRequestPage({ onNavigate }: FlutterServiceRequestPageProps) {
  const [formData, setFormData] = useState({
    // Contact Information
    name: "",
    email: "",
    company: "",
    phone: "",
    
    // Project Details
    appName: "",
    appDescription: "",
    appType: "",
    targetPlatforms: [] as string[],
    
    // Features & Requirements
    features: [] as string[],
    userAuth: "",
    paymentIntegration: "",
    thirdPartyServices: "",
    
    // Design & UI
    designPreference: "",
    hasDesigns: "",
    brandGuidelines: "",
    
    // Technical Requirements
    backendRequired: "",
    databaseType: "",
    apiIntegrations: "",
    
    // Project Scope
    timeline: "",
    budget: "",
    teamSize: "",
    projectPhase: "",
    
    // Additional Information
    additionalNotes: "",
    priorities: [] as string[],
    hearAboutUs: ""
  });

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Flutter Service Request:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you! Your Flutter app development request has been submitted. We'll contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center space-y-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="w-fit mx-auto glass-morphism neon-border px-4 py-2">
            <Smartphone className="w-4 h-4 mr-2 text-primary" />
            Flutter App Development Request
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold hacker-text">
            📱 Let's Build Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
              Flutter App
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your mobile app vision and requirements. Our expert Flutter developers will create a detailed proposal and timeline for your project.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Users className="w-5 h-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                      className="glass-morphism"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="glass-morphism"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                      className="glass-morphism"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="glass-morphism"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Target className="w-5 h-5" />
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="appName">App Name *</Label>
                    <Input
                      id="appName"
                      value={formData.appName}
                      onChange={(e) => handleInputChange("appName", e.target.value)}
                      placeholder="Your app name"
                      required
                      className="glass-morphism"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="appType">App Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("appType", value)}>
                      <SelectTrigger className="glass-morphism">
                        <SelectValue placeholder="Select app type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business">Business/Productivity</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="education">Education/Learning</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="fintech">FinTech</SelectItem>
                        <SelectItem value="entertainment">Entertainment</SelectItem>
                        <SelectItem value="utility">Utility</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="appDescription">App Description *</Label>
                  <Textarea
                    id="appDescription"
                    value={formData.appDescription}
                    onChange={(e) => handleInputChange("appDescription", e.target.value)}
                    placeholder="Describe your app idea, main purpose, target audience, and core functionality..."
                    required
                    className="glass-morphism min-h-[120px]"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Target Platforms *</Label>
                  <div className="flex flex-wrap gap-4">
                    {["iOS", "Android", "Both"].map((platform) => (
                      <div key={platform} className="flex items-center space-x-2">
                        <Checkbox
                          id={platform}
                          checked={formData.targetPlatforms.includes(platform)}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange("targetPlatforms", platform, checked as boolean)
                          }
                        />
                        <Label htmlFor={platform}>{platform}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features & Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Settings className="w-5 h-5" />
                  Features & Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Required Features (Select all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "User Registration/Login",
                      "Social Media Integration",
                      "Push Notifications",
                      "In-App Purchases",
                      "Payment Gateway",
                      "GPS/Location Services",
                      "Camera/Photo Upload",
                      "Offline Functionality",
                      "Chat/Messaging",
                      "Video/Audio Streaming",
                      "Analytics Integration",
                      "Admin Dashboard"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={feature}
                          checked={formData.features.includes(feature)}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange("features", feature, checked as boolean)
                          }
                        />
                        <Label htmlFor={feature} className="text-sm">{feature}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label>User Authentication Required?</Label>
                    <RadioGroup 
                      value={formData.userAuth} 
                      onValueChange={(value) => handleInputChange("userAuth", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="auth-yes" />
                        <Label htmlFor="auth-yes">Yes, required</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="auth-no" />
                        <Label htmlFor="auth-no">No, not needed</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="optional" id="auth-optional" />
                        <Label htmlFor="auth-optional">Optional feature</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>Payment Integration Needed?</Label>
                    <RadioGroup 
                      value={formData.paymentIntegration} 
                      onValueChange={(value) => handleInputChange("paymentIntegration", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="payment-yes" />
                        <Label htmlFor="payment-yes">Yes, required</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="payment-no" />
                        <Label htmlFor="payment-no">No, not needed</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="future" id="payment-future" />
                        <Label htmlFor="payment-future">Maybe in future</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="thirdPartyServices">Third-party Services Integration</Label>
                  <Textarea
                    id="thirdPartyServices"
                    value={formData.thirdPartyServices}
                    onChange={(e) => handleInputChange("thirdPartyServices", e.target.value)}
                    placeholder="List any third-party services you need to integrate (Google Maps, Firebase, Stripe, etc.)"
                    className="glass-morphism"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Design & UI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <FileText className="w-5 h-5" />
                  Design & User Interface
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Design Preference</Label>
                  <RadioGroup 
                    value={formData.designPreference} 
                    onValueChange={(value) => handleInputChange("designPreference", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="modern-minimal" id="modern" />
                      <Label htmlFor="modern">Modern & Minimal</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="professional" id="professional" />
                      <Label htmlFor="professional">Professional & Corporate</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="creative" id="creative" />
                      <Label htmlFor="creative">Creative & Artistic</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom">Custom based on requirements</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Do you have existing designs/mockups?</Label>
                  <RadioGroup 
                    value={formData.hasDesigns} 
                    onValueChange={(value) => handleInputChange("hasDesigns", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes-complete" id="designs-complete" />
                      <Label htmlFor="designs-complete">Yes, complete designs ready</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes-partial" id="designs-partial" />
                      <Label htmlFor="designs-partial">Yes, partial designs/wireframes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="designs-no" />
                      <Label htmlFor="designs-no">No, need design services</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brandGuidelines">Brand Guidelines & References</Label>
                  <Textarea
                    id="brandGuidelines"
                    value={formData.brandGuidelines}
                    onChange={(e) => handleInputChange("brandGuidelines", e.target.value)}
                    placeholder="Share your brand colors, fonts, style preferences, or reference apps you like..."
                    className="glass-morphism"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technical Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Globe className="w-5 h-5" />
                  Technical Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label>Backend/Server Required?</Label>
                    <RadioGroup 
                      value={formData.backendRequired} 
                      onValueChange={(value) => handleInputChange("backendRequired", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes-new" id="backend-new" />
                        <Label htmlFor="backend-new">Yes, new backend needed</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes-existing" id="backend-existing" />
                        <Label htmlFor="backend-existing">Yes, integrate with existing</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="backend-no" />
                        <Label htmlFor="backend-no">No backend needed</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>Database Type Preference</Label>
                    <RadioGroup 
                      value={formData.databaseType} 
                      onValueChange={(value) => handleInputChange("databaseType", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="firebase" id="firebase" />
                        <Label htmlFor="firebase">Firebase</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sql" id="sql" />
                        <Label htmlFor="sql">SQL Database</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nosql" id="nosql" />
                        <Label htmlFor="nosql">NoSQL (MongoDB)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="undecided" id="db-undecided" />
                        <Label htmlFor="db-undecided">Need recommendation</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="apiIntegrations">API Integrations Required</Label>
                  <Textarea
                    id="apiIntegrations"
                    value={formData.apiIntegrations}
                    onChange={(e) => handleInputChange("apiIntegrations", e.target.value)}
                    placeholder="List any APIs you need to integrate with (REST APIs, GraphQL, etc.)"
                    className="glass-morphism"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Scope & Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Clock className="w-5 h-5" />
                  Project Scope & Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label>Expected Timeline</Label>
                    <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger className="glass-morphism">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP (Rush project)</SelectItem>
                        <SelectItem value="1-2months">1-2 months</SelectItem>
                        <SelectItem value="3-4months">3-4 months</SelectItem>
                        <SelectItem value="5-6months">5-6 months</SelectItem>
                        <SelectItem value="6+months">6+ months</SelectItem>
                        <SelectItem value="flexible">Flexible timeline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Budget Range</Label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="glass-morphism">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k+">$100,000+</SelectItem>
                        <SelectItem value="discuss">Prefer to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Project Priorities (Select top 3)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Fast delivery",
                      "High quality code",
                      "Cost effectiveness",
                      "Scalability",
                      "Security",
                      "User experience",
                      "Performance",
                      "Future maintenance"
                    ].map((priority) => (
                      <div key={priority} className="flex items-center space-x-2">
                        <Checkbox
                          id={priority}
                          checked={formData.priorities.includes(priority)}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange("priorities", priority, checked as boolean)
                          }
                        />
                        <Label htmlFor={priority} className="text-sm">{priority}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <FileText className="w-5 h-5" />
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Notes & Requirements</Label>
                  <Textarea
                    id="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                    placeholder="Any other important details, special requirements, or questions you have about the project..."
                    className="glass-morphism min-h-[100px]"
                  />
                </div>

                <div className="space-y-3">
                  <Label>How did you hear about us?</Label>
                  <Select onValueChange={(value) => handleInputChange("hearAboutUs", value)}>
                    <SelectTrigger className="glass-morphism">
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="website">Your Website</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-12 py-4 glow-effect group"
            >
              Submit Flutter App Request
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              We'll review your request and get back to you within 24 hours with a detailed proposal.
            </p>
          </motion.div>
        </form>
      </div>
    </div>
  );
}