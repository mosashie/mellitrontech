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
  ShoppingCart, 
  Upload, 
  CheckCircle, 
  ArrowRight, 
  Calendar,
  DollarSign,
  Users,
  Settings,
  Shield,
  Zap,
  Package,
  FileText,
  Clock,
  Target,
  CreditCard,
  Truck,
  BarChart3
} from "lucide-react";

interface ShopifyServiceRequestPageProps {
  onNavigate: (page: string) => void;
}

export function ShopifyServiceRequestPage({ onNavigate }: ShopifyServiceRequestPageProps) {
  const [formData, setFormData] = useState({
    // Contact Information
    name: "",
    email: "",
    company: "",
    phone: "",
    
    // Business Details
    businessName: "",
    businessType: "",
    industry: "",
    businessDescription: "",
    
    // Store Requirements
    storeType: "",
    productCount: "",
    categories: "",
    existingStore: "",
    
    // Features & Functionality
    features: [] as string[],
    paymentMethods: [] as string[],
    shippingNeeds: "",
    inventoryManagement: "",
    
    // Design & Customization
    designPreference: "",
    hasDesigns: "",
    brandAssets: "",
    customizationNeeds: "",
    
    // Integrations & Apps
    appsNeeded: [] as string[],
    thirdPartyIntegrations: "",
    existingPlatform: "",
    dataMigration: "",
    
    // Marketing & SEO
    marketingFeatures: [] as string[],
    seoRequirements: "",
    socialCommerce: "",
    
    // Project Scope
    timeline: "",
    budget: "",
    launchGoals: "",
    supportNeeded: "",
    
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
    console.log("Shopify Service Request:", formData);
    alert("Thank you! Your Shopify store development request has been submitted. We'll contact you within 24 hours.");
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
            <ShoppingCart className="w-4 h-4 mr-2 text-primary" />
            Shopify Store Development Request
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold hacker-text">
            🛒 Let's Build Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
              Shopify Store
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Share your e-commerce vision and requirements. Our Shopify experts will create a comprehensive proposal for your online store that drives sales and grows your business.
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
                    <Label htmlFor="company">Company/Business Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your business name"
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

          {/* Business Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Target className="w-5 h-5" />
                  Business Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("businessType", value)}>
                      <SelectTrigger className="glass-morphism">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New Business</SelectItem>
                        <SelectItem value="existing-offline">Existing Offline Business</SelectItem>
                        <SelectItem value="existing-online">Existing Online Business</SelectItem>
                        <SelectItem value="expanding">Expanding Business</SelectItem>
                        <SelectItem value="rebrand">Rebranding Business</SelectItem>
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
                        <SelectItem value="fashion">Fashion & Apparel</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="home-garden">Home & Garden</SelectItem>
                        <SelectItem value="beauty">Beauty & Cosmetics</SelectItem>
                        <SelectItem value="sports">Sports & Recreation</SelectItem>
                        <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                        <SelectItem value="health-wellness">Health & Wellness</SelectItem>
                        <SelectItem value="jewelry">Jewelry & Accessories</SelectItem>
                        <SelectItem value="books-media">Books & Media</SelectItem>
                        <SelectItem value="automotive">Automotive</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="businessDescription">Business Description *</Label>
                  <Textarea
                    id="businessDescription"
                    value={formData.businessDescription}
                    onChange={(e) => handleInputChange("businessDescription", e.target.value)}
                    placeholder="Describe your business, target customers, unique selling points, and business goals..."
                    required
                    className="glass-morphism min-h-[120px]"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Store Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Package className="w-5 h-5" />
                  Store Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label>Store Type</Label>
                    <RadioGroup 
                      value={formData.storeType} 
                      onValueChange={(value) => handleInputChange("storeType", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b2c" id="b2c" />
                        <Label htmlFor="b2c">B2C (Business to Consumer)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="b2b" id="b2b" />
                        <Label htmlFor="b2b">B2B (Business to Business)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both" id="both" />
                        <Label htmlFor="both">Both B2C and B2B</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>Number of Products</Label>
                    <Select onValueChange={(value) => handleInputChange("productCount", value)}>
                      <SelectTrigger className="glass-morphism">
                        <SelectValue placeholder="Select product count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1-50 products</SelectItem>
                        <SelectItem value="51-200">51-200 products</SelectItem>
                        <SelectItem value="201-500">201-500 products</SelectItem>
                        <SelectItem value="501-1000">501-1000 products</SelectItem>
                        <SelectItem value="1000+">1000+ products</SelectItem>
                        <SelectItem value="unknown">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="categories">Product Categories</Label>
                  <Textarea
                    id="categories"
                    value={formData.categories}
                    onChange={(e) => handleInputChange("categories", e.target.value)}
                    placeholder="List the main product categories you'll be selling..."
                    className="glass-morphism"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Do you have an existing online store?</Label>
                  <RadioGroup 
                    value={formData.existingStore} 
                    onValueChange={(value) => handleInputChange("existingStore", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="existing-no" />
                      <Label htmlFor="existing-no">No, starting from scratch</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="shopify" id="existing-shopify" />
                      <Label htmlFor="existing-shopify">Yes, on Shopify (redesign)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="existing-other" />
                      <Label htmlFor="existing-other">Yes, on other platform (migration)</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features & Functionality */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
                      "Product Variants (Size, Color)",
                      "Customer Reviews & Ratings",
                      "Wishlist/Favorites",
                      "Product Comparison",
                      "Quick View",
                      "Advanced Search & Filters",
                      "Customer Accounts",
                      "Order Tracking",
                      "Abandoned Cart Recovery",
                      "Inventory Management",
                      "Multi-currency Support",
                      "Multi-language Support",
                      "Subscription Products",
                      "Digital Downloads",
                      "Loyalty Program",
                      "Live Chat"
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

                <div className="space-y-3">
                  <Label>Payment Methods Needed</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Credit/Debit Cards",
                      "PayPal",
                      "Apple Pay",
                      "Google Pay",
                      "Shop Pay",
                      "Buy Now, Pay Later (Klarna, Afterpay)",
                      "Bank Transfer",
                      "Cryptocurrency",
                      "Cash on Delivery",
                      "Custom Payment Gateway"
                    ].map((method) => (
                      <div key={method} className="flex items-center space-x-2">
                        <Checkbox
                          id={method}
                          checked={formData.paymentMethods.includes(method)}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange("paymentMethods", method, checked as boolean)
                          }
                        />
                        <Label htmlFor={method} className="text-sm">{method}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label>Shipping Requirements</Label>
                    <RadioGroup 
                      value={formData.shippingNeeds} 
                      onValueChange={(value) => handleInputChange("shippingNeeds", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="local" id="shipping-local" />
                        <Label htmlFor="shipping-local">Local delivery only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="national" id="shipping-national" />
                        <Label htmlFor="shipping-national">National shipping</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="international" id="shipping-international" />
                        <Label htmlFor="shipping-international">International shipping</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pickup" id="shipping-pickup" />
                        <Label htmlFor="shipping-pickup">Pickup only</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>Inventory Management</Label>
                    <RadioGroup 
                      value={formData.inventoryManagement} 
                      onValueChange={(value) => handleInputChange("inventoryManagement", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="simple" id="inventory-simple" />
                        <Label htmlFor="inventory-simple">Simple tracking</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="advanced" id="inventory-advanced" />
                        <Label htmlFor="inventory-advanced">Advanced inventory system</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="external" id="inventory-external" />
                        <Label htmlFor="inventory-external">External system integration</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Apps & Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Zap className="w-5 h-5" />
                  Apps & Integrations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Shopify Apps Needed</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Email Marketing (Klaviyo, Mailchimp)",
                      "SEO Optimization",
                      "Product Reviews",
                      "Upselling & Cross-selling",
                      "Social Media Integration",
                      "Analytics & Reporting",
                      "Customer Support Chat",
                      "Affiliate/Referral Program",
                      "Dropshipping Apps",
                      "Print-on-Demand",
                      "Accounting Integration",
                      "Custom App Development"
                    ].map((app) => (
                      <div key={app} className="flex items-center space-x-2">
                        <Checkbox
                          id={app}
                          checked={formData.appsNeeded.includes(app)}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange("appsNeeded", app, checked as boolean)
                          }
                        />
                        <Label htmlFor={app} className="text-sm">{app}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="thirdPartyIntegrations">Third-party Integrations</Label>
                  <Textarea
                    id="thirdPartyIntegrations"
                    value={formData.thirdPartyIntegrations}
                    onChange={(e) => handleInputChange("thirdPartyIntegrations", e.target.value)}
                    placeholder="List any third-party systems you need to integrate (CRM, ERP, accounting software, etc.)"
                    className="glass-morphism"
                  />
                </div>

                {formData.existingStore === "other" && (
                  <div className="space-y-2">
                    <Label htmlFor="dataMigration">Data Migration Requirements</Label>
                    <Textarea
                      id="dataMigration"
                      value={formData.dataMigration}
                      onChange={(e) => handleInputChange("dataMigration", e.target.value)}
                      placeholder="What data needs to be migrated? (products, customers, orders, etc.)"
                      className="glass-morphism"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Design & Customization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <FileText className="w-5 h-5" />
                  Design & Customization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Design Approach</Label>
                  <RadioGroup 
                    value={formData.designPreference} 
                    onValueChange={(value) => handleInputChange("designPreference", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="theme-minimal" id="theme-minimal" />
                      <Label htmlFor="theme-minimal">Premium theme with minimal customization</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="theme-custom" id="theme-custom" />
                      <Label htmlFor="theme-custom">Premium theme with custom modifications</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom-theme" id="custom-theme" />
                      <Label htmlFor="custom-theme">Fully custom theme development</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Brand Assets Available</Label>
                  <RadioGroup 
                    value={formData.hasDesigns} 
                    onValueChange={(value) => handleInputChange("hasDesigns", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="complete" id="brand-complete" />
                      <Label htmlFor="brand-complete">Complete brand guidelines & assets</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="partial" id="brand-partial" />
                      <Label htmlFor="brand-partial">Logo and basic brand elements</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="brand-none" />
                      <Label htmlFor="brand-none">Need branding services</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brandAssets">Brand Information</Label>
                  <Textarea
                    id="brandAssets"
                    value={formData.brandAssets}
                    onChange={(e) => handleInputChange("brandAssets", e.target.value)}
                    placeholder="Share your brand colors, fonts, style preferences, and any existing brand guidelines..."
                    className="glass-morphism"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customizationNeeds">Specific Customization Needs</Label>
                  <Textarea
                    id="customizationNeeds"
                    value={formData.customizationNeeds}
                    onChange={(e) => handleInputChange("customizationNeeds", e.target.value)}
                    placeholder="Describe any specific design or functionality customizations you need..."
                    className="glass-morphism"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Marketing & SEO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <BarChart3 className="w-5 h-5" />
                  Marketing & SEO
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Marketing Features Needed</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "SEO Optimization",
                      "Google Analytics Setup",
                      "Facebook Pixel Integration",
                      "Email Marketing Setup",
                      "Discount Codes & Promotions",
                      "Social Media Integration",
                      "Product Schema Markup",
                      "Blog Setup",
                      "Customer Testimonials",
                      "Newsletter Signup"
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

                <div className="space-y-2">
                  <Label htmlFor="seoRequirements">SEO Goals & Requirements</Label>
                  <Textarea
                    id="seoRequirements"
                    value={formData.seoRequirements}
                    onChange={(e) => handleInputChange("seoRequirements", e.target.value)}
                    placeholder="Share your SEO goals, target keywords, and any specific requirements..."
                    className="glass-morphism"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Timeline & Budget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
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
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k+">$50,000+</SelectItem>
                        <SelectItem value="discuss">Prefer to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="launchGoals">Launch Goals & Success Metrics</Label>
                  <Textarea
                    id="launchGoals"
                    value={formData.launchGoals}
                    onChange={(e) => handleInputChange("launchGoals", e.target.value)}
                    placeholder="What are your goals for the store launch? Revenue targets, customer acquisition, etc."
                    className="glass-morphism"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Project Priorities (Select top 3)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Fast launch",
                      "High conversion rate",
                      "Mobile optimization",
                      "SEO performance",
                      "User experience",
                      "Brand consistency",
                      "Scalability",
                      "Cost effectiveness"
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
            transition={{ duration: 0.6, delay: 0.9 }}
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
                    placeholder="Any other important details, special requirements, competitor stores to consider, or questions about the project..."
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
                      <SelectItem value="shopify">Shopify Partner Directory</SelectItem>
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
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-12 py-4 glow-effect group"
            >
              Submit Shopify Store Request
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              We'll review your request and provide a detailed Shopify proposal within 24 hours.
            </p>
          </motion.div>
        </form>
      </div>
    </div>
  );
}