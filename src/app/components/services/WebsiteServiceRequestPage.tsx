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
  Globe, 
  Upload, 
  CheckCircle, 
  ArrowRight, 
  Calendar,
  DollarSign,
  Users,
  Settings,
  Shield,
  Zap,
  Search,
  FileText,
  Clock,
  Target,
  Code,
  Palette
} from "lucide-react";

interface WebsiteServiceRequestPageProps {
  onNavigate: (page: string) => void;
}

export function WebsiteServiceRequestPage({ onNavigate }: WebsiteServiceRequestPageProps) {
  const [formData, setFormData] = useState({
    // Contact Information
    name: "",
    email: "",
    company: "",
    phone: "",
    
    // Project Details
    websiteName: "",
    websiteDescription: "",
    websiteType: "",
    industry: "",
    
    // Features & Requirements
    features: [] as string[],
    pages: "",
    cmsRequired: "",
    ecommerceNeeded: "",
    
    // Design & UI
    designPreference: "",
    hasDesigns: "",
    brandGuidelines: "",
    inspirationSites: "",
    
    // Technical Requirements
    hostingPreference: "",
    domainNeeded: "",
    technicalRequirements: "",
    
    // SEO & Marketing
    seoRequired: "",
    analyticsNeeded: "",
    marketingFeatures: [] as string[],
    
    // Project Scope
    timeline: "",
    budget: "",
    maintenanceNeeded: "",
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
    console.log("Website Service Request:", formData);
    alert("Thank you! Your website development request has been submitted. We'll contact you within 24 hours.");
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
            <Globe className="w-4 h-4 mr-2 text-primary" />
            Website Development Request
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold hacker-text">
            🌐 Let's Build Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
              Website
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Share your website vision and requirements. Our expert web developers will create a comprehensive proposal tailored to your business needs.
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
                    <Label htmlFor="company">Company/Organization *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                      required
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
                    <Label htmlFor="websiteName">Website/Business Name *</Label>
                    <Input
                      id="websiteName"
                      value={formData.websiteName}
                      onChange={(e) => handleInputChange("websiteName", e.target.value)}
                      placeholder="Your website/business name"
                      required
                      className="glass-morphism"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="websiteType">Website Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("websiteType", value)}>
                      <SelectTrigger className="glass-morphism">
                        <SelectValue placeholder="Select website type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business">Business/Corporate</SelectItem>
                        <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                        <SelectItem value="portfolio">Portfolio/Personal</SelectItem>
                        <SelectItem value="blog">Blog/News Site</SelectItem>
                        <SelectItem value="nonprofit">Non-profit</SelectItem>
                        <SelectItem value="educational">Educational</SelectItem>
                        <SelectItem value="landing">Landing Page</SelectItem>
                        <SelectItem value="web-app">Web Application</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry/Sector *</Label>
                    <Select onValueChange={(value) => handleInputChange("industry", value)}>
                      <SelectTrigger className="glass-morphism">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="hospitality">Hospitality</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pages">Estimated Number of Pages</Label>
                    <Select onValueChange={(value) => handleInputChange("pages", value)}>
                      <SelectTrigger className="glass-morphism">
                        <SelectValue placeholder="Select page count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 pages</SelectItem>
                        <SelectItem value="6-10">6-10 pages</SelectItem>
                        <SelectItem value="11-20">11-20 pages</SelectItem>
                        <SelectItem value="21-50">21-50 pages</SelectItem>
                        <SelectItem value="50+">50+ pages</SelectItem>
                        <SelectItem value="unsure">Not sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="websiteDescription">Website Description & Goals *</Label>
                  <Textarea
                    id="websiteDescription"
                    value={formData.websiteDescription}
                    onChange={(e) => handleInputChange("websiteDescription", e.target.value)}
                    placeholder="Describe your website purpose, target audience, main goals, and what you want to achieve..."
                    required
                    className="glass-morphism min-h-[120px]"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features & Functionality */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Settings className="w-5 h-5" />
                  Features & Functionality
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Required Features (Select all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Contact Forms",
                      "Photo Gallery",
                      "Video Integration",
                      "Social Media Integration",
                      "Newsletter Signup",
                      "Live Chat",
                      "Appointment Booking",
                      "User Registration/Login",
                      "Member Portal",
                      "Payment Processing",
                      "Search Functionality",
                      "Multi-language Support",
                      "Testimonials/Reviews",
                      "Blog/News Section",
                      "Event Calendar",
                      "Document Downloads"
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
                    <Label>Content Management System (CMS) Needed?</Label>
                    <RadioGroup 
                      value={formData.cmsRequired} 
                      onValueChange={(value) => handleInputChange("cmsRequired", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="cms-yes" />
                        <Label htmlFor="cms-yes">Yes, I need to update content</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="cms-no" />
                        <Label htmlFor="cms-no">No, static website is fine</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="unsure" id="cms-unsure" />
                        <Label htmlFor="cms-unsure">Not sure, need advice</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>E-commerce Functionality Required?</Label>
                    <RadioGroup 
                      value={formData.ecommerceNeeded} 
                      onValueChange={(value) => handleInputChange("ecommerceNeeded", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="ecom-yes" />
                        <Label htmlFor="ecom-yes">Yes, need online store</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="ecom-no" />
                        <Label htmlFor="ecom-no">No e-commerce needed</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="future" id="ecom-future" />
                        <Label htmlFor="ecom-future">Maybe in the future</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Design & Visual Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Palette className="w-5 h-5" />
                  Design & Visual Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Design Style Preference</Label>
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
                      <RadioGroupItem value="traditional" id="traditional" />
                      <Label htmlFor="traditional">Traditional & Classic</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom">Custom based on brand</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Do you have existing brand assets?</Label>
                  <RadioGroup 
                    value={formData.hasDesigns} 
                    onValueChange={(value) => handleInputChange("hasDesigns", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="complete" id="brand-complete" />
                      <Label htmlFor="brand-complete">Yes, complete brand guidelines</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="partial" id="brand-partial" />
                      <Label htmlFor="brand-partial">Yes, logo and some assets</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="brand-none" />
                      <Label htmlFor="brand-none">No, need branding services</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brandGuidelines">Brand Colors, Fonts & Style Guide</Label>
                  <Textarea
                    id="brandGuidelines"
                    value={formData.brandGuidelines}
                    onChange={(e) => handleInputChange("brandGuidelines", e.target.value)}
                    placeholder="Share your brand colors, fonts, style preferences, and any existing brand guidelines..."
                    className="glass-morphism"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inspirationSites">Inspiration Websites</Label>
                  <Textarea
                    id="inspirationSites"
                    value={formData.inspirationSites}
                    onChange={(e) => handleInputChange("inspirationSites", e.target.value)}
                    placeholder="Share URLs of websites you like and what specifically appeals to you about them..."
                    className="glass-morphism"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technical & Hosting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Code className="w-5 h-5" />
                  Technical & Hosting Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label>Hosting Preference</Label>
                    <RadioGroup 
                      value={formData.hostingPreference} 
                      onValueChange={(value) => handleInputChange("hostingPreference", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="include" id="hosting-include" />
                        <Label htmlFor="hosting-include">Include hosting in project</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="existing" id="hosting-existing" />
                        <Label htmlFor="hosting-existing">I have existing hosting</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="recommendation" id="hosting-rec" />
                        <Label htmlFor="hosting-rec">Need hosting recommendation</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>Domain Name</Label>
                    <RadioGroup 
                      value={formData.domainNeeded} 
                      onValueChange={(value) => handleInputChange("domainNeeded", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="have" id="domain-have" />
                        <Label htmlFor="domain-have">I have a domain</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="need" id="domain-need" />
                        <Label htmlFor="domain-need">Need to purchase domain</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="help" id="domain-help" />
                        <Label htmlFor="domain-help">Need help choosing</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="technicalRequirements">Special Technical Requirements</Label>
                  <Textarea
                    id="technicalRequirements"
                    value={formData.technicalRequirements}
                    onChange={(e) => handleInputChange("technicalRequirements", e.target.value)}
                    placeholder="Any specific technical requirements, integrations, or compliance needs (GDPR, HIPAA, etc.)..."
                    className="glass-morphism"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* SEO & Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Search className="w-5 h-5" />
                  SEO & Marketing Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label>SEO Optimization Required?</Label>
                    <RadioGroup 
                      value={formData.seoRequired} 
                      onValueChange={(value) => handleInputChange("seoRequired", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="basic" id="seo-basic" />
                        <Label htmlFor="seo-basic">Basic SEO setup</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="advanced" id="seo-advanced" />
                        <Label htmlFor="seo-advanced">Advanced SEO optimization</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="none" id="seo-none" />
                        <Label htmlFor="seo-none">Not needed initially</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>Analytics & Tracking</Label>
                    <RadioGroup 
                      value={formData.analyticsNeeded} 
                      onValueChange={(value) => handleInputChange("analyticsNeeded", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="google" id="analytics-google" />
                        <Label htmlFor="analytics-google">Google Analytics</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="advanced" id="analytics-advanced" />
                        <Label htmlFor="analytics-advanced">Advanced tracking setup</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="none" id="analytics-none" />
                        <Label htmlFor="analytics-none">Not needed</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Marketing Features Needed</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Email Marketing Integration",
                      "Social Media Feeds",
                      "Lead Generation Forms",
                      "Pop-up/Modal Forms",
                      "A/B Testing Setup",
                      "Conversion Tracking",
                      "Cookie Consent Banner",
                      "GDPR Compliance"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={feature}
                          checked={formData.marketingFeatures.includes(feature)}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange("marketingFeatures", feature, checked as boolean)
                          }
                        />
                        <Label htmlFor={feature} className="text-sm">{feature}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Timeline & Budget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Clock className="w-5 h-5" />
                  Project Timeline & Budget
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
                        <SelectItem value="2-4weeks">2-4 weeks</SelectItem>
                        <SelectItem value="1-2months">1-2 months</SelectItem>
                        <SelectItem value="2-3months">2-3 months</SelectItem>
                        <SelectItem value="3+months">3+ months</SelectItem>
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
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                        <SelectItem value="20k-50k">$20,000 - $50,000</SelectItem>
                        <SelectItem value="50k+">$50,000+</SelectItem>
                        <SelectItem value="discuss">Prefer to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Project Priorities (Select top 3)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Fast launch",
                      "High quality design",
                      "Cost effectiveness",
                      "SEO performance",
                      "Mobile experience",
                      "Loading speed",
                      "Security",
                      "Scalability"
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

                <div className="space-y-3">
                  <Label>Ongoing Maintenance Needed?</Label>
                  <RadioGroup 
                    value={formData.maintenanceNeeded} 
                    onValueChange={(value) => handleInputChange("maintenanceNeeded", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="maintenance-yes" />
                      <Label htmlFor="maintenance-yes">Yes, ongoing support needed</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="maintenance-no" />
                      <Label htmlFor="maintenance-no">No, one-time project</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="discuss" id="maintenance-discuss" />
                      <Label htmlFor="maintenance-discuss">Discuss options later</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
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
                    placeholder="Any other important details, special requirements, competitors to consider, or questions about the project..."
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
                      <SelectItem value="portfolio">Saw our portfolio</SelectItem>
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
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-12 py-4 glow-effect group"
            >
              Submit Website Request
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              We'll review your request and provide a detailed proposal within 24 hours.
            </p>
          </motion.div>
        </form>
      </div>
    </div>
  );
}